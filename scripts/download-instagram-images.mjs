import fs from "node:fs"
import fsp from "node:fs/promises"
import path from "node:path"

const projectRoot = process.cwd()
const exportPath = path.join(projectRoot, "data", "instagram-export.json")
const outputDir = path.join(projectRoot, "public", "images", "instagram")

const CONCURRENCY = 6
const RETRIES = 3
const RETRY_DELAY_MS = 1200

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function downloadOne(post, force) {
  const shortCode = post.shortCode
  if (!shortCode) return { shortCode, status: "skip", reason: "sem shortCode" }

  const url = post.displayUrl || (Array.isArray(post.images) ? post.images[0] : null)
  if (!url) return { shortCode, status: "skip", reason: "sem URL de imagem" }

  const destination = path.join(outputDir, `${shortCode}.jpg`)
  if (!force && fs.existsSync(destination)) {
    return { shortCode, status: "cached" }
  }

  let lastError = null
  for (let attempt = 1; attempt <= RETRIES; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
          Referer: "https://www.instagram.com/",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`)
      }

      const arrayBuffer = await response.arrayBuffer()
      await fsp.writeFile(destination, Buffer.from(arrayBuffer))
      return { shortCode, status: "ok", bytes: arrayBuffer.byteLength }
    } catch (error) {
      lastError = error
      if (attempt < RETRIES) {
        await sleep(RETRY_DELAY_MS * attempt)
      }
    }
  }

  return { shortCode, status: "error", reason: lastError ? lastError.message : "desconhecido" }
}

async function runPool(items, worker, concurrency) {
  const results = []
  let cursor = 0
  const inFlight = new Array(Math.min(concurrency, items.length)).fill(null).map(async () => {
    while (cursor < items.length) {
      const index = cursor
      cursor += 1
      const item = items[index]
      const result = await worker(item, index)
      results[index] = result
      const counter = `[${index + 1}/${items.length}]`
      if (result.status === "ok") {
        console.log(`${counter} ok ${result.shortCode} (${result.bytes} bytes)`)
      } else if (result.status === "cached") {
        console.log(`${counter} cache ${result.shortCode}`)
      } else if (result.status === "skip") {
        console.log(`${counter} skip ${result.shortCode} :: ${result.reason}`)
      } else {
        console.log(`${counter} ERRO ${result.shortCode} :: ${result.reason}`)
      }
    }
  })

  await Promise.all(inFlight)
  return results
}

async function main() {
  const force = process.argv.includes("--force")
  await fsp.mkdir(outputDir, { recursive: true })

  const posts = JSON.parse(await fsp.readFile(exportPath, "utf8"))
  if (!Array.isArray(posts)) {
    throw new Error(`O arquivo ${exportPath} não contém uma lista de posts.`)
  }

  console.log(`Baixando ${posts.length} imagens com concorrência=${CONCURRENCY}${force ? " (force)" : ""}...`)
  const results = await runPool(posts, (post) => downloadOne(post, force), CONCURRENCY)

  const summary = results.reduce(
    (acc, result) => {
      acc[result.status] = (acc[result.status] ?? 0) + 1
      return acc
    },
    {},
  )

  console.log("\nResumo:", summary)

  const errors = results.filter((result) => result.status === "error")
  if (errors.length > 0) {
    const logPath = path.join(projectRoot, "data", "instagram-image-errors.json")
    await fsp.writeFile(logPath, JSON.stringify(errors, null, 2))
    console.log(`Falhas registradas em ${path.relative(projectRoot, logPath)}`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
