import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ArticleCard } from "@/components/site/article-card"
import { DotMatrix } from "@/components/site/dot-matrix"
import { RiseText } from "@/components/site/rise-text"
import { Roll } from "@/components/site/roll"
import { TestimonialsStrip } from "@/components/site/testimonials-strip"
import { DOSSIERS, DossierCovers, MethodSection, OfferFacts } from "@/components/shop/acervo-letter"
import { getArticleBySlug, getLatestArticles, type Article } from "@/lib/content/articles"
import { eyePattern } from "@/lib/dot-patterns"
import { ACERVO } from "@/lib/products"

const CASE_SLUGS = [
  "como-china-desmantelou-rede-cia-contrainteligencia",
  "caso-sergei-skripal-recrutamento-duplo-agente",
  "unidade-29155-operacoes-encoberto-gru",
]

const ACERVO_HREF = `/academy/${ACERVO.id}`

function bySlugs(slugs: string[]) {
  return slugs.map((slug) => getArticleBySlug(slug)).filter(Boolean) as Article[]
}

/** CTA que leva à página de vendas do Acervo (a home não abre o checkout direto). */
function AcervoLink({ label = "Conhecer o Acervo Tático" }: { label?: string }) {
  return (
    <Link href={ACERVO_HREF} className="btn btn-signal">
      <Roll>{label}</Roll>
      <ChevronRight aria-hidden />
    </Link>
  )
}

export default function HomePage() {
  const cases = bySlugs(CASE_SLUGS)
  const shown = new Set(CASE_SLUGS)
  const [latestLead, ...latestRest] = getLatestArticles(10)
    .filter((a) => !shown.has(a.slug))
    .slice(0, 4)

  return (
    <>
      {/* ============================ ABERTURA ============================ */}
      <section className="relative overflow-hidden" aria-labelledby="home-title">
        <div aria-hidden className="grid-fade pointer-events-none absolute top-[46%] -left-28 h-[420px] w-[520px]" />
        <div className="container-site relative pt-10 pb-16 md:pt-20 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h1 id="home-title" className="max-w-[14ch] text-hero text-ink">
                <RiseText text="Inteligência humana" />{" "}
                <span className="blur-in text-ink-4" style={{ ["--d" as string]: "320ms" }}>
                  aplicada às suas decisões.
                </span>
              </h1>
              <p className="blur-in mt-6 max-w-[52ch] text-lg text-ink-2 md:text-xl" style={{ ["--d" as string]: "460ms" }}>
                Casos reais de inteligência e espionagem, lidos como um analista lê. E o método por trás deles,
                transformado em ferramentas para negociar, contratar e avaliar informação.
              </p>
              <div className="blur-in mt-8 flex flex-col items-start gap-3 sm:flex-row" style={{ ["--d" as string]: "600ms" }}>
                <AcervoLink />
                <Link href="#casos" className="btn btn-line">
                  <Roll>Ler os casos</Roll>
                  <ChevronRight aria-hidden />
                </Link>
              </div>
              <p className="blur-in mt-6 text-sm text-ink-3" style={{ ["--d" as string]: "740ms" }}>
                Mais de 350 análises publicadas.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[300px] sm:max-w-[440px] lg:col-span-5 lg:mr-0 lg:max-w-[520px]">
              <DotMatrix grid={eyePattern()} wipe />
            </div>
          </div>
        </div>
      </section>

      {/* ============================ MÉTODO ============================ */}
      <MethodSection
        sources={false}
        lede="Um analista de inteligência não confia na primeira impressão. Ele observa, pergunta, avalia e protege o que sabe, nessa ordem. É a lente de cada caso publicado aqui e a estrutura do Acervo Tático."
      />

      {/* ============================ CASOS ============================ */}
      <section id="casos" aria-labelledby="casos-title" className="scroll-mt-20 py-20 md:py-[140px]">
        <div className="container-site">
          <header className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between md:pb-12" data-reveal>
            <div className="max-w-[640px]">
              <h2 id="casos-title" className="text-display">
                Casos reais, <span className="text-ink-4">lidos com método.</span>
              </h2>
              <p className="mt-5 text-lg text-ink-2">
                Operações documentadas e o que elas ensinam: o que foi observado, o que foi ignorado e o que deveria ter
                sido percebido.
              </p>
            </div>
            <Link href="/artigos?categoria=casos-historicos" className="btn btn-line shrink-0 self-start md:self-auto">
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

      {/* ============================ ACERVO ============================ */}
      <section aria-labelledby="acervo-title" className="night py-20 md:py-[140px]">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <DossierCovers className="mx-auto max-w-[460px] lg:max-w-none" />
          </div>
          <div className="lg:col-span-7" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <h2 id="acervo-title" className="text-display">
              O método inteiro, em seis dossiês.{" "}
              <span className="text-mist-2">Para consultar antes de cada conversa importante.</span>
            </h2>
            <p className="mt-5 max-w-[56ch] text-lg text-mist">
              O Acervo Tático HUMINT vai do comportamento humano à proteção da informação, com um núcleo de ferramentas
              operacionais para aplicar o que você estudou.
            </p>
            <ol className="mt-8 grid border-t border-tone sm:grid-cols-2 sm:gap-x-8">
              {DOSSIERS.map((d, i) => (
                <li key={d.name} className="grid grid-cols-[2.5rem_1fr] items-baseline border-b border-tone py-3.5 text-lg text-white">
                  <span className="tabular text-sm font-medium text-mist-2">{String(i + 1).padStart(2, "0")}</span>
                  {d.name}
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-col items-start gap-4">
              <AcervoLink label="Ver o que tem no Acervo" />
              <OfferFacts />
            </div>
          </div>
        </div>
      </section>

      {/* ============================ ALUNOS ============================ */}
      <TestimonialsStrip />

      {/* ============================ ARTIGOS ============================ */}
      <section aria-labelledby="arquivo-title" className="py-20 md:py-[140px]">
        <div className="container-site">
          <header className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between md:pb-12" data-reveal>
            <h2 id="arquivo-title" className="text-display">
              Publicado recentemente
            </h2>
            <Link href="/artigos" className="btn btn-line shrink-0 self-start md:self-auto">
              <Roll>Todos os artigos</Roll>
              <ChevronRight aria-hidden />
            </Link>
          </header>
          <div className="grid border-t border-l border-line md:grid-cols-2">
            {latestLead && <ArticleCard article={latestLead} variant="cell" withImage className="md:row-span-3" />}
            {latestRest.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="cell" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
