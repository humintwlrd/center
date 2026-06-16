#!/usr/bin/env node
/**
 * Pipeline completo de sincronização do Instagram → site.
 *
 *   1. Chama o Apify Instagram Scraper (actor `apify/instagram-scraper`)
 *      pedindo os posts mais recentes da conta @mundodahumint.
 *   2. Faz merge com `data/instagram-export.json` sem duplicar shortCodes.
 *   3. Roda `scripts/download-instagram-images.mjs` para baixar a primeira
 *      imagem de cada novo post (skip se já existir).
 *   4. Roda `scripts/generate-instagram-articles.mjs` para regenerar os
 *      artigos com base no JSON mesclado.
 *
 * Requisitos:
 *   - Variável de ambiente APIFY_TOKEN (https://console.apify.com/settings/integrations).
 *
 * Uso:
 *   node scripts/sync-instagram.mjs [--limit 20] [--username mundodahumint] [--dry-run]
 *
 * Flags:
 *   --limit       Quantos posts pedir ao Apify (default 30, máx ~200).
 *   --username    Override do handle (default mundodahumint).
 *   --dry-run     Só baixa do Apify e mostra o diff; não escreve nada.
 *   --force-all   Reimporta tudo (regrava o JSON inteiro). Default: só posts novos.
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, "..")
const dataPath = path.join(projectRoot, "data", "instagram-export.json")

const args = parseArgs(process.argv.slice(2))
const username = args.username || "mundodahumint"
const limit = Number(args.limit || 30)
const dryRun = Boolean(args["dry-run"])
const forceAll = Boolean(args["force-all"])

const token = process.env.APIFY_TOKEN
if (!token) {
  console.error(
    "[sync-instagram] APIFY_TOKEN não configurado.\n" +
      "  Pegue em https://console.apify.com/settings/integrations e exporte:\n" +
      "    export APIFY_TOKEN=apify_api_xxx\n" +
      "  Ou adicione em um .env.local na raiz e rode com:\n" +
      "    node --env-file=.env.local scripts/sync-instagram.mjs",
  )
  process.exit(1)
}

async function main() {
  console.log(`[sync-instagram] @${username} | limit=${limit} | dryRun=${dryRun}`)

  const existing = JSON.parse(fs.readFileSync(dataPath, "utf8"))
  const existingByShortCode = new Map(existing.map((p) => [p.shortCode, p]))
  console.log(`[sync-instagram] export atual: ${existing.length} posts`)

  const fetched = await runApifyScraper({ username, limit, token })
  console.log(`[sync-instagram] Apify retornou: ${fetched.length} posts`)

  // Diff
  const newPosts = []
  const updatedPosts = []
  for (const post of fetched) {
    if (!post.shortCode) continue
    const prev = existingByShortCode.get(post.shortCode)
    if (!prev) {
      newPosts.push(post)
    } else if (forceAll) {
      updatedPosts.push(post)
    }
  }

  console.log(`[sync-instagram] Novos: ${newPosts.length} | Atualizados (force-all): ${updatedPosts.length}`)
  if (newPosts.length > 0) {
    console.log("[sync-instagram] Novos shortCodes:")
    for (const p of newPosts.slice(0, 20)) {
      const date = String(p.timestamp || "").slice(0, 10)
      const caption = String(p.caption || "").replace(/\s+/g, " ").slice(0, 70)
      console.log(`  - ${date}  ${p.shortCode}  ${caption}`)
    }
    if (newPosts.length > 20) console.log(`  ... e mais ${newPosts.length - 20}`)
  }

  if (dryRun) {
    console.log("[sync-instagram] --dry-run: nada gravado.")
    return
  }

  if (newPosts.length === 0 && updatedPosts.length === 0) {
    console.log("[sync-instagram] Nada novo. Saindo sem regravar JSON nem regenerar artigos.")
    return
  }

  // Merge: mantém ordem cronológica desc (mais recente primeiro).
  const merged = forceAll
    ? mergeReplaceAll(existing, fetched)
    : mergeAppendNew(existing, newPosts)
  merged.sort((a, b) => String(b.timestamp || "").localeCompare(String(a.timestamp || "")))

  fs.writeFileSync(dataPath, JSON.stringify(merged, null, 2) + "\n")
  console.log(`[sync-instagram] Gravado data/instagram-export.json com ${merged.length} posts.`)

  console.log("[sync-instagram] Baixando imagens novas...")
  runNode(path.join(projectRoot, "scripts", "download-instagram-images.mjs"))

  console.log("[sync-instagram] Regerando artigos...")
  runNode(path.join(projectRoot, "scripts", "generate-instagram-articles.mjs"))

  console.log("[sync-instagram] OK. Commite as mudanças em:")
  console.log("  - data/instagram-export.json")
  console.log("  - lib/content/instagram-articles.generated.ts")
  console.log("  - public/images/instagram/*.jpg")
}

/**
 * Chama o actor apify/instagram-scraper em modo síncrono e retorna o dataset.
 * Doc: https://apify.com/apify/instagram-scraper
 */
