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
        title="Como podemos ajudar?"
        lede="Envie sua solicitação e a equipe responde no e-mail informado. Quanto mais claro o assunto, mais rápida a resposta."
        breadcrumbs={[{ label: "Suporte", href: "/suporte" }]}
      />
      <section className="border-t border-line bg-snow text-ink" aria-label="Formulário de suporte">
        <div className="container-site grid gap-14 py-16 md:py-20 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <h2 className="font-expanded text-heading font-extrabold">Ajuda rápida</h2>
            <dl className="mt-6">
              {HELP.map((f) => (
                <div key={f.q} className="border-t border-line py-5">
                  <dt className="font-bold">{f.q}</dt>
                  <dd className="mt-1.5 leading-relaxed text-ink-2">{f.a}</dd>
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
