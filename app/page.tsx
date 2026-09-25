import Link from "next/link"
import Image, { getImageProps } from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"
import { getArticleBySlug, getLatestArticles, type Article } from "@/lib/content/articles"
import { formatDateBR } from "@/lib/format"
import { PRODUCTS } from "@/lib/products"
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

/** Foto do caso de Pequim: retrato no celular, paisagem a partir de 768px. */
function heroSources() {
  const common = { alt: "", fill: true, sizes: "100vw" }
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "/images/editorial/cia-beijing-desktop.png" })
  const { props: mobile } = getImageProps({
    ...common,
    src: "/images/editorial/cia-beijing-mobile.png",
    fetchPriority: "high",
    loading: "eager",
  })
  return { desktop, mobile }
}

function chapterNumber(i: number) {
  return String(i + 1).padStart(2, "0")
}

function bySlugs(slugs: string[]) {
  return slugs.map((slug) => getArticleBySlug(slug)).filter(Boolean) as Article[]
}

export default function HomePage() {
  const [lead, ...chapters] = bySlugs(CASE_SLUGS)
  const shown = new Set(CASE_SLUGS)
  const latest = getLatestArticles(14)
    .filter((a) => !shown.has(a.slug))
    .slice(0, 8)
  const hero = heroSources()

  const acervo = PRODUCTS.find((p) => p.destaque) ?? PRODUCTS[0]
  const modules = (acervo.ementa ?? []).filter((m) => m.includes("·"))

  return (
    <>
      {/* ========================= ABERTURA ========================= */}
      <section className="night relative isolate overflow-hidden" aria-labelledby="home-title">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[64svh] md:inset-y-0 md:h-auto">
          <picture>
            <source media="(min-width: 768px)" srcSet={hero.desktop} sizes="100vw" />
            <img
              {...hero.mobile}
              alt=""
              className="object-cover object-[30%_45%] opacity-80 md:object-[70%_35%] md:opacity-70"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-night/30 via-night/45 to-night md:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-night via-night/85 to-night/10 md:block" />
          <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-night to-transparent md:block" />
        </div>

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
            Mais de 350 análises publicadas. Credenciais no seu e-mail em minutos.
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

        {lead && (
          <article className="group relative isolate">
            <Link href={`/artigos/${lead.slug}`} className="block">
              <div className="relative h-[78svh] max-h-[780px] min-h-[520px] overflow-hidden bg-night-3">
                <Image
                  src={lead.heroImage}
                  alt=""
                  fill
                  sizes="100vw"
                  className="media-zoom object-cover object-[45%_25%]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/0" />
              </div>
              <div className="absolute inset-x-0 bottom-0">
                <div className="container-site grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 pb-12 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-x-4 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-x-8 md:pb-16">
                  <span className="tabular font-expanded text-heading font-extrabold text-mist-2 md:text-title">01</span>
                  <div>
                    <h3 className="max-w-[22ch] font-expanded text-heading font-extrabold sm:text-title md:text-display">{lead.title}</h3>
                    <p className="mt-5 max-w-[58ch] text-lede text-mist">{lead.description}</p>
                    <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <span className="inline-flex items-center gap-2 font-semibold">
                        Ler o caso
                        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-mist-2">{lead.readingTime} de leitura</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        )}

        <ol className="container-site pb-20 md:pb-28">
          {chapters.map((article, i) => (
            <li key={article.slug} className="border-b border-line-night">
              <Link
                href={`/artigos/${article.slug}`}
                className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 py-10 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-x-4 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,22rem)] md:gap-x-8 md:py-12"
              >
                <span className="tabular font-expanded text-heading font-extrabold text-mist-2 md:text-title">
                  {chapterNumber(i + 1)}
                </span>
                <div>
                  <h3 className="font-expanded text-heading font-extrabold transition-colors group-hover:text-signal md:text-title">
                    {article.title}
                  </h3>
                  <p className="mt-3 max-w-[60ch] leading-relaxed text-mist line-clamp-3">{article.description}</p>
                  <p className="mt-4 text-sm text-mist-2">{article.readingTime} de leitura</p>
                </div>
                <div className="relative col-start-2 mt-6 aspect-[16/10] overflow-hidden bg-night-3 md:col-start-3 md:mt-0">
                  <Image
                    src={article.heroImage}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 352px, 80vw"
                    className="media-zoom object-cover grayscale-[40%] transition-[filter] duration-700 group-hover:grayscale-0"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ol>
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
          <ol className="grid gap-x-12 md:grid-cols-2">
            {latest.map((article) => (
              <li key={article.slug} className="border-t border-line">
                <Link href={`/artigos/${article.slug}`} className="group block py-6">
                  <h3 className="text-lg font-bold leading-snug transition-colors group-hover:text-signal" style={{ fontStretch: "110%" }}>
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-3">
                    {article.categoryLabel}
                    <span aria-hidden> · </span>
                    <time dateTime={article.publishedAt}>{formatDateBR(article.publishedAt)}</time>
                    <span aria-hidden> · </span>
                    {article.readingTime}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
