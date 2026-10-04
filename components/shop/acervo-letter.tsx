import type { ReactNode } from "react"
import Image from "next/image"
import { ArrowUpRight, Check, ChevronRight, Plus, X } from "lucide-react"
import { DotMatrix } from "@/components/site/dot-matrix"
import { RiseText } from "@/components/site/rise-text"
import { Roll } from "@/components/site/roll"
import { ScrubText } from "@/components/site/scrub-text"
import { TestimonialsStrip } from "@/components/site/testimonials-strip"
import { splitParcelado } from "@/components/shop/product-card"
import { ICON_EYE, ICON_LENS, ICON_SHIELD, eyePattern, terrainPattern } from "@/lib/dot-patterns"
import { ACERVO, PRODUCTS } from "@/lib/products"
import { cn } from "@/lib/utils"

/**
 * Carta de vendas do Acervo Tático (direção de copy do dono, 2026-10-04), no visual da referência.
 * Usada inteira na /pv e em /academy/acervo-tatico; a home monta um recorte com as mesmas seções.
 * Os trechos que pediam dado real ([PREÇO], acesso, garantia, formato) usam só o que o site já
 * publica (catálogo, área de membros, 12 meses, 7 dias de garantia). Contagens de páginas e bônus
 * ficam de fora até o dono informar.
 */

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })
const priceOf = (preco: string) => Number(preco.replace(/[^\d,]/g, "").replace(",", "."))

const DOSSIER_PRODUCTS = PRODUCTS.filter((p) => p.id.startsWith("dossie-"))

const DOSSIERS = [
  {
    name: "Mecanismos do Comportamento",
    rest: "ajuda você a compreender melhor o que influencia decisões, reações e mudanças de comportamento — sem transformar qualquer gesto em uma conclusão.",
  },
  {
    name: "Comunicação e Influência",
    rest: "mostra como estruturar interações, reduzir resistência e conduzir conversas com mais intenção, clareza e responsabilidade.",
  },
  {
    name: "Linguagem Não-Verbal",
    rest: "ensina a observar comportamento sem cair na armadilha dos “sinais universais”, trabalhando com contexto, baseline e mudanças relevantes.",
  },
  {
    name: "Elicitação Ética",
    rest: "apresenta princípios para obter informações por meio de conversas naturais, perguntas e escuta estruturada — sem coerção ou promessas de “controle mental”.",
  },
  {
    name: "Contrainteligência e OPSEC",
    rest: "muda o lado da mesa: você passa a observar também como informações são expostas, exploradas e protegidas.",
  },
  {
    name: "Fontes de Informação e Ferramentas Operacionais",
    rest: "conectam o método à prática, ajudando você a organizar informações, avaliar o que possui e estruturar melhor suas análises.",
  },
]

const PLATFORM = [
  { title: "Dossiês completos", body: "Materiais em PDF para estudo profundo, revisão e consulta." },
  { title: "Protocolos práticos", body: "Estruturas para aplicar leitura, observação e análise com método." },
  { title: "Checklists e modelos", body: "Ferramentas para organizar hipóteses, registrar sinais e revisar decisões." },
  { title: "Atualizações", body: "Novas liberações e melhorias durante o período de acesso." },
]

const STEPS = [
  {
    title: "Compra com seu e-mail principal",
    body: "Use o e-mail que você realmente acessa. Ele será usado para liberar sua entrada na plataforma.",
  },
  { title: "Recebe as credenciais", body: "Em poucos minutos, os dados de acesso chegam no e-mail usado na compra." },
  {
    title: "Consulta no seu ritmo",
    body: "Os materiais ficam disponíveis na área de membros para estudo, revisão e consulta durante o período de acesso.",
  },
]

export const FAQ = [
  {
    q: "Isso vai me ensinar a detectar mentiras?",
    a: "Não existe um sinal único capaz de provar uma mentira. O Acervo ensina uma abordagem mais séria: observar contexto, estabelecer referências, identificar inconsistências, formular hipóteses e buscar mais informação antes de concluir.",
  },
  {
    q: "Preciso trabalhar com segurança ou inteligência?",
    a: "Não. Os princípios podem ser aplicados em diferentes contextos nos quais você precise compreender pessoas, conduzir conversas ou avaliar informações.",
  },
  {
    q: "É um curso?",
    a: "É um acervo digital de estudo: seis dossiês em PDF e um núcleo de ferramentas operacionais, com checklists, roteiros, modelos de análise e protocolos de aplicação, numa área de membros. Não existe turma, cronograma ou aula ao vivo: o material fica disponível e o ritmo é seu.",
  },
  {
    q: "Recebo acesso imediatamente?",
    a: "Sim. Logo após a confirmação do pagamento, o login, a senha e o link da área de membros chegam em poucos minutos no e-mail usado na compra.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Doze meses, com as atualizações do período incluídas. O acesso não renova sozinho: ao fim do prazo, você decide se continua.",
  },
  {
    q: "Existe garantia?",
    a: "Sim. Você tem 7 dias de garantia incondicional: se concluir que o material não serve, pede o reembolso integral, sem precisar justificar.",
  },
]

