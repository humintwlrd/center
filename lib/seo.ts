import type { Metadata } from "next"
import { SITE } from "./site"

type PageMetaInput = {
  title: string
  description: string
  /** Caminho relativo (ex.: "/artigos/slug"). Resolvido via `metadataBase` do layout. */
  path: string
  /** Caminho ou URL da imagem de capa (preferência absoluta). */
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  type?: "website" | "article" | "profile" | "book"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  /** Categoria/seção editorial — vai para openGraph.article.section. */
  section?: string
  /** Tags do artigo — vão para openGraph.article.tags e metadata.keywords. */
  tags?: string[]
  /** Palavras-chave adicionais (mescladas com tags). */
  keywords?: string[]
  noIndex?: boolean
}

const DEFAULT_KEYWORDS = [
  "HUMINT",
  "inteligência humana",
  "OSINT",
  "OPSEC",
  "contrainteligência",
  "engenharia social",
  "verificação de fontes",
  "tradecraft",
  "Mundo da HUMINT",
]

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero-home.jpg",
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  keywords,
  noIndex = false,
}: PageMetaInput): Metadata {
  const absoluteUrl = path.startsWith("http") ? path : `${SITE.url}${path}`
  const ogImage = image.startsWith("http") ? image : `${SITE.url}${image}`

  const mergedKeywords = Array.from(
    new Set([...DEFAULT_KEYWORDS, ...(tags ?? []), ...(keywords ?? [])]),
  )

  return {
    title,
    description,
    keywords: mergedKeywords,
    ...(authors?.length ? { authors: authors.map((name) => ({ name })) } : {}),
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {
          robots: {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-image-preview": "large",
              "max-snippet": -1,
              "max-video-preview": -1,
            },
          },
        }),
    alternates: {
      canonical: path,
      languages: { "pt-BR": path },
    },
    openGraph: {
      type,
      locale: "pt_BR",
      url: absoluteUrl,
      siteName: SITE.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          secureUrl: ogImage,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt ?? title,
          type: "image/jpeg",
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors?.length ? { authors } : {}),
      ...(section ? { section } : {}),
      ...(tags?.length ? { tags } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@mundodahumint",
      creator: "@mundodahumint",
      title,
      description,
      images: [
        {
          url: ogImage,
          alt: imageAlt ?? title,
        },
      ],
    },
    category: section,
  }
}

/**
 * Helper especializado para páginas de artigo. Encapsula o type "article"
 * e a montagem de tags/section/authors a partir de um objeto Article-like.
 */
export function articleMetadata(input: {
  title: string
  description: string
  slug: string
  image: string
  imageAlt?: string
  author: string
  publishedAt: string
  updatedAt?: string
  category?: string
  categoryLabel?: string
  tags?: string[]
}): Metadata {
  return pageMetadata({
    title: input.title,
    description: input.description,
    path: `/artigos/${input.slug}`,
    image: input.image,
    imageAlt: input.imageAlt,
    type: "article",
    publishedTime: input.publishedAt,
    modifiedTime: input.updatedAt ?? input.publishedAt,
    authors: [input.author],
    section: input.categoryLabel,
    tags: input.tags,
  })
}
