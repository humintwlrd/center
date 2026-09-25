import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Fragment, type ReactNode } from "react"
import { ArticleCard } from "@/components/site/article-card"
import { AcademyCta } from "@/components/site/academy-cta"
import { Breadcrumbs } from "@/components/site/breadcrumbs"
import { JsonLd } from "@/components/site/json-ld"
import { SectionHeading } from "@/components/site/section-heading"
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
      <strong key={`${key}-${match.index}`}>
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
            <cite className="mt-3 block font-sans text-xs font-medium not-italic uppercase tracking-[0.14em] text-ink-muted">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      )
    case "note":
      return (
        <aside
          key={i}
          className="my-8 border-l-2 border-brand bg-paper-strong p-5 font-sans text-base md:p-6"
          role="note"
        >
          <p className="eyebrow-brand mb-2">Nota</p>
          <p className="leading-relaxed text-ink">{highlightEntities(block.text)}</p>
        </aside>
      )
    case "gallery":
      return (
        <div
          key={i}
          className="my-10 grid grid-cols-2 gap-2 sm:grid-cols-3"
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
              className="block h-auto w-full border border-line bg-paper-deep"
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

  const portrait = isInstagramImage(article.heroImage)

  return (
    <article itemScope itemType="https://schema.org/Article">
      <JsonLd data={graph} />

      <header className="border-b border-line bg-paper">
        <div className="container-editorial pt-8 pb-12 md:pt-10 md:pb-16">
          <Breadcrumbs
            schema={false}
            items={[
              { label: "Artigos", href: "/artigos" },
              { label: article.categoryLabel, href: `/artigos?categoria=${article.category}` },
            ]}
          />

          <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p className="kicker">
                <Link
                  href={`/artigos?categoria=${article.category}`}
                  rel="category tag"
                  className="transition-colors hover:text-brand"
                  itemProp="articleSection"
                >
                  {article.categoryLabel}
                </Link>
              </p>
              <h1
                className="mt-5 font-display text-display-xl font-medium text-ink"
                itemProp="headline"
              >
                {article.title}
              </h1>
              <p className="mt-6 max-w-[58ch] text-lede text-ink-soft" itemProp="description">
                {article.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-muted">
                <address
                  className="not-italic text-ink"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  Por <span itemProp="name">{article.author}</span>
                </address>
                <span>
                  <time dateTime={article.publishedAt} itemProp="datePublished">
                    {formatDateLongBR(article.publishedAt)}
                  </time>
                </span>
                {article.updatedAt && article.updatedAt > article.publishedAt && (
                  <span className="text-brand">
                    Atualizado em{" "}
                    <time dateTime={article.updatedAt} itemProp="dateModified">
                      {formatDateLongBR(article.updatedAt)}
                    </time>
                  </span>
                )}
                <span>{article.readingTime} de leitura</span>
              </div>
            </div>

            <figure className="m-0 lg:col-span-5">
              <div
                className={`relative w-full overflow-hidden bg-paper-deep ${
                  portrait ? "aspect-[4/5]" : "aspect-[4/3] lg:aspect-square"
                }`}
              >
                <Image
                  src={article.heroImage || "/placeholder.svg"}
                  alt={article.heroAlt}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                  className="object-cover"
                  style={{ objectPosition: portrait ? "center 38%" : "center" }}
                  itemProp="image"
                />
              </div>
              <figcaption className="sr-only">{article.heroAlt}</figcaption>
            </figure>
          </div>
        </div>
      </header>

      <div className="bg-paper">
        <div className="container-editorial grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
          <aside className="order-2 lg:order-1 lg:col-span-3" aria-label="Compartilhar e tags do artigo">
            <div className="flex flex-col gap-8 lg:sticky lg:top-28">
              <section aria-labelledby="share-heading">
                <h2 id="share-heading" className="eyebrow mb-3">
                  Compartilhar
                </h2>
                <ShareButtons url={url} title={article.title} />
              </section>
              {article.tags.length > 0 && (
                <section aria-labelledby="tags-heading" className="border-t border-line pt-6">
                  <h2 id="tags-heading" className="eyebrow mb-3">
                    Tags
                  </h2>
                  <ul className="flex flex-wrap gap-1.5">
                    {article.tags.map((t) => (
                      <li key={t}>
                        <Link
                          href={`/artigos?tag=${encodeURIComponent(t.toLowerCase())}`}
                          rel="tag"
                          className="inline-block border border-line bg-paper-strong px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-soft transition-colors hover:border-ink hover:text-ink"
                        >
                          {t}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </aside>

          <div className="order-1 min-w-0 lg:order-2 lg:col-span-8 xl:col-span-7">
            <section aria-label="Corpo do artigo" className="article-prose" itemProp="articleBody">
              {article.body.map((block, i) => renderBlock(block, i))}
            </section>

            {article.methodology && (
              <section
                aria-labelledby="methodology-heading"
                className="mt-14 border-l-2 border-brand bg-paper-strong p-6 md:p-8"
              >
                <h2 id="methodology-heading" className="eyebrow-brand mb-3">
                  Transparência metodológica
                </h2>
                <p className="leading-relaxed text-ink-soft">{article.methodology}</p>
              </section>
            )}

            {article.sources && article.sources.length > 0 && (
              <section aria-labelledby="sources-heading" className="mt-14">
                <h2 id="sources-heading" className="rule-top pt-4 font-display text-display-sm font-medium">
                  Fontes e referências
                </h2>
                <ol className="mt-5 flex flex-col gap-3 text-[0.9375rem] text-ink-soft">
                  {article.sources.map((s, i) => (
                    <li key={i} className="grid grid-cols-[2rem_1fr] gap-2 border-b border-line pb-3">
                      <span className="font-mono text-[0.6875rem] tracking-[0.12em] text-ink-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        {s.url ? (
                          <a
                            href={s.url}
                            className="underline decoration-brand underline-offset-2 transition-colors hover:text-brand"
                            rel="noopener nofollow external"
                            target="_blank"
                          >
                            {s.label}
                          </a>
                        ) : (
                          <cite className="not-italic">{s.label}</cite>
                        )}
                        {s.type && (
                          <span className="ml-2 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-muted">
                            {s.type}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {article.corrections && article.corrections.length > 0 && (
              <section aria-labelledby="corrections-heading" className="mt-10 border-t border-line pt-5">
                <h2 id="corrections-heading" className="eyebrow mb-3">
                  Correções
                </h2>
                <ul className="flex flex-col gap-2 text-sm text-ink-soft">
                  {article.corrections.map((c, i) => (
                    <li key={i}>
                      <time dateTime={c.date} className="font-mono text-xs text-ink-muted">
                        {c.date}
                      </time>
                      {": "}
                      {c.note}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <footer className="mt-14 grid gap-6">
              <div className="flex items-start gap-5 border-y border-line py-6">
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center bg-ink font-display text-lg text-paper"
                >
                  {authorInitials(article.author)}
                </div>
                <div>
                  <p className="eyebrow mb-1">Sobre o autor</p>
                  <p className="font-display text-lg font-medium text-ink">{article.author}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{article.authorBio}</p>
                </div>
              </div>

              {originalInstagramUrl && (
                <section
                  aria-labelledby="post-original-heading"
                  className="flex flex-col gap-5 border border-line bg-paper-strong p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="eyebrow-brand">Post original</p>
                    <h2 id="post-original-heading" className="mt-2 font-display text-lg font-medium">
                      Veja a publicação que originou este artigo.
                    </h2>
                  </div>
                  <a
                    href={originalInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow external"
                    className="btn btn-outline btn-sm shrink-0"
                  >
                    Abrir no Instagram
                  </a>
                </section>
              )}
            </footer>
          </div>
        </div>
      </div>

      <AcademyCta
        title="Vá além da leitura."
        description="Na Academy, o que você leu aqui vira método: cursos e dossiês para aplicar inteligência humana na prática, do comportamento à operação."
      />

      {related.length > 0 && (
        <section className="bg-paper-strong" aria-labelledby="related-title">
          <div className="container-editorial py-14 md:py-20">
            <SectionHeading
              id="related-title"
              eyebrow="Leia também"
              title="Artigos relacionados"
              href={`/artigos?categoria=${article.category}`}
              linkLabel={`Mais em ${article.categoryLabel}`}
            />
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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
