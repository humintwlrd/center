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
        eyebrow="Documento institucional"
        title="Princípios editoriais e éticos."
        lede="Os compromissos abaixo orientam o que publicamos, como publicamos e o que recusamos publicar."
        breadcrumbs={[{ label: "Princípios editoriais", href: "/principios-editoriais" }]}
      />

      <div className="bg-paper">
        <div className="container-editorial grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3" aria-label="Nesta página">
            <nav className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Nesta página</p>
              <ol className="border-t border-ink">
                {SECTIONS.map((s, i) => (
                  <li key={s.id} className="border-b border-line">
                    <a
                      href={`#${s.id}`}
                      className="grid grid-cols-[2rem_1fr] gap-2 py-3 text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      <span className="font-mono text-[0.6875rem] tracking-[0.12em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            <div className="article-prose">
              {SECTIONS.map((s, i) => (
                <section key={s.id} id={s.id}>
                  <h2>
                    <span className="mr-3 font-mono text-sm font-normal tracking-[0.12em] text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </h2>
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </section>
              ))}
            </div>

            <aside className="mt-14 border-l-2 border-brand bg-paper-strong p-6 md:p-8">
              <p className="eyebrow-brand mb-2">Documento vivo</p>
              <p className="leading-relaxed text-ink-soft">
                Este documento é revisado periodicamente. Sugestões e críticas são bem-vindas pelo{" "}
                <Link href="/contato" className="text-ink underline decoration-brand underline-offset-4 hover:text-brand">
                  formulário de contato
                </Link>
                .
              </p>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
