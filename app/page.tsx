import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ArticleCard } from "@/components/site/article-card"
import { Roll } from "@/components/site/roll"
import { TestimonialsStrip } from "@/components/site/testimonials-strip"
import {
  BuyCta,
  LetterCtaBand,
  LetterDossiers,
  LetterFaq,
  LetterHero,
  LetterNoCheap,
  LetterOffer,
  LetterProblem,
  LetterTwoPeople,
  LetterWhy,
} from "@/components/shop/acervo-letter"
import { getArticleBySlug, getLatestArticles, type Article } from "@/lib/content/articles"
import { NAV } from "@/lib/site"

const CASE_SLUGS = [
  "como-china-desmantelou-rede-cia-contrainteligencia",
  "caso-sergei-skripal-recrutamento-duplo-agente",
  "unidade-29155-operacoes-encoberto-gru",
  "guerra-golfo-1991-humint-desinformacao",
]

function bySlugs(slugs: string[]) {
  return slugs.map((slug) => getArticleBySlug(slug)).filter(Boolean) as Article[]
}

export default function HomePage() {
  const cases = bySlugs(CASE_SLUGS)
  const shown = new Set(CASE_SLUGS)
  const latest = getLatestArticles(14)
    .filter((a) => !shown.has(a.slug))
    .slice(0, 8)
  const [latestLead, ...latestRest] = latest

  return (
    <>
      {/* ======================= ABERTURA (carta, hero V1) ======================= */}
      <LetterHero
        cta={<BuyCta href="#oferta" />}
        secondary={
          <Link href="#casos" className="btn btn-line">
            <Roll>Ver os casos</Roll>
            <ChevronRight aria-hidden />
          </Link>
        }
      />

      {/* ======================= TEMAS: faixa em loop (V2) ======================= */}
      <section aria-label="Temas" className="pb-16 md:pb-24">
        <p className="subtitle container-site text-center">Temas</p>
        <div className="mt-5 overflow-hidden">
          <ul className="marquee items-center [--marquee-duration:48s]">
            {[0, 1].map((copy) =>
              NAV.categories.map((item) => (
                <li key={`${copy}-${item.href}`} aria-hidden={copy === 1 || undefined} className="shrink-0">
                  <Link
                    href={item.href}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="flex items-center gap-3 px-6 text-2xl font-medium tracking-[-0.03em] whitespace-nowrap text-ink transition-colors hover:text-ink-2 md:px-8 md:text-[1.875rem]"
                  >
                    <span className="grid size-6 shrink-0 grid-cols-3 gap-[2px]" aria-hidden>
                      {Array.from({ length: 9 }, (_, i) => (
                        <span key={i} className={i % 2 === 0 ? "bg-ink" : "bg-transparent"} />
                      ))}
                    </span>
                    {item.label}
                  </Link>
                </li>
              )),
            )}
          </ul>
        </div>
      </section>

      {/* ======================= ARGUMENTO (carta) ======================= */}
      <LetterProblem />
      <LetterWhy cta={<BuyCta href="#oferta" />} />
      <LetterTwoPeople />

      {/* ============================ CASOS (V1 blog) ============================ */}
      <section id="casos" aria-labelledby="casos-title" className="pb-20 md:pb-[140px]">
        <div className="container-site">
          <header className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between md:pb-8" data-reveal>
            <div className="max-w-[600px]">
              <p className="subtitle">Casos</p>
              <h2 id="casos-title" className="mt-2 text-title">
                Casos reais. O método em ação.
              </h2>
              <p className="mt-3 text-base text-ink-2">
                Operações documentadas, lidas como um analista lê: o que foi observado, o que foi ignorado e o que deveria
                ter sido percebido.
              </p>
            </div>
            <Link href="/artigos?categoria=casos-historicos" className="btn btn-signal shrink-0 self-start md:self-auto">
              <Roll>Todos os casos</Roll>
              <ChevronRight aria-hidden />
            </Link>
          </header>
          <div className="rule-t border-l border-line">
            {cases.map((article, i) => (
              <ArticleCard key={article.slug} article={article} variant="feature" priority={i === 0} className="rule-b" />
            ))}
          </div>
        </div>
      </section>

      <LetterNoCheap />

      {/* ======================= DOSSIÊS, PROVA, OFERTA E FAQ (carta) ======================= */}
      <div className="pt-20 md:pt-[140px]">
        <LetterDossiers />
      </div>
      <TestimonialsStrip />
      <LetterOffer />
      <LetterFaq />

      {/* ======================= PUBLICADO RECENTEMENTE (V2 blog) ======================= */}
      <section aria-labelledby="arquivo-title" className="py-20 md:py-[140px]">
        <div className="container-site">
          <header className="mx-auto max-w-[640px] pb-10 text-center md:pb-9" data-reveal>
            <p className="subtitle">Artigos</p>
            <h2 id="arquivo-title" className="mt-2 text-title">
              Publicado recentemente
            </h2>
          </header>
          <div className="grid border-t border-l border-line md:grid-cols-2">
            {latestLead && (
              <ArticleCard article={latestLead} variant="cell" withImage className="md:row-span-3" />
            )}
            {latestRest.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="cell" />
            ))}
          </div>
          <div className="flex justify-center pt-8">
            <Link href="/artigos" className="btn btn-signal">
              <Roll>Todos os artigos</Roll>
              <ChevronRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>
      <LetterCtaBand />
    </>
  )
}
