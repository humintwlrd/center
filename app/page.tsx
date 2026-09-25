import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ArticleCard } from "@/components/site/article-card"
import { SectionHeading } from "@/components/site/section-heading"
import { NewsletterInline } from "@/components/site/newsletter-inline"
import {
  ARTICLES,
  getArticleBySlug,
  getArticlesByCategory,
  getLatestArticles,
  type Article,
} from "@/lib/content/articles"
import { categories } from "@/lib/content/categories"
import { PRODUCTS } from "@/lib/products"
import { formatDateBR } from "@/lib/format"

/* ------------------------------------------------------------------ */
/* Curadoria editorial                                                 */
/* ------------------------------------------------------------------ */

type CoverStory = {
  slug: string
  category: string
  title: string
  subtitle: string
  ctaLabel: string
  image: string
}

const COVER: CoverStory = {
  slug: "como-china-desmantelou-rede-cia-contrainteligencia",
  category: "Contrainteligência",
  title: "A rede que a CIA perdeu em Pequim",
  subtitle: "O caso que reescreveu o manual de contrainteligência hostil.",
  ctaLabel: "Ler a análise",
  image: "/images/editorial/cia-beijing-desktop.png",
}

const ALSO_ON_COVER: CoverStory[] = [
  {
    slug: "engenharia-social-ponto-vulneravel-humano",
    category: "Engenharia social",
    title: "O ponto vulnerável é humano",
    subtitle: "Como a informação é entregue antes de ser roubada.",
    ctaLabel: "Ver caso",
    image: "/images/editorial/social-engineering-desktop.png",
  },
  {
    slug: "validacao-de-fontes-humanas",
    category: "Método",
    title: "Validar uma fonte humana",
    subtitle: "Credibilidade, motivação, consistência e registro.",
    ctaLabel: "Ver protocolo",
    image: "/images/editorial/source-validation-desktop.png",
  },
]

const FEATURED_SLUGS = [
  "humint-e-osint-complementaridade-e-limites",
  "unidade-29155-operacoes-encoberto-gru",
  "caso-sergei-skripal-recrutamento-duplo-agente",
  "o-que-humint-realmente-exige",
  "guerra-golfo-1991-humint-desinformacao",
]

const MOST_READ_SLUGS = [
  "como-china-desmantelou-rede-cia-contrainteligencia",
  "engenharia-social-ponto-vulneravel-humano",
  "psicologia-gaslighting-alterar-percepcao",
  "caso-sergei-skripal-recrutamento-duplo-agente",
  "validacao-de-fontes-humanas",
]

const ACADEMY_TOPICS = [
  {
    title: "Comportamento humano",
    description: "Padrões, vieses e gatilhos que tornam pessoas previsíveis.",
  },
  {
    title: "Comunicação e influência",
    description: "Rapport e influência com método, sem manipular às cegas.",
  },
  {
    title: "Elicitação e fontes humanas",
    description: "Obter informação sem a pergunta óbvia; recrutar e validar.",
  },
  {
    title: "Contrainteligência e OPSEC",
    description: "Proteger operações e reconhecer quando algo foi comprometido.",
  },
  {
    title: "OSINT na prática",
    description: "Investigar fontes abertas e conectar pessoas, bens e vínculos.",
  },
  {
    title: "Tradecraft e operação",
    description: "Cobertura, comunicação segura e disciplina operacional.",
  },
]

