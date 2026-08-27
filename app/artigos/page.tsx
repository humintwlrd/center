import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ArticleCard } from "@/components/site/article-card"
import { HeroCarousel, type HeroSlide } from "@/components/site/hero-carousel"
import { NewsletterInline } from "@/components/site/newsletter-inline"
import { ARTICLES, articleMatchesCategory, articleMatchesTag } from "@/lib/content/articles"
import { ARTICLE_CATEGORIES } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"

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
  const q = (sp.q ?? "").toLowerCase().trim()
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

  // Hero em destaque (só na visão base): artigos marcados como featured, senão os mais recentes.
  const heroPool = allSorted.filter((a) => a.featured)
  const heroSource = heroPool.length >= 3 ? heroPool.slice(0, 5) : allSorted.slice(0, 5)
  const heroSlides: HeroSlide[] = heroSource.map((a) => ({
    category: a.categoryLabel,
    title: a.title,
    href: `/artigos/${a.slug}`,
    imageDesktop: a.heroImage,
    imageMobile: a.heroImage,
    imageAlt: a.heroAlt,
    subtitle: a.description,
    ctaLabel: "Ler artigo",
  }))

  // Sidebar "Assuntos em alta": mais recentes (estável, independente do filtro).
  const trending = allSorted.slice(0, 8)

  return (
    <>
      {isBase && heroSlides.length > 0 && <HeroCarousel slides={heroSlides} />}

      {/* Barra de categorias (pílulas roláveis) + busca */}
      <section className="hairline-y bg-paper-strong sticky top-0 z-30">
        <div className="container-editorial flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
          <div className="-mx-1 flex items-center gap-2 overflow-x-auto px-1 [scrollbar-width:none]">
            <CategoryPill label="Todas" href="/artigos" active={!cat && !tag} />
            {ARTICLE_CATEGORIES.map((c) => (
              <CategoryPill
                key={c.slug}
                label={c.label}
                href={`/artigos?categoria=${c.slug}`}
                active={cat === c.slug}
              />
            ))}
          </div>
          <form action="/artigos" method="get" role="search" className="flex shrink-0 items-center gap-2">
            {cat && <input type="hidden" name="categoria" value={cat} />}
            {tag && <input type="hidden" name="tag" value={tag} />}
            <label htmlFor="q" className="sr-only">
              Buscar
            </label>
            <input
              type="search"
              id="q"
              name="q"
              defaultValue={q}
              placeholder="Buscar…"
              className="w-40 rounded-full border border-line bg-paper-deep px-4 py-1.5 text-sm focus:border-gold focus:outline-none md:w-48"
            />
          </form>
        </div>
      </section>

      {/* Corpo: título + grade principal + sidebar */}
      <section className="container-editorial py-10 md:py-14">
        <div className="mb-8 flex items-baseline gap-3">
          <h1 className="font-display text-2xl font-bold text-ink md:text-3xl">Artigos</h1>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">Mundo da HUMINT</span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Principal */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-end justify-between gap-4 hairline-b pb-3">
              <p className="eyebrow-gold">
                {cat
                  ? ARTICLE_CATEGORIES.find((c) => c.slug === cat)?.label ?? "Artigos"
                  : tag
                    ? `Tag: ${tag}`
                    : q
                      ? `Busca: "${q}"`
                      : "Últimos artigos"}
              </p>
              <p className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                {filtered.length} {filtered.length === 1 ? "artigo" : "artigos"}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="border border-line bg-paper-strong p-10 text-center">
                <p className="eyebrow-gold mb-3">Nada encontrado</p>
                <h2 className="font-display text-2xl font-semibold">Nenhum artigo corresponde a essa busca.</h2>
                <p className="mt-2 text-ink-muted">
                  Tente outro termo ou{" "}
                  <Link href="/artigos" className="text-gold-active underline">
                    limpar os filtros
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
                  {visibleArticles.map((a, index) => (
                    <ArticleCard key={a.slug} article={a} variant="overlay" priority={index < 4} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <nav
                    aria-label="Paginação de artigos"
                    className="mt-12 flex items-center justify-between gap-3 border-t border-line pt-6"
                  >
                    {currentPage > 1 ? (
                      <Link
                        href={articlesPageHref({ cat, tag, q, page: currentPage - 1 })}
                        className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
                      >
                        Anterior
                      </Link>
                    ) : (
                      <span className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2 text-sm text-ink-muted opacity-40">
                        Anterior
                      </span>
                    )}
                    <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                      {currentPage} / {totalPages}
                    </span>
                    {currentPage < totalPages ? (
                      <Link
                        href={articlesPageHref({ cat, tag, q, page: currentPage + 1 })}
                        className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
                      >
                        Próxima
                      </Link>
                    ) : (
                      <span className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2 text-sm text-ink-muted opacity-40">
                        Próxima
                      </span>
                    )}
                  </nav>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="flex flex-col gap-8">
              {/* Newsletter */}
              <div className="border border-line bg-paper-strong p-6">
                <p className="eyebrow-gold mb-2">Newsletter</p>
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                  Receba os próximos artigos por e-mail.
                </h3>
                <div className="mt-4">
                  <NewsletterInline />
                </div>
              </div>

              {/* Assuntos em alta */}
              <div>
                <p className="eyebrow-gold mb-4 hairline-b pb-3">Assuntos em alta</p>
                <div className="flex flex-col gap-4">
                  {trending.map((a) => (
                    <ArticleCard key={a.slug} article={a} variant="compact" />
                  ))}
                </div>
              </div>

              {/* Academy */}
              <div className="border border-line bg-deep p-6 text-paper">
                <p className="font-mono text-[11px] uppercase tracking-widest text-warm mb-2">Academy</p>
                <h3 className="font-display text-xl font-semibold leading-snug text-paper">
                  Onde a teoria vira operação.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm">
                  Cursos e materiais operacionais de inteligência humana — para aplicar de verdade.
                </p>
                <Link
                  href="/academy"
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-gold px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-on-gold transition-colors hover:bg-gold-hover"
                >
                  Conhecer a Academy
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </aside>
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

function CategoryPill({ label, href, active }: { label: string; href: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={
        active
          ? "shrink-0 rounded-full bg-ink px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-paper"
          : "shrink-0 rounded-full border border-line px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-ink-soft transition-colors hover:border-ink hover:text-ink"
      }
    >
      {label}
    </Link>
  )
}
