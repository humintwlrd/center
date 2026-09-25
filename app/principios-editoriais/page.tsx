import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Princípios editoriais e éticos",
  description:
    "Compromissos, políticas e práticas que sustentam o conteúdo publicado pelo Mundo da HUMINT.",
  path: "/principios-editoriais",
})

const SECTIONS: { id: string; title: string; body: string[] }[] = [
  {
    id: "precisao",
    title: "Compromisso com precisão",
    body: [
      "Cada texto publicado é revisado antes de ir ao ar. Afirmações factuais devem estar sustentadas por evidência verificável ou claramente identificadas como inferência ou hipótese.",
      "Quando um ponto não pode ser confirmado com segurança, dizemos isso no próprio texto, em vez de produzir conclusões mais sólidas do que a evidência permite.",
    ],
  },
  {
    id: "contexto",
    title: "Compromisso com contexto",
    body: [
      "Fato isolado não é análise. Procuramos sempre indicar o contexto em que uma afirmação faz sentido (vínculos, histórico, ambiente) para que o leitor consiga calibrar peso e intenção.",
    ],
  },
  {
    id: "transparencia",
    title: "Transparência metodológica",
    body: [
      "Em textos que envolvem investigação ou análise contextual, incluímos uma nota metodológica indicando como a informação foi obtida, com que tipo de fonte e com que limitações.",
      "Distinguimos, no produto final, entre evidência, inferência e comentário.",
    ],
  },
  {
    id: "imagens",
    title: "Política de uso de imagens",
    body: [
      "Imagens jornalísticas e documentais devem ser autênticas e corretamente atribuídas. Não publicamos imagens fabricadas como se fossem reais.",
      "Imagens podem ter recortes editoriais e overlays para legibilidade, mas nunca alterações que mudem o conteúdo factual da cena.",
    ],
  },
  {
    id: "correcoes",
    title: "Política de correções",
    body: [
      "Erros factuais são corrigidos assim que identificados, com registro datado no rodapé do artigo descrevendo o que foi alterado.",
      "Correções tipográficas e ajustes mínimos podem ser feitos sem log formal, conforme política interna.",
    ],
  },
  {
    id: "conflitos",
    title: "Política de conflitos de interesse",
    body: [
      "Conflitos de interesse, quando existirem entre autores e o tema tratado, devem ser declarados no próprio texto.",
      "Não publicamos conteúdo patrocinado disfarçado de editorial. Conteúdo institucional ou patrocinado é sinalizado de forma inequívoca.",
    ],
  },
  {
    id: "ia",
    title: "Política de uso de IA",
    body: [
      "IA generativa não é usada para inventar fatos, citações, fontes ou imagens jornalísticas. Pode ser usada como apoio operacional interno (revisão, organização, consulta) sempre sob revisão humana integral.",
      "Quando houver uso material de IA em pesquisa interna, isso será divulgado no texto correspondente.",
    ],
  },
  {
    id: "distincao",
    title: "Distinção entre análise, hipótese e fato verificado",
    body: [
      "Análise é interpretação sustentada em evidência. Hipótese é proposição que ainda exige verificação. Fato verificado é o que pode ser confirmado de forma independente.",
      "Esses três níveis aparecem com sinalização linguística clara em qualquer texto que misture os três.",
    ],
  },
]

export default function PrincipiosPage() {
  return (
    <>
      <PageHeader
        title="Princípios editoriais e éticos."
        lede="Os compromissos que orientam o que publicamos, como publicamos e o que recusamos publicar."
        breadcrumbs={[{ label: "Princípios editoriais", href: "/principios-editoriais" }]}
      />
      <div className="border-t border-line bg-snow text-ink">
        <div className="container-site grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:col-span-3" aria-label="Nesta página">
            <nav className="lg:sticky lg:top-28">
              <p className="mb-3 font-bold">Nesta página</p>
              <ol className="border-t-2 border-ink">
                {SECTIONS.map((s) => (
                  <li key={s.id} className="border-b border-line">
                    <a href={`#${s.id}`} className="block py-3 text-ink-2 transition-colors hover:text-signal">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            <div className="prose-read">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id}>
                  <h2>{s.title}</h2>
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </section>
              ))}
            </div>
            <p className="mt-14 max-w-[68ch] bg-snow-2 p-6 text-lg leading-relaxed text-ink-2 md:p-8">
              <strong className="text-ink">Documento vivo.</strong> Revisado periodicamente. Sugestões e críticas são
              bem-vindas pelo{" "}
              <Link href="/contato" className="font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4">
                formulário de contato
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
