import type { ReactNode } from "react"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Plus, X } from "lucide-react"
import { DotMatrix } from "@/components/site/dot-matrix"
import { RiseText } from "@/components/site/rise-text"
import { Roll } from "@/components/site/roll"
import { TestimonialsStrip } from "@/components/site/testimonials-strip"
import { splitParcelado } from "@/components/shop/product-card"
import { ICON_LENS, terrainPattern } from "@/lib/dot-patterns"
import { ACERVO, PRODUCTS } from "@/lib/products"
import { cn } from "@/lib/utils"

/**
 * Página de vendas do Acervo Tático (copy reescrita em 2026-10-04 a pedido do dono).
 * Usada inteira na /pv e em /academy/acervo-tatico; a home reaproveita algumas seções.
 * Fatos só do catálogo e da área de membros: preço, 12 meses de acesso com atualizações,
 * credenciais por e-mail em minutos, garantia incondicional de 7 dias, conteúdo dos módulos.
 * Números de páginas, ferramentas e bônus ficam de fora até o dono informar.
 * Trechos de alunos são literais das capturas (lib/testimonials.ts).
 */

const DOSSIER_PRODUCTS = PRODUCTS.filter((p) => p.id.startsWith("dossie-"))

export const DOSSIERS = [
  {
    name: "Mecânicas do Comportamento",
    line: "Por que as pessoas cedem, resistem, justificam escolhas e mudam de posição.",
    points: ["Padrões de comportamento", "Como decisões são tomadas", "Vieses e respostas automáticas"],
  },
  {
    name: "Comunicação e Influência",
    line: "Como uma mensagem é interpretada e como ajustar linguagem, ritmo e enquadramento sem improviso.",
    points: ["Clareza na comunicação", "Construção de confiança", "Percepção de intenção"],
  },
  {
    name: "Linguagem Não-Verbal",
    line: "Observar postura, expressão e ritmo com contexto e linha de base, sem leitura fantasiosa.",
    points: ["Congruência", "Sinais de tensão e conforto", "Mudanças de comportamento"],
  },
  {
    name: "Elicitação Ética",
    line: "Fazer a informação aparecer numa conversa natural, com perguntas e escuta, sem pressão. Inclui as “36 perguntas de Aron”.",
    points: ["Perguntas indiretas", "Condução da conversa", "Escuta ativa"],
  },
  {
    name: "Contrainteligência e OPSEC",
    line: "Proteger o que você sabe, reduzir o que expõe e reconhecer riscos antes de entregar o que não devia.",
    points: ["Higiene digital e comportamental", "Exposição indevida", "Informação sensível"],
  },
  {
    name: "Fontes de Informação",
    line: "Buscar, validar e cruzar dados até a informação dispersa virar leitura útil de contexto.",
    points: ["Busca e validação", "Cruzamento de fontes", "Análise de contexto"],
  },
]

const STEPS = [
  {
    verb: "Observar",
    body: "Conhecer o padrão de alguém antes de interpretar qualquer desvio. Um sinal só significa algo comparado ao normal daquela pessoa.",
    from: "Dossiês 01 e 03",
  },
  {
    verb: "Perguntar",
    body: "Conduzir a conversa para a informação aparecer: perguntas abertas, indiretas e escuta, em vez de interrogatório.",
    from: "Dossiês 02 e 04",
  },
  {
    verb: "Avaliar",
    body: "Separar o que você sabe do que você supõe, cruzar fontes e testar a versão que recebeu antes de agir sobre ela.",
    from: "Dossiê 06 e núcleo",
  },
  {
    verb: "Proteger",
    body: "Notar o que você mesmo está entregando, para quem e em que momento. Toda conversa tem dois lados.",
    from: "Dossiê 05",
  },
]

