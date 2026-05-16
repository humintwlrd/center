/**
 * Schema.org — Knowledge Graph interconectado do Mundo da HUMINT.
 *
 * Estratégia GEO (Generative Engine Optimization):
 * - Todos os nós principais possuem `@id` (IRIs) para serem referenciados entre si.
 * - Mantemos um mapa canônico de entidades (HUMINT, OSINT, OPSEC, etc.) apontando
 *   para Wikipedia/Wikidata, forçando IAs (Perplexity, ChatGPT, Gemini, Claude) a
 *   associar nosso conteúdo às entidades canônicas globais.
 * - `articleSchema` retorna um Article+NewsArticle com author/publisher referenciados
 *   por `@id`, `about`/`mentions` semânticos, `wordCount`, `timeRequired`, `citation`.
 * - `knowledgeGraph(nodes)` agrupa nós em um único `@graph` para deduplicar contexto.
 *
 * As funções exportadas em `*Schema` mantêm `@context` no topo para compatibilidade
 * retroativa com o JsonLd existente. Para uso em grafo, use as variantes `*Node`.
 */

import { SITE } from "./site"

// ---------------------------------------------------------------------------
// IDs canônicos (IRIs)
// ---------------------------------------------------------------------------

export const ORG_ID = `${SITE.url}/#organization`
export const WEBSITE_ID = `${SITE.url}/#website`
export const LOGO_ID = `${SITE.url}/#logo`

export function articleId(slug: string) {
  return `${SITE.url}/artigos/${slug}#article`
}

export function articleImageId(slug: string) {
  return `${SITE.url}/artigos/${slug}#primary-image`
}

export function personId(name: string) {
  const slug = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
  return `${SITE.url}/sobre#${slug || "autor"}`
}

export function pageId(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${SITE.url}${clean}#webpage`
}

export function breadcrumbId(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${SITE.url}${clean}#breadcrumb`
}

// ---------------------------------------------------------------------------
// Entidades canônicas — mapa para Wikipedia / Wikidata
//
// Usado em `about` e `mentions` do Article. Cada IA generativa que indexar
// nosso conteúdo conseguirá vincular ao mesmo nó conceitual global.
// ---------------------------------------------------------------------------

type CanonicalEntity = {
  name: string
  description?: string
  wikipedia?: string
  wikidata?: string
}

export const CANONICAL_ENTITIES: Record<string, CanonicalEntity> = {
  HUMINT: {
    name: "HUMINT (Inteligência Humana)",
    description: "Disciplina de coleta de informações por meio de fontes humanas.",
    wikipedia: "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_humana",
    wikidata: "https://www.wikidata.org/wiki/Q1660566",
  },
  OSINT: {
    name: "OSINT (Inteligência de Fontes Abertas)",
    wikipedia: "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_de_fontes_abertas",
    wikidata: "https://www.wikidata.org/wiki/Q374814",
  },
  OPSEC: {
    name: "OPSEC (Segurança Operacional)",
    wikipedia: "https://en.wikipedia.org/wiki/Operations_security",
    wikidata: "https://www.wikidata.org/wiki/Q1361527",
  },
  SIGINT: {
    name: "SIGINT (Inteligência de Sinais)",
    wikipedia: "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_de_sinais",
    wikidata: "https://www.wikidata.org/wiki/Q1136470",
  },
  IMINT: {
    name: "IMINT (Inteligência de Imagens)",
    wikipedia: "https://en.wikipedia.org/wiki/Imagery_intelligence",
    wikidata: "https://www.wikidata.org/wiki/Q1659883",
  },
  CONTRAINTELIGENCIA: {
    name: "Contrainteligência",
    wikipedia: "https://pt.wikipedia.org/wiki/Contraespionagem",
    wikidata: "https://www.wikidata.org/wiki/Q723032",
  },
  ENGENHARIA_SOCIAL: {
    name: "Engenharia social (segurança da informação)",
    wikipedia:
      "https://pt.wikipedia.org/wiki/Engenharia_social_(seguran%C3%A7a_da_informa%C3%A7%C3%A3o)",
    wikidata: "https://www.wikidata.org/wiki/Q1132344",
  },
  ESPIONAGEM: {
    name: "Espionagem",
    wikipedia: "https://pt.wikipedia.org/wiki/Espionagem",
    wikidata: "https://www.wikidata.org/wiki/Q161410",
  },
  INTELIGENCIA: {
    name: "Inteligência (atividade)",
    wikipedia: "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_(atividade)",
    wikidata: "https://www.wikidata.org/wiki/Q49377",
  },
  PSICOLOGIA_COMPORTAMENTAL: {
    name: "Análise do comportamento",
    wikipedia: "https://pt.wikipedia.org/wiki/An%C3%A1lise_do_comportamento",
    wikidata: "https://www.wikidata.org/wiki/Q864",
  },
  GEOPOLITICA: {
    name: "Geopolítica",
    wikipedia: "https://pt.wikipedia.org/wiki/Geopol%C3%ADtica",
    wikidata: "https://www.wikidata.org/wiki/Q161078",
  },
  DESINFORMACAO: {
    name: "Desinformação",
    wikipedia: "https://pt.wikipedia.org/wiki/Desinforma%C3%A7%C3%A3o",
    wikidata: "https://www.wikidata.org/wiki/Q189656",
  },
  SEGURANCA_CORPORATIVA: {
    name: "Segurança corporativa",
    wikipedia: "https://pt.wikipedia.org/wiki/Seguran%C3%A7a_da_informa%C3%A7%C3%A3o",
  },
  TRADECRAFT: {
    name: "Tradecraft (técnicas operacionais de inteligência)",
    wikipedia: "https://en.wikipedia.org/wiki/Tradecraft",
    wikidata: "https://www.wikidata.org/wiki/Q1547521",
  },
} as const

