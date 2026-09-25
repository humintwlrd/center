import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  BookOpen,
  ListChecks,
  ClipboardCheck,
  RefreshCw,
  Lock,
  CalendarClock,
  ShieldAlert,
  ShieldCheck,
  Fingerprint,
  Bell,
  Scale,
} from "lucide-react"
import { Breadcrumbs } from "@/components/site/breadcrumbs"
import type { Product } from "@/lib/products"

/**
 * Página de vendas do Acervo Tático, em /academy/acervo-tatico.
 * Conteúdo adaptado da humint.click para o design system do site.
 */

const MARQUEE = [
  "Behavioral baselining",
  "Cognitive interviewing",
  "Statement analysis",
  "Microexpression mapping",
  "Construção de contexto",
  "OPSEC protocols",
  "Red team thinking",
  "Pattern of life",
  "Source validation",
  "Counter-elicitation",
]

const SITUATION = [
  "Você provavelmente já viveu isso em uma negociação, reunião, venda, parceria ou conversa decisiva. Tudo parecia fazer sentido. A proposta era aceitável. O clima estava bom. Ninguém levantou a voz, ninguém pressionou de forma óbvia, ninguém pareceu estar manipulando nada.",
  "Mas depois, quando a euforia passou e a decisão começou a produzir consequências, veio a sensação de que você perdeu espaço. Aceitou algo ruim demais. Cedeu antes da hora. Concordou com uma lógica que parecia correta no momento, mas que não sustentava a realidade depois.",
  "Isso raramente acontece porque a outra pessoa é mais inteligente. Acontece porque ela estava lendo a situação com mais precisão. Enquanto você prestava atenção apenas no que estava sendo dito, alguém observava o ritmo da conversa, seus sinais de hesitação, seus pontos de interesse e o momento exato em que você começava a justificar para si mesmo uma decisão que ainda não estava madura.",
]

const POSITIONS = [
  { who: "Quem é conduzido", when: "percebe depois." },
  { who: "Quem negocia com consciência", when: "percebe durante." },
  { who: "Quem conduz", when: "percebe antes." },
]

const MODULES = [
  {
    tag: "Dossiê 01",
    title: "Mecânicas do Comportamento",
    body: "Entenda os padrões que influenciam percepção, decisão e reação humana. A base para perceber por que pessoas cedem, resistem, justificam escolhas e mudam de posição.",
    bulletsLabel: "O que você treina",
    bullets: [
      "Leitura de padrões comportamentais",
      "Identificação de gatilhos de decisão",
      "Compreensão de vieses e respostas automáticas",
    ],
  },
  {
    tag: "Dossiê 02",
    title: "Comunicação e Influência",
    body: "Aprenda como mensagens são interpretadas, como decisões são conduzidas e como ajustar linguagem, ritmo e enquadramento sem depender de improviso.",
    bulletsLabel: "O que você treina",
    bullets: ["Clareza na comunicação", "Construção de confiança", "Percepção de intenção e influência"],
  },
  {
    tag: "Dossiê 03",
    title: "Linguagem Não-verbal",
    body: "Observe sinais físicos, expressões, ritmo, postura e microajustes de comportamento sem cair em leitura fantasiosa ou interpretação rasa.",
    bulletsLabel: "O que você treina",
    bullets: ["Leitura de congruência", "Observação de tensão e conforto", "Percepção de mudanças no comportamento"],
  },
  {
    tag: "Dossiê 04",
    title: "Elicitação Ética",
    body: "Conduza conversas para obter informação relevante por meio de perguntas, contexto e escuta ativa, sem pressão, exposição ou manipulação.",
    bulletsLabel: "O que você treina",
    bullets: ["Perguntas indiretas", "Condução conversacional", "Extração ética de informação"],
  },
  {
    tag: "Dossiê 05",
    title: "Contrainteligência & OPSEC",
    body: "Aprenda a proteger informações, reduzir exposição, reconhecer riscos e evitar que detalhes sensíveis sejam entregues sem necessidade.",
    bulletsLabel: "O que você treina",
    bullets: ["Higiene digital e comportamental", "Detecção de exposição indevida", "Proteção de informação sensível"],
  },
  {
    tag: "Dossiê 06",
    title: "Fontes de Informação",
    body: "Organize caminhos de busca, valide dados, relacione fontes e transforme informação dispersa em leitura útil de contexto.",
    bulletsLabel: "O que você treina",
    bullets: ["Busca e validação de dados", "Cruzamento de fontes", "Análise de contexto"],
  },
  {
    tag: "Núcleo Operacional",
    title: "Ferramentas Operacionais",
    body: "Use instrumentos práticos para estruturar análise, registrar observações, organizar hipóteses e aplicar o repertório dos dossiês com mais clareza.",
    bulletsLabel: "O que você recebe",
    bullets: ["Modelos de análise", "Checklists operacionais", "Protocolos de aplicação"],
    highlight: true,
  },
]

