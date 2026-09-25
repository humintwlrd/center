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
        title="Métodos, fundamentos e boas práticas de HUMINT."
        lede="Referências para quem investiga, verifica ou decide com base em fontes humanas. Cada tema traz definições, critérios práticos e limites explícitos."
        breadcrumbs={[{ label: "Métodos", href: "/metodos" }]}
        aside={
          <div className="relative aspect-[4/3] overflow-hidden bg-snow-2">
            <Image
              src="/images/hero-metodos.jpg"
              alt="Caderno aberto com diagramas e anotações manuscritas sobre método de pesquisa."
              fill
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        {startHere && (
          <Link href={`#${startHere.slug}`} className="btn btn-solid">
            Comece por {startHere.title}
            <ArrowRight aria-hidden />
          </Link>
        )}
      </PageHeader>

      <div className="border-t border-line bg-snow text-ink">
        <div className="container-site flex flex-col gap-20 py-16 md:gap-24 md:py-24">
          {METHOD_GROUPS.map((group, gi) => {
            const items = METHODS.filter((m) => m.group === group)
            return (
              <section key={group} aria-labelledby={`grupo-${gi}`} className="grid gap-8 lg:grid-cols-12 lg:gap-14">
                <h2 id={`grupo-${gi}`} className="font-expanded text-title font-extrabold lg:col-span-4">
                  {group}
                </h2>
                <div className="lg:col-span-8">
                  {items.map((m) => {
                    const more = FURTHER_READING[m.slug]
                    return (
                      <article key={m.slug} id={m.slug} className="grid gap-3 border-t-2 border-ink py-7 md:grid-cols-12 md:gap-8">
                        <div className="md:col-span-8">
                          <h3 className="font-expanded text-heading font-extrabold">
                            {m.title}
                            {m.startHere && (
                              <span className="ml-3 inline-block translate-y-[-0.2em] bg-ink px-2 py-0.5 align-middle text-sm font-bold text-snow" style={{ fontStretch: "100%" }}>
                                Comece aqui
                              </span>
                            )}
                          </h3>
                          <p className="mt-3 text-lg leading-relaxed text-ink-2">{m.description}</p>
                          <p className="mt-2 text-sm text-ink-3">Nível: {m.level}</p>
                        </div>
                        {more && (
                          <div className="md:col-span-4 md:pt-2 md:text-right">
                            <Link href={more.href} className="link-more">
                              {more.label}
                              <ArrowRight aria-hidden />
                            </Link>
                          </div>
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

      <AcademyCta
        title="Do método ao protocolo."
        description="Os dossiês da Academy transformam estes fundamentos em protocolos, checklists e exercícios práticos."
      />
    </>
  )
}
