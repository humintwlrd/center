import type { Metadata } from "next"
import { ContactForm } from "@/components/site/contact-form"
import { PageHeader } from "@/components/site/page-header"
import { SITE } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Contato",
  description:
    "Fale com a equipe editorial do Mundo da HUMINT: imprensa, parcerias, convites e dúvidas gerais.",
  path: "/contato",
})

const CHANNELS = [
  {
    label: "Imprensa",
    body: "Se você está em prazo de matéria, indique isso no assunto. Citações pedem aprovação prévia da equipe editorial.",
  },
  {
    label: "Parcerias",
    body: "Avaliamos parcerias que respeitem a linha editorial. Não publicamos conteúdo patrocinado disfarçado de editorial.",
  },
]

const FAQ = [
  {
    q: "Vocês aceitam pautas?",
    a: "Sim, com critério editorial. Envie um resumo claro do que quer apresentar e qual o ângulo proposto.",
  },
  {
    q: "Posso usar conteúdo do site?",
    a: "Sim, com atribuição clara e link. Para uso comercial ou reprodução integral, fale com a equipe editorial.",
  },
  {
    q: "Vocês fazem palestras e treinamentos in-company?",
    a: "Em breve. Por enquanto, registre o interesse pelo formulário e entraremos em contato quando o programa abrir.",
  },
]

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Fale com a equipe editorial."
        lede="Imprensa, parcerias, convites e dúvidas gerais. Respondemos em até alguns dias úteis."
        breadcrumbs={[{ label: "Contato", href: "/contato" }]}
      />

      <section className="border-b border-line bg-paper-strong" aria-label="Formulário de contato">
        <div className="container-editorial grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-4">
            <div className="rule-top pt-4">
              <p className="eyebrow">E-mail</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 inline-block break-all font-display text-display-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
              >
                {SITE.email}
              </a>
              <p className="mt-2 text-sm text-ink-muted">Para a maioria dos casos, prefira o formulário.</p>
            </div>
            <dl className="mt-10 flex flex-col gap-6">
              {CHANNELS.map((c) => (
                <div key={c.label} className="border-t border-line pt-5">
                  <dt className="eyebrow-brand">{c.label}</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{c.body}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-paper" aria-labelledby="faq-title">
        <div className="container-editorial py-16 md:py-20">
          <p className="kicker">Perguntas frequentes</p>
          <h2 id="faq-title" className="mt-5 font-display text-display-lg font-medium text-ink">
            Antes de escrever.
          </h2>
          <dl className="mt-10 grid gap-8 md:grid-cols-3">
            {FAQ.map((f) => (
              <div key={f.q} className="border-t border-ink pt-5">
                <dt className="font-display text-xl font-medium text-ink">{f.q}</dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
