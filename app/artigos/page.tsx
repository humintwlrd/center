import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Search } from "lucide-react"
import { ArticleCard } from "@/components/site/article-card"
import { AcademyCta } from "@/components/site/academy-cta"
import { NewsletterInline } from "@/components/site/newsletter-inline"
import { PageHeader } from "@/components/site/page-header"
import { ARTICLES, articleMatchesCategory, articleMatchesTag } from "@/lib/content/articles"
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

  const trending = allSorted.slice(0, 6)

  const breadcrumbs = [
    { label: "Artigos", href: "/artigos" },
    ...(cat && categoryLabel ? [{ label: categoryLabel, href: `/artigos?categoria=${cat}` }] : []),
  ]

  return (
    <>
      <PageHeader
        eyebrow={cat || tag ? "Tema" : "Arquivo editorial"}
        title={heading}
        lede={lede}
        breadcrumbs={breadcrumbs}
      >
        <form
          id="busca"
          action="/artigos"
          method="get"
          role="search"
          className="flex max-w-xl items-stretch border border-line-strong bg-paper-strong focus-within:border-ink"
        >
          {cat && <input type="hidden" name="categoria" value={cat} />}
          {tag && <input type="hidden" name="tag" value={tag} />}
          <label htmlFor="q" className="sr-only">
            Buscar artigos
          </label>
          <span className="flex items-center pl-4 text-ink-muted" aria-hidden>
            <Search className="h-4 w-4" />
          </span>
          <input
            type="search"
            id="q"
            name="q"
            defaultValue={rawQ}
            placeholder="Buscar por tema, caso ou método…"
            className="h-12 w-0 min-w-0 flex-1 bg-transparent px-3 text-[0.9375rem] text-ink outline-none placeholder:text-ink-muted"
          />
          <button type="submit" className="btn btn-ink shrink-0 px-4 sm:px-5">
            Buscar
          </button>
        </form>
      </PageHeader>

      {/* Abas de categoria */}
      <nav
        aria-label="Categorias"
        className="sticky top-16 z-30 border-b border-line bg-paper/95 backdrop-blur-md lg:top-[72px]"
      >
        <div className="container-editorial">
          <ul className="-mx-1 flex items-stretch gap-6 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <CategoryTab label="Todas" href="/artigos" active={!cat && !tag} />
            {ARTICLE_CATEGORIES.map((c) => (
              <CategoryTab
                key={c.slug}
                label={c.label}
                href={`/artigos?categoria=${c.slug}`}
                active={cat === c.slug}
              />
            ))}
          </ul>
        </div>
      </nav>

      <section className="bg-paper">
        <div className="container-editorial py-12 md:py-16">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="rule-top mb-10 flex items-baseline justify-between gap-4 pt-4">
                <h2 className="font-display text-display-sm font-medium">{resultLabel}</h2>
                <p className="shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
                  {filtered.length} {filtered.length === 1 ? "texto" : "textos"}
                </p>
              </div>

              {filtered.length === 0 ? (
                <div className="border border-line bg-paper-strong p-8 md:p-10">
                  <p className="kicker">Nada encontrado</p>
                  <p className="mt-4 font-display text-display-sm font-medium text-ink">
                    Nenhum texto corresponde a essa busca.
                  </p>
                  <p className="mt-3 text-ink-muted">
                    Tente outro termo, escolha um tema acima ou volte ao arquivo completo.
                  </p>
                  <Link href="/artigos" className="btn btn-outline mt-6">
                    Limpar filtros
                  </Link>
                </div>
              ) : (
                <>
                  {isBase && lead && (
                    <ArticleCard
                      article={lead}
                      variant="lead"
                      priority
                      className="mb-12 border-b border-line pb-12"
                    />
                  )}

                  <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                    {gridArticles.map((a, index) => (
                      <ArticleCard key={a.slug} article={a} priority={!isBase && index < 2} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <nav
                      aria-label="Paginação de artigos"
                      className="mt-16 flex items-center justify-between gap-3 border-t border-ink pt-6"
                    >
                      {currentPage > 1 ? (
                        <Link
                          href={articlesPageHref({ cat, tag, q: rawQ, page: currentPage - 1 })}
                          className="btn btn-outline btn-sm"
                          rel="prev"
                        >
                          <ArrowLeft aria-hidden />
                          Anterior
                        </Link>
                      ) : (
                        <span className="btn btn-outline btn-sm pointer-events-none opacity-30" aria-hidden>
                          Anterior
                        </span>
                      )}
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
                        Página {currentPage} de {totalPages}
                      </span>
                      {currentPage < totalPages ? (
                        <Link
                          href={articlesPageHref({ cat, tag, q: rawQ, page: currentPage + 1 })}
                          className="btn btn-outline btn-sm"
                          rel="next"
                        >
                          Próxima
                          <ArrowRight aria-hidden />
                        </Link>
                      ) : (
                        <span className="btn btn-outline btn-sm pointer-events-none opacity-30" aria-hidden>
                          Próxima
                        </span>
                      )}
                    </nav>
                  )}
                </>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="flex flex-col gap-12 lg:sticky lg:top-40">
                <div className="border border-line bg-paper-strong p-6">
                  <p className="kicker">Newsletter</p>
                  <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                    Receba os próximos artigos por e-mail.
                  </p>
                  <div className="mt-5">
                    <NewsletterInline />
                  </div>
                </div>

                <div>
                  <h2 className="rule-top mb-4 pt-4 font-display text-display-sm font-medium">
                    Assuntos em alta
                  </h2>
                  <div className="flex flex-col">
                    {trending.map((a) => (
                      <ArticleCard key={a.slug} article={a} variant="compact" />
                    ))}
                  </div>
                </div>

                <AcademyCta variant="card" />
              </div>
            </aside>
          </div>
        </div>
      </section>
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
          "relative flex h-12 items-center whitespace-nowrap text-sm font-medium transition-colors",
          "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5",
          active
            ? "text-ink after:bg-brand"
            : "text-ink-muted hover:text-ink after:bg-transparent hover:after:bg-line-strong",
        )}
      >
        {label}
      </Link>
    </li>
  )
}