async function runApifyScraper({ username, limit, token }) {
  const actorId = "apify~instagram-scraper"
  const url = `https://api.apify.com/v2/acts/${actorId}/run-sync-get-dataset-items?token=${encodeURIComponent(token)}`

  const input = {
    directUrls: [`https://www.instagram.com/${username}/`],
    resultsType: "posts",
    resultsLimit: limit,
    addParentData: false,
    searchType: "user",
    searchLimit: 1,
  }

  console.log("[sync-instagram] Chamando Apify (pode demorar 30-90s)...")
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Apify falhou: HTTP ${res.status}\n${body.slice(0, 500)}`)
  }

  const data = await res.json()
  if (!Array.isArray(data)) {
    throw new Error(`Resposta Apify inesperada: ${JSON.stringify(data).slice(0, 300)}`)
  }
  return data.map(normalizePost).filter((p) => p && p.shortCode)
}

/**
 * Normaliza o post retornado pelo Apify para o mesmo schema do
 * `data/instagram-export.json` existente. Os campos que faltarem ficam undefined.
 */
function normalizePost(p) {
  if (!p || typeof p !== "object") return null
  return {
    inputUrl: p.inputUrl,
    id: p.id,
    type: p.type,
    shortCode: p.shortCode,
    caption: p.caption ?? "",
    hashtags: Array.isArray(p.hashtags) ? p.hashtags : [],
    mentions: Array.isArray(p.mentions) ? p.mentions : [],
    url: p.url,
    commentsCount: p.commentsCount,
    firstComment: p.firstComment,
    latestComments: p.latestComments,
    dimensionsHeight: p.dimensionsHeight,
    dimensionsWidth: p.dimensionsWidth,
    displayUrl: p.displayUrl,
    images: Array.isArray(p.images) ? p.images : [],
    videoUrl: p.videoUrl,
    alt: p.alt,
    likesCount: p.likesCount,
    videoViewCount: p.videoViewCount,
    videoPlayCount: p.videoPlayCount,
    timestamp: p.timestamp,
    childPosts: Array.isArray(p.childPosts) ? p.childPosts : [],
    ownerFullName: p.ownerFullName,
    ownerUsername: p.ownerUsername,
    ownerId: p.ownerId,
    productType: p.productType,
    videoDuration: p.videoDuration,
    isSponsored: p.isSponsored,
    musicInfo: p.musicInfo,
    isCommentsDisabled: p.isCommentsDisabled,
  }
}

function mergeAppendNew(existing, newPosts) {
  return [...existing, ...newPosts]
}

function mergeReplaceAll(existing, fetched) {
  const map = new Map(existing.map((p) => [p.shortCode, p]))
  for (const p of fetched) {
    if (p.shortCode) map.set(p.shortCode, p)
  }
  return [...map.values()]
}

function runNode(scriptPath) {
  const r = spawnSync(process.execPath, [scriptPath], { stdio: "inherit" })
  if (r.status !== 0) {
    throw new Error(`Sub-script falhou: ${path.basename(scriptPath)} (exit ${r.status})`)
  }
}

function parseArgs(argv) {
  const out = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (!a.startsWith("--")) continue
    const key = a.slice(2)
    const next = argv[i + 1]
    if (!next || next.startsWith("--")) {
      out[key] = true
    } else {
      out[key] = next
      i++
    }
  }
  return out
}

main().catch((err) => {
  console.error("[sync-instagram] ERRO:", err.message)
  process.exit(1)
})
