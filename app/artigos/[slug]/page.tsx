import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Fragment, type ReactNode } from "react"
import { ArticleCard } from "@/components/site/article-card"
import { Breadcrumbs } from "@/components/site/breadcrumbs"
import { JsonLd } from "@/components/site/json-ld"
import { ShareButtons } from "@/components/site/share-buttons"
import {
  ARTICLES,
  getArticleBySlug,
  getArticleWordCount,
  getRelatedArticles,
  isInstagramImage,
  type Article,
} from "@/lib/content/articles"
import { formatDateLongBR } from "@/lib/format"
import {
  articleNode,
  breadcrumbNode,
  knowledgeGraph,
  orgNode,
  personNode,
  websiteNode,
} from "@/lib/schema"
import { articleMetadata } from "@/lib/seo"
import { SITE } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: "Artigo não encontrado", robots: { index: false, follow: false } }
  return articleMetadata({
    title: article.title,
    description: article.description,
    slug: article.slug,
    image: article.heroImage,
    imageAlt: article.heroAlt,
    author: article.author,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    category: article.category,
    categoryLabel: article.categoryLabel,
    tags: article.tags,
  })
}

/**
 * Entity salience: realça termos canônicos (HUMINT, OSINT, OPSEC...) com <strong>
 * no corpo do texto. AIs e crawlers usam essa marcação para extrair entidades.
 * Apenas a primeira ocorrência por bloco é destacada para evitar over-optimization.
 */
const SALIENT_ENTITIES = [
  "HUMINT",
  "OSINT",
  "OPSEC",
  "SIGINT",
  "IMINT",
  "Contrainteligência",
  "Engenharia Social",
  "Tradecraft",
]