const CATEGORY_TO_ENTITY: Record<string, keyof typeof CANONICAL_ENTITIES> = {
  "fundamentos-de-humint": "HUMINT",
  "engenharia-social": "ENGENHARIA_SOCIAL",
  contrainteligencia: "CONTRAINTELIGENCIA",
  opsec: "OPSEC",
  "psicologia-comportamental": "PSICOLOGIA_COMPORTAMENTAL",
  "osint-e-humint": "OSINT",
  "casos-historicos": "ESPIONAGEM",
  "geopolitica-e-inteligencia": "GEOPOLITICA",
  "seguranca-corporativa": "SEGURANCA_CORPORATIVA",
  "metodos-e-tradecraft": "TRADECRAFT",
  "influencia-e-percepcao": "DESINFORMACAO",
  "tecnologia-poder-e-estrategia": "INTELIGENCIA",
}

function entityNode(key: keyof typeof CANONICAL_ENTITIES) {
  const e = CANONICAL_ENTITIES[key]
  const sameAs = [e.wikipedia, e.wikidata].filter(Boolean) as string[]
  return {
    "@type": "Thing" as const,
    name: e.name,
    ...(sameAs.length ? { sameAs } : {}),
    ...(e.description ? { description: e.description } : {}),
  }
}

function buildAboutMentions(input: {
  category?: string
  tags?: string[]
}): { about: ReturnType<typeof entityNode>[]; mentions: ReturnType<typeof entityNode>[] } {
  const about: ReturnType<typeof entityNode>[] = []
  const mentions: ReturnType<typeof entityNode>[] = []
  const used = new Set<string>()

  // Category → entity principal (about)
  if (input.category) {
    const key = CATEGORY_TO_ENTITY[input.category]
    if (key && !used.has(key)) {
      about.push(entityNode(key))
      used.add(key)
    }
  }

  // Tags → entidades mencionadas
  const tagToKey: Array<[RegExp, keyof typeof CANONICAL_ENTITIES]> = [
    [/humint/i, "HUMINT"],
    [/osint/i, "OSINT"],
    [/opsec/i, "OPSEC"],
    [/sigint/i, "SIGINT"],
    [/imint/i, "IMINT"],
    [/contrainteligencia|contraintelig\u00eancia|contraespionagem/i, "CONTRAINTELIGENCIA"],
    [/engenharia social/i, "ENGENHARIA_SOCIAL"],
    [/espionagem|espi\u00e3o/i, "ESPIONAGEM"],
    [/psicologia|comportament/i, "PSICOLOGIA_COMPORTAMENTAL"],
    [/geopol\u00edtica/i, "GEOPOLITICA"],
    [/desinforma|propaganda/i, "DESINFORMACAO"],
    [/tradecraft|m\u00e9todo/i, "TRADECRAFT"],
    [/intelig\u00eancia/i, "INTELIGENCIA"],
  ]

  for (const tag of input.tags ?? []) {
    for (const [re, key] of tagToKey) {
      if (re.test(tag) && !used.has(key)) {
        mentions.push(entityNode(key))
        used.add(key)
        break
      }
    }
  }

  return { about, mentions }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function absoluteUrl(path: string) {
  if (!path) return SITE.url
  if (path.startsWith("http")) return path
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`
}

/**
 * Converte "8 min", "12 min de leitura" em ISO 8601 duration (PT8M).
 * Necessário para a propriedade `timeRequired` do Article.
 */
export function readingTimeToISO8601(readingTime?: string): string | undefined {
  if (!readingTime) return undefined
  const match = readingTime.match(/(\d+)/)
  if (!match) return undefined
  return `PT${match[1]}M`
}

// ---------------------------------------------------------------------------
// Nodes (sem @context — usar em @graph)
// ---------------------------------------------------------------------------

export function orgNode() {
  return {
    "@type": ["Organization", "NewsMediaOrganization"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    slogan: SITE.tagline,
    description: SITE.description,
    email: SITE.email,
    foundingDate: String(SITE.founded),
    logo: {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${SITE.url}/icon`,
      contentUrl: `${SITE.url}/icon`,
      width: 512,
      height: 512,
    },
    image: { "@id": LOGO_ID },
    sameAs: [SITE.social.instagram, SITE.social.linkedin, SITE.social.x],
    knowsAbout: Object.values(CANONICAL_ENTITIES).map((e) => e.name),
    areaServed: { "@type": "Country", name: "Brasil" },
    inLanguage: "pt-BR",
  }
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "pt-BR",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/artigos?busca={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

type PersonInput = {
  name: string
  bio?: string
  jobTitle?: string
  url?: string
  sameAs?: string[]
}

export function personNode(input: PersonInput) {
  return {
    "@type": "Person",
    "@id": personId(input.name),
    name: input.name,
    ...(input.bio ? { description: input.bio } : {}),
    jobTitle: input.jobTitle ?? "Analista de inteligência humana",
    worksFor: { "@id": ORG_ID },
    url: input.url ?? `${SITE.url}/sobre`,
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
  }
}

type Crumb = { label: string; href: string }

export function breadcrumbNode(items: Crumb[], path?: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId(path ?? items[items.length - 1]?.href ?? "/"),
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href.startsWith("http") ? c.href : `${SITE.url}${c.href}`,
    })),
  }
}

