import type { MetadataRoute } from "next"
import { ARTICLES } from "@/lib/content/articles"
import { categories } from "@/lib/content/categories"
import { SITE } from "@/lib/site"

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>

const DAY = 86_400_000

/**
 * Frequência dinâmica baseada em quando o conteúdo foi atualizado pela última vez.
 * Conteúdos recentes são pesquisados mais; arquivos históricos são consultados raramente.
 */
function dynamicChangeFrequency(date: Date): ChangeFrequency {
  const ageDays = (Date.now() - date.getTime()) / DAY
  if (ageDays < 14) return "daily"
  if (ageDays < 60) return "weekly"
  if (ageDays < 365) return "monthly"
  return "yearly"
}

/**
 * Prioridade dinâmica: featured > recente > meio-termo > legado.
 * Limite máximo 1.0 reservado para a home.
 */
function dynamicPriority(date: Date, featured = false): number {
  if (featured) return 0.9
  const ageDays = (Date.now() - date.getTime()) / DAY
  if (ageDays < 30) return 0.85
  if (ageDays < 180) return 0.75
  if (ageDays < 365) return 0.65
  return 0.5
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Páginas pilares e estáticas — priority calibrada pelo papel SEO de cada uma.
  const staticPaths: Array<{
    path: string
    priority: number
    changeFrequency: ChangeFrequency
  }> = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/artigos", priority: 0.9, changeFrequency: "daily" },
    { path: "/humint", priority: 0.95, changeFrequency: "weekly" },
    { path: "/metodos", priority: 0.85, changeFrequency: "weekly" },
    { path: "/categorias", priority: 0.7, changeFrequency: "monthly" },
    { path: "/formacao", priority: 0.75, changeFrequency: "monthly" },
    { path: "/recursos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/sobre", priority: 0.5, changeFrequency: "yearly" },
    { path: "/contato", priority: 0.4, changeFrequency: "yearly" },
    { path: "/principios-editoriais", priority: 0.6, changeFrequency: "yearly" },
    { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  // Páginas de categoria (rotas dinâmicas usando query string em /artigos?categoria=)
  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE.url}/artigos?categoria=${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Artigos — usa updatedAt > publishedAt como base de cálculo
  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((a) => {
    const last = new Date(a.updatedAt ?? a.publishedAt)
    return {
      url: `${SITE.url}/artigos/${a.slug}`,
      lastModified: last,
      changeFrequency: dynamicChangeFrequency(last),
      priority: dynamicPriority(last, a.featured),
    }
  })

  return [...staticEntries, ...categoryEntries, ...articleEntries]
}