const PLATFORM = [
  { icon: BookOpen, title: "Dossiês completos", body: "Materiais em PDF para estudo profundo, revisão e consulta." },
  { icon: ListChecks, title: "Protocolos práticos", body: "Estruturas para aplicar leitura, observação e análise com método." },
  {
    icon: ClipboardCheck,
    title: "Checklists e modelos",
    body: "Ferramentas para organizar hipóteses, registrar sinais e revisar decisões.",
  },
  { icon: RefreshCw, title: "Atualizações", body: "Novas liberações e melhorias durante o período de acesso." },
]

const STEPS = [
  {
    n: "01",
    title: "Compra com seu e-mail principal",
    body: "Use o e-mail que você realmente acessa. Ele será usado para liberar sua entrada na plataforma.",
  },
  {
    n: "02",
    title: "Recebe as credenciais",
    body: "Em poucos minutos, os dados de acesso chegam no e-mail usado na compra.",
  },
  {
    n: "03",
    title: "Consulta no seu ritmo",
    body: "Os materiais ficam disponíveis na área de membros para estudo, revisão e consulta durante o período de acesso.",
  },
]

const FOR_WHOM = [
  "Negociadores, fundadores, executivos e líderes que precisam tomar decisões em ambientes de pressão.",
  "Advogados, investigadores, analistas, consultores e profissionais que lidam com informação sensível.",
  "Vendedores complexos, recrutadores e estrategistas que precisam compreender pessoas, interesses e contexto antes de agir.",
  "Profissionais que precisam entrevistar, negociar, avaliar, proteger e decidir com mais precisão.",
]

const NOT_FOR = [
  "Quem procura hack mental, truque de sedução, coação ou manual de manipulação.",
  "Quem quer frases prontas no lugar de método, prática e leitura de contexto.",
  "Quem confunde inteligência humana com paranoia.",
  "Quem quer aprender a manipular, e não a decidir melhor.",
]

const INCLUDED = [
  "12 meses de acesso à área de membros.",
  "7 entregas principais: 6 dossiês fundamentais + núcleo de ferramentas operacionais.",
  "Materiais auxiliares: checklists, roteiros, modelos de análise e protocolos de aplicação.",
  "Atualizações incluídas durante o período de acesso.",
  "Garantia incondicional de 7 dias.",
]

const FAQ = [
  {
    q: "Por que o instrutor é anônimo?",
    a: "Inteligência humana se exerce melhor em discrição. O foco está no método, nos dossiês e na aplicação — não na figura de quem ensina.",
  },
  {
    q: "Funciona para mim, que não sou da área?",
    a: "Sim. O acervo foi escrito para quem decide, negocia e lida com pessoas no dia a dia. Não exige formação prévia em inteligência ou investigação: você começa pelos fundamentos e avança de forma progressiva.",
  },
  {
    q: "Isso é ético e legal?",
    a: "Sim. O foco é leitura de contexto, comunicação consciente, proteção de informação e tomada de decisão. Não há nada sobre coação, fraude, invasão ou manipulação de pessoas.",
  },
  {
    q: "Isso não é só linguagem corporal de internet?",
    a: "Não. Linguagem não-verbal é apenas uma camada. O núcleo é critério: comportamento, comunicação, elicitação, proteção de informação, fontes e aplicação prática — sem leitura fantasiosa.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação do pagamento, as credenciais chegam em poucos minutos no e-mail usado na compra. Use sempre o e-mail principal que você realmente acessa.",
  },
  {
    q: "O acesso expira? E depois?",
    a: "O acesso é de 12 meses à área de membros, com as atualizações incluídas no período. Você estuda, revisa e consulta o material no seu ritmo durante esse tempo.",
  },
  {
    q: "E se não for para mim?",
    a: "Você tem 7 dias de garantia incondicional. Dentro do prazo, basta solicitar o reembolso — sem fricção e sem justificativa.",
  },
  {
    q: "Preciso de algum pré-requisito ou equipamento?",
    a: "Não. Basta um dispositivo com acesso à internet para entrar na área de membros. Nenhum conhecimento prévio é necessário para começar.",
  },
]