type ArticleInput = {
  title: string
  description: string
  slug: string
  image: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  author: string
  authorBio?: string
  publishedAt: string
  updatedAt?: string
  category?: string
  categoryLabel?: string
  tags?: string[]
  wordCount?: number
  readingTime?: string
  /** Marca o conteúdo como assinatura/paywall. Default: false (livre). */
  paywall?: boolean
  /** Seletor CSS do bloco com paywall (acompanha hasPart/cssSelector quando paywall=true). */
  paywallSelector?: string
  /** Fontes de pesquisa para `citation`. */
  sources?: { label: string; url?: string }[]
  /** URL do post original do Instagram, vai em sameAs. */
  sameAs?: string[]
}

export function articleNode(input: ArticleInput) {
  const url = `${SITE.url}/artigos/${input.slug}`
  const id = articleId(input.slug)
  const imageUrl = absoluteUrl(input.image)
  const { about, mentions } = buildAboutMentions({
    category: input.category,
    tags: input.tags,
  })
  const timeRequired = readingTimeToISO8601(input.readingTime)
  const paywall = input.paywall ?? false

  return {
    "@type": ["Article", "NewsArticle"],
    "@id": id,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageId(`/artigos/${input.slug}`),
      url,
      isPartOf: { "@id": WEBSITE_ID },
      primaryImageOfPage: { "@id": articleImageId(input.slug) },
      breadcrumb: { "@id": breadcrumbId(`/artigos/${input.slug}`) },
      inLanguage: "pt-BR",
    },
    url,
    headline: input.title,
    name: input.title,
    description: input.description,
    image: {
      "@type": "ImageObject",
      "@id": articleImageId(input.slug),
      url: imageUrl,
      contentUrl: imageUrl,
      ...(input.imageAlt ? { caption: input.imageAlt } : {}),
      ...(input.imageWidth ? { width: input.imageWidth } : {}),
      ...(input.imageHeight ? { height: input.imageHeight } : {}),
    },
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    inLanguage: "pt-BR",
    isAccessibleForFree: paywall ? false : true,
    ...(paywall && input.paywallSelector
      ? {
          hasPart: {
            "@type": "WebPageElement",
            isAccessibleForFree: false,
            cssSelector: input.paywallSelector,
          },
        }
      : {}),
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
    ...(timeRequired ? { timeRequired } : {}),
    ...(input.categoryLabel ? { articleSection: input.categoryLabel } : {}),
    ...(input.tags?.length ? { keywords: input.tags.join(", ") } : {}),
    author: {
      "@type": "Person",
      "@id": personId(input.author),
      name: input.author,
    },
    creator: {
      "@type": "Person",
      "@id": personId(input.author),
      name: input.author,
    },
    publisher: { "@id": ORG_ID },
    copyrightHolder: { "@id": ORG_ID },
    copyrightYear: Number((input.updatedAt ?? input.publishedAt).slice(0, 4)) || SITE.founded,
    ...(about.length ? { about } : {}),
    ...(mentions.length ? { mentions } : {}),
    ...(input.sources?.length
      ? {
          citation: input.sources.map((s) => ({
            "@type": "CreativeWork",
            name: s.label,
            ...(s.url ? { url: s.url } : {}),
          })),
        }
      : {}),
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
  }
}

