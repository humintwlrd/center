import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowUpRight, ChevronRight } from "lucide-react"
import { AcademyCta } from "@/components/site/academy-cta"
import { ArticleCard } from "@/components/site/article-card"
import { DotMatrix } from "@/components/site/dot-matrix"
import { RiseText } from "@/components/site/rise-text"
import { Roll } from "@/components/site/roll"
import { ScrubText } from "@/components/site/scrub-text"
import { getArticleBySlug, getLatestArticles, type Article } from "@/lib/content/articles"
import { ICON_EYE, ICON_LENS, ICON_SHIELD, eyePattern } from "@/lib/dot-patterns"
import { PRODUCTS } from "@/lib/products"
import { NAV, SITE } from "@/lib/site"
import { TESTIMONIALS } from "@/lib/testimonials"

const CASE_SLUGS = [
  "como-china-desmantelou-rede-cia-contrainteligencia",
  "caso-sergei-skripal-recrutamento-duplo-agente",
  "unidade-29155-operacoes-encoberto-gru",
  "guerra-golfo-1991-humint-desinformacao",
]

const APPLICATIONS = [
  {
    scene: "Na negociação",
    body: "Perceber hesitação, interesse real e o momento exato em que o outro lado começa a ceder.",
    icon: ICON_EYE,
  },
  {
    scene: "No trabalho",
    body: "Avaliar sócios, candidatos e fontes pelo comportamento, antes de dar acesso ou colocar o seu nome ao lado.",
    icon: ICON_LENS,
  },
  {
    scene: "Na vida pessoal",
    body: "Reconhecer manipulação enquanto ela acontece e proteger o que você não deveria ter dito.",
    icon: ICON_SHIELD,
  },
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

  const acervo = PRODUCTS.find((p) => p.destaque) ?? PRODUCTS[0]
  const modules = (acervo.ementa ?? []).filter((m) => m.includes("·"))
  const [installments, ...amount] = acervo.parcelado.split(" de ")

  return (
    <>
      {/* ============================ HERO (V1) ============================ */}
      <section className="relative overflow-hidden" aria-labelledby="home-title">
        <div aria-hidden className="grid-fade pointer-events-none absolute top-[46%] -left-28 h-[420px] w-[520px]" />
        <div className="container-site relative pt-10 pb-16 md:pt-20 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">
            <div className="max-w-[520px]">
              <h1 id="home-title" className="text-mega text-ink">
                <RiseText text="Inteligência humana aplicada, com método." />
              </h1>
              <p className="blur-in mt-4 text-base text-ink-2 md:text-lg" style={{ ["--d" as string]: "450ms" }}>
                Casos reais de espionagem dissecados em método para negociar, avaliar pessoas e proteger informação.
              </p>
              <div className="blur-in mt-6 flex flex-col items-start gap-3 sm:flex-row" style={{ ["--d" as string]: "600ms" }}>
                <Link href={`/academy/${acervo.id}`} className="btn btn-signal">
                  <Roll>Conhecer o Acervo Tático</Roll>
                  <ChevronRight aria-hidden />
                </Link>
                <Link href="#casos" className="btn btn-line">
                  <Roll>Ver os casos</Roll>
                  <ChevronRight aria-hidden />
                </Link>
              </div>
              <p className="blur-in mt-6 text-sm text-ink-3" style={{ ["--d" as string]: "750ms" }}>
                Mais de 350 análises publicadas. Credenciais no seu e-mail em minutos.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[560px] lg:mr-0">
              <DotMatrix grid={eyePattern()} wipe />
            </div>
          </div>
        </div>
      </section>

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

      {/* ============================ SOBRE (V1) ============================ */}
      <section aria-labelledby="sobre-title" className="pb-20 md:pb-[140px]">
        <div className="container-site">
          <div className="mx-auto max-w-[865px] border-l border-line pt-10 md:pt-20">
            <div className="px-5 md:px-10">
              <h2 id="sobre-title" className="subtitle">
                Sobre
              </h2>
              <ScrubText
                text={SITE.description}
                className="mt-4 text-[1.5rem] leading-[1.45] font-medium tracking-[-0.03em] text-ink md:text-3xl md:leading-[1.5]"
              />
            </div>
            {cases[0] && (
              <Link
                href="#casos"
                className="group rule-t rule-b mt-10 flex max-w-[480px] items-center gap-4 [--rule-left:-7.5rem] [--rule-shift:0] [--rule-width:calc(100%+7.5rem)] md:mt-14"
              >
                <span className="relative block h-[96px] w-[160px] shrink-0 overflow-hidden bg-snow-2 md:h-[123px] md:w-[220px]">
                  <Image src={cases[0].heroImage} alt="" fill sizes="220px" className="mono media-zoom object-cover" />
                  <span className="absolute inset-0 m-auto flex size-12 items-center justify-center bg-ink/80 text-white">
                    <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden />
                  </span>
                </span>
                <span className="text-base font-medium text-ink">Ver os casos</span>
              </Link>
            )}
          </div>
        </div>
      </section>

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

      {/* ======================= NA PRÁTICA (V1 princípios) ======================= */}
      <section aria-labelledby="vida-title" className="overflow-hidden pb-20 md:pb-[140px]">
        <div className="container-site">
          <header className="mx-auto max-w-[760px] pb-10 text-center md:pb-12" data-reveal>
            <p className="subtitle">Na prática</p>
            <h2 id="vida-title" className="mt-2 text-title">
              O que um oficial faz numa operação, você faz numa conversa.
            </h2>
          </header>
          <div className="frame">
            <div className="rule-t rule-b grid md:grid-cols-3">
              {APPLICATIONS.map((item, i) => (
                <div
                  key={item.scene}
                  className="group flex flex-col border-b border-line p-6 last:border-b-0 md:border-r md:border-b-0 md:p-8 md:last:border-r-0"
                  data-reveal
                  style={{ ["--d" as string]: `${i * 120}ms` }}
                >
                  <div className="mx-auto w-[150px] py-8 md:w-[190px] md:py-14">
                    <DotMatrix grid={item.icon} tone="soft" fill={0.7} className="transition-opacity duration-500 group-hover:opacity-0" />
                    <DotMatrix
                      grid={item.icon}
                      tone="light"
                      fill={0.7}
                      className="-mt-[100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mt-auto text-xl leading-[1.25]">{item.scene}</h3>
                  <p className="mt-3 text-base text-ink-2">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center py-8">
              <Link href="#acervo" className="btn btn-signal">
                <Roll>Conhecer o Acervo Tático</Roll>
                <ChevronRight aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== ACERVO (V2 missão) ========================== */}
      <section id="acervo" aria-labelledby="acervo-title" className="pb-20 md:pb-[140px]">
        <div className="container-site">
          <div className="rule-t rule-b grid border-x border-line md:grid-cols-2">
            <div className="border-b border-line px-6 py-10 md:border-r md:border-b-0 md:px-16 md:py-12" data-reveal>
              <p className="subtitle">Academy</p>
              <h2 id="acervo-title" className="mt-2 max-w-[440px] text-title">
                {acervo.nome}
              </h2>
            </div>
            <div className="flex items-center px-6 py-10 md:px-16 md:py-12" data-reveal style={{ ["--d" as string]: "120ms" }}>
              <p className="max-w-[440px] text-base text-ink-2">{acervo.descricao}</p>
            </div>
          </div>

          <div className="rule-b grid border-x border-line bg-snow-2 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <Link
              href={`/academy/${acervo.id}`}
              tabIndex={-1}
              aria-hidden
              className="group relative block border-b border-line p-6 md:p-10 lg:border-r lg:border-b-0"
            >
              <span className="relative mx-auto block aspect-[3/4] w-full max-w-[380px] overflow-hidden">
                <Image src={acervo.image} alt="" fill sizes="(min-width: 1024px) 380px, 90vw" className="media-zoom object-cover" />
              </span>
            </Link>
            <div className="flex flex-col px-6 py-10 md:px-12 md:py-12">
              <ol className="border-t border-line">
                {modules.map((m) => {
                  const [num, name] = m.split(" · ")
                  return (
                    <li key={m} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-b border-line py-3.5">
                      <span className="text-sm font-medium uppercase text-ink-3">Dossiê {num}</span>
                      <span className="text-base font-medium text-ink">{name}</span>
                    </li>
                  )
                })}
              </ol>
              <div className="mt-8 flex flex-col gap-6">
                <p className="tabular">
                  <span className="text-ink-2">{installments} de </span>
                  <span className="text-title whitespace-nowrap text-ink">{amount.join(" de ")}</span>
                  <span className="mt-1 block text-sm text-ink-3">Cartão ou Pix · 7 dias de garantia</span>
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={acervo.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-signal">
                    <Roll>Comprar agora</Roll>
                    <ArrowUpRight aria-hidden />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                  <Link href={`/academy/${acervo.id}`} className="btn btn-line bg-snow">
                    <Roll>Ver o que tem dentro</Roll>
                    <ChevronRight aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DEPOIMENTOS (V1 integrações) ===================== */}
      <section aria-labelledby="depoimentos-title" className="overflow-hidden bg-snow-2 py-20 md:py-[120px]">
        <div className="container-site">
          <header className="flex flex-col gap-4 pb-10 md:flex-row md:items-end md:justify-between md:pb-8" data-reveal>
            <div className="max-w-[420px]">
              <p className="subtitle">Depoimentos</p>
              <h2 id="depoimentos-title" className="mt-2 text-title">
                Quem comprou, aplicou.
              </h2>
            </div>
            <p className="max-w-[400px] text-base text-ink-2">Capturas reais de mensagens de alunos. Os nomes foram ocultados.</p>
          </header>
        </div>
        <div className="border-y border-line">
          <ul className="marquee [--marquee-duration:70s]">
            {[0, 1].map((copy) =>
              TESTIMONIALS.map((t) => (
                <li
                  key={`${copy}-${t.src}`}
                  aria-hidden={copy === 1 || undefined}
                  className="-mr-px w-[200px] shrink-0 border-x border-line bg-snow p-3 md:w-[240px]"
                >
                  <span className="relative block aspect-[9/16] overflow-hidden bg-snow-2">
                    <Image src={t.src} alt={copy === 1 ? "" : t.alt} fill sizes="240px" className="object-cover" />
                  </span>
                </li>
              )),
            )}
          </ul>
        </div>
        <div className="flex justify-center pt-8">
          <Link href={`/academy/${acervo.id}`} className="btn btn-signal">
            <Roll>Conhecer o Acervo Tático</Roll>
            <ChevronRight aria-hidden />
          </Link>
        </div>
      </section>

      {/* ========================= CHAMADA ESCURA (V1/V2) ========================= */}
      <AcademyCta />

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
    </>
  )
}