const PROTECTION = [
  { icon: Fingerprint, title: "Identificação", body: "Cada acesso é nominal e marcado. A origem de qualquer cópia é determinável." },
  { icon: Bell, title: "Notificação", body: "Remoção imediata, derrubada de domínios, plataformas e meios de pagamento envolvidos." },
  { icon: Scale, title: "Responsabilização", body: "Medidas cíveis e criminais cabíveis, com perdas, danos e ressarcimento de custos." },
]

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-tone">
      <span className="text-tone-muted">{n}</span>
      <span aria-hidden className="h-px w-8 bg-current opacity-30" />
      {children}
    </p>
  )
}

function PriceLine({ parcelado, className }: { parcelado: string; className?: string }) {
  return (
    <p className={`font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-tone-muted ${className ?? ""}`}>
      {parcelado} · Cartão · Pix · 7 dias de garantia
    </p>
  )
}

export function AcervoDetail({ product }: { product: Product }) {
  const checkout = product.checkoutUrl
  const parcelado = product.parcelado // "12x de R$ 93,09"
  const [parcelaLabel, ...parcelaRest] = parcelado.split(" de ")

  return (
    <div className="bg-paper">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="surface-deep border-b border-line-dark">
        <div className="container-editorial pt-8 pb-14 md:pt-10 md:pb-20">
          <Breadcrumbs
            tone="deep"
            items={[
              { label: "Academy", href: "/academy" },
              { label: "Acervo Tático", href: `/academy/${product.id}` },
            ]}
          />

          <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-8 flex flex-wrap items-center gap-2">
                <span className="stamp text-alert-bright">
                  <Lock className="h-3 w-3" aria-hidden /> Acervo confidencial
                </span>
                <span className="stamp text-fog-muted">Acesso limitado</span>
              </div>
              <p className="kicker">Conhecimento prático em HUMINT</p>
              <h1 className="mt-5 font-display text-display-xl font-medium text-fog">
                O primeiro e único acervo tático de Inteligência Humana do Brasil.
              </h1>
              <p className="mt-6 max-w-[58ch] text-lede text-fog-muted">
                Aprenda a identificar intenções ocultas, extrair informações sem resistência e antecipar
                comportamentos antes que eles se revelem. Técnicas de obtenção de dados através de pessoas,
                usadas em operações reais — aplicadas à negociação, influência, leitura comportamental e
                proteção contra manipulação.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a href="#oferta" className="btn btn-primary btn-lg">
                  Acessar o acervo
                  <ArrowRight aria-hidden />
                </a>
                <PriceLine parcelado={parcelado} />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden border border-line-dark bg-deep-2 lg:max-w-none">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 480px, 80vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Faixa de termos ───────────────────────────────────── */}
      <div className="surface-deep-2 overflow-hidden border-b border-line-dark py-3.5" aria-hidden>
        <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-8 whitespace-nowrap will-change-transform">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-fog-muted"
            >
              {t}
              <span className="h-1.5 w-1.5 bg-brand-bright" />
            </span>
          ))}
        </div>
      </div>

      {/* ── 01. A situação real ────────────────────────────────── */}
      <section className="border-b border-line" aria-labelledby="situacao-title">
        <div className="container-editorial grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionLabel n="01">A situação real</SectionLabel>
              <h2 id="situacao-title" className="mt-5 font-display text-display-lg font-medium text-ink">
                Quem conduz percebe antes.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex max-w-[62ch] flex-col gap-5 text-lg leading-relaxed text-ink-soft">
              {SITUATION.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <blockquote className="my-12 max-w-[34ch] border-l-2 border-brand pl-6 font-display text-display-sm font-medium italic text-ink">
              A pior posição é sair de uma situação convencido de que decidiu bem, quando na prática você apenas
              reagiu melhor ao roteiro que alguém construiu para você.
            </blockquote>

            <ol className="grid gap-px border border-line bg-line sm:grid-cols-3">
              {POSITIONS.map((p, i) => (
                <li key={p.who} className={i === 2 ? "surface-deep p-6" : "bg-paper-strong p-6"}>
                  <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-tone-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-display text-xl font-medium text-tone">{p.who}</p>
                  <p className="mt-1 text-[0.9375rem] text-tone-muted">{p.when}</p>
                </li>
              ))}
            </ol>

            <p className="mt-12 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
              O Acervo Tático foi construído para treinar essa percepção. Para que você deixe de entrar em
              interações importantes apenas reagindo ao que aparece e passe a observar o que está sendo construído
              diante de você.
            </p>

            <aside className="mt-10 max-w-[62ch] border-l-2 border-brand bg-paper-strong p-6">
              <p className="eyebrow-brand mb-2">Atenção</p>
              <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                Não se trata de manipular pessoas. Trata-se de não ser ingênuo em ambientes onde percepção,
                linguagem, comportamento e decisão estão sempre em jogo. Em qualquer interação relevante, alguém
                ocupa a posição de leitura — e quando essa pessoa não é você, normalmente você só entende o custo
                depois.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 02. A arquitetura ──────────────────────────────────── */}
      <section id="dossie" className="border-b border-line bg-paper-strong" aria-labelledby="arquitetura-title">
        <div className="container-editorial py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <SectionLabel n="02">A arquitetura</SectionLabel>
              <h2 id="arquitetura-title" className="mt-5 font-display text-display-lg font-medium text-ink">
                Seis fundamentos. Um núcleo operacional. Um sistema para ler melhor interações humanas.
              </h2>
            </div>
            <p className="max-w-[60ch] text-[0.9375rem] leading-relaxed text-ink-soft md:text-base lg:col-span-6 lg:pt-10">
              Cada dossiê desenvolve uma camada específica da terceira posição: compreender comportamento,
              calibrar comunicação, observar sinais, conduzir conversas, proteger informação e organizar fontes —
              até transformar conhecimento em prática. Não é uma sequência aleatória de conteúdos: é um mapa
              progressivo para formar percepção, critério e precisão.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <article
                key={m.title}
                className={`flex flex-col p-7 md:p-8 ${m.highlight ? "surface-deep" : "bg-paper-strong"}`}
              >
                <p className="eyebrow-brand">{m.tag}</p>
                <h3 className="mt-4 font-display text-display-sm font-medium text-tone">{m.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-tone-muted">{m.body}</p>
                <p className="eyebrow mt-6">{m.bulletsLabel}</p>
                <ul className="mt-3 flex flex-col gap-2 text-[0.9375rem]">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check
                        className={`mt-1 h-4 w-4 shrink-0 ${m.highlight ? "text-brand-bright" : "text-brand"}`}
                        aria-hidden
                      />
                      <span className="text-tone">{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <div className="hidden bg-paper-strong p-8 md:flex md:flex-col md:justify-end lg:col-span-2">
              <p className="max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink-soft">
                Cada módulo cumpre uma função dentro do sistema. Primeiro você entende o comportamento; depois
                aprende a observar a interação, conduzir conversas, proteger informação e transformar leitura em
                ação.
              </p>
              <a href="#oferta" className="link-arrow mt-6">
                Ver a oferta completa
                <ArrowRight aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. A plataforma + acesso ──────────────────────────── */}
      <section className="border-b border-line" aria-labelledby="plataforma-title">
        <div className="container-editorial py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <SectionLabel n="03">A plataforma</SectionLabel>
              <h2 id="plataforma-title" className="mt-5 font-display text-display-lg font-medium text-ink">
                O que você recebe dentro da plataforma.
              </h2>
            </div>
            <p className="max-w-[60ch] text-[0.9375rem] leading-relaxed text-ink-soft md:text-base lg:col-span-6 lg:pt-10">
              O Acervo não é uma sequência de aulas soltas. É uma estrutura de consulta, estudo e aplicação. Você
              acessa os dossiês e materiais auxiliares em ordem progressiva, cada parte desenvolvendo uma camada de
              leitura humana.
            </p>
          </div>

          <dl className="mt-14 grid gap-px border-y border-ink bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORM.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-paper p-6 lg:px-6 lg:py-8">
                  <dt className="flex items-center gap-2.5 font-display text-xl font-medium text-ink">
                    <Icon className="h-4 w-4 text-brand" aria-hidden />
                    {card.title}
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{card.body}</dd>
                </div>
              )
            })}
          </dl>

          <div className="mt-20">
            <SectionLabel n="04">Como o acesso funciona</SectionLabel>
            <ol className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((step) => (
                <li key={step.n} className="border-t border-line-strong pt-6">
                  <span className="font-display text-5xl font-medium leading-none text-brand">{step.n}</span>
                  <h3 className="mt-5 font-display text-xl font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 05. Para quem / Não é para ─────────────────────────── */}
      <section className="border-b border-line bg-paper-strong" aria-label="Para quem é o Acervo">
        <div className="container-editorial grid gap-px py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel n="05">Para quem</SectionLabel>
            <h2 className="mt-5 font-display text-display-md font-medium text-ink">
              Para profissionais que dependem de leitura humana em decisões reais.
            </h2>
            <ul className="mt-8 border-t border-line">
              {FOR_WHOM.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-ink-soft"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-14 lg:mt-0">
            <SectionLabel n="06">Não é para</SectionLabel>
            <h2 className="mt-5 font-display text-display-md font-medium text-ink">
              Não é para quem procura poder sobre os outros.
            </h2>
            <ul className="mt-8 border-t border-line">
              {NOT_FOR.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-ink-muted"
                >
                  <X className="mt-1 h-4 w-4 shrink-0 text-alert" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 07. Ética e limites ────────────────────────────────── */}
      <section className="surface-deep" aria-labelledby="etica-title">
        <div className="container-editorial grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel n="07">Ética e limites</SectionLabel>
            <h2 id="etica-title" className="mt-5 font-display text-display-lg font-medium text-fog">
              Inteligência humana sem manipulação barata.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="max-w-[60ch] text-lg leading-relaxed text-fog-muted">
              O Acervo Tático não ensina coação, fraude, invasão, exposição ou exploração de vulnerabilidades. O
              foco é leitura de contexto, comunicação consciente, proteção informacional e tomada de decisão em
              interações humanas.
            </p>
            <p className="mt-8 max-w-[40ch] border-l-2 border-brand-bright pl-6 font-display text-display-sm font-medium italic text-fog">
              O operador não vence porque engana melhor. Vence porque percebe melhor, decide melhor e preserva
              confiança enquanto atua.
            </p>
          </div>
        </div>
      </section>

      {/* ── 08. Oferta ─────────────────────────────────────────── */}
      <section id="oferta" className="border-b border-line bg-paper-deep" aria-labelledby="oferta-title">
        <div className="container-editorial py-16 md:py-24">
          <SectionLabel n="08">A oferta</SectionLabel>
          <h2 id="oferta-title" className="mt-5 max-w-3xl font-display text-display-lg font-medium text-ink">
            Tudo incluso. Em um único pacote.
          </h2>

          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-12">
            <div className="border-t-2 border-t-brand bg-paper-strong p-8 md:p-10 lg:col-span-5">
              <p className="eyebrow-brand">Acesso por 12 meses</p>
              <p className="mt-5 flex flex-wrap items-baseline gap-x-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                  {parcelaLabel} de
                </span>
                <span className="font-display text-6xl font-medium leading-none text-ink">
                  {parcelaRest.join(" de ")}
                </span>
              </p>
              <p className="mt-3 text-sm text-ink-muted">ou {product.preco} à vista · Pix ou cartão</p>
              <a
                href={checkout}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg mt-8 w-full"
              >
                Garantir acesso agora
                <ArrowUpRight aria-hidden />
              </a>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-muted">
                <li className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand" aria-hidden /> 7 dias de garantia
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <CalendarClock className="h-3.5 w-3.5 text-brand" aria-hidden /> 12 meses
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-brand" aria-hidden /> Pagamento seguro
                </li>
              </ul>
            </div>

            <div className="bg-paper-strong p-8 md:p-10 lg:col-span-7">
              <p className="eyebrow">Conteúdo do acervo</p>
              <h3 className="mt-2 font-display text-display-sm font-medium text-ink">Acervo Tático HUMINT</h3>
              <ul className="mt-6 border-t border-line">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-ink-soft"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border border-line bg-paper-strong p-7 sm:flex-row sm:items-start md:p-8">
            <ShieldCheck className="h-7 w-7 shrink-0 text-brand" aria-hidden />
            <div>
              <p className="eyebrow-brand mb-1">Garantia incondicional</p>
              <h3 className="font-display text-xl font-medium text-ink">7 dias para testar. Risco zero.</h3>
              <p className="mt-2 max-w-[70ch] text-[0.9375rem] leading-relaxed text-ink-soft">
                Se em uma semana o material não for para você, você pode solicitar o reembolso dentro do prazo de
                garantia. Sem fricção e sem justificativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="border-b border-line" aria-labelledby="faq-title">
        <div className="container-editorial grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionLabel n="09">Perguntas frequentes</SectionLabel>
            <h2 id="faq-title" className="mt-5 font-display text-display-lg font-medium text-ink">
              Antes de decidir.
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-muted">
              Ficou alguma dúvida?{" "}
              <Link href="/suporte" className="text-ink underline decoration-brand underline-offset-4 hover:text-brand">
                Fale com o suporte
              </Link>
              .
            </p>
          </div>
          <div className="border-t border-ink lg:col-span-8">
            {FAQ.map((item, i) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl font-medium text-ink transition-colors group-hover:text-brand">
                      {item.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="relative mt-2 h-3 w-3 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-ink after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-ink after:transition-transform group-open:after:scale-y-0"
                  />
                </summary>
                <p className="max-w-[62ch] pb-6 pl-9 text-[0.9375rem] leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aviso de segurança ─────────────────────────────────── */}
      <section className="surface-deep" aria-labelledby="aviso-title">
        <div className="container-editorial py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="stamp text-alert-bright">
                <ShieldAlert className="h-3.5 w-3.5" aria-hidden />
                Aviso de segurança · Material protegido
              </p>
              <h2 id="aviso-title" className="mt-6 font-display text-display-md font-medium text-fog">
                Cada linha deste material está catalogada, datada e rastreável até a fonte.
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-fog-muted lg:col-span-6 lg:pt-12">
              <p>
                Todo o conteúdo do Mundo da HUMINT — marca, identidade, copy, narrativa, estrutura de página,
                dossiês, protocolos, ferramentas e qualquer material entregue na área de membros — é propriedade
                intelectual exclusiva e está protegido por direito autoral, direito de marca e legislação de
                concorrência desleal.
              </p>
              <p>
                Cópia, clonagem, reprodução, adaptação, revenda, redistribuição ou engenharia reversa não passa
                despercebida. Documentos carregam marcações ocultas e identificadores individuais por operador.
                Quando um vazamento aparece, ele aponta de volta para quem o originou. Não é ameaça. É procedimento.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-3">
            {PROTECTION.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="bg-deep p-6">
                  <Icon className="h-5 w-5 text-brand-bright" aria-hidden />
                  <p className="mt-4 font-display text-lg font-medium text-fog">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fog-muted">{p.body}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-14 flex flex-col gap-8 border-t border-line-dark pt-10 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[52ch] font-display text-display-sm font-medium italic text-fog">
              Quem estuda este material aprende a fechar a própria pegada. Quem tenta copiá-lo, ironicamente, deixa
              a pegada mais visível de todas.
            </p>
            <div className="flex flex-col gap-3 lg:items-end">
              <a href={checkout} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Garantir meu acesso
                <ArrowUpRight aria-hidden />
              </a>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-fog-muted">
                {parcelado} · Cartão e Pix
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
