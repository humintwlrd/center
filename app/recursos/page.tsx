import type { Metadata } from "next"
import Link from "next/link"
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
        title="Recursos para estudar e aplicar HUMINT com mais rigor."
        lede="Guias rápidos, glossário e bibliografia de referência, atualizados periodicamente."
        breadcrumbs={[{ label: "Recursos", href: "/recursos" }]}
      >
        <nav aria-label="Nesta página" className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            { href: "#guias", label: "Guias rápidos" },
            { href: "#glossario", label: "Glossário" },
            { href: "#bibliografia", label: "Bibliografia" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="link-more">
              {l.label}
            </Link>
          ))}
        </nav>
      </PageHeader>

      <SplitSection id="guias" title="Guias rápidos." intro="Roteiros curtos para aplicar hoje, passo a passo." tone="snow-2" sticky>
        <div className="flex flex-col gap-14">
          {QUICK_GUIDES.map((g) => {
            const id = g.href.split("#")[1]
            return (
              <article key={g.href} id={id}>
                <h3 className="font-expanded text-heading font-extrabold">{g.title}</h3>
                <p className="mt-3 max-w-[60ch] text-lg leading-relaxed text-ink-2">{g.summary}</p>
                <ol className="mt-6 list-decimal pl-6 marker:font-bold marker:text-ink">
                  {g.steps.map((step) => (
                    <li key={step} className="border-t border-line py-3 pl-2 text-lg leading-relaxed text-ink-2">
                      {step}
                    </li>
                  ))}
                </ol>
              </article>
            )
          })}
        </div>
      </SplitSection>

      <SplitSection id="glossario" title="Glossário." sticky>
        <dl>
          {GLOSSARY.map((g) => (
            <div key={g.term} className="border-t-2 border-ink py-6">
              <dt className="font-expanded text-heading font-extrabold">{g.term}</dt>
              <dd className="mt-2 max-w-[62ch] text-lg leading-relaxed text-ink-2">{g.definition}</dd>
            </div>
          ))}
        </dl>
      </SplitSection>

      <SplitSection id="bibliografia" title="Leituras recomendadas." tone="snow-2" sticky>
        <ul>
          {BIBLIOGRAPHY.map((b) => (
            <li key={b.title} className="border-t border-line py-6">
              <h3 className="text-xl font-bold italic">{b.title}</h3>
              <p className="mt-1 font-semibold text-ink-3">{b.author}</p>
              <p className="mt-2 max-w-[62ch] leading-relaxed text-ink-2">{b.note}</p>
            </li>
          ))}
        </ul>
      </SplitSection>

      <section className="night" aria-labelledby="news-title">
        <div className="container-site grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          <h2 id="news-title" className="font-expanded text-title font-extrabold lg:col-span-6">
            Receba os próximos recursos por e-mail.
          </h2>
          <div className="lg:col-span-6">
            <NewsletterInline />
          </div>
        </div>
      </section>
    </>
  )
}
