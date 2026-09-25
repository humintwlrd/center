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
            <cite className="mt-3 block text-base font-semibold not-italic text-ink-3">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      )
    case "note":
      return (
        <aside key={i} className="my-10 bg-snow-2 p-6 text-base md:p-7" role="note">
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
              className="block h-auto w-full bg-snow-2"
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

      <header className="bg-snow text-ink">
        <div className="container-site pt-8 pb-14 md:pb-20">
          <Breadcrumbs
            schema={false}
            items={[
              { label: "Artigos", href: "/artigos" },
              { label: article.categoryLabel, href: `/artigos?categoria=${article.category}` },
            ]}
          />
          <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <h1 className="font-expanded text-title font-extrabold" itemProp="headline">
                {article.title}
              </h1>
              <p className="mt-7 max-w-[56ch] text-lede text-ink-2" itemProp="description">
                {article.description}
              </p>
              <p className="mt-8 flex flex-wrap gap-x-4 gap-y-1 text-ink-3">
                <Link
                  href={`/artigos?categoria=${article.category}`}
                  rel="category tag"
                  itemProp="articleSection"
                  className="font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4"
                >
                  {article.categoryLabel}
                </Link>
                <address className="not-italic" itemProp="author" itemScope itemType="https://schema.org/Person">
                  Por <span itemProp="name">{article.author}</span>
                </address>
                <time dateTime={article.publishedAt} itemProp="datePublished">
                  {formatDateLongBR(article.publishedAt)}
                </time>
                {article.updatedAt && article.updatedAt > article.publishedAt && (
                  <span>
                    Atualizado em{" "}
                    <time dateTime={article.updatedAt} itemProp="dateModified">
                      {formatDateLongBR(article.updatedAt)}
                    </time>
                  </span>
                )}
                <span>{article.readingTime} de leitura</span>
              </p>
            </div>
            <figure className="m-0 lg:col-span-5">
              <div className={`relative w-full overflow-hidden bg-snow-2 ${portrait ? "aspect-[4/5]" : "aspect-[4/3] lg:aspect-square"}`}>
                <Image
                  src={article.heroImage || "/placeholder.svg"}
                  alt={article.heroAlt}
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
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

      <div className="border-t border-line bg-snow text-ink">
        <div className="container-site grid gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-8">
            <section aria-label="Corpo do artigo" className="prose-read" itemProp="articleBody">
              {article.body.map((block, i) => renderBlock(block, i))}
            </section>

            {article.methodology && (
              <section aria-labelledby="methodology-heading" className="mt-14 max-w-[68ch] bg-snow-2 p-6 md:p-8">
                <h2 id="methodology-heading" className="text-lg font-bold">
                  Transparência metodológica
                </h2>
                <p className="mt-2 leading-relaxed text-ink-2">{article.methodology}</p>
              </section>
            )}

            {article.sources && article.sources.length > 0 && (
              <section aria-labelledby="sources-heading" className="mt-14 max-w-[68ch]">
                <h2 id="sources-heading" className="font-expanded text-heading font-extrabold">
                  Fontes e referências
                </h2>
                <ol className="mt-5 list-decimal pl-5 text-ink-2 marker:font-bold marker:text-signal">
                  {article.sources.map((s, i) => (
                    <li key={i} className="border-b border-line py-3 pl-2">
                      {s.url ? (
                        <a href={s.url} className="underline decoration-signal decoration-2 underline-offset-4 hover:text-signal" rel="noopener nofollow external" target="_blank">
                          {s.label}
                        </a>
                      ) : (
                        <cite className="not-italic">{s.label}</cite>
                      )}
                      {s.type && <span className="ml-2 text-sm text-ink-3">({s.type})</span>}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {article.corrections && article.corrections.length > 0 && (
              <section aria-labelledby="corrections-heading" className="mt-10 max-w-[68ch]">
                <h2 id="corrections-heading" className="text-lg font-bold">
                  Correções
                </h2>
                <ul className="mt-3 flex flex-col gap-2 text-ink-2">
                  {article.corrections.map((c, i) => (
                    <li key={i}>
                      <time dateTime={c.date} className="text-ink-3">
                        {c.date}
                      </time>
                      {": "}
                      {c.note}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <footer className="mt-14 flex max-w-[68ch] flex-col gap-8 border-t-2 border-ink pt-8">
              <div>
                <h2 className="text-lg font-bold">Compartilhar</h2>
                <div className="mt-3">
                  <ShareButtons url={url} title={article.title} />
                </div>
              </div>
              {article.tags.length > 0 && (
                <ul className="flex flex-wrap gap-2" aria-label="Tags">
                  {article.tags.map((t) => (
                    <li key={t}>
                      <Link
                        href={`/artigos?tag=${encodeURIComponent(t.toLowerCase())}`}
                        rel="tag"
                        className="inline-block bg-snow-2 px-3 py-1.5 text-sm font-medium text-ink-2 transition-colors hover:bg-ink hover:text-white"
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-ink-3">
                {article.author}. {article.authorBio}
                {originalInstagramUrl && (
                  <>
                    {" "}
                    <a href={originalInstagramUrl} target="_blank" rel="noopener noreferrer nofollow external" className="font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4">
                      Ver o post original no Instagram
                    </a>
                    .
                  </>
                )}
              </p>
            </footer>
          </div>

          <aside className="lg:col-span-4" aria-label="Acervo Tático">
            <div className="lg:sticky lg:top-28">
              <AcademyCta variant="card" title="Leu o caso? Aprenda o método." />
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-snow-2 text-ink" aria-labelledby="related-title">
          <div className="container-site py-20 md:py-24">
            <SectionHeading
              id="related-title"
              title="Continue lendo"
              href={`/artigos?categoria=${article.category}`}
              linkLabel={`Mais em ${article.categoryLabel}`}
            />
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