function bySlugs(slugs: string[]) {
  return slugs.map((slug) => getArticleBySlug(slug)).filter(Boolean) as Article[]
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const coverArticle = getArticleBySlug(COVER.slug)
  const onCover = new Set([COVER.slug, ...ALSO_ON_COVER.map((s) => s.slug)])

  const featured = bySlugs(FEATURED_SLUGS).filter((a) => !onCover.has(a.slug))
  const lead = featured[0] ?? ARTICLES.find((a) => !onCover.has(a.slug))!
  const secondary = featured.slice(1, 5)
  const mostRead = bySlugs(MOST_READ_SLUGS)

  const shown = new Set([...onCover, lead.slug, ...secondary.map((a) => a.slug)])
  const latest = getLatestArticles(12)
    .filter((a) => !shown.has(a.slug))
    .slice(0, 6)

  const themes = categories
    .map((c) => ({ ...c, count: getArticlesByCategory(c.slug).length }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 9)

  const flagship = PRODUCTS.find((p) => p.destaque) ?? PRODUCTS[0]
  const [parcelaLabel, ...parcelaRest] = flagship.parcelado.split(" de ")

  return (
    <>
      {/* ============================ CAPA ============================ */}
      <section className="surface-deep" aria-labelledby="cover-title">
        <div className="container-editorial pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-end lg:col-span-5 lg:pb-2">
              <p className="kicker">Capa · {COVER.category}</p>
              <h1 id="cover-title" className="mt-6 font-display text-display-2xl font-medium text-fog">
                <Link href={`/artigos/${COVER.slug}`} className="transition-colors hover:text-white">
                  {COVER.title}
                </Link>
              </h1>
              <p className="mt-6 max-w-[42ch] text-lede text-fog-muted">{COVER.subtitle}</p>
              {coverArticle && (
                <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-fog-muted">
                  {formatDateBR(coverArticle.publishedAt)}
                  <span aria-hidden className="mx-2 text-line-dark">
                    /
                  </span>
                  {coverArticle.readingTime} de leitura
                </p>
              )}
              <div className="mt-8">
                <Link href={`/artigos/${COVER.slug}`} className="btn btn-primary btn-lg">
                  {COVER.ctaLabel}
                  <ArrowRight aria-hidden />
                </Link>
              </div>
            </div>

            <Link
              href={`/artigos/${COVER.slug}`}
              tabIndex={-1}
              aria-hidden
              className="group relative order-first block aspect-[4/3] overflow-hidden bg-deep-3 lg:order-none lg:col-span-7"
            >
              <Image
                src={COVER.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 760px, 100vw"
                className="media-zoom object-cover"
                style={{ objectPosition: "center 40%" }}
              />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 border-t border-line-dark pt-8 md:grid-cols-2 md:gap-10">
            {ALSO_ON_COVER.map((story) => (
              <article
                key={story.slug}
                className="group grid grid-cols-[112px_1fr] gap-5 sm:grid-cols-[160px_1fr]"
              >
                <Link
                  href={`/artigos/${story.slug}`}
                  tabIndex={-1}
                  aria-hidden
                  className="relative block aspect-[4/3] overflow-hidden bg-deep-3"
                >
                  <Image src={story.image} alt="" fill sizes="160px" className="media-zoom object-cover" />
                </Link>
                <div className="min-w-0">
                  <p className="eyebrow-brand">{story.category}</p>
                  <h2 className="mt-2 font-display text-display-sm font-medium text-fog">
                    <Link
                      href={`/artigos/${story.slug}`}
                      className="transition-colors group-hover:text-brand-bright"
                    >
                      {story.title}
                    </Link>
                  </h2>
                  <p className="mt-2 hidden text-sm leading-relaxed text-fog-muted sm:block">
                    {story.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= DESTAQUES ========================== */}
      <section className="bg-paper" aria-labelledby="featured-title">
        <div className="container-editorial py-14 md:py-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <SectionHeading
                id="featured-title"
                eyebrow="Destaques"
                title="Análises essenciais"
                href="/artigos"
                linkLabel="Ver arquivo"
              />
              <ArticleCard article={lead} variant="lead" />
              <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
                {secondary.map((article) => (
                  <ArticleCard key={article.slug} article={article} variant="row" />
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4" aria-labelledby="most-read-title">
              <div className="lg:sticky lg:top-24">
                <header className="rule-top mb-2 pt-4">
                  <h2 id="most-read-title" className="font-display text-display-sm font-medium">
                    Mais lidas
                  </h2>
                </header>
                <ol>
                  {mostRead.map((article, index) => (
                    <li key={article.slug} className="border-b border-line">
                      <Link
                        href={`/artigos/${article.slug}`}
                        className="group grid grid-cols-[2.5rem_1fr] gap-3 py-5"
                      >
                        <span className="font-display text-3xl font-medium leading-none text-line-strong transition-colors group-hover:text-brand">
                          {index + 1}
                        </span>
                        <span>
                          <span className="block font-display text-lg font-medium leading-snug text-ink transition-colors group-hover:text-brand">
                            {article.title}
                          </span>
                          <span className="mt-2 block font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-muted">
                            {article.categoryLabel} · {article.readingTime}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>

                <div className="mt-10 border border-line bg-paper-strong p-6">
                  <p className="kicker">Newsletter</p>
                  <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                    Uma análise por semana, sem ruído.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Casos, métodos e leituras selecionadas direto no seu e-mail.
                  </p>
                  <div className="mt-5">
                    <NewsletterInline />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ======================= ARQUIVO RECENTE ====================== */}
      <section className="border-t border-line bg-paper-strong" aria-labelledby="latest-title">
        <div className="container-editorial py-14 md:py-20">
          <SectionHeading
            id="latest-title"
            eyebrow="Últimas publicadas"
            title="Arquivo recente"
            href="/artigos"
            linkLabel="Ver todas"
          />
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <Link href="/artigos" className="btn btn-outline mt-12 w-full sm:hidden">
            Ver todos os artigos
            <ArrowRight aria-hidden />
          </Link>
        </div>
      </section>

      {/* =========================== TEMAS =========================== */}
      <section className="border-t border-line bg-paper" aria-labelledby="themes-title">
        <div className="container-editorial py-14 md:py-20">
          <SectionHeading
            id="themes-title"
            eyebrow="Índice"
            title="Explore por tema"
            description="Do comportamento humano à geopolítica: cada tema reúne casos, métodos e análises."
            href="/artigos"
            linkLabel="Todos os artigos"
          />
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme, i) => (
              <li key={theme.slug} className="bg-paper">
                <Link
                  href={`/artigos?categoria=${theme.slug}`}
                  className="group flex h-full flex-col gap-3 p-6 transition-colors hover:bg-paper-strong"
                >
                  <span className="flex items-baseline justify-between gap-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      {theme.count} {theme.count === 1 ? "texto" : "textos"}
                    </span>
                  </span>
                  <span className="font-display text-display-sm font-medium text-ink transition-colors group-hover:text-brand">
                    {theme.name}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-muted">{theme.shortDescription}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================== ACADEMY ========================== */}
      <section className="surface-deep" aria-labelledby="academy-title">
        <div className="container-editorial py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="kicker">Mundo da HUMINT Academy</p>
              <h2 id="academy-title" className="mt-5 font-display text-display-xl font-medium text-fog">
                Da leitura à operação.
              </h2>
              <p className="mt-5 max-w-[54ch] text-lede text-fog-muted">
                O que você lê aqui vira método na Academy: cursos e dossiês para observar,
                conduzir conversas, validar fontes e proteger operações.
              </p>

              <ol className="mt-12 grid gap-px border-y border-line-dark bg-line-dark sm:grid-cols-2">
                {ACADEMY_TOPICS.map((topic, i) => (
                  <li key={topic.title} className="grid grid-cols-[2.25rem_1fr] gap-3 bg-deep py-5 sm:px-5">
                    <span className="pt-1 font-mono text-[0.6875rem] tracking-[0.14em] text-brand-bright">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-lg font-medium text-fog">{topic.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-fog-muted">
                        {topic.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <article className="group border border-line-dark bg-deep-2 lg:sticky lg:top-24">
                <Link
                  href={`/academy/${flagship.id}`}
                  tabIndex={-1}
                  aria-hidden
                  className="relative block aspect-[4/3] overflow-hidden bg-deep-3"
                >
                  <Image
                    src={flagship.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="media-zoom object-cover object-top"
                  />
                  {flagship.badge && (
                    <span className="absolute left-4 top-4 bg-brand px-2.5 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-on-brand">
                      {flagship.badge}
                    </span>
                  )}
                </Link>
                <div className="p-6 md:p-8">
                  <p className="eyebrow">{flagship.tipo}</p>
                  <h3 className="mt-2 font-display text-display-sm font-medium text-fog">
                    <Link href={`/academy/${flagship.id}`} className="transition-colors hover:text-white">
                      {flagship.nome}
                    </Link>
                  </h3>
                  <p className="mt-5 flex items-baseline gap-2">
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-fog-muted">
                      {parcelaLabel} de
                    </span>
                    <span className="font-display text-3xl font-medium text-fog">
                      {parcelaRest.join(" de ")}
                    </span>
                  </p>
                  <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-fog-muted">
                    Cartão · Pix · Acesso imediato
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a
                      href={flagship.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Comprar agora
                    </a>
                    <Link href="/academy" className="btn btn-outline">
                      Ver a Academy
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
