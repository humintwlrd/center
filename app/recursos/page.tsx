import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { NewsletterInline } from "@/components/site/newsletter-inline"
import { SplitSection } from "@/components/site/split-section"
import { BIBLIOGRAPHY, GLOSSARY, QUICK_GUIDES } from "@/lib/content/resources"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Recursos: glossário, bibliografia e guias",
  description:
    "Recursos para estudar, pesquisar e aplicar HUMINT com mais rigor: glossário, bibliografia recomendada e guias rápidos.",
  path: "/recursos",
})

export default function RecursosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Toolkit · Recursos"
        title="Recursos para estudar, pesquisar e aplicar HUMINT com mais rigor."
        lede="Guias rápidos, glossário e bibliografia de referência. Material atualizado periodicamente."
        breadcrumbs={[{ label: "Recursos", href: "/recursos" }]}
      >
        <nav aria-label="Nesta página" className="flex flex-wrap gap-2">
          {[
            { href: "#guias", label: "Guias rápidos" },
            { href: "#glossario", label: "Glossário" },
            { href: "#bibliografia", label: "Bibliografia" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="btn btn-outline btn-sm">
              {l.label}
              <ArrowDown aria-hidden />
            </Link>
          ))}
        </nav>
      </PageHeader>

      <SplitSection
        id="guias"
        eyebrow="Guias rápidos"
        title="Para começar com o pé direito."
        intro="Roteiros curtos para aplicar hoje, com passos numerados."
        tone="strong"
        sticky
      >
        <div className="flex flex-col gap-px border border-line bg-line">
          {QUICK_GUIDES.map((g, gi) => {
            const id = g.href.split("#")[1]
            return (
              <article key={g.href} id={id} className="bg-paper-strong p-6 md:p-8">
                <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-muted">
                  Guia {String(gi + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-display-sm font-medium text-ink">{g.title}</h3>
                <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-muted">{g.summary}</p>
                <ol className="mt-6 grid gap-x-8 border-t border-line md:grid-cols-2">
                  {g.steps.map((step, index) => (
                    <li
                      key={step}
                      className="grid grid-cols-[2rem_1fr] gap-2 border-b border-line py-3 text-[0.9375rem] leading-relaxed text-ink-soft"
                    >
                      <span className="pt-0.5 font-mono text-[0.6875rem] tracking-[0.14em] text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            )
          })}
        </div>
      </SplitSection>

      <SplitSection id="glossario" eyebrow="Glossário" title="Termos essenciais." sticky>
        <dl className="grid gap-x-10 md:grid-cols-2">
          {GLOSSARY.map((g) => (
            <div key={g.term} className="border-t border-line py-6">
              <dt className="font-display text-xl font-medium text-ink">{g.term}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{g.definition}</dd>
            </div>
          ))}
        </dl>
      </SplitSection>

      <SplitSection id="bibliografia" eyebrow="Bibliografia" title="Leituras recomendadas." tone="strong" sticky>
        <ul className="border-t border-ink">
          {BIBLIOGRAPHY.map((b) => (
            <li key={b.title} className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:gap-8">
              <p className="eyebrow md:col-span-4 md:pt-1.5">{b.author}</p>
              <div className="md:col-span-8">
                <h3 className="font-display text-xl font-medium italic text-ink">{b.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{b.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </SplitSection>

      <section className="surface-deep" aria-labelledby="news-title">
        <div className="container-editorial grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <p className="kicker">Newsletter</p>
            <h2 id="news-title" className="mt-4 font-display text-display-lg font-medium text-fog">
              Avise quando novos recursos forem publicados.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <NewsletterInline variant="dark" />
          </div>
        </div>
      </section>
    </>
  )
}
