import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { ArticleCard } from "@/components/site/article-card"
import { SectionHeading } from "@/components/site/section-heading"
import { NewsletterInline } from "@/components/site/newsletter-inline"
import { getArticleBySlug, getLatestArticles, type Article } from "@/lib/content/articles"
import { PRODUCTS } from "@/lib/products"

const CASE_SLUGS = [
  "como-china-desmantelou-rede-cia-contrainteligencia",
  "caso-sergei-skripal-recrutamento-duplo-agente",
  "unidade-29155-operacoes-encoberto-gru",
  "guerra-golfo-1991-humint-desinformacao",
  "engenharia-social-ponto-vulneravel-humano",
  "validacao-de-fontes-humanas",
  "humint-e-osint-complementaridade-e-limites",
  "psicologia-gaslighting-alterar-percepcao",
]

const APPLICATIONS = [
  {
    scene: "Na negociação",
    body: "Perceber hesitação, interesse real e o momento exato em que o outro lado começa a ceder.",
  },
  {
    scene: "No trabalho",
    body: "Avaliar sócios, candidatos e fontes pelo comportamento, antes de dar acesso ou colocar o seu nome ao lado.",
  },
  {
    scene: "Na vida pessoal",
    body: "Reconhecer manipulação enquanto ela acontece e proteger o que você não deveria ter dito.",
  },
]

const TESTIMONIALS = [
  { src: "/images/pv/testimonials/1.webp", alt: "Mensagem de aluno elogiando o dossiê de Engenharia Social pelas dicas para atuação em campo" },
  { src: "/images/pv/testimonials/7.webp", alt: "Mensagem destacando a profundidade técnica e o olhar prático dos dossiês" },
  { src: "/images/pv/testimonials/5.webp", alt: "Mensagem afirmando que o material vale a pena e abre novos insights" },
  { src: "/images/pv/testimonials/4.webp", alt: "Mensagem de comprador recorrente elogiando profundidade e fácil compreensão" },
  { src: "/images/pv/testimonials/2.webp", alt: "Mensagem sobre aplicar observação e percepção na vida e no trabalho" },
  { src: "/images/pv/testimonials/3.webp", alt: "Mensagem elogiando a escrita e as aplicações além da área técnica" },
  { src: "/images/pv/testimonials/6.webp", alt: "Mensagem afirmando que o acervo vale cada centavo e serve para consulta contínua" },
]

function bySlugs(slugs: string[]) {
  return slugs.map((slug) => getArticleBySlug(slug)).filter(Boolean) as Article[]
}

