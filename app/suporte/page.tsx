import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { SupportForm } from "@/components/site/support-form"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Suporte",
  description:
    "Central de suporte do Mundo da HUMINT: envie sua solicitação sobre acesso, conteúdo, pagamentos ou problemas técnicos.",
  path: "/suporte",
})

const HELP = [
  {
    q: "Não consigo acessar minha conta.",
    a: "Verifique o e-mail usado no cadastro e confira a caixa de spam. Se o problema persistir, descreva o que acontece pelo formulário.",
  },
  {
    q: "Encontrei um erro em um artigo.",
    a: "Agradecemos a correção. Informe o título do artigo e o trecho no formulário para que a equipe editorial avalie.",
  },
  {
    q: "Dúvidas sobre pagamento ou acesso a um curso.",
    a: "Selecione a categoria Pagamentos e inclua a data e o meio usados. Não envie dados completos de cartão.",
  },
]

export default function SuportePage() {
  return (
    <>
      <PageHeader
        eyebrow="Suporte ao aluno"
        title="Como podemos ajudar?"
        lede="Envie sua solicitação e a equipe responderá no e-mail informado. Quanto mais claro o assunto, mais rápida a resposta."
        breadcrumbs={[{ label: "Suporte", href: "/suporte" }]}
      />

      <section className="border-b border-line bg-paper-strong" aria-label="Formulário de suporte">
        <div className="container-editorial grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-4">
            <h2 className="rule-top pt-4 font-display text-display-sm font-medium text-ink">Ajuda rápida</h2>
            <dl className="mt-4">
              {HELP.map((f) => (
                <div key={f.q} className="border-b border-line py-5">
                  <dt className="font-medium text-ink">{f.q}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </aside>
          <div className="lg:col-span-7 lg:col-start-6">
            <SupportForm />
          </div>
        </div>
      </section>
    </>
  )
}
