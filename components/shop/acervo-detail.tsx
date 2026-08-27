import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Brain,
  MessageSquare,
  ScanFace,
  Ear,
  ShieldCheck,
  Database,
  Wrench,
  BookOpen,
  ListChecks,
  ClipboardCheck,
  RefreshCw,
  Lock,
  CalendarClock,
  ShieldAlert,
  Fingerprint,
  Bell,
  Scale,
} from "lucide-react"
import type { Product } from "@/lib/products"

/**
 * Página de detalhe do Acervo Tático — conteúdo adaptado da humint.click
 * para o design do mundodahumint.com. Renderizada em /academy/acervo-tatico.
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
    icon: Brain,
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
    icon: MessageSquare,
    tag: "Dossiê 02",
    title: "Comunicação e Influência",
    body: "Aprenda como mensagens são interpretadas, como decisões são conduzidas e como ajustar linguagem, ritmo e enquadramento sem depender de improviso.",
    bulletsLabel: "O que você treina",
    bullets: ["Clareza na comunicação", "Construção de confiança", "Percepção de intenção e influência"],
  },
  {
    icon: ScanFace,
    tag: "Dossiê 03",
    title: "Linguagem Não-verbal",
    body: "Observe sinais físicos, expressões, ritmo, postura e microajustes de comportamento sem cair em leitura fantasiosa ou interpretação rasa.",
    bulletsLabel: "O que você treina",
    bullets: ["Leitura de congruência", "Observação de tensão e conforto", "Percepção de mudanças no comportamento"],
  },
  {
    icon: Ear,
    tag: "Dossiê 04",
    title: "Elicitação Ética",
    body: "Conduza conversas para obter informação relevante por meio de perguntas, contexto e escuta ativa, sem pressão, exposição ou manipulação.",
    bulletsLabel: "O que você treina",
    bullets: ["Perguntas indiretas", "Condução conversacional", "Extração ética de informação"],
  },
  {
    icon: ShieldCheck,
    tag: "Dossiê 05",
    title: "Contrainteligência & OPSEC",
    body: "Aprenda a proteger informações, reduzir exposição, reconhecer riscos e evitar que detalhes sensíveis sejam entregues sem necessidade.",
    bulletsLabel: "O que você treina",
    bullets: ["Higiene digital e comportamental", "Detecção de exposição indevida", "Proteção de informação sensível"],
  },
  {
    icon: Database,
    tag: "Dossiê 06",
    title: "Fontes de Informação",
    body: "Organize caminhos de busca, valide dados, relacione fontes e transforme informação dispersa em leitura útil de contexto.",
    bulletsLabel: "O que você treina",
    bullets: ["Busca e validação de dados", "Cruzamento de fontes", "Análise de contexto"],
  },
  {
    icon: Wrench,
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

export function AcervoDetail({ product }: { product: Product }) {
  const checkout = product.checkoutUrl
  const parcelado = product.parcelado // "12x de R$ 93,09"

  return (
    <div className="bg-paper">
      {/* Trilha */}
      <section className="bg-deep">
        <div className="container-editorial pt-6">
          <nav className="font-mono text-[11px] uppercase tracking-widest text-warm/70" aria-label="Trilha">
            <Link href="/academy" className="hover:text-gold">
              Academy
            </Link>
            <span className="px-2 text-warm/40" aria-hidden>
              /
            </span>
            <span className="text-warm">Acervo Tático</span>
          </nav>
        </div>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(var(--color-paper) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="container-editorial relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:py-20">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 border border-gold/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
                  <Lock className="h-3 w-3" aria-hidden /> Acervo confidencial
                </span>
                <span className="inline-flex items-center border border-warm/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-warm/80">
                  Limitado
                </span>
              </div>
              <p className="eyebrow-gold mb-4">Conhecimento prático em HUMINT</p>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper text-balance sm:text-5xl">
                O primeiro e único acervo tático de Inteligência Humana do Brasil.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-warm text-pretty md:text-lg">
                Aprenda a identificar intenções ocultas, extrair informações sem resistência e antecipar
                comportamentos antes que eles se revelem. Técnicas de obtenção de dados através de pessoas,
                usadas em operações reais — aplicadas à negociação, influência, leitura comportamental e
                proteção contra manipulação.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#oferta"
                  className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
                >
                  Acessar o acervo
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <span className="font-mono text-xs uppercase tracking-widest text-warm/80">
                  {parcelado} · 7 dias de garantia
                </span>
              </div>
            </div>

            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden border border-gold/25 bg-deep-2 lg:max-w-md">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.imageAlt}
                fill
                sizes="(min-width: 1024px) 440px, 80vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee de termos ──────────────────────────────────── */}
      <div className="overflow-hidden border-y border-line bg-ink py-3">
        <style>{`@keyframes acervoMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
        <div
          className="flex w-max items-center gap-6 whitespace-nowrap will-change-transform"
          style={{ animation: "acervoMarquee 32s linear infinite" }}
        >
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-warm/70">
              {t}
              <span className="text-gold" aria-hidden>
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── 02. A situação real ────────────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">/ 02. A situação real</p>
            <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {SITUATION.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <blockquote className="my-10 border-l-2 border-gold pl-6 font-display text-xl font-medium leading-snug text-ink text-balance">
              A pior posição é sair de uma situação convencido de que decidiu bem, quando na prática você apenas
              reagiu melhor ao roteiro que alguém construiu para você.
            </blockquote>

            <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
              {POSITIONS.map((p) => (
                <div key={p.who} className="bg-paper-strong p-6">
                  <p className="font-display text-lg font-semibold text-ink">{p.who}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.when}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-[17px] leading-relaxed text-ink-soft">
              O Acervo Tático foi construído para treinar essa percepção. Para que você deixe de entrar em
              interações importantes apenas reagindo ao que aparece e passe a observar o que está sendo construído
              diante de você.
            </p>

            <div className="mt-8 border-l-2 border-gold bg-paper-deep p-6">
              <p className="eyebrow-gold mb-2">Atenção</p>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Não se trata de manipular pessoas. Trata-se de não ser ingênuo em ambientes onde percepção,
                linguagem, comportamento e decisão estão sempre em jogo. Em qualquer interação relevante, alguém
                ocupa a posição de leitura — e quando essa pessoa não é você, normalmente você só entende o custo
                depois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. A arquitetura ──────────────────────────────────── */}
      <section id="dossie" className="hairline-b bg-paper-deep scroll-mt-20">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">/ 03. A arquitetura</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink text-balance md:text-4xl">
              Seis fundamentos. Um núcleo operacional. Um sistema para ler melhor interações humanas.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft text-pretty md:text-base">
              Cada dossiê desenvolve uma camada específica da terceira posição: compreender comportamento,
              calibrar comunicação, observar sinais, conduzir conversas, proteger informação e organizar fontes —
              até transformar conhecimento em prática. Não é uma sequência aleatória de conteúdos: é um mapa
              progressivo para formar percepção, critério e precisão.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.title}
                  className={`flex flex-col p-7 ${m.highlight ? "bg-ink text-paper" : "bg-paper-strong"}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center ${
                        m.highlight ? "bg-gold text-on-gold" : "bg-paper-deep text-gold-active"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span
                      className={`font-mono text-[11px] uppercase tracking-widest ${
                        m.highlight ? "text-gold" : "text-ink-muted"
                      }`}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <h3
                    className={`mt-5 font-display text-lg font-semibold leading-snug ${
                      m.highlight ? "text-paper" : "text-ink"
                    }`}
                  >
                    {m.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${m.highlight ? "text-paper/70" : "text-ink-muted"}`}>
                    {m.body}
                  </p>
                  <p
                    className={`mt-5 font-mono text-[10px] uppercase tracking-widest ${
                      m.highlight ? "text-gold" : "text-gold-active"
                    }`}
                  >
                    {m.bulletsLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${m.highlight ? "text-green" : "text-green"}`}
                          aria-hidden
                        />
                        <span className={m.highlight ? "text-paper/85" : "text-ink-soft"}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-[15px] leading-relaxed text-ink-soft text-pretty">
            Cada módulo cumpre uma função dentro do sistema. Primeiro você entende o comportamento; depois aprende
            a observar a interação, conduzir conversas, proteger informação e transformar leitura em ação.
          </p>
        </div>
      </section>

      {/* ── A plataforma ───────────────────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">A plataforma</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink text-balance md:text-4xl">
              O que você recebe dentro da plataforma.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft text-pretty md:text-base">
              O Acervo não é uma sequência de aulas soltas. É uma estrutura de consulta, estudo e aplicação. Você
              acessa os dossiês e materiais auxiliares em ordem progressiva, cada parte desenvolvendo uma camada de
              leitura humana.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORM.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-paper-strong p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center bg-paper-deep text-gold-active">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Como o acesso funciona ─────────────────────────────── */}
      <section className="hairline-b bg-paper-deep">
        <div className="container-editorial py-16 md:py-24">
          <p className="eyebrow mb-4 text-center">Como o acesso funciona</p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.n} className="bg-paper-strong p-7">
                <span className="font-display text-4xl font-bold text-gold">{step.n}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Para quem / Não é para ─────────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
            <div className="bg-paper-strong p-8 md:p-10">
              <p className="eyebrow-gold mb-4">/ 04. Para quem</p>
              <h2 className="font-display text-2xl font-bold leading-snug text-ink text-balance">
                Para profissionais que dependem de leitura humana em decisões reais.
              </h2>
              <ul className="mt-6 space-y-4">
                {FOR_WHOM.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper-strong p-8 md:p-10">
              <p className="eyebrow mb-4">/ 05. Não é para</p>
              <h2 className="font-display text-2xl font-bold leading-snug text-ink text-balance">
                Não é para quem procura poder sobre os outros.
              </h2>
              <ul className="mt-6 space-y-4">
                {NOT_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-muted">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-alert" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. Ética e limites ────────────────────────────────── */}
      <section className="hairline-b bg-ink text-paper">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-gold">/ 06. Ética e limites</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-paper text-balance md:text-4xl">
              Inteligência humana sem manipulação barata.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-paper/75 text-pretty md:text-base">
              O Acervo Tático não ensina coação, fraude, invasão, exposição ou exploração de vulnerabilidades. O
              foco é leitura de contexto, comunicação consciente, proteção informacional e tomada de decisão em
              interações humanas.
            </p>
            <p className="mt-6 font-display text-lg font-medium text-paper text-pretty">
              O operador não vence porque engana melhor. Vence porque percebe melhor, decide melhor e preserva
              confiança enquanto atua.
            </p>
          </div>
        </div>
      </section>

      {/* ── Oferta ─────────────────────────────────────────────── */}
      <section id="oferta" className="hairline-b bg-paper-deep scroll-mt-20">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">A oferta</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink text-balance md:text-4xl">
              Tudo incluso. Em um único pacote.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden border border-line bg-line lg:grid-cols-5">
            {/* Preço */}
            <div className="bg-paper-strong p-8 md:p-10 lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-gold-active">Acesso por 12 meses</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-ink sm:text-5xl">{parcelado}</span>
              </div>
              <p className="mt-2 text-sm text-ink-muted">ou R$ 900 à vista · PIX ou cartão</p>
              <a
                href={checkout}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-gold px-6 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Garantir acesso agora
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold-active" aria-hidden /> 7 dias garantia
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarClock className="h-3.5 w-3.5 text-gold-active" aria-hidden /> 12 meses
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-gold-active" aria-hidden /> Pagamento seguro
                </span>
              </div>
            </div>

            {/* Conteúdo incluso */}
            <div className="bg-paper-strong p-8 md:p-10 lg:col-span-3">
              <p className="eyebrow mb-4">Conteúdo do acervo</p>
              <h3 className="font-display text-xl font-semibold text-ink">Acervo Tático HUMINT</h3>
              <ul className="mt-5 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Garantia */}
          <div className="mx-auto mt-8 max-w-4xl border border-line bg-paper-strong p-7 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-paper-deep text-gold-active">
                <ShieldCheck className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="eyebrow-gold mb-1">Garantia incondicional</p>
                <h3 className="font-display text-lg font-semibold text-ink">7 dias para testar. Risco zero.</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  Se em uma semana o material não for para você, você pode solicitar o reembolso dentro do prazo de
                  garantia. Sem fricção e sem justificativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              Antes de decidir.
            </h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {FAQ.map((item, i) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5">
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-gold-active">/ {String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display text-lg font-semibold text-ink">{item.q}</span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-open:rotate-90"
                      aria-hidden
                    />
                  </summary>
                  <p className="pb-5 pl-9 text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Aviso de segurança ─────────────────────────────────── */}
      <section className="bg-ink text-paper">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-gold">
              <ShieldAlert className="h-4 w-4" aria-hidden />
              Aviso de segurança · Material protegido
            </p>
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-paper text-balance md:text-3xl">
              Cada linha deste material está catalogada, datada e rastreável até a fonte.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-paper/70">
              Todo o conteúdo do Mundo da HUMINT — marca, identidade, copy, narrativa, estrutura de página,
              dossiês, protocolos, ferramentas e qualquer material entregue na área de membros — é propriedade
              intelectual exclusiva e está protegido por direito autoral, direito de marca e legislação de
              concorrência desleal.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/70">
              Cópia, clonagem, reprodução, adaptação, revenda, redistribuição ou engenharia reversa não passa
              despercebida. Documentos carregam marcações ocultas e identificadores individuais por operador.
              Quando um vazamento aparece, ele aponta de volta para quem o originou. Não é ameaça. É procedimento.
            </p>

            <div className="mt-10 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-3">
              {PROTECTION.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="bg-ink p-6">
                    <Icon className="h-5 w-5 text-gold" aria-hidden />
                    <p className="mt-4 font-display text-base font-semibold text-paper">{p.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-paper/65">{p.body}</p>
                  </div>
                )
              })}
            </div>

            <p className="mt-10 text-[15px] leading-relaxed text-paper/80">
              Quem estuda este material aprende a fechar a própria pegada. Quem tenta copiá-lo, ironicamente, deixa
              a pegada mais visível de todas.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={checkout}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Garantir meu acesso
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <span className="font-mono text-xs uppercase tracking-widest text-paper/60">{parcelado} · Cartão e Pix</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