export default function HomePage() {
  const cases = bySlugs(CASE_SLUGS)
  const shown = new Set(CASE_SLUGS)
  const latest = getLatestArticles(12)
    .filter((a) => !shown.has(a.slug))
    .slice(0, 6)

  const acervo = PRODUCTS.find((p) => p.destaque) ?? PRODUCTS[0]
  const modules = (acervo.ementa ?? []).filter((m) => m.includes("·"))

  return (
    <>
      {/* ========================= ABERTURA ========================= */}
      <section className="night relative isolate overflow-hidden" aria-labelledby="home-title">
        <Image
          src="/images/editorial/cia-beijing-desktop.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[70%_35%] opacity-70"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/85 to-night/10" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-night to-transparent" />

        <div className="container-site flex min-h-[calc(100svh-4rem)] flex-col justify-end pt-24 pb-14 md:min-h-[min(calc(100svh-4.5rem),860px)] md:pb-20">
          <h1 id="home-title" className="max-w-[13ch] font-expanded text-mega font-extrabold">
            Inteligência humana aplicada, <span className="redact" data-delay="700">com método.</span>
          </h1>
          <p className="mt-7 max-w-[46ch] text-lede text-mist">
            Casos reais de espionagem dissecados em método para negociar, avaliar pessoas e proteger informação.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={`/academy/${acervo.id}`} className="btn btn-signal btn-lg">
              Conhecer o Acervo Tático
              <ArrowRight aria-hidden />
            </Link>
            <Link href="#casos" className="btn btn-line btn-lg">
              Ver os casos
            </Link>
          </div>
          <p className="mt-12 text-sm text-mist-2">
            Mais de 350 análises publicadas. Instrutor anônimo. Acesso imediato ao acervo.
          </p>
        </div>
      </section>

      {/* =========================== CASOS =========================== */}
      <section id="casos" className="night border-t border-line-night" aria-labelledby="casos-title">
        <div className="container-site pt-20 md:pt-28">
          <SectionHeading
            id="casos-title"
            title="Casos reais. O método em ação."
            description="Operações documentadas, lidas como um analista lê: o que foi observado, o que foi ignorado e o que deveria ter sido percebido."
            href="/artigos?categoria=casos-historicos"
            linkLabel="Todos os casos"
          />
        </div>
        <div className="scroller flex gap-6 overflow-x-auto pb-20 md:pb-28 rail md:gap-8">
          {cases.map((article, i) => (
            <ArticleCard key={article.slug} article={article} variant="case" priority={i < 2} />
          ))}
        </div>
      </section>

      {/* ======================= NA SUA VIDA ======================== */}
      <section className="bg-snow text-ink" aria-labelledby="vida-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <h2 id="vida-title" className="font-expanded text-title font-extrabold lg:col-span-5">
            O que um oficial faz numa operação, você faz numa conversa.
          </h2>
          <dl className="lg:col-span-6 lg:col-start-7">
            {APPLICATIONS.map((item) => (
              <div key={item.scene} className="border-t border-ink py-7 first:border-t-2">
                <dt className="font-expanded text-heading font-extrabold">{item.scene}</dt>
                <dd className="mt-3 max-w-[52ch] text-lg leading-relaxed text-ink-2">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ========================== ACERVO ========================== */}
      <section className="night" aria-labelledby="acervo-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <Link
            href={`/academy/${acervo.id}`}
            tabIndex={-1}
            aria-hidden
            className="group relative mx-auto block aspect-[3/4] w-full max-w-md overflow-hidden lg:col-span-5 lg:max-w-none"
          >
            <Image src={acervo.image} alt="" fill sizes="(min-width: 1024px) 520px, 90vw" className="media-zoom object-cover" />
          </Link>

          <div className="lg:col-span-7">
            <h2 id="acervo-title" className="font-expanded text-display font-extrabold">
              {acervo.nome}
            </h2>
            <p className="mt-6 max-w-[56ch] text-lede text-mist">{acervo.descricao}</p>

            <ol className="mt-10 border-t border-line-night">
              {modules.map((m) => {
                const [num, name] = m.split(" · ")
                return (
                  <li key={m} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-b border-line-night py-4">
                    <span className="text-sm font-semibold text-mist-2">Dossiê {num}</span>
                    <span className="text-lg font-semibold">{name}</span>
                  </li>
                )
              })}
            </ol>

            <p className="mt-8 text-mist">
              Quem ensina: <span className="withheld w-40" role="img" aria-label="nome omitido" />. O foco está no método,
              não em quem ensina.
            </p>

            <div className="mt-10">
              <p className="tabular">
                <span className="text-mist">{acervo.parcelado.split(" de ")[0]} de </span>
                <span className="font-expanded text-title font-extrabold whitespace-nowrap">
                  {acervo.parcelado.split(" de ").slice(1).join(" de ")}
                </span>
                <span className="mt-1 block text-sm text-mist-2">Cartão ou Pix · 7 dias de garantia</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={acervo.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-signal btn-lg">
                  Comprar agora
                  <ArrowUpRight aria-hidden />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
                <Link href={`/academy/${acervo.id}`} className="btn btn-line btn-lg">
                  Ver o que tem dentro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== DEPOIMENTOS ======================= */}
      <section className="bg-snow-2 text-ink" aria-labelledby="depoimentos-title">
        <div className="container-site pt-20 md:pt-28">
          <SectionHeading
            id="depoimentos-title"
            title="Quem comprou, aplicou."
            description="Capturas reais de mensagens de alunos. Os nomes foram ocultados."
          />
        </div>
        <ul className="scroller flex gap-5 overflow-x-auto pb-20 md:pb-28 rail">
          {TESTIMONIALS.map((t) => (
            <li key={t.src} className="relative aspect-[9/16] w-[62vw] max-w-[260px] shrink-0 overflow-hidden bg-snow sm:w-[240px]">
              <Image src={t.src} alt={t.alt} fill sizes="260px" className="object-cover" />
            </li>
          ))}
        </ul>
      </section>

      {/* ========================== ARQUIVO ========================= */}
      <section className="bg-snow text-ink" aria-labelledby="arquivo-title">
        <div className="container-site py-20 md:py-28">
          <SectionHeading id="arquivo-title" title="Publicado recentemente" href="/artigos" linkLabel="Todos os artigos" />
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-20 grid gap-8 border-t-2 border-ink pt-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="font-expanded text-heading font-extrabold">Uma análise por semana no seu e-mail.</h2>
              <p className="mt-2 text-ink-2">Casos, métodos e leituras selecionadas. Sem ruído.</p>
            </div>
            <div className="lg:col-span-6">
              <NewsletterInline />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
