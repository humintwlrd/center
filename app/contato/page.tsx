import type { Metadata } from "next"
import { ContactForm } from "@/components/site/contact-form"
import { PageHeader } from "@/components/site/page-header"
import { SITE } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Contato",
  description: "Fale com a equipe editorial do Mundo da HUMINT: imprensa, parcerias, convites e dúvidas gerais.",
  path: "/contato",
})

const CHANNELS = [
  {
    label: "Imprensa",
    body: "Em prazo de matéria, indique isso no assunto. Citações pedem aprovação prévia da equipe editorial.",
  },
  {
    label: "Parcerias",
    body: "Avaliamos parcerias que respeitem a linha editorial. Não publicamos conteúdo patrocinado disfarçado de editorial.",
  },
]

const FAQ = [
  { q: "Vocês aceitam pautas?", a: "Sim, com critério editorial. Envie um resumo claro do que quer apresentar e o ângulo proposto." },
  { q: "Posso usar conteúdo do site?", a: "Sim, com atribuição clara e link. Para uso comercial ou reprodução integral, fale com a equipe." },
  { q: "Vocês fazem palestras e treinamentos in-company?", a: "Em breve. Por enquanto, registre o interesse pelo formulário e avisaremos quando o programa abrir." },
]

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        title="Fale com a equipe editorial."
        lede="Imprensa, parcerias, convites e dúvidas gerais. Respondemos em poucos dias úteis."
        breadcrumbs={[{ label: "Contato", href: "/contato" }]}
      />

      <section className="border-t border-line bg-snow text-ink" aria-label="Formulário de contato">
        <div className="container-site grid gap-14 py-16 md:py-20 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <p className="text-ink-3">E-mail</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 inline-block break-all font-expanded text-lg font-extrabold underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
            >
              {SITE.email}
            </a>
            <dl className="mt-10">
              {CHANNELS.map((c) => (
                <div key={c.label} className="border-t border-line py-5">
                  <dt className="font-bold">{c.label}</dt>
                  <dd className="mt-1 leading-relaxed text-ink-2">{c.body}</dd>
                </div>
              ))}
            </dl>
          </aside>
          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-snow-2 text-ink" aria-labelledby="faq-title">
        <div className="container-site py-16 md:py-20">
          <h2 id="faq-title" className="font-expanded text-title font-extrabold">
            Antes de escrever.
          </h2>
          <dl className="mt-10 grid gap-x-10 md:grid-cols-3">
            {FAQ.map((f) => (
              <div key={f.q} className="border-t-2 border-ink py-6">
                <dt className="text-lg font-bold">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
