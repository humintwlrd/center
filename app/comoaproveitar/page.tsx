import type { Metadata } from "next"
import { Brain, Layers, Target, Repeat } from "lucide-react"
import { BackButton } from "@/components/back-button"
import { PageHeader } from "@/components/site/page-header"

export const metadata: Metadata = {
  title: "Como aproveitar o acervo",
  description:
    "Um guia honesto sobre como extrair o máximo do Acervo Tático HUMINT: como aprender, reter o conhecimento, aplicar na prática e por que os conteúdos são liberados aos poucos.",
  alternates: { canonical: "/comoaproveitar" },
  robots: { index: true, follow: true },
}

const STEPS = [
  {
    icon: Brain,
    title: "Estude com intenção, não com pressa",
    body: "O acervo não é uma maratona para terminar no fim de semana. Cada dossiê foi construído para ser lido com atenção, anotado e digerido. Leia uma vez para entender o caso, leia de novo para enxergar a técnica por trás dele. Conhecimento de HUMINT não se consome, se internaliza.",
  },
  {
    icon: Repeat,
    title: "Repetição espaçada retém melhor",
    body: "Voltar a um material dias depois fixa o aprendizado muito mais do que devorar tudo de uma vez. É por isso que o ritmo de liberação ajuda você: ele cria intervalos naturais de revisão, em vez de um acúmulo que você nunca mais abre. Revisite, releia, conecte com o que veio antes.",
  },
  {
    icon: Target,
    title: "Aplique em situações reais",
    body: "A diferença entre quem leu sobre HUMINT e quem domina HUMINT está na prática. Observe conversas, identifique padrões de comportamento, teste a leitura de intenções no dia a dia. O acervo te dá o mapa, a maestria vem da aplicação diária em campo.",
  },
  {
    icon: Layers,
    title: "Construa sobre uma base",
    body: "Os conteúdos foram sequenciados para que um conceito prepare o terreno para o próximo. Quem pula etapas perde a fundação. Quem segue o ritmo constrói um entendimento que se sustenta, camada sobre camada, do fundamento à aplicação avançada.",
  },
]

export default function ComoAproveitarPage() {
  return (
    <>
      <PageHeader
        tone="deep"
        eyebrow="Guia do membro"
        title="Como aproveitar o acervo ao máximo."
        lede="Você não comprou um arquivo de PDFs. Você entrou em um acervo vivo, pensado para transformar a forma como você lê pessoas, situações e intenções. Aproveitá-lo bem é menos sobre ter acesso a tudo de uma vez e mais sobre como você estuda, retém e aplica o que está aqui dentro."
      >
        <BackButton />
      </PageHeader>

      <section className="border-b border-line bg-paper" aria-label="Como estudar">
        <div className="container-editorial py-16 md:py-20">
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {STEPS.map((step, i) => (
              <li key={step.title} className="bg-paper-strong p-6 md:p-8">
                <p className="flex items-center justify-between">
                  <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <step.icon className="h-5 w-5 text-brand" aria-hidden />
                </p>
                <h2 className="mt-4 font-display text-display-sm font-medium text-ink">{step.title}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-paper-strong" aria-labelledby="ritmo-title">
        <div className="container-editorial grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="kicker">O ritmo</p>
            <h2 id="ritmo-title" className="mt-5 font-display text-display-lg font-medium text-ink">
              Por que o conteúdo é liberado aos poucos.
            </h2>
          </div>
          <div className="doc-prose max-w-[62ch] lg:col-span-8">
            <p>
              Os dossiês, arquivos e materiais do acervo não são entregues todos de uma vez, e isso é uma decisão
              deliberada, feita a seu favor.
            </p>
            <p>
              <strong>O primeiro motivo é pedagógico.</strong> Conhecimento absorvido em ritmo tem retenção
              infinitamente maior do que conhecimento despejado de uma vez. Liberar por etapas cria espaço para você
              estudar, revisar e aplicar antes de avançar. Quem recebe tudo de uma só vez tende a folhear, esquecer e
              abandonar. Quem recebe no tempo certo constrói domínio real.
            </p>
            <p>
              <strong>O segundo motivo: proteger o acervo.</strong> Liberar todo o material no primeiro dia seria um
              convite para plagiadores comprarem, copiarem tudo de uma vez e cancelarem em seguida. O ritmo de
              liberação preserva o valor do que você adquiriu e mantém o acervo íntegro, para você e para todos os
              membros sérios.
            </p>
          </div>
        </div>
      </section>

      <section className="surface-deep" aria-labelledby="franca-title">
        <div className="container-editorial grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="kicker">
              Uma palavra franca
            </p>
            <h2 id="franca-title" className="mt-5 font-display text-display-lg font-medium text-fog">
              Este acervo é para quem está genuinamente comprometido em evoluir.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="max-w-[60ch] text-lg leading-relaxed text-fog-muted">
              Não é para curiosos de fim de semana nem para quem quer apenas colecionar arquivos. É para quem
              entende que dominar a leitura humana exige tempo, repetição e prática, e que está disposto a percorrer
              esse caminho com seriedade. Se é assim que você encara, o acervo vai recompensar cada passo. O ritmo
              não é um obstáculo: é o método.
            </p>
            <div className="mt-10">
              <BackButton variant="solid" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