type FaqItem = { question: string; answer: string }

export function faqNode(items: FaqItem[], path?: string) {
  return {
    "@type": "FAQPage",
    ...(path ? { "@id": `${SITE.url}${path}#faq` } : {}),
    mainEntity: items.map((it, i) => ({
      "@type": "Question",
      "@id": path ? `${SITE.url}${path}#faq-${i + 1}` : undefined,
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  }
}

type ItemListEntry = { url: string; name: string; description?: string; image?: string }

export function itemListNode(items: ItemListEntry[], name?: string) {
  return {
    "@type": "ItemList",
    ...(name ? { name } : {}),
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(it.url),
      name: it.name,
      ...(it.description ? { description: it.description } : {}),
      ...(it.image ? { image: absoluteUrl(it.image) } : {}),
    })),
  }
}

type DefinedTerm = { term: string; definition: string; url?: string }

export function definedTermSetNode(name: string, terms: DefinedTerm[]) {
  return {
    "@type": "DefinedTermSet",
    name,
    inDefinedTermSet: { "@id": `${SITE.url}/recursos#glossario` },
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      ...(t.url ? { url: absoluteUrl(t.url) } : {}),
    })),
  }
}

// ---------------------------------------------------------------------------
// Knowledge Graph wrapper
// ---------------------------------------------------------------------------

export function knowledgeGraph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  }
}

// ---------------------------------------------------------------------------
// Schemas standalone (com @context) — compatibilidade retroativa
// ---------------------------------------------------------------------------

export function organizationSchema() {
  return { "@context": "https://schema.org", ...orgNode() }
}

export function websiteSchema() {
  return { "@context": "https://schema.org", ...websiteNode() }
}

export function personSchema(input: PersonInput) {
  return { "@context": "https://schema.org", ...personNode(input) }
}

export function articleSchema(input: ArticleInput) {
  return knowledgeGraph([
    orgNode(),
    websiteNode(),
    personNode({ name: input.author, bio: input.authorBio }),
    articleNode(input),
  ])
}

/**
 * @deprecated Use `articleSchema` para suporte completo a NewsArticle + Knowledge Graph.
 * Mantido por compatibilidade com call-sites existentes.
 */
export function blogPostingSchema(input: {
  title: string
  description: string
  slug: string
  image: string
  author: string
  publishedAt: string
  updatedAt?: string
  category?: string
  categoryLabel?: string
  tags?: string[]
  wordCount?: number
  readingTime?: string
  sources?: { label: string; url?: string }[]
  sameAs?: string[]
  authorBio?: string
}) {
  return articleSchema(input)
}

export function breadcrumbSchema(items: Crumb[], path?: string) {
  return { "@context": "https://schema.org", ...breadcrumbNode(items, path) }
}

export function faqSchema(items: FaqItem[], path?: string) {
  return { "@context": "https://schema.org", ...faqNode(items, path) }
}

export function itemListSchema(items: ItemListEntry[], name?: string) {
  return { "@context": "https://schema.org", ...itemListNode(items, name) }
}

export function definedTermSetSchema(name: string, terms: DefinedTerm[]) {
  return { "@context": "https://schema.org", ...definedTermSetNode(name, terms) }
}
