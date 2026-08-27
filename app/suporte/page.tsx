import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/site/breadcrumbs"
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
    q: "Dúvidas sobre pagamento ou assinatura.",
    a: "Selecione a categoria Pagamentos e inclua a data e o meio usados. Não envie dados completos de cartão.",
  },
]

export default function SuportePage() {
  return (
    <>
      <section className="container-editorial pt-8 md:pt-10">
        <Breadcrumbs items={[{ label: "Suporte", href: "/suporte" }]} />
      </section>

      <section className="container-editorial py-10 md:py-16">
        <p className="eyebrow-gold">Suporte ao membro</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-balance leading-tight max-w-3xl">
          Como podemos ajudar?
        </h1>
        <p className="mt-5 text-lg text-ink-soft leading-relaxed prose-measure">
          Envie sua solicitação e a equipe responderá no e-mail informado.
          Quanto mais claro o assunto, mais rápida a resposta.
        </p>
      </section>

      <section className="container-editorial pb-16 md:pb-20">
        <div className="max-w-2xl">
          <SupportForm />
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="container-editorial py-16 md:py-20">
          <p className="eyebrow-gold">Ajuda rápida</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-balance">
            Situações comuns.
          </h2>
          <dl className="mt-10 grid gap-8 md:grid-cols-3">
            {HELP.map((f) => (
              <div key={f.q} className="hairline-t pt-5">
                <dt className="font-display text-lg font-semibold">{f.q}</dt>
                <dd className="mt-2 text-ink-soft leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
