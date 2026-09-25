import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Search } from "lucide-react"
import { ArticleCard } from "@/components/site/article-card"
import { AcademyCta } from "@/components/site/academy-cta"
import { PageHeader } from "@/components/site/page-header"
import { ARTICLES, articleMatchesCategory, articleMatchesTag, isInstagramImage } from "@/lib/content/articles"
import { getCategoryBySlug } from "@/lib/content/categories"
import { ARTICLE_CATEGORIES } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"
import { cn } from "@/lib/utils"

type Props = {
  searchParams: Promise<{ categoria?: string; pagina?: string; q?: string; tag?: string }>
}

const ARTICLES_PER_PAGE = 24

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams
  const cat = sp.categoria
  const tag = sp.tag
  const title = cat
    ? `Artigos · ${ARTICLE_CATEGORIES.find((c) => c.slug === cat)?.label ?? cat}`
    : tag
      ? `Artigos · ${tag}`
      : "Artigos, dossiês e análises sobre inteligência humana aplicada"
  return pageMetadata({
    title,
    description:
      "Centro editorial do Mundo da HUMINT: análises, dossiês, casos e fundamentos sobre inteligência humana aplicada. Para quem investiga, verifica e decide.",
    path: "/artigos",
  })
}

export default async function ArtigosPage({ searchParams }: Props) {
  const sp = await searchParams
  const cat = sp.categoria
  const tag = sp.tag
  const rawQ = (sp.q ?? "").trim()
  const q = rawQ.toLowerCase()
  const requestedPage = Number(sp.pagina ?? "1")

  const allSorted = ARTICLES.slice().sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))

  let filtered = allSorted
  if (cat) filtered = filtered.filter((a) => articleMatchesCategory(a, cat))
  if (tag) filtered = filtered.filter((a) => articleMatchesTag(a, tag))
  if (q) {
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)),
    )
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / ARTICLES_PER_PAGE))
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(1, Math.floor(requestedPage)), totalPages)
    : 1
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const visibleArticles = filtered.slice(startIndex, startIndex + ARTICLES_PER_PAGE)

  const isBase = !cat && !tag && !q && currentPage === 1
  const [lead, ...rest] = visibleArticles
  const gridArticles = isBase ? rest : visibleArticles

  const category = cat ? getCategoryBySlug(cat) : undefined
  const categoryLabel = cat ? (ARTICLE_CATEGORIES.find((c) => c.slug === cat)?.label ?? cat) : null

  const heading = category?.name ?? categoryLabel ?? (tag ? `#${tag}` : "Artigos")
  const lede =
    category?.description ??
    (tag
      ? `Textos marcados com “${tag}”.`
      : "Análises, casos históricos, métodos e fundamentos de inteligência humana aplicada. Para quem investiga, verifica e decide.")

  const resultLabel = q
    ? `Busca: “${rawQ}”`
    : cat
      ? (categoryLabel ?? "Categoria")
      : tag
        ? `Tag: ${tag}`
        : "Mais recentes"


  const breadcrumbs = [
    { label: "Artigos", href: "/artigos" },
    ...(cat && categoryLabel ? [{ label: categoryLabel, href: `/artigos?categoria=${cat}` }] : []),
  ]

  return (
    <>
      <PageHeader title={heading} lede={lede} breadcrumbs={breadcrumbs}>
        <form
          id="busca"
          action="/artigos"
          method="get"
          role="search"
          className="flex max-w-xl items-stretch gap-2"
        >
          {cat && <input type="hidden" name="categoria" value={cat} />}
          {tag && <input type="hidden" name="tag" value={tag} />}
          <label htmlFor="q" className="sr-only">
            Buscar artigos
          </label>
          <input
            type="search"
            id="q"
            name="q"
            defaultValue={rawQ}
            placeholder="Buscar por caso, tema ou método"
            className="field h-12 w-0 min-w-0 flex-1"
          />
          <button type="submit" className="btn btn-solid h-12 shrink-0">
            <Search aria-hidden />
            <span className="sr-only sm:not-sr-only">Buscar</span>
          </button>
        </form>
      </PageHeader>

      <nav aria-label="Categorias" className="sticky top-16 z-30 border-y border-line bg-snow/95 backdrop-blur-md lg:top-[72px]">
        <div className="container-site">
          <ul className="scroller -mx-1 flex items-stretch gap-7 overflow-x-auto px-1">
            <CategoryTab label="Todas" href="/artigos" active={!cat && !tag} />
            {ARTICLE_CATEGORIES.map((c) => (
              <CategoryTab key={c.slug} label={c.label} href={`/artigos?categoria=${c.slug}`} active={cat === c.slug} />
            ))}
          </ul>
        </div>
      </nav>

      <section className="bg-snow text-ink" aria-labelledby="resultados-title">
        <div className="container-site py-14 md:py-20">
          <div className="mb-12 flex items-baseline justify-between gap-4">
            <h2 id="resultados-title" className="font-expanded text-heading font-extrabold">
              {resultLabel}
            </h2>
            <p className="tabular shrink-0 text-ink-3">
              {filtered.length} {filtered.length === 1 ? "texto" : "textos"}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="max-w-2xl bg-snow-2 p-8 md:p-10">
              <p className="font-expanded text-heading font-extrabold">Nenhum texto corresponde a essa busca.</p>
              <p className="mt-3 text-lg text-ink-2">Tente outro termo, escolha um tema acima ou volte ao arquivo.</p>
              <Link href="/artigos" className="btn btn-solid mt-6">
                Limpar filtros
              </Link>
            </div>
          ) : (
            <>
              {isBase && lead && (
                <article className="group mb-16 grid gap-8 border-b border-line pb-16 md:grid-cols-12 md:items-center md:gap-12">
                  <Link
                    href={`/artigos/${lead.slug}`}
                    tabIndex={-1}
                    aria-hidden
                    className="relative block aspect-[4/5] overflow-hidden bg-snow-2 md:col-span-5"
                  >
                    <Image
                      src={lead.heroImage || "/placeholder.svg"}
                      alt=""
                      fill
                      priority
                      sizes="(min-width: 768px) 540px, 100vw"
                      className={`media-zoom ${isInstagramImage(lead.heroImage) ? "bg-night object-contain" : "object-cover"}`}
                    />
                  </Link>
                  <div className="md:col-span-7">
                    <h3 className="font-expanded text-title font-extrabold">
                      <Link href={`/artigos/${lead.slug}`} className="transition-colors group-hover:text-signal">
                        {lead.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-ink-2 line-clamp-4">{lead.description}</p>
                    <p className="mt-5 text-sm text-ink-3">
                      {lead.categoryLabel} · {lead.readingTime} de leitura
                    </p>
                  </div>
                </article>
              )}

              <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {gridArticles.map((a, index) => (
                  <ArticleCard key={a.slug} article={a} priority={!isBase && index < 3} />
                ))}
              </div>

              {totalPages > 1 && (
                <nav aria-label="Paginação de artigos" className="mt-20 flex items-center justify-between gap-3 border-t-2 border-ink pt-8">
                  {currentPage > 1 ? (
                    <Link href={articlesPageHref({ cat, tag, q: rawQ, page: currentPage - 1 })} className="btn btn-line" rel="prev">
                      <ArrowLeft aria-hidden />
                      Anterior
                    </Link>
                  ) : (
                    <span className="btn btn-line pointer-events-none opacity-30" aria-hidden>
                      Anterior
                    </span>
                  )}
                  <span className="tabular text-ink-3">
                    Página {currentPage} de {totalPages}
                  </span>
                  {currentPage < totalPages ? (
                    <Link href={articlesPageHref({ cat, tag, q: rawQ, page: currentPage + 1 })} className="btn btn-line" rel="next">
                      Próxima
                      <ArrowRight aria-hidden />
                    </Link>
                  ) : (
                    <span className="btn btn-line pointer-events-none opacity-30" aria-hidden>
                      Próxima
                    </span>
                  )}
                </nav>
              )}
            </>
          )}
        </div>
      </section>

      <AcademyCta />
    </>
  )
}

function articlesPageHref({
  cat,
  page,
  q,
  tag,
}: {
  cat?: string
  page: number
  q?: string
  tag?: string
}) {
  const params = new URLSearchParams()
  if (cat) params.set("categoria", cat)
  if (tag) params.set("tag", tag)
  if (q) params.set("q", q)
  if (page > 1) params.set("pagina", String(page))
  const query = params.toString()
  return query ? `/artigos?${query}` : "/artigos"
}

function CategoryTab({ label, href, active }: { label: string; href: string; active?: boolean }) {
  return (
    <li className="shrink-0">
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "relative flex h-14 items-center whitespace-nowrap font-semibold transition-colors",
          "after:absolute after:inset-x-0 after:bottom-0 after:h-[3px]",
          active ? "text-ink after:bg-signal" : "text-ink-3 hover:text-ink after:bg-transparent",
        )}
      >
        {label}
      </Link>
    </li>
  )
}
