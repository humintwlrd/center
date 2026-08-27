import type { Metadata } from "next"
import { Brain, Layers, Target, Lock, Repeat } from "lucide-react"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Como aproveitar o acervo · Mundo da HUMINT",
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
    <main className="min-h-screen bg-humint-charcoal text-humint-bone">
      {/* Top bar */}
      <header className="border-b border-humint-bone/10">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-5 flex items-center justify-between">
          <BackButton />
          <img
            src="/logo-mundo-humint.png"
            alt="Mundo da HUMINT"
            className="h-8 w-auto object-contain opacity-90"
          />
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-20">
        {/* Hero */}
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-humint-amber/80 mb-4">
          / Guia do membro
        </div>
        <h1 className="font-serif text-3xl md:text-5xl leading-[1.08] tracking-tight text-humint-bone text-balance">
          Como aproveitar o acervo ao máximo
        </h1>
        <p className="mt-6 text-[15px] md:text-base leading-relaxed text-humint-bone/70 font-light text-pretty">
          Você não comprou um arquivo de PDFs. Você entrou em um acervo vivo, pensado para transformar a forma
          como você lê pessoas, situações e intenções. Aproveitá-lo bem é menos sobre ter acesso a tudo de uma
          vez e sair consumindo desenfreadamente... é mais sobre como você estuda, retém e aplica o que está aqui
          dentro.
        </p>

        {/* Steps */}
        <section className="mt-12 md:mt-16 grid gap-px overflow-hidden border border-humint-bone/10 bg-humint-bone/10 sm:grid-cols-2">
          {STEPS.map((step) => (
            <div key={step.title} className="bg-humint-charcoal p-6 md:p-7">
              <step.icon className="h-5 w-5 text-humint-amber" aria-hidden />
              <h2 className="mt-4 font-serif text-xl leading-tight tracking-tight text-humint-bone text-balance">
                {step.title}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-humint-bone/65 font-light">{step.body}</p>
            </div>
          ))}
        </section>

        {/* Why gradual release */}
        <section className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight text-humint-bone">
            Por que o conteúdo é liberado aos poucos
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-humint-bone/70 font-light">
            <p>
              Os dossiês, arquivos e materiais do acervo não são entregues todos de uma vez, e isso é uma
              decisão deliberada, feita a seu favor.
            </p>
            <p>
              <strong className="font-semibold text-humint-bone">O primeiro motivo é pedagógico.</strong>{" "}
              Conhecimento absorvido em ritmo tem retenção infinitamente maior do que conhecimento despejado de
              uma vez. Liberar por etapas cria espaço para você estudar, revisar e aplicar antes de avançar.
              Quem recebe tudo de uma só vez tende a folhear, esquecer e abandonar. Quem recebe no tempo certo
              constrói domínio real.
            </p>
            <p>
              <strong className="font-semibold text-humint-bone">O segundo motivo:</strong>{" "}
              proteger o acervo. Liberar todo o material no primeiro dia seria um convite para plagiadores
              comprarem, copiarem tudo de uma vez e cancelarem em seguida. O ritmo de liberação preserva o
              valor do que você adquiriu e mantém o acervo íntegro, para você e para todos os membros sérios.
            </p>
          </div>
        </section>

        {/* For the committed */}
        <section className="mt-12 md:mt-16 border-l-2 border-humint-amber/60 bg-humint-bone/[0.03] p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Lock className="h-4 w-4 text-humint-amber" aria-hidden />
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-humint-amber/80">
              Uma palavra franca
            </span>
          </div>
          <p className="mt-4 font-serif text-xl md:text-2xl leading-snug tracking-tight text-humint-bone text-balance">
            Este acervo é para quem está genuinamente comprometido em evoluir.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-humint-bone/70 font-light">
            Não é para curiosos de fim de semana nem para quem quer apenas colecionar arquivos. É para quem
            entende que dominar a leitura humana exige tempo, repetição e prática, e que está disposto a
            percorrer esse caminho com seriedade. Se é assim que você encara, o acervo vai recompensar cada
            passo. O ritmo não é um obstáculo: é o método.
          </p>
        </section>

        {/* Voltar para a área de membros */}
        <div className="mt-12 md:mt-16 flex justify-center border-t border-humint-bone/10 pt-10">
          <BackButton variant="solid" />
        </div>

      </article>
    </main>
  )
}