/* ───────────────────────────── peças ───────────────────────────── */

/** CTA de compra. Sem `href`, abre o checkout (HeroSpark) em nova aba. */
export function BuyCta({
  label = "Quero acessar o Acervo Tático",
  href,
  className,
}: {
  label?: string
  href?: string
  className?: string
}) {
  if (href) {
    return (
      <a href={href} className={cn("btn btn-signal", className)}>
        <Roll>{label}</Roll>
        <ChevronRight aria-hidden />
      </a>
    )
  }
  return (
    <a href={ACERVO.checkoutUrl} target="_blank" rel="noopener noreferrer" className={cn("btn btn-signal", className)}>
      <Roll>{label}</Roll>
      <ArrowUpRight aria-hidden />
      <span className="sr-only">(abre em nova aba)</span>
    </a>
  )
}

function PriceNote({ className }: { className?: string }) {
  return (
    <p className={cn("tabular text-sm text-tone-3", className)}>
      {ACERVO.parcelado} · Cartão ou Pix · 7 dias de garantia
    </p>
  )
}

function Strike({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 border-b border-tone py-3.5 text-base text-tone-2">
      <X className="mt-0.5 size-4 shrink-0 text-tone" aria-hidden />
      <span>{children}</span>
    </li>
  )
}

function Ticked({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <li className={cn("flex items-start gap-3 border-b border-tone py-3.5 text-base text-tone-2", className)}>
      <Check className="mt-0.5 size-4 shrink-0 text-tone" aria-hidden />
      <span>{children}</span>
    </li>
  )
}

/* ───────────────────────────── seções ───────────────────────────── */

export function LetterHero({ cta, secondary, top }: { cta?: ReactNode; secondary?: ReactNode; top?: ReactNode }) {
  return (
    <section className="relative overflow-hidden" aria-labelledby="carta-title">
      <div aria-hidden className="grid-fade pointer-events-none absolute top-[46%] -left-28 h-[420px] w-[520px]" />
      <div className="container-site relative pt-10 pb-16 md:pt-20 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">
          <div className="max-w-[540px]">
            {top && <div className="mb-6">{top}</div>}
            <p className="subtitle blur-in">Acervo Tático HUMINT</p>
            <h1 id="carta-title" className="mt-3 text-mega text-ink">
              <RiseText text="Suas decisões dependem de pessoas." delay={100} />
            </h1>
            <p className="blur-in mt-4 text-lg text-ink-2 md:text-xl" style={{ ["--d" as string]: "450ms" }}>
              Mas você ainda pode estar decidindo sem um método.
            </p>
            <div className="blur-in mt-6 flex flex-col items-start gap-3 sm:flex-row" style={{ ["--d" as string]: "600ms" }}>
              {cta ?? <BuyCta />}
              {secondary}
            </div>
            <PriceNote className="blur-in mt-5" />
          </div>
          <div className="mx-auto w-full max-w-[560px] lg:mr-0">
            <DotMatrix grid={eyePattern()} wipe />
          </div>
        </div>
      </div>
    </section>
  )
}