function highlightEntities(text: string): ReactNode {
  const used = new Set<string>()
  const pattern = new RegExp(
    `\\b(${SALIENT_ENTITIES.map((e) => e.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")).join("|")})\\b`,
    "gi",
  )
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text)) !== null) {
    const key = match[0].toUpperCase()
    if (used.has(key)) continue
    used.add(key)
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    parts.push(
      <strong key={`${key}-${match.index}`} className="font-semibold text-ink">
        {match[0]}
      </strong>,
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts.length === 0 ? text : <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>
}

function authorInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function renderBlock(block: Article["body"][number], i: number): ReactNode {
  switch (block.type) {
    case "p":
      return <p key={i}>{highlightEntities(block.text)}</p>
    case "h2":
      return <h2 key={i}>{block.text}</h2>
    case "h3":
      return <h3 key={i}>{block.text}</h3>
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((it, j) => (
            <li key={j}>{highlightEntities(it)}</li>
          ))}
        </ul>
      )
    case "ol":
      return (
        <ol key={i}>
          {block.items.map((it, j) => (
            <li key={j}>{highlightEntities(it)}</li>
          ))}
        </ol>
      )
    case "quote":
      return (
        <blockquote key={i}>
          {highlightEntities(block.text)}
          {block.cite && (
            <cite className="block mt-3 text-sm font-mono uppercase tracking-widest text-ink-muted not-italic">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      )
    case "note":
      return (
        <aside
          key={i}
          className="my-6 bg-paper-strong border-l-4 border-gold p-5 text-ink-soft"
          role="note"
        >
          <p className="eyebrow-gold mb-1.5">Nota</p>
          <p className="leading-relaxed text-ink">{highlightEntities(block.text)}</p>
        </aside>
      )
    case "gallery":
      return (
        <div
          key={i}
          className="my-8 grid grid-cols-2 sm:grid-cols-3 gap-2"
          role="group"
          aria-label="Slides do post original"
        >
          {block.images.map((img, j) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={j}
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              loading="lazy"
              className="block w-full h-auto border border-line bg-deep"
            />
          ))}
        </div>
      )
    default:
      return null
  }
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(slug, 3)
  const url = `${SITE.url}/artigos/${article.slug}`
  const originalInstagramUrl =
    article.instagramUrl ??
    (article.instagramShortCode
      ? `https://www.instagram.com/p/${article.instagramShortCode}/`
      : undefined)

  const wordCount = getArticleWordCount(article)

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Artigos", href: "/artigos" },
    { label: article.categoryLabel, href: `/artigos?categoria=${article.category}` },
    { label: article.title, href: `/artigos/${article.slug}` },
  ]

  const graph = knowledgeGraph([
    orgNode(),
    websiteNode(),
    personNode({ name: article.author, bio: article.authorBio }),
    breadcrumbNode(breadcrumbItems, `/artigos/${article.slug}`),
    articleNode({
      title: article.title,
      description: article.description,
      slug: article.slug,
      image: article.heroImage,
      imageAlt: article.heroAlt,
      author: article.author,
      authorBio: article.authorBio,
      publishedAt: article.publishedAt,
      updatedAt: article.updatedAt,
      category: article.category,
      categoryLabel: article.categoryLabel,
      tags: article.tags,
      wordCount,
      readingTime: article.readingTime,
      sources: article.sources?.map((s) => ({ label: s.label, url: s.url })),
      sameAs: originalInstagramUrl ? [originalInstagramUrl] : undefined,
    }),
  ])

  return (
    <article itemScope itemType="https://schema.org/Article">
      <JsonLd data={graph} />

      <section className="container-editorial pt-8 md:pt-10">
        <Breadcrumbs
          items={[
            { label: "Artigos", href: "/artigos" },
            { label: article.categoryLabel, href: `/artigos?categoria=${article.category}` },
          ]}
        />
      </section>

      <header className="container-editorial pt-8 pb-10 md:pb-12">
        <p className="eyebrow-gold">
          <Link
            href={`/artigos?categoria=${article.category}`}
            rel="category tag"
            className="hover:text-gold-hover"
            itemProp="articleSection"
          >
            {article.categoryLabel}
          </Link>
        </p>
        <h1
          className="mt-3 font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-balance leading-[1.1] max-w-4xl"
          itemProp="headline"
        >
          {article.title}
        </h1>
        <p
          className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed prose-measure"
          itemProp="description"
        >
          {highlightEntities(article.description)}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-ink-muted hairline-t pt-5">
          <address
            className="not-italic"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            Por <span itemProp="name">{article.author}</span>
          </address>
          <span aria-hidden="true">·</span>
          <span>
            Publicado em{" "}
            <time dateTime={article.publishedAt} itemProp="datePublished">
              {formatDateLongBR(article.publishedAt)}
            </time>
          </span>
          {article.updatedAt && article.updatedAt !== article.publishedAt && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-gold-active">
                Atualizado em{" "}
                <time dateTime={article.updatedAt} itemProp="dateModified">
                  {formatDateLongBR(article.updatedAt)}
                </time>
              </span>
            </>
          )}
          <span aria-hidden="true">·</span>
          <span>{article.readingTime} de leitura</span>
        </div>
      </header>

      <figure className="container-editorial m-0">
        {isInstagramImage(article.heroImage) ? (
          <>
            {/* Mobile: proporção original da imagem do post */}
            <div className="md:hidden w-full bg-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.heroImage || "/placeholder.svg"}
                alt={article.heroAlt}
                className="block w-full h-auto"
                fetchPriority="high"
                itemProp="image"
              />
            </div>
            {/* Desktop: enquadramento editorial 16:9 */}
            <div className="hidden md:block relative aspect-[16/9] w-full overflow-hidden bg-deep">
              <Image
                src={article.heroImage}
                alt={article.heroAlt}
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                priority
                fetchPriority="high"
                className="object-cover"
                itemProp="image"
              />
            </div>
          </>
        ) : (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-deep">
            <Image
              src={article.heroImage}
              alt={article.heroAlt}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              priority
              fetchPriority="high"
              className="object-cover"
              itemProp="image"
            />
          </div>
        )}
        <figcaption className="sr-only">{article.heroAlt}</figcaption>
      </figure>

      <div className="container-editorial py-12 md:py-16 grid gap-10 lg:grid-cols-12">
        <aside
          className="lg:col-span-3 order-2 lg:order-1"
          aria-label="Compartilhar e tags do artigo"
        >
          <div className="lg:sticky lg:top-24 flex flex-col gap-6">
            <section aria-labelledby="share-heading">
              <h2 id="share-heading" className="eyebrow mb-3">
                Compartilhar
              </h2>
              <ShareButtons url={url} title={article.title} />
            </section>
            <section aria-labelledby="tags-heading" className="hairline-t pt-5">
              <h2 id="tags-heading" className="eyebrow mb-3">
                Tags
              </h2>
              <ul className="flex flex-wrap gap-1.5">
                {article.tags.map((t) => (
                  <li key={t}>
                    <Link
                      href={`/artigos?tag=${encodeURIComponent(t.toLowerCase())}`}
                      rel="tag"
                      className="inline-block bg-paper-strong border border-line px-2 py-0.5 text-[11px] font-mono uppercase tracking-widest text-ink-soft hover:text-ink"
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </aside>

        <div className="lg:col-span-9 order-1 lg:order-2">
          <section
            aria-label="Corpo do artigo"
            className="article-prose max-w-[68ch]"
            itemProp="articleBody"
          >
            {article.body.map((block, i) => renderBlock(block, i))}
          </section>

          {/* Transparência metodológica */}
          {article.methodology && (
            <section
              aria-labelledby="methodology-heading"
              className="mt-12 bg-paper-deep p-6 md:p-8 max-w-[68ch]"
            >
              <h2 id="methodology-heading" className="eyebrow-gold mb-2">
                Transparência metodológica
              </h2>
              <p className="text-ink-soft leading-relaxed">{article.methodology}</p>
            </section>
          )}

          {/* Fontes e referências */}
          {article.sources && article.sources.length > 0 && (
            <section
              aria-labelledby="sources-heading"
              className="mt-8 max-w-[68ch]"
            >
              <h2
                id="sources-heading"
                className="font-display text-xl font-semibold mb-3"
              >
                Fontes e referências
              </h2>
              <ol className="space-y-2 text-sm text-ink-soft list-decimal pl-5">
                {article.sources.map((s, i) => (
                  <li key={i} className="pl-1">
                    <span className="inline-flex items-baseline gap-3">
                      {s.type && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted shrink-0">
                          {s.type}
                        </span>
                      )}
                      {s.url ? (
                        <a
                          href={s.url}
                          className="underline text-gold-active hover:text-gold-hover"
                          rel="noopener nofollow external"
                          target="_blank"
                        >
                          {s.label}
                        </a>
                      ) : (
                        <cite className="not-italic">{s.label}</cite>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Correções */}
          {article.corrections && article.corrections.length > 0 && (
            <section
              aria-labelledby="corrections-heading"
              className="mt-8 max-w-[68ch] hairline-t pt-5"
            >
              <h2 id="corrections-heading" className="eyebrow mb-3">
                Correções
              </h2>
              <ul className="space-y-2 text-sm text-ink-soft">
                {article.corrections.map((c, i) => (
                  <li key={i}>
                    <time
                      dateTime={c.date}
                      className="font-mono text-xs text-ink-muted"
                    >
                      {c.date}
                    </time>
                    {": "}
                    {c.note}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <footer className="mt-12 space-y-8">
            {/* Author card como <address> com itemProp Person */}
            <address
              className="bg-paper-strong p-6 md:p-8 hairline-y max-w-[68ch] flex items-start gap-5 not-italic"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div
                aria-hidden="true"
                className="w-14 h-14 bg-deep text-paper flex items-center justify-center font-display text-lg shrink-0"
              >
                {authorInitials(article.author)}
              </div>
              <div>
                <p className="eyebrow mb-1">Sobre o autor</p>
                <h2
                  className="font-display text-lg font-semibold"
                  itemProp="name"
                >
                  {article.author}
                </h2>
                <p
                  className="mt-1.5 text-sm text-ink-muted leading-relaxed"
                  itemProp="description"
                >
                  {article.authorBio}
                </p>
              </div>
            </address>

            {originalInstagramUrl && (
              <section
                aria-labelledby="post-original-heading"
                className="max-w-[68ch] border border-line bg-paper-strong p-6 md:p-7"
              >
                <p className="eyebrow-gold">Post original</p>
                <h2
                  id="post-original-heading"
                  className="mt-2 font-display text-xl font-semibold"
                >
                  Veja a publicação que originou este artigo.
                </h2>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  O link abre o post respectivo no Instagram, preservando a fonte
                  original do acervo.
                </p>
                <a
                  href={originalInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow external"
                  className="mt-5 inline-flex items-center justify-center border border-ink px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Abrir post no Instagram
                </a>
              </section>
            )}

            <section
              aria-labelledby="vip-cta-heading"
              className="bg-deep text-paper p-6 md:p-8 max-w-[68ch]"
            >
              <p className="eyebrow-gold">Academy</p>
              <h2
                id="vip-cta-heading"
                className="mt-2 font-display text-2xl font-semibold text-balance"
              >
                Vá além com os cursos da Academy do Mundo da HUMINT.
              </h2>
              <p className="mt-2 text-[var(--color-warm-text)] leading-relaxed">
                Conheça a Academy: cursos e materiais para aplicar inteligência
                humana na prática, do comportamento à operação.
              </p>
              <Link
                href="/academy"
                className="mt-6 inline-flex items-center justify-center bg-gold px-5 py-3 text-sm font-semibold text-deep transition-colors hover:bg-gold-hover"
              >
                Conhecer a Academy
              </Link>
            </section>
          </footer>
        </div>
      </div>

      {/* Artigos relacionados */}
      {related.length > 0 && (
        <section className="bg-paper-deep" aria-labelledby="related-title">
          <div className="container-editorial py-16 md:py-20">
            <div className="mb-10 hairline-b pb-4 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow-gold mb-2">Leia também</p>
                <h2
                  id="related-title"
                  className="font-display text-2xl md:text-3xl font-semibold"
                >
                  Outros artigos relacionados
                </h2>
              </div>
              <Link
                href="/artigos"
                className="hidden sm:inline-flex text-sm text-ink-soft hover:text-ink"
              >
                Ver todos
              </Link>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
