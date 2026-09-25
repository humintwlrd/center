import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { AcademyCta } from "@/components/site/academy-cta"
import { METHODS, METHOD_GROUPS } from "@/lib/content/methods"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Métodos, fundamentos e boas práticas de HUMINT",
  description:
    "Biblioteca viva do Mundo da HUMINT: fundamentos, entrevista, validação, ética e a relação com OSINT. Aprenda com rigor, clareza e responsabilidade.",
  path: "/metodos",
  image: "/images/hero-metodos.jpg",
})

/** Leitura de aprofundamento de cada método. */
const FURTHER_READING: Record<string, { href: string; label: string }> = {
  "fundamentos-de-humint": { href: "/humint", label: "Ler o guia de fundamentos" },
  "fontes-humanas-e-validacao": { href: "/artigos/validacao-de-fontes-humanas", label: "Ler o protocolo" },
  "entrevista-e-elicitacao": { href: "/artigos?categoria=metodos-e-tradecraft", label: "Ver artigos de método" },
  "etica-e-limites": { href: "/principios-editoriais", label: "Ler os princípios" },
  "humint-e-osint": { href: "/artigos/humint-e-osint-complementaridade-e-limites", label: "Ler a análise" },
  "boas-praticas-de-pesquisa": { href: "/artigos?categoria=metodos-e-tradecraft", label: "Ver artigos de método" },
  "leitura-de-contexto": { href: "/artigos?categoria=psicologia-comportamental", label: "Ver artigos de psicologia" },
  "ciclo-de-inteligencia-aplicado": { href: "/artigos?categoria=fundamentos-de-humint", label: "Ver fundamentos" },
}

export default function MetodosPage() {
  const startHere = METHODS.find((m) => m.startHere)

  return (
    <>
      <PageHeader
        eyebrow="Métodos · Biblioteca viva"
        title="Métodos, fundamentos e boas práticas de HUMINT."
        lede="Referências de método para quem investiga, verifica ou decide com base em fontes humanas. Cada tema inclui definições, critérios práticos e limites explícitos."
        breadcrumbs={[{ label: "Métodos", href: "/metodos" }]}
        aside={
          <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
            <Image
              src="/images/hero-metodos.jpg"
              alt="Caderno aberto com diagramas e anotações manuscritas sobre método de pesquisa."
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        {startHere && (
          <Link href={`#${startHere.slug}`} className="btn btn-ink">
            Comece por aqui: {startHere.title}
            <ArrowRight aria-hidden />
          </Link>
        )}
      </PageHeader>

      <div className="bg-paper">
        <div className="container-editorial flex flex-col gap-20 py-16 md:py-24">
          {METHOD_GROUPS.map((group, gi) => {
            const items = METHODS.filter((m) => m.group === group)
            return (
              <section key={group} aria-labelledby={`grupo-${gi}`} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <header className="lg:col-span-3">
                  <div className="rule-top pt-4 lg:sticky lg:top-28">
                    <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-muted">
                      {String(gi + 1).padStart(2, "0")}
                    </p>
                    <h2 id={`grupo-${gi}`} className="mt-2 font-display text-display-md font-medium text-ink">
                      {group}
                    </h2>
                  </div>
                </header>
                <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:col-span-9">
                  {items.map((m, idx) => {
                    const more = FURTHER_READING[m.slug]
                    const spanLast = items.length % 2 === 1 && idx === items.length - 1
                    return (
                      <article
                        key={m.slug}
                        id={m.slug}
                        className={`flex flex-col p-6 md:p-8 ${m.startHere ? "surface-deep" : "bg-paper-strong"} ${spanLast ? "md:col-span-2" : ""}`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="eyebrow">{m.level}</span>
                          {m.startHere && (
                            <span className="bg-brand px-2 py-0.5 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-on-brand">
                              Comece aqui
                            </span>
                          )}
                        </div>
                        <h3 className="mt-4 font-display text-display-sm font-medium text-tone">{m.title}</h3>
                        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-tone-muted">
                          {m.description}
                        </p>
                        {more && (
                          <Link href={more.href} className="link-arrow mt-6">
                            {more.label}
                            <ArrowRight aria-hidden />
                          </Link>
                        )}
                      </article>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>

      <section className="border-t border-line bg-paper-strong" aria-labelledby="reading-title">
        <div className="container-editorial grid gap-8 py-14 md:grid-cols-12 md:items-end md:py-16">
          <div className="md:col-span-8">
            <p className="kicker">Leitura recomendada</p>
            <h2 id="reading-title" className="mt-4 font-display text-display-md font-medium text-ink">
              Comece pelos artigos editoriais.
            </h2>
            <p className="mt-3 max-w-[60ch] text-[0.9375rem] leading-relaxed text-ink-muted">
              Enquanto a biblioteca de métodos cresce, os artigos editoriais já cobrem fundamentos, validação de
              fontes e a relação entre HUMINT e OSINT.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/artigos" className="btn btn-outline">
              Ir para os artigos
              <ArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <AcademyCta
        title="Método aplicado, passo a passo."
        description="Os cursos e dossiês da Academy transformam estes fundamentos em protocolos, checklists e exercícios práticos."
      />
    </>
  )
}
