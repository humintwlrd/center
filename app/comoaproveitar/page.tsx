import type { Metadata } from "next"
import { BackButton } from "@/components/back-button"
import { PageHeader } from "@/components/site/page-header"
import { SplitSection } from "@/components/site/split-section"

export const metadata: Metadata = {
  title: "Como aproveitar o acervo",
  description:
    "Um guia honesto sobre como extrair o máximo do Acervo Tático HUMINT: como aprender, reter o conhecimento, aplicar na prática e por que os conteúdos são liberados aos poucos.",
  alternates: { canonical: "/comoaproveitar" },
  robots: { index: true, follow: true },
}

const STEPS = [
  {
    title: "Estude com intenção, não com pressa",
    body: "O acervo não é uma maratona para terminar no fim de semana. Cada dossiê foi construído para ser lido com atenção, anotado e digerido. Leia uma vez para entender o caso, leia de novo para enxergar a técnica por trás dele. Conhecimento de HUMINT não se consome, se internaliza.",
  },
  {
    title: "Repetição espaçada retém melhor",
    body: "Voltar a um material dias depois fixa o aprendizado muito mais do que devorar tudo de uma vez. É por isso que o ritmo de liberação ajuda você: ele cria intervalos naturais de revisão, em vez de um acúmulo que você nunca mais abre. Revisite, releia, conecte com o que veio antes.",
  },
  {
    title: "Aplique em situações reais",
    body: "A diferença entre quem leu sobre HUMINT e quem domina HUMINT está na prática. Observe conversas, identifique padrões de comportamento, teste a leitura de intenções no dia a dia. O acervo te dá o mapa, a maestria vem da aplicação diária em campo.",
  },
  {
    title: "Construa sobre uma base",
    body: "Os conteúdos foram sequenciados para que um conceito prepare o terreno para o próximo. Quem pula etapas perde a fundação. Quem segue o ritmo constrói um entendimento que se sustenta, camada sobre camada, do fundamento à aplicação avançada.",
  },
]

export default function ComoAproveitarPage() {
  return (
    <>
      <PageHeader
        tone="night"
        title="Como aproveitar o acervo ao máximo."
        lede="Você não comprou um arquivo de PDFs. Entrou em um acervo pensado para mudar a forma como você lê pessoas, situações e intenções. Aproveitá-lo bem depende de como você estuda, retém e aplica o que está aqui."
      >
        <BackButton />
      </PageHeader>

      <section className="bg-snow text-ink" aria-label="Como estudar">
        <div className="container-site py-20 md:py-24">
          <ol className="grid gap-x-12 md:grid-cols-2">
            {STEPS.map((step) => (
              <li key={step.title} className="border-t-2 border-ink py-7">
                <h2 className="font-expanded text-heading font-extrabold">{step.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SplitSection id="ritmo" title="Por que o conteúdo é liberado aos poucos." tone="snow-2">
        <div className="flex max-w-[62ch] flex-col gap-5 text-lg leading-relaxed text-ink-2">
          <p>
            Os dossiês, arquivos e materiais do acervo não são entregues todos de uma vez. É uma decisão deliberada,
            feita a seu favor.
          </p>
          <p>
            <strong className="text-ink">O primeiro motivo é pedagógico.</strong> Conhecimento absorvido em ritmo é
            retido muito melhor do que conhecimento despejado de uma vez. Liberar por etapas cria espaço para estudar,
            revisar e aplicar antes de avançar.
          </p>
          <p>
            <strong className="text-ink">O segundo motivo é proteger o acervo.</strong> Liberar tudo no primeiro dia
            seria um convite para quem quer copiar e cancelar. O ritmo preserva o valor do que você adquiriu, para você e
            para todos os membros sérios.
          </p>
        </div>
      </SplitSection>

      <section className="night" aria-labelledby="franca-title">
        <div className="container-site py-20 md:py-24">
          <h2 id="franca-title" className="max-w-[20ch] font-expanded text-display font-extrabold">
            Este acervo é para quem está comprometido em evoluir.
          </h2>
          <p className="mt-8 max-w-[60ch] text-lede text-mist">
            Não é para curiosos de fim de semana nem para quem quer colecionar arquivos. Dominar a leitura humana exige
            tempo, repetição e prática. O ritmo não é um obstáculo: é o método.
          </p>
          <div className="mt-10">
            <BackButton variant="solid" />
          </div>
        </div>
      </section>
    </>
  )
}