export function LetterProblem() {
  return (
    <section id="problema" aria-labelledby="problema-title" className="pb-20 md:pb-[140px]">
      <div className="container-site">
        <div className="mx-auto max-w-[865px] border-l border-line pt-10 md:pt-16">
          <div className="px-5 md:px-10">
            <h2 id="problema-title" className="subtitle">
              O problema
            </h2>
            <ScrubText
              text="Todos os dias, você precisa avaliar o que alguém diz, entender interesses, conduzir conversas, perceber inconsistências e decidir em quem — e no quê — confiar."
              className="mt-4 text-[1.5rem] leading-[1.45] font-medium tracking-[-0.03em] text-ink md:text-3xl md:leading-[1.5]"
            />
            <div className="mt-10 space-y-4 text-lg text-ink-2" data-reveal>
              <p>
                O problema é que a maioria das pessoas faz tudo isso da mesma forma:{" "}
                <strong className="font-medium text-ink">pela impressão.</strong>
              </p>
              <p>Escuta o que foi dito. Observa alguns sinais. Forma uma opinião. E decide.</p>
              <p>Só que, quando há pessoas envolvidas, o que parece óbvio raramente é informação suficiente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LetterWhy({ cta }: { cta?: ReactNode }) {
  return (
    <section aria-labelledby="porque-title" className="pb-20 md:pb-[140px]">
      <div className="container-site">
        <div className="rule-t rule-b grid border-x border-line md:grid-cols-2">
          <div className="border-b border-line px-6 py-10 md:border-r md:border-b-0 md:px-16 md:py-14" data-reveal>
            <p className="subtitle">É por isso que existe HUMINT.</p>
            <h2 id="porque-title" className="mt-3 max-w-[460px] text-title">
              Inteligência humana de operações reais, traduzida para as suas decisões.
            </h2>
          </div>
          <div className="px-6 py-10 md:px-16 md:py-14" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <p className="max-w-[460px] text-base text-ink-2 md:text-lg">
              O Acervo Tático HUMINT reúne seis dossiês para ensinar você a observar pessoas, conduzir conversas e avaliar
              informações de forma mais estruturada.
            </p>
            <ul className="mt-6 max-w-[460px] border-t border-line">
              <Strike>Sem “leitura mental”.</Strike>
              <Strike>Sem truques de linguagem corporal.</Strike>
              <Strike>Sem manipulação barata.</Strike>
            </ul>
            <p className="mt-6 text-heading text-ink">Com método.</p>
            <div className="mt-6">{cta ?? <BuyCta />}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LetterTwoPeople() {
  return (
    <section aria-labelledby="conduz-title" className="overflow-hidden pb-20 md:pb-[140px]">
      <div className="container-site">
        <header className="mx-auto max-w-[720px] pb-10 text-center md:pb-12" data-reveal>
          <p className="subtitle">Quem conduz</p>
          <h2 id="conduz-title" className="mt-2 text-title">
            Quem conduz percebe antes.
          </h2>
          <p className="mt-3 text-base text-ink-2 md:text-lg">Imagine duas pessoas entrando na mesma conversa.</p>
        </header>
        <div className="frame">
          <div className="rule-t grid md:grid-cols-2">
            <div className="group flex flex-col border-b border-line p-6 md:border-r md:border-b-0 md:p-10" data-reveal>
              <div className="mx-auto w-[130px] py-6 md:w-[160px] md:py-10">
                <DotMatrix grid={ICON_EYE} tone="soft" fill={0.7} />
              </div>
              <p className="subtitle">A primeira</p>
              <h3 className="mt-2 text-xl leading-[1.25]">A primeira simplesmente conversa.</h3>
              <p className="mt-3 text-base text-ink-2">
                Escuta, responde, observa e, no final, tenta concluir o que aconteceu.
              </p>
            </div>
            <div className="group flex flex-col p-6 md:p-10" data-reveal style={{ ["--d" as string]: "120ms" }}>
              <div className="mx-auto w-[130px] py-6 md:w-[160px] md:py-10">
                <DotMatrix grid={ICON_LENS} tone="light" fill={0.7} />
              </div>
              <p className="subtitle">A segunda</p>
              <h3 className="mt-2 text-xl leading-[1.25]">A segunda entra sabendo o que precisa descobrir.</h3>
              <ul className="mt-4 border-t border-line">
                <Ticked>Ela sabe o que observar.</Ticked>
                <Ticked>Sabe quais perguntas podem produzir informação relevante.</Ticked>
                <Ticked>Percebe quando uma resposta merece aprofundamento.</Ticked>
                <Ticked>Distingue um comportamento isolado de um padrão.</Ticked>
                <Ticked>Separa o que realmente sabe daquilo que apenas suspeita.</Ticked>
                <Ticked className="border-b-0">E sai da conversa com elementos melhores para decidir.</Ticked>
              </ul>
            </div>
          </div>
          <div className="rule-t rule-b bg-snow-2 px-6 py-10 text-center md:px-16 md:py-12" data-reveal>
            <p className="text-heading text-ink">A diferença não está em “ler pessoas”.</p>
            <p className="mt-1 text-heading text-ink">Está em saber trabalhar com informação humana.</p>
            <p className="mx-auto mt-4 max-w-[560px] text-base text-ink-2">
              Esse é o raciocínio por trás da HUMINT. E é esse raciocínio que o Acervo Tático coloca nas suas mãos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LetterAlready() {
  return (
    <section aria-labelledby="ja-faz-title" className="pb-20 md:pb-[140px]">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5" data-reveal>
            <h2 id="ja-faz-title" className="text-title">
              Você já faz HUMINT.
            </h2>
            <p className="mt-2 text-title text-ink-4">Só talvez ainda faça sem método.</p>
          </div>
          <div className="space-y-4 text-base text-ink-2 md:text-lg lg:col-span-7" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <p>
              Sempre que você tenta entender se alguém está sendo transparente, descobrir o que realmente está
              acontecendo, avaliar uma versão dos fatos, conduzir uma negociação, entrevistar alguém, contratar uma
              pessoa ou tomar uma decisão baseada no comportamento de terceiros, existe um problema de inteligência
              humana diante de você.
            </p>
            <p>A diferença é que, sem método, você tende a depender da própria percepção.</p>
            <p className="text-heading text-ink">E percepção engana.</p>
          </div>
        </div>
        <ul className="mt-10 grid border-t border-l border-line sm:grid-cols-2">
          {[
            "Uma pessoa nervosa não está necessariamente mentindo.",
            "Uma pessoa confiante não está necessariamente dizendo a verdade.",
            "Um gesto isolado não revela uma intenção.",
            "Uma resposta convincente não é necessariamente uma informação confiável.",
          ].map((line, i) => (
            <li
              key={line}
              className="border-r border-b border-line px-6 py-8 text-xl leading-[1.3] font-medium tracking-[-0.03em] text-ink md:px-10 md:py-10"
              data-reveal
              style={{ ["--d" as string]: `${i * 80}ms` }}
            >
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[720px] text-base text-ink-2 md:text-lg" data-reveal>
          HUMINT começa quando você deixa de procurar sinais mágicos e começa a trabalhar com hipóteses, contexto,
          comportamento e informação.
        </p>
      </div>
    </section>
  )
}

export function LetterNoCheap() {
  return (
    <section aria-labelledby="sem-manipulacao-title" className="bg-snow-2 py-20 md:py-[120px]">
      <div className="container-site">
        <header className="max-w-[720px] pb-10" data-reveal>
          <p className="subtitle">Sem manipulação barata</p>
          <h2 id="sem-manipulacao-title" className="mt-2 text-title">
            Inteligência humana sem manipulação barata.
          </h2>
        </header>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5" data-reveal>
            <p className="text-base text-ink-2 md:text-lg">
              Existe muito conteúdo que promete ensinar você a “decifrar qualquer pessoa”.
            </p>
            <ul className="mt-5 border-t border-line">
              <Strike>Identificar um mentiroso por um gesto.</Strike>
              <Strike>Dominar uma conversa com algumas palavras.</Strike>
              <Strike>Descobrir exatamente o que alguém pensa.</Strike>
              <Strike>Influenciar qualquer pessoa usando meia dúzia de “gatilhos”.</Strike>
            </ul>
            <p className="mt-6 text-heading text-ink">Não é isso que você vai encontrar aqui.</p>
            <p className="mt-4 text-base text-ink-2">
              O operador não precisa imaginar que consegue ler a mente de alguém.
            </p>
            <p className="mt-2 text-base text-ink-2">
              Ele precisa aprender a observar melhor, perguntar melhor, interpretar melhor e verificar melhor.
            </p>
          </div>
          <div className="lg:col-span-7" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <div className="grid border border-line bg-snow">
              <div className="border-b border-line p-6 md:p-10">
                <p className="subtitle">Palpite</p>
                <p className="mt-3 text-base text-ink-2">Em vez de olhar para um comportamento e concluir:</p>
                <p className="mt-3 text-heading text-ink-4 line-through decoration-1">“Ele está mentindo.”</p>
              </div>
              <div className="night p-6 md:p-10">
                <p className="subtitle">Análise</p>
                <p className="mt-3 text-base text-mist">Você aprende a pensar:</p>
                <p className="mt-3 text-heading text-white">
                  “Isso destoa do padrão que observei. O que pode explicar essa mudança? Que informação falta? Como
                  posso testar essa hipótese?”
                </p>
              </div>
            </div>
            <p className="mt-6 text-base text-ink-2 md:text-lg">
              Parece uma diferença pequena. <strong className="font-medium text-ink">Mas é a diferença entre palpite e análise.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LetterConversation() {
  const questions = [
    "De onde essa informação veio?",
    "A pessoa presenciou o fato ou ouviu de terceiros?",
    "O que ela sabe diretamente?",
    "O que está inferindo?",
    "Existe algum interesse envolvido?",
    "Quais partes da história podem ser verificadas?",
    "Há algo que não combina com outras informações disponíveis?",
    "Que pergunta pode aumentar — ou reduzir — sua confiança naquela versão?",
  ]
  return (
    <section aria-labelledby="conversa-title" className="py-20 md:py-[140px]">
      <div className="container-site">
        <header className="max-w-[720px] pb-10" data-reveal>
          <p className="subtitle">Na prática</p>
          <h2 id="conversa-title" className="mt-2 text-title">
            É assim que uma conversa deixa de ser apenas uma conversa.
          </h2>
          <p className="mt-3 text-base text-ink-2 md:text-lg">
            Considere uma situação simples. Alguém fornece uma informação importante para uma decisão sua.
          </p>
        </header>
        <div className="rule-t rule-b grid border-x border-line lg:grid-cols-12">
          <div className="border-b border-line p-6 md:p-10 lg:col-span-5 lg:border-r lg:border-b-0" data-reveal>
            <p className="text-base text-ink-2">A reação comum é perguntar:</p>
            <p className="mt-4 text-display text-ink">“Tem certeza?”</p>
            <p className="mt-6 text-base text-ink-2">
              Se a pessoa responder “tenho”, você praticamente voltou ao ponto de partida.
            </p>
          </div>
          <div className="p-6 md:p-10 lg:col-span-7" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <p className="text-base text-ink">Uma abordagem estruturada procura outra coisa.</p>
            <ol className="mt-4 border-t border-line">
              {questions.map((q, i) => (
                <li key={q} className="grid grid-cols-[2.5rem_1fr] items-baseline border-b border-line py-3.5 last:border-b-0">
                  <span className="tabular text-sm font-medium text-ink-4">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base text-ink">{q}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-10 max-w-[760px]" data-reveal>
          <p className="text-heading text-ink">Você deixa de avaliar apenas a resposta.</p>
          <p className="text-heading text-ink">E começa a avaliar a qualidade da informação.</p>
          <p className="mt-4 text-base text-ink-2">
            Esse é apenas um exemplo da mudança de raciocínio que você encontra no Acervo Tático.
          </p>
        </div>
      </div>
    </section>
  )
}

export function LetterDossiers() {
  return (
    <section id="dossies" aria-labelledby="dossies-title" className="pb-20 md:pb-[140px]">
      <div className="container-site">
        <header className="flex flex-col gap-4 pb-8 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="max-w-[560px]">
            <p className="subtitle">Dossiês</p>
            <h2 id="dossies-title" className="mt-2 text-title">
              Seis dossiês.
              <br />
              Um núcleo operacional.
            </h2>
          </div>
          <div className="max-w-[440px] space-y-2 text-base text-ink-2">
            <p>
              O Acervo Tático HUMINT não foi estruturado como uma coleção de curiosidades sobre comportamento humano.
            </p>
            <p>Cada dossiê desenvolve uma parte do processo.</p>
          </div>
        </header>
        <ul className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {DOSSIERS.map((d, i) => {
            const cover = DOSSIER_PRODUCTS[i]
            return (
              <li
                key={d.name}
                className="group flex flex-col border-r border-b border-line"
                data-reveal
                style={{ ["--d" as string]: `${(i % 3) * 90}ms` }}
              >
                {cover && (
                  <div className="border-b border-line bg-snow-2 px-10 py-8">
                    <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden">
                      <Image src={cover.image} alt="" fill sizes="180px" className="media-zoom object-cover" />
                    </div>
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <p className="subtitle">Dossiê {String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-3 text-base text-ink-2">
                    <strong className="font-medium text-ink">{d.name}</strong> {d.rest}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="mt-10 text-center" data-reveal>
          <p className="text-heading text-ink-4">Separados, são seis temas.</p>
          <p className="text-heading text-ink">Juntos, formam uma maneira diferente de observar uma situação antes de decidir.</p>
        </div>
      </div>
    </section>
  )
}

export function LetterPurpose() {
  const lines = [
    { text: "HUMINT não transforma cada conversa em interrogatório.", icon: ICON_EYE },
    { text: "Não transforma cada pessoa em alvo.", icon: ICON_LENS },
    { text: "E não transforma comportamento humano em matemática.", icon: ICON_SHIELD },
  ]
  return (
    <section aria-labelledby="objetivo-title" className="overflow-hidden pb-20 md:pb-[140px]">
      <div className="container-site">
        <header className="mx-auto max-w-[760px] pb-10 text-center md:pb-12" data-reveal>
          <h2 id="objetivo-title" className="text-title">
            O objetivo não é fazer você desconfiar de todo mundo.
          </h2>
          <p className="mt-3 text-base text-ink-2 md:text-lg">
            É exatamente o contrário. É reduzir a necessidade de confiar cegamente na sua primeira impressão.
          </p>
        </header>
        <div className="frame">
          <div className="rule-t rule-b grid md:grid-cols-3">
            {lines.map((l, i) => (
              <div
                key={l.text}
                className="group flex flex-col border-b border-line p-6 last:border-b-0 md:border-r md:border-b-0 md:p-8 md:last:border-r-0"
                data-reveal
                style={{ ["--d" as string]: `${i * 120}ms` }}
              >
                <div className="mx-auto w-[120px] py-6 md:w-[150px] md:py-10">
                  <DotMatrix grid={l.icon} tone="soft" fill={0.7} className="transition-opacity duration-500 group-hover:opacity-0" />
                  <DotMatrix
                    grid={l.icon}
                    tone="light"
                    fill={0.7}
                    className="-mt-[100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <p className="mt-auto text-xl leading-[1.25] font-medium tracking-[-0.03em] text-ink">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[760px] space-y-4 text-center" data-reveal>
          <p className="text-base text-ink-2 md:text-lg">O método serve para uma coisa muito mais útil:</p>
          <p className="text-heading text-ink">aumentar a qualidade das informações que chegam até a sua decisão.</p>
          <p className="text-base text-ink-2 md:text-lg">
            Porque, quando você aprende a separar observação de interpretação, evidência de impressão e hipótese de
            conclusão, começa a enxergar situações que antes passavam despercebidas.
          </p>
          <p className="text-base text-ink-2 md:text-lg">Não porque passou a “ler pessoas”.</p>
          <p className="text-heading text-ink">Porque passou a raciocinar melhor sobre elas.</p>
        </div>
      </div>
    </section>
  )
}

export function LetterForWhom() {
  const profiles = [
    ["Gestores", "precisam avaliar profissionais, conflitos e interesses."],
    ["Empreendedores", "precisam negociar, contratar e decidir em quem confiar."],
    ["Profissionais comerciais", "precisam entender necessidades e conduzir conversas sem depender de scripts mecânicos."],
    [
      "Profissionais de segurança, inteligência e investigação",
      "precisam lidar com fontes, informações e comportamento.",
    ],
    ["Negociadores", "precisam entender contexto, incentivos e posições que nem sempre são declaradas diretamente."],
  ]
  return (
    <section aria-labelledby="para-quem-title" className="pb-20 md:pb-[140px]">
      <div className="container-site">
        <div className="rule-t rule-b grid border-x border-line lg:grid-cols-12">
          <div className="border-b border-line px-6 py-10 md:px-12 md:py-12 lg:col-span-5 lg:border-r lg:border-b-0" data-reveal>
            <p className="subtitle">Para quem</p>
            <h2 id="para-quem-title" className="mt-2 text-title">
              Para quem depende de pessoas em decisões reais.
            </h2>
            <p className="mt-4 text-base text-ink-2">
              O Acervo Tático foi criado para quem percebe que decisões importantes raramente dependem apenas de números.
            </p>
            <p className="mt-2 text-heading text-ink">Elas dependem de pessoas.</p>
          </div>
          <div className="px-6 py-10 md:px-12 md:py-12 lg:col-span-7" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <ul className="border-t border-line">
              {profiles.map(([who, what]) => (
                <li key={who} className="border-b border-line py-4 text-base text-ink-2">
                  <strong className="font-medium text-ink">{who}</strong> {what}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-ink-2">
              E qualquer pessoa que precise tomar decisões envolvendo terceiros pode se beneficiar de uma forma mais
              estruturada de pensar.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[760px] text-center text-heading text-ink" data-reveal>
          Você não precisa trabalhar em uma agência de inteligência para precisar de inteligência humana.
        </p>
      </div>
    </section>
  )
}

export function LetterDeliverables() {
  return (
    <section aria-labelledby="recebe-title" className="bg-snow-2 py-20 md:py-[120px]">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6" data-reveal>
            <p className="subtitle">O que você recebe</p>
            <h2 id="recebe-title" className="mt-2 text-title">
              O que você recebe não é uma coleção de “segredos”.
            </h2>
            <p className="mt-4 text-heading text-ink">Você recebe um sistema de estudo.</p>
            <div className="mt-4 space-y-3 text-base text-ink-2">
              <p>
                Um conjunto de princípios, modelos e ferramentas para consultar quando precisar compreender melhor uma
                pessoa, uma conversa ou uma informação.
              </p>
              <p>
                São 6 dossiês digitais, organizados para levar você dos fundamentos do comportamento até aplicações mais
                operacionais de HUMINT.
              </p>
              <p>
                Junto com eles vêm o núcleo de ferramentas operacionais e os materiais auxiliares: checklists, roteiros,
                modelos de análise e protocolos de aplicação.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden border border-line bg-snow">
              <Image
                src="/images/pv/members-area-mockup-v3.webp"
                alt="Prévia da área de membros do Mundo da HUMINT em um celular, com a lista de dossiês e o progresso de estudo"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <ul className="mt-12 grid border-t border-l border-line bg-snow sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM.map((item, i) => (
            <li
              key={item.title}
              className="border-r border-b border-line p-6 md:p-8"
              data-reveal
              style={{ ["--d" as string]: `${i * 80}ms` }}
            >
              <h3 className="text-xl leading-[1.25]">{item.title}</h3>
              <p className="mt-2 text-base text-ink-2">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-[760px]" data-reveal>
          <p className="text-heading text-ink">O objetivo é que o Acervo não fique apenas na sua biblioteca.</p>
          <p className="mt-2 text-base text-ink-2 md:text-lg">
            Ele deve mudar as perguntas que você faz antes de tomar uma decisão.
          </p>
        </div>
      </div>
    </section>
  )
}

export function LetterNotFor() {
  return (
    <section aria-labelledby="nao-e-title" className="py-20 md:py-[140px]">
      <div className="container-site">
        <div className="rule-t rule-b grid border-x border-line md:grid-cols-2">
          <div className="border-b border-line px-6 py-10 md:border-r md:border-b-0 md:px-12 md:py-12" data-reveal>
            <p className="subtitle">Não é para você</p>
            <h2 id="nao-e-title" className="mt-2 text-title">
              Este material provavelmente não é para você se procura poder sobre os outros.
            </h2>
            <p className="mt-4 text-base text-ink-2">
              Se a sua expectativa é aprender frases capazes de controlar qualquer pessoa, descobrir mentiras
              instantaneamente, manipular alguém sem que ela perceba ou transformar linguagem corporal em detector de
              pensamentos, existem promessas mais chamativas na internet.
            </p>
            <p className="mt-4 text-heading text-ink">Nós preferimos não fazer nenhuma delas.</p>
            <p className="mt-2 text-base text-ink-2">Porque comportamento humano é mais complexo do que isso.</p>
          </div>
          <div className="bg-snow-2 px-6 py-10 md:px-12 md:py-12" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <p className="subtitle">É para quem</p>
            <p className="mt-2 text-title text-ink">O Acervo Tático é para quem prefere método a espetáculo.</p>
            <ul className="mt-6 border-t border-line">
              <Ticked>Para quem aceita observar antes de concluir.</Ticked>
              <Ticked>Investigar antes de acreditar.</Ticked>
              <Ticked>Testar uma hipótese antes de tratá-la como fato.</Ticked>
              <Ticked className="border-b-0">
                E tomar decisões melhores sem precisar fingir que possui poderes que ninguém possui.
              </Ticked>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LetterQuestion() {
  return (
    <section className="night relative overflow-hidden" aria-labelledby="questao-title">
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 w-[150%] max-w-none sm:w-full lg:w-[72%]">
        <DotMatrix grid={terrainPattern(64, 30)} tone="dark" twinkle={22} fill={0.6} />
      </div>
      <div className="container-site relative py-20 md:py-[120px]">
        <div className="max-w-[560px] pb-40 sm:pb-56 lg:pb-0" data-reveal>
          <p className="subtitle">Inteligência humana sem manipulação barata.</p>
          <p className="mt-4 text-base text-snow-3 md:text-lg">
            Talvez você nunca participe de uma operação de inteligência.
          </p>
          <p className="mt-3 text-base text-snow-3 md:text-lg">
            Mas vai participar de milhares de situações em que a informação mais importante estará dentro de uma
            conversa, de um comportamento, de uma contradição, de uma pergunta que ninguém fez ou de um detalhe que
            passou despercebido.
          </p>
          <p className="mt-6 text-heading text-mist">A questão não é se pessoas influenciam suas decisões.</p>
          <p className="text-heading text-mist">Elas já influenciam.</p>
          <p className="mt-6 text-base text-mist-2">A questão é:</p>
          <h2 id="questao-title" className="mt-1 text-title">
            com que método você pretende avaliá-las?
          </h2>
        </div>
      </div>
    </section>
  )
}

export function LetterOffer() {
  const { label, value } = splitParcelado(ACERVO.parcelado)
  const dossierSum = DOSSIER_PRODUCTS.reduce((sum, p) => sum + priceOf(p.preco), 0)
  const savings = dossierSum - priceOf(ACERVO.preco)
  return (
    <section id="oferta" aria-labelledby="oferta-title" className="py-20 md:py-[140px]">
      <div className="container-site">
        <header className="mx-auto max-w-[720px] pb-10 text-center" data-reveal>
          <p className="subtitle">Oferta</p>
          <h2 id="oferta-title" className="mt-2 text-title">
            Tudo incluso.
            <br />
            Um único acervo.
          </h2>
          <p className="mt-3 text-base text-ink-2 md:text-lg">
            Ao entrar para o Acervo Tático HUMINT, você recebe acesso aos seis dossiês e a todos os materiais que compõem
            esta edição.
          </p>
        </header>

        <div className="rule-t rule-b grid border-x border-line lg:grid-cols-12" data-reveal>
          <div className="border-b border-line px-6 py-10 md:px-12 md:py-12 lg:col-span-7 lg:border-r lg:border-b-0">
            <p className="subtitle">Acervo Tático HUMINT</p>
            <ul className="mt-4 border-t border-line">
              {DOSSIERS.map((d) => (
                <Ticked key={d.name}>
                  <span className="text-ink">{d.name}.</span>
                </Ticked>
              ))}
              <Ticked>Núcleo de ferramentas operacionais.</Ticked>
              <Ticked>Materiais auxiliares: checklists, roteiros, modelos de análise e protocolos de aplicação.</Ticked>
              <Ticked className="border-b-0">Atualizações incluídas durante o período de acesso.</Ticked>
            </ul>
          </div>
          <div className="flex flex-col bg-snow-2 px-6 py-10 md:px-12 md:py-12 lg:col-span-5">
            <div className="relative mx-auto mb-8 aspect-[3/4] w-full max-w-[200px] overflow-hidden">
              <Image src={ACERVO.image} alt={ACERVO.imageAlt} fill sizes="200px" className="object-cover" />
            </div>
            <p className="text-base text-ink-2">Acesso completo por</p>
            <p className="tabular mt-1 text-ink">
              <span className="text-ink-2">{label} </span>
              <span className="text-display whitespace-nowrap">{value}</span>
            </p>
            <p className="tabular mt-1 text-base text-ink-2">
              ou <span className="font-medium text-ink">{ACERVO.preco} à vista</span> · Pix ou cartão
            </p>
            {savings > 0 && (
              <p className="tabular mt-3 text-sm text-ink-3">
                Os seis dossiês avulsos somam {brl.format(dossierSum)}. No acervo, {brl.format(savings)} a menos e com o
                núcleo.
              </p>
            )}
            <BuyCta className="mt-6 w-full" />
            <ul className="mt-6 space-y-2 text-sm text-ink-2">
              <li className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden />
                12 meses de acesso à área de membros. As credenciais chegam no seu e-mail em poucos minutos.
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden />
                Garantia incondicional de 7 dias.
              </li>
            </ul>
          </div>
        </div>

        <ol className="mt-10 grid border-t border-l border-line md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="border-r border-b border-line p-6 md:p-8" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
              <p className="subtitle tabular">Passo {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-xl leading-[1.25]">{step.title}</h3>
              <p className="mt-2 text-base text-ink-2">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function LetterFaq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-snow-2 py-20 md:py-[120px]">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4" data-reveal>
          <p className="subtitle">Perguntas</p>
          <h2 id="faq-title" className="mt-2 text-title">
            Antes de decidir.
          </h2>
        </div>
        <div className="border-t border-l border-line bg-snow lg:col-span-8" data-reveal style={{ ["--d" as string]: "120ms" }}>
          {FAQ.map((item) => (
            <details key={item.q} className="group border-r border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 md:px-8 [&::-webkit-details-marker]:hidden">
                <span className="text-lg leading-[1.3] font-medium tracking-[-0.03em] text-ink">{item.q}</span>
                <span className="inline-flex size-10 shrink-0 items-center justify-center border border-line text-ink transition-colors group-hover:border-ink">
                  <Plus className="size-4 transition-transform duration-300 group-open:rotate-45" aria-hidden />
                </span>
              </summary>
              <p className="max-w-[62ch] px-6 pb-6 text-base text-ink-2 md:px-8">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LetterFinal() {
  return (
    <section aria-labelledby="final-title" className="py-20 md:py-[140px]">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6" data-reveal>
            <h2 id="final-title" className="text-title">
              Algumas decisões parecem óbvias até você descobrir a informação que estava faltando.
            </h2>
          </div>
          <ul className="border-t border-line lg:col-span-6" data-reveal style={{ ["--d" as string]: "120ms" }}>
            {[
              "Uma pergunta que não foi feita.",
              "Uma fonte que não foi verificada.",
              "Uma mudança de comportamento que não foi contextualizada.",
              "Uma afirmação tratada como fato.",
              "Uma hipótese tratada como certeza.",
            ].map((line) => (
              <li key={line} className="border-b border-line py-4 text-lg font-medium tracking-[-0.03em] text-ink">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 max-w-[760px] space-y-3 text-base text-ink-2 md:text-lg" data-reveal>
          <p className="text-heading text-ink">É por isso que inteligência começa antes da decisão.</p>
          <p>O método que você conheceu nesta página está inteiro no Acervo Tático HUMINT.</p>
          <p>Não para ensinar você a “ler qualquer pessoa”.</p>
          <p>Mas para ensinar algo muito mais útil:</p>
          <p className="text-heading text-ink">como pensar quando a sua decisão depende de pessoas.</p>
        </div>
      </div>
    </section>
  )
}

/** Faixa escura de fechamento: "Observe melhor. Pergunte melhor. Avalie melhor." */
export function LetterCtaBand({ cta, titleId = "fechamento-title" }: { cta?: ReactNode; titleId?: string }) {
  return (
    <section className="night relative overflow-hidden" aria-labelledby={titleId}>
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 w-[150%] max-w-none sm:w-full lg:w-[74%]">
        <DotMatrix grid={terrainPattern(64, 30, 11)} tone="dark" twinkle={22} fill={0.6} />
      </div>
      <div className="container-site relative py-20 md:py-[120px]">
        <div className="max-w-[520px] pb-40 sm:pb-56 lg:pb-0" data-reveal>
          <p className="subtitle">Acervo Tático HUMINT</p>
          <h2 id={titleId} className="mt-3 text-title">
            Observe melhor.
            <br />
            Pergunte melhor.
            <br />
            Avalie melhor.
            <br />
            <span className="text-mist-2">Decida com mais informação.</span>
          </h2>
          <div className="mt-8 flex flex-col items-start gap-4">
            {cta ?? <BuyCta />}
            <PriceNote />
          </div>
        </div>
      </div>
    </section>
  )
}

/** Carta inteira, na ordem da copy. `top` entra acima do hero (ex.: trilha de navegação). */
export function AcervoLetter({ top }: { top?: ReactNode }) {
  return (
    <>
      <LetterHero top={top} />
      <LetterProblem />
      <LetterWhy />
      <LetterTwoPeople />
      <LetterAlready />
      <LetterNoCheap />
      <LetterConversation />
      <LetterDossiers />
      <LetterPurpose />
      <LetterForWhom />
      <LetterDeliverables />
      <LetterNotFor />
      <TestimonialsStrip id="prova" />
      <LetterQuestion />
      <LetterOffer />
      <LetterFaq />
      <LetterFinal />
      <LetterCtaBand />
    </>
  )
}