const FAQ = [
  {
    q: "É um curso?",
    a: "É um acervo digital de estudo e consulta: seis dossiês em PDF, um núcleo de ferramentas operacionais e materiais de apoio, numa área de membros. Não há turma, cronograma ou aula ao vivo. Você estuda no seu ritmo e volta ao material quando precisar.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Logo após a confirmação do pagamento, o login, a senha e o link da área de membros chegam em poucos minutos no e-mail usado na compra. Use o e-mail que você realmente acessa.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Doze meses, com as atualizações do período incluídas. O acesso não renova sozinho: no fim do prazo, você decide se continua.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. Todo o acervo é digital e abre no celular. Não precisa instalar nada nem ter conhecimento prévio.",
  },
  {
    q: "Preciso trabalhar com segurança ou investigação?",
    a: "Não. O método serve para qualquer decisão que dependa de pessoas: negociar, contratar, escolher um sócio, avaliar uma informação que chegou até você.",
  },
  {
    q: "Vou aprender a detectar mentiras?",
    a: "Nenhum sinal isolado prova uma mentira, e desconfie de quem promete isso. Você aprende algo mais útil: estabelecer referências, notar inconsistências, formular hipóteses e buscar a informação que falta antes de concluir.",
  },
  {
    q: "E se não for para mim?",
    a: "Você tem 7 dias para ver o material por dentro. Se concluir que não serve, pede o reembolso integral, sem precisar justificar.",
  },
]

/* ───────────────────────────── peças ───────────────────────────── */

/** CTA de compra. Sem `href`, abre o checkout (HeroSpark) em nova aba. */
export function BuyCta({
  label = "Quero acessar o Acervo",
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

/** Linha de fatos da oferta, sempre a mesma em toda a página. */
export function OfferFacts({ className }: { className?: string }) {
  return (
    <p className={cn("tabular text-sm text-tone-3", className)}>
      {ACERVO.parcelado} · Acesso em minutos · 7 dias de garantia
    </p>
  )
}

/** As seis capas em grade 3×2, células com filete sobre o neutro (seguem o tom da superfície). */
export function DossierCovers({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <ul className={cn("grid grid-cols-3 border-t border-l border-tone", className)} aria-label="Os seis dossiês do Acervo">
      {DOSSIER_PRODUCTS.map((p, i) => (
        <li key={p.id} className="border-r border-b border-tone bg-cell p-2.5 sm:p-4">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={p.image}
              alt={DOSSIERS[i] ? `Capa do Dossiê ${String(i + 1).padStart(2, "0")}, ${DOSSIERS[i].name}` : p.imageAlt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 170px, 30vw"
              className="object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

/* ───────────────────────────── seções ───────────────────────────── */

export function SalesHero({ top }: { top?: ReactNode }) {
  return (
    <section className="relative overflow-hidden" aria-labelledby="venda-title">
      <div className="container-site pt-8 pb-16 md:pt-16 md:pb-24">
        {top && <div className="mb-8">{top}</div>}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h1 id="venda-title" className="max-w-[16ch] text-hero text-ink">
              <RiseText text="Toda decisão importante passa por uma pessoa." />{" "}
              <span className="blur-in block text-ink-4" style={{ ["--d" as string]: "420ms" }}>
                Aprenda a <span className="whitespace-nowrap">avaliá-la</span> com método.
              </span>
            </h1>
            <p className="blur-in mt-6 max-w-[54ch] text-lg text-ink-2 md:text-xl" style={{ ["--d" as string]: "560ms" }}>
              O método da inteligência humana (HUMINT), em seis dossiês e um núcleo de ferramentas, para observar,
              perguntar e checar antes de confiar: numa negociação, numa contratação, numa conversa que importa.
            </p>
            <div className="blur-in mt-8 flex flex-col items-start gap-4" style={{ ["--d" as string]: "700ms" }}>
              <BuyCta />
              <OfferFacts />
            </div>
          </div>
          <div className="blur-in lg:col-span-5" style={{ ["--d" as string]: "300ms" }}>
            <DossierCovers priority className="mx-auto max-w-[460px] lg:max-w-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function QuoteStrip() {
  const quotes = [
    "Valeu cada centavo! Pode ser usado para todas as áreas da vida!",
    "Compraria de novo tranquilamente e vou comprar próximos lançamentos.",
    "Mesmo sendo interessado em assuntos semelhantes há mais tempo, o material abre vários insights",
  ]
  return (
    <section aria-label="O que dizem os alunos" className="rule-t rule-b">
      <div className="container-site">
        <ul className="grid md:grid-cols-3">
          {quotes.map((q, i) => (
            <li
              key={q}
              className={cn(
                "flex flex-col justify-between gap-5 border-line py-8 md:px-8 md:py-10",
                i > 0 && "border-t md:border-t-0 md:border-l",
                i === 0 && "md:pl-0",
              )}
              data-reveal
              style={{ ["--d" as string]: `${i * 100}ms` }}
            >
              <blockquote className="text-xl leading-[1.3] font-medium tracking-[-0.03em] text-ink">“{q}”</blockquote>
              <p className="text-sm text-ink-3">Mensagem de aluno</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ProblemSection() {
  const lines: [string, string][] = [
    ["Nervosismo", "não prova mentira."],
    ["Segurança", "não prova verdade."],
    ["Um gesto isolado", "não revela intenção."],
    ["Uma resposta convincente", "não é informação confiável."],
  ]
  return (
    <section id="problema" aria-labelledby="problema-title" className="py-20 md:py-[140px]">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <h2 id="problema-title" className="text-display lg:col-span-6" data-reveal>
            Você decide sobre pessoas o tempo todo. <span className="text-ink-4">Quase sempre pela impressão.</span>
          </h2>
          <div className="space-y-5 text-lg text-ink-2 lg:col-span-6" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <p>
              O candidato responde a tudo com segurança. O fornecedor garante o prazo olhando nos seus olhos. Você
              repara em alguns sinais, forma uma opinião e decide. Em minutos.
            </p>
            <p>
              A impressão funciona até o dia em que não funciona. E quando há uma pessoa do outro lado, o que parece
              óbvio raramente é informação suficiente.
            </p>
          </div>
        </div>
        <ul className="mt-14 border-t border-line md:mt-20">
          {lines.map(([lead, rest], i) => (
            <li
              key={lead}
              className="border-b border-line py-5 text-heading md:py-7 md:text-display"
              data-reveal
              style={{ ["--d" as string]: `${i * 90}ms` }}
            >
              <span className="text-ink">{lead}</span> <span className="text-ink-4">{rest}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** `sources` liga a linha "Dossiês 01 e 03" de cada movimento; a home troca a linha fina e esconde as fontes. */
export function MethodSection({ lede, sources = true }: { lede?: ReactNode; sources?: boolean }) {
  return (
    <section aria-labelledby="metodo-title" className="bg-snow-2 py-20 md:py-[120px]">
      <div className="container-site">
        <div className="grid gap-6 pb-12 lg:grid-cols-12 lg:gap-14 lg:pb-16" data-reveal>
          <h2 id="metodo-title" className="text-display lg:col-span-6">
            O método em quatro movimentos.
          </h2>
          <p className="text-lg text-ink-2 lg:col-span-6 lg:self-end">
            {lede ??
              "Um analista de inteligência não confia na primeira impressão. Ele observa, pergunta, avalia e protege o que sabe, nessa ordem. O Acervo é organizado do mesmo jeito."}
          </p>
        </div>
        <ol className="rule-t grid sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.verb}
              className={cn(
                "flex flex-col border-line pt-8 pb-10 sm:pr-8 lg:px-8 lg:first:pl-0",
                i > 0 && "border-t sm:border-t-0",
                i % 2 === 1 && "sm:border-l sm:pl-8",
                i >= 2 && "sm:border-t lg:border-t-0",
                i === 2 && "lg:border-l",
              )}
              data-reveal
              style={{ ["--d" as string]: `${i * 110}ms` }}
            >
              <span className="tabular text-sm font-medium text-ink-4">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-title text-ink">{step.verb}</h3>
              <p className="mt-3 text-base text-ink-2">{step.body}</p>
              {sources && (
                <p className="mt-auto pt-6 text-sm font-medium tracking-[-0.03em] text-ink uppercase">{step.from}</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function DemoSection() {
  const questions = [
    "Como você ficou sabendo disso?",
    "O que você viu e o que te contaram?",
    "Quem mais acompanhou?",
    "Que parte dá para confirmar ainda hoje?",
  ]
  return (
    <section aria-labelledby="demo-title" className="py-20 md:py-[140px]">
      <div className="container-site">
        <div className="max-w-[760px] pb-10 md:pb-14" data-reveal>
          <h2 id="demo-title" className="text-display">
            Mesma conversa. <span className="text-ink-4">Outra qualidade de informação.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-2">
            Alguém te passa uma informação importante para uma decisão sua. Veja o que acontece com e sem método.
          </p>
        </div>
        <div className="grid border border-line lg:grid-cols-2" data-reveal>
          <div className="flex flex-col p-6 sm:p-10 lg:p-12">
            <h3 className="text-xl leading-[1.25] text-ink">Pela impressão</h3>
            <div className="mt-8 space-y-4">
              <p className="w-fit max-w-[85%] bg-snow-3 px-5 py-4 text-heading text-ink">“Tem certeza?”</p>
              <p className="ml-auto w-fit max-w-[85%] border border-line px-5 py-4 text-heading text-ink-2">“Tenho.”</p>
            </div>
            <p className="mt-auto pt-10 text-lg text-ink-2">
              Você saiu da conversa com uma afirmação e nenhuma informação nova. Está no mesmo lugar em que começou.
            </p>
          </div>
          <div className="night flex flex-col p-6 sm:p-10 lg:p-12">
            <h3 className="text-xl leading-[1.25]">Com método</h3>
            <ul className="mt-6 border-t border-tone">
              {questions.map((q) => (
                <li key={q} className="flex items-start gap-3 border-b border-tone py-4 text-lg text-white">
                  <ArrowRight className="mt-1.5 size-4 shrink-0 text-mist-2" aria-hidden />
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg text-mist">
              Cada resposta vira um dado que dá para checar. Você para de avaliar a resposta e passa a avaliar a
              informação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function InsideSection() {
  return (
    <section id="dossies" aria-labelledby="dentro-title" className="night py-20 md:py-[140px]">
      <div className="container-site">
        <div className="grid gap-6 pb-12 lg:grid-cols-12 lg:gap-14 lg:pb-16" data-reveal>
          <h2 id="dentro-title" className="text-display lg:col-span-6">
            Seis dossiês e um núcleo operacional.
          </h2>
          <p className="text-lg text-mist lg:col-span-6 lg:self-end">
            Cada dossiê cobre uma parte do método. Juntos, vão dos fundamentos do comportamento às ferramentas que você
            leva para a próxima conversa.
          </p>
        </div>
        <ol className="border-t border-tone">
          {DOSSIERS.map((d, i) => {
            const cover = DOSSIER_PRODUCTS[i]
            return (
              <li
                key={d.name}
                className="grid grid-cols-[84px_1fr] gap-x-5 gap-y-4 border-b border-tone py-7 sm:grid-cols-[112px_1fr] sm:gap-x-8 lg:grid-cols-[112px_minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center lg:gap-x-12 lg:py-8"
                data-reveal
              >
                <div className="relative row-span-2 aspect-[3/4] overflow-hidden lg:row-span-1">
                  {cover && <Image src={cover.image} alt="" fill sizes="112px" className="object-cover" />}
                </div>
                <div>
                  <h3 className="text-heading">
                    <span className="tabular mr-2 text-mist-2">{String(i + 1).padStart(2, "0")}</span>
                    {d.name}
                  </h3>
                  <p className="mt-2 text-base text-mist">{d.line}</p>
                </div>
                <ul className="col-start-2 grid gap-2 lg:col-start-3">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-base text-white">
                      <Check className="size-4 shrink-0 text-mist-2" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
          <li
            className="grid grid-cols-[84px_1fr] gap-x-5 gap-y-4 py-7 sm:grid-cols-[112px_1fr] sm:gap-x-8 lg:grid-cols-[112px_minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center lg:gap-x-12 lg:py-8"
            data-reveal
          >
            <div className="row-span-2 flex aspect-[3/4] items-center justify-center border border-tone p-3 lg:row-span-1">
              <DotMatrix grid={ICON_LENS} tone="inverse" fill={0.7} />
            </div>
            <div>
              <h3 className="text-heading">
                <span className="tabular mr-2 text-mist-2">+</span>
                Núcleo de Ferramentas Operacionais
              </h3>
              <p className="mt-2 text-base text-mist">
                Os instrumentos que transformam leitura em rotina: para registrar observações, organizar hipóteses e
                aplicar o método antes de decidir.
              </p>
            </div>
            <ul className="col-start-2 grid gap-2 lg:col-start-3">
              {["Modelos de análise", "Checklists operacionais", "Protocolos de aplicação"].map((pt) => (
                <li key={pt} className="flex items-center gap-2.5 text-base text-white">
                  <Check className="size-4 shrink-0 text-mist-2" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </li>
        </ol>
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 md:mt-16" data-reveal>
          <BuyCta />
          <OfferFacts />
        </div>
      </div>
    </section>
  )
}

export function DeliverySection() {
  const steps = [
    "Compre com o e-mail que você realmente usa.",
    "Receba login e senha em poucos minutos.",
    "Acesse por 12 meses, com as atualizações do período.",
  ]
  return (
    <section aria-labelledby="entrega-title" className="py-20 md:py-[140px]">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6" data-reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] border border-line bg-snow-2 lg:mx-0">
              <Image
                src="/images/pv/members-area-mockup-v3.webp"
                alt="Área de membros do Acervo Tático aberta no celular, com a lista de dossiês"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-contain p-6"
              />
            </div>
          </div>
          <div className="lg:col-span-6" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <h2 id="entrega-title" className="text-display">
              Feito para consultar, <span className="text-ink-4">não para ler uma vez.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-2">
              Tudo fica numa área de membros que abre no celular: os dossiês em PDF, o núcleo de ferramentas e os
              materiais de apoio. Você estuda no seu ritmo e volta ao material antes da próxima conversa importante.
            </p>
            <ol className="mt-8 border-t border-line">
              {steps.map((s, i) => (
                <li key={s} className="grid grid-cols-[2.5rem_1fr] items-baseline border-b border-line py-4 text-lg text-ink">
                  <span className="tabular text-sm font-medium text-ink-4">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <figure className="mt-10 border-l border-line pl-6">
              <blockquote className="text-heading text-ink">
                “Não é um material para ler uma única vez, porém, para ser consultado sempre.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-ink-3">Mensagem de aluno</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FitSection() {
  const forYou = [
    "Você negocia, vende ou fecha acordos.",
    "Você contrata, lidera equipes ou escolhe sócios.",
    "Você entrevista, investiga, apura ou analisa informação.",
    "Você quer proteger o que diz e o que expõe.",
  ]
  const notForYou = [
    "Procura frases prontas para controlar pessoas.",
    "Quer descobrir mentiras por um gesto.",
    "Quer manipular alguém sem que ela perceba.",
  ]
  return (
    <section aria-labelledby="para-quem-title" className="pb-20 md:pb-[140px]">
      <div className="container-site">
        <h2 id="para-quem-title" className="max-w-[20ch] pb-10 text-display md:pb-14" data-reveal>
          Para quem tem uma pessoa do outro lado da mesa.
        </h2>
        <div className="rule-t rule-b grid border-x border-line md:grid-cols-2" data-reveal>
          <div className="border-b border-line p-6 sm:p-10 md:border-r md:border-b-0 lg:p-12">
            <h3 className="text-xl leading-[1.25]">É para você se</h3>
            <ul className="mt-6 space-y-4">
              {forYou.map((t) => (
                <li key={t} className="flex items-start gap-3 text-lg text-ink">
                  <Check className="mt-1 size-5 shrink-0" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-snow-2 p-6 sm:p-10 lg:p-12">
            <h3 className="text-xl leading-[1.25]">Não é para você se</h3>
            <ul className="mt-6 space-y-4">
              {notForYou.map((t) => (
                <li key={t} className="flex items-start gap-3 text-lg text-ink-2">
                  <X className="mt-1 size-5 shrink-0 text-ink" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function OfferSection() {
  const { label, value } = splitParcelado(ACERVO.parcelado)
  return (
    <section id="oferta" aria-labelledby="oferta-title" className="py-20 md:py-[140px]">
      <div className="container-site">
        <div className="grid border border-line lg:grid-cols-12" data-reveal>
          <div className="p-6 sm:p-10 lg:col-span-7 lg:p-14">
            <h2 id="oferta-title" className="text-display">
              Acervo Tático HUMINT
            </h2>
            <p className="mt-3 text-lg text-ink-2">O método inteiro, num lugar só.</p>
            <ul className="mt-10 border-t border-line">
              <li className="flex items-start gap-3 border-b border-line py-5 text-lg text-ink-2">
                <Check className="mt-1 size-5 shrink-0 text-ink" aria-hidden />
                <span>
                  <strong className="font-medium text-ink">6 dossiês em PDF:</strong>{" "}
                  {DOSSIERS.map((d) => d.name).join(", ")}.
                </span>
              </li>
              <li className="flex items-start gap-3 border-b border-line py-5 text-lg text-ink-2">
                <Check className="mt-1 size-5 shrink-0 text-ink" aria-hidden />
                <span>
                  <strong className="font-medium text-ink">Núcleo de Ferramentas Operacionais:</strong> modelos de análise,
                  checklists e protocolos de aplicação.
                </span>
              </li>
              <li className="flex items-start gap-3 border-b border-line py-5 text-lg text-ink-2">
                <Check className="mt-1 size-5 shrink-0 text-ink" aria-hidden />
                <span>
                  <strong className="font-medium text-ink">Guia de Observação de Linguagem Corporal</strong> e o módulo
                  “Comece por aqui”.
                </span>
              </li>
              <li className="flex items-start gap-3 py-5 text-lg text-ink-2">
                <Check className="mt-1 size-5 shrink-0 text-ink" aria-hidden />
                <span>
                  <strong className="font-medium text-ink">12 meses de acesso</strong> à área de membros, com as
                  atualizações do período.
                </span>
              </li>
            </ul>
          </div>
          <div className="night flex flex-col p-6 sm:p-10 lg:col-span-5 lg:p-14">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden">
              <Image src={ACERVO.image} alt={ACERVO.imageAlt} fill sizes="180px" className="object-cover" />
            </div>
            <p className="mt-10 text-base text-mist">Acesso completo por</p>
            <p className="tabular mt-1">
              <span className="text-lg text-mist">{label} </span>
              <span className="text-hero whitespace-nowrap text-white">{value}</span>
            </p>
            <p className="tabular mt-2 text-base text-mist">
              ou <span className="text-white">{ACERVO.preco} à vista</span> · Pix ou cartão
            </p>
            <BuyCta className="mt-8 w-full" />
            <p className="mt-8 border-t border-tone pt-6 text-base text-mist">
              <strong className="font-medium text-white">Garantia incondicional de 7 dias.</strong> Se o material não
              servir para você, devolvemos o valor integral. Sem justificativa.
            </p>
            <p className="mt-3 text-sm text-mist-2">Pagamento seguro pela HeroSpark. Acesso enviado por e-mail.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-snow-2 py-20 md:py-[120px]">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-14">
        <h2 id="faq-title" className="text-display lg:col-span-4" data-reveal>
          Perguntas antes de decidir.
        </h2>
        <div className="border-t border-l border-line bg-snow lg:col-span-8" data-reveal style={{ ["--d" as string]: "120ms" }}>
          {FAQ.map((item) => (
            <details key={item.q} className="group border-r border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 md:px-8 [&::-webkit-details-marker]:hidden">
                <span className="text-lg leading-[1.3] font-medium tracking-[-0.03em] text-ink">{item.q}</span>
                <span className="inline-flex size-10 shrink-0 items-center justify-center border border-line text-ink transition-colors group-hover:border-ink">
                  <Plus className="size-4 transition-transform duration-300 group-open:rotate-45" aria-hidden />
                </span>
              </summary>
              <p className="max-w-[62ch] px-6 pb-6 text-lg text-ink-2 md:px-8">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Fechamento escuro com o relevo de pontos. */
export function FinalCta({ cta }: { cta?: ReactNode }) {
  return (
    <section className="night relative overflow-hidden" aria-labelledby="fechamento-title">
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 w-[150%] max-w-none sm:w-full lg:w-[70%]">
        <DotMatrix grid={terrainPattern(64, 30, 11)} tone="dark" twinkle={22} fill={0.6} />
      </div>
      <div className="container-site relative py-20 md:py-[140px]">
        <div className="max-w-[820px] pb-40 sm:pb-56 lg:pb-0" data-reveal>
          <h2 id="fechamento-title" className="text-hero">
            A próxima decisão importante vai passar por uma pessoa.{" "}
            <span className="text-mist-2">Decida com método.</span>
          </h2>
          <div className="mt-10 flex flex-col items-start gap-4">
            {cta ?? <BuyCta />}
            <OfferFacts />
          </div>
        </div>
      </div>
    </section>
  )
}

/** Página de vendas inteira. `top` entra acima do hero (ex.: trilha de navegação). */
export function AcervoLetter({ top }: { top?: ReactNode }) {
  return (
    <>
      <SalesHero top={top} />
      <QuoteStrip />
      <ProblemSection />
      <MethodSection />
      <DemoSection />
      <InsideSection />
      <DeliverySection />
      <FitSection />
      <TestimonialsStrip id="prova" />
      <OfferSection />
      <FaqSection />
      <FinalCta />
    </>
  )
}
