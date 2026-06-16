import type { Metadata } from "next"
import {
  Brain,
  MessageSquare,
  Eye,
  Ear,
  ShieldCheck,
  Search,
  Wrench,
  FileText,
  ListChecks,
  ClipboardCheck,
  RefreshCw,
  Check,
  X,
  Lock,
  ArrowRight,
  ShieldAlert,
} from "lucide-react"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Acervo Tático HUMINT",
  description:
    "Como investigadores, espiões e empresas obtêm informações através de pessoas. Um sistema para ler melhor interações humanas: comportamento, comunicação, observação, elicitação, proteção e fontes.",
  alternates: { canonical: "/lp" },
  openGraph: {
    title: `Acervo Tático HUMINT · ${SITE.name}`,
    description:
      "Como investigadores, espiões e empresas obtêm informações através de pessoas.",
    url: "/lp",
  },
}

// Atualize este link com o checkout real do produto.
const CHECKOUT_URL = "#oferta"

const MODULES = [
  {
    tag: "Dossiê 01",
    icon: Brain,
    title: "Mecânicas do Comportamento",
    body: "Entenda os padrões que influenciam percepção, decisão e reação humana. A base para perceber por que pessoas cedem, resistem, justificam escolhas e mudam de posição.",
    items: [
      "Leitura de padrões comportamentais",
      "Identificação de gatilhos de decisão",
      "Compreensão de vieses e respostas automáticas",
    ],
  },
  {
    tag: "Dossiê 02",
    icon: MessageSquare,
    title: "Comunicação e Influência",
    body: "Aprenda como mensagens são interpretadas, como decisões são conduzidas e como ajustar linguagem, ritmo e enquadramento sem depender de improviso.",
    items: ["Clareza na comunicação", "Construção de confiança", "Percepção de intenção e influência"],
  },
  {
    tag: "Dossiê 03",
    icon: Eye,
    title: "Linguagem Não-verbal",
    body: "Observe sinais físicos, expressões, ritmo, postura e microajustes de comportamento sem cair em leitura fantasiosa ou interpretação rasa.",
    items: ["Leitura de congruência", "Observação de tensão e conforto", "Percepção de mudanças no comportamento"],
  },
  {
    tag: "Dossiê 04",
    icon: Ear,
    title: "Elicitação Ética",
    body: "Conduza conversas para obter informação relevante por meio de perguntas, contexto e escuta ativa, sem pressão, exposição ou manipulação.",
    items: ["Perguntas indiretas", "Condução conversacional", "Extração ética de informação"],
  },
  {
    tag: "Dossiê 05",
    icon: ShieldCheck,
    title: "Contrainteligência & OPSEC",
    body: "Aprenda a proteger informações, reduzir exposição, reconhecer riscos e evitar que detalhes sensíveis sejam entregues sem necessidade.",
    items: ["Higiene digital e comportamental", "Detecção de exposição indevida", "Proteção de informação sensível"],
  },
  {
    tag: "Dossiê 06",
    icon: Search,
    title: "Fontes de Informação",
    body: "Organize caminhos de busca, valide dados, relacione fontes e transforme informação dispersa em leitura útil de contexto.",
    items: ["Busca e validação de dados", "Cruzamento de fontes", "Análise de contexto"],
  },
  {
    tag: "Núcleo Operacional",
    icon: Wrench,
    title: "Ferramentas Operacionais",
    body: "Use instrumentos práticos para estruturar análise, registrar observações, organizar hipóteses e aplicar o repertório dos dossiês com mais clareza.",
    items: ["Modelos de análise", "Checklists operacionais", "Protocolos de aplicação"],
    highlight: true,
  },
]

const PLATFORM = [
  {
    icon: FileText,
    title: "Dossiês completos",
    body: "Materiais em PDF para estudo profundo, revisão e consulta.",
  },
  {
    icon: ListChecks,
    title: "Protocolos práticos",
    body: "Estruturas para aplicar leitura, observação e análise com método.",
  },
  {
    icon: ClipboardCheck,
    title: "Checklists e modelos",
    body: "Ferramentas para organizar hipóteses, registrar sinais e revisar decisões.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações",
    body: "Novas liberações e melhorias durante o período de acesso.",
  },
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
    a: "Inteligência humana se exerce melhor em discrição. O anonimato é coerente com a própria disciplina: o foco está no método e no material, não na figura de quem ensina.",
  },
  {
    q: "Funciona para mim, que não sou da área?",
    a: "Sim. O acervo foi construído para profissionais que dependem de leitura humana em decisões reais — negociação, vendas, liderança, recrutamento, investigação — e não exige formação prévia em inteligência.",
  },
  {
    q: "Isso é ético e legal?",
    a: "Sim. O material trata de leitura de contexto, comunicação consciente, proteção de informação e tomada de decisão. Não ensina coação, fraude, invasão ou exploração de vulnerabilidades.",
  },
  {
    q: "Isso não é só linguagem corporal de internet?",
    a: "Não. A linguagem não-verbal é apenas um dos seis fundamentos, e é tratada com critério — congruência, tensão e mudança de comportamento — sem leitura fantasiosa ou truques rasos.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a compra, as credenciais chegam em poucos minutos no e-mail usado no pagamento. Use sempre o e-mail principal que você realmente acessa.",
  },
  {
    q: "O acesso expira? E depois?",
    a: "O acesso é de 12 meses à área de membros, com as atualizações liberadas no período incluídas.",
  },
  {
    q: "E se não for para mim?",
    a: "Você tem 7 dias de garantia incondicional. Se o material não for para você, basta solicitar o reembolso dentro do prazo, sem fricção e sem justificativa.",
  },
  {
    q: "Preciso de algum pré-requisito ou equipamento?",
    a: "Não. Os materiais são de estudo e consulta. Basta um dispositivo com acesso à internet e disposição para aplicar o método no seu contexto.",
  },
]

const PROTECTION = [
  {
    title: "Identificação",
    body: "Cada acesso é nominal e marcado. A origem de qualquer cópia é determinável.",
  },
  {
    title: "Notificação",
    body: "Remoção imediata, derrubada de domínios, plataformas e meios de pagamento envolvidos.",
  },
  {
    title: "Responsabilização",
    body: "Medidas cíveis e criminais cabíveis, com perdas, danos e ressarcimento de custos.",
  },
]

export default function LandingPage() {
  return (
    <div className="bg-paper">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hairline-b bg-paper-strong">
        <div className="container-editorial py-16 md:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow-gold mb-5">Acervo Tático HUMINT</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-ink text-balance">
              Como investigadores, espiões e empresas obtêm informações através de pessoas
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-ink-soft text-pretty">
              Um sistema para ler melhor interações humanas. Aprenda a perceber o que está sendo construído
              diante de você — comportamento, comunicação, observação, elicitação e proteção — e deixe de
              apenas reagir ao roteiro que outros montam.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Quero acessar o acervo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                R$ 49 · 7 dias de garantia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. A situação real ──────────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">/ 02. A situação real</p>
            <div className="article-prose">
              <p>
                Você provavelmente já viveu isso em uma negociação, reunião, venda, parceria ou conversa
                decisiva. Tudo parecia fazer sentido. A proposta era aceitável. O clima estava bom. Ninguém
                levantou a voz, ninguém pressionou de forma óbvia, ninguém pareceu estar manipulando nada.
              </p>
              <p>
                Mas depois, quando a euforia passou e a decisão começou a produzir consequências, veio a
                sensação de que você perdeu espaço. Aceitou algo ruim demais. Cedeu antes da hora. Concordou com
                uma lógica que parecia correta no momento, mas que não sustentava a realidade depois.
              </p>
              <p>
                Isso raramente acontece porque a outra pessoa é mais inteligente. Acontece porque ela estava
                lendo a situação com mais precisão. Enquanto você prestava atenção apenas no que estava sendo
                dito, alguém observava o ritmo da conversa, seus sinais de hesitação, seus pontos de interesse,
                suas concessões pequenas e o momento exato em que você começava a justificar para si mesmo uma
                decisão que ainda não estava madura.
              </p>
            </div>

            <div className="my-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
              <div className="bg-paper-strong p-6">
                <p className="font-display text-lg font-semibold text-ink">Quem é conduzido</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">só percebe depois.</p>
              </div>
              <div className="bg-paper-strong p-6">
                <p className="font-display text-lg font-semibold text-ink">Quem negocia com consciência</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">percebe durante.</p>
              </div>
              <div className="bg-paper-strong p-6">
                <p className="font-display text-lg font-semibold text-ink">Quem conduz</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">percebe antes.</p>
              </div>
            </div>

            <div className="article-prose">
              <p>
                O Acervo Tático foi construído para treinar essa percepção. Para que você deixe de entrar em
                interações importantes apenas reagindo ao que aparece e passe a observar o que está sendo
                construído diante de você.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-gold bg-paper-deep p-6">
              <p className="eyebrow-gold mb-2">Atenção</p>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Não se trata de manipular pessoas. Trata-se de não ser ingênuo em ambientes onde percepção,
                linguagem, comportamento e decisão estão sempre em jogo. Em qualquer interação relevante, alguém
                ocupa a posição de leitura. E quando essa pessoa não é você, normalmente você só entende o custo
                depois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. A arquitetura ────────────────────────────────── */}
      <section className="hairline-b bg-paper-deep">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">/ 03. A arquitetura</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-balance">
              Seis fundamentos. Um núcleo operacional. Um sistema para ler melhor interações humanas.
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed text-ink-soft text-pretty">
              Cada dossiê desenvolve uma camada específica da terceira posição: compreender comportamento,
              calibrar comunicação, observar sinais, conduzir conversas, proteger informação, organizar fontes e
              transformar conhecimento em prática. Não é uma sequência aleatória — é um mapa progressivo.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((mod) => {
              const Icon = mod.icon
              return (
                <div
                  key={mod.title}
                  className={`flex flex-col p-7 ${mod.highlight ? "bg-ink text-paper" : "bg-paper-strong"}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center ${
                        mod.highlight ? "bg-gold text-on-gold" : "bg-paper-deep text-gold-active"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span
                      className={`font-mono text-[11px] uppercase tracking-widest ${
                        mod.highlight ? "text-gold" : "text-ink-muted"
                      }`}
                    >
                      {mod.tag}
                    </span>
                  </div>
                  <h3
                    className={`mt-5 font-display text-xl font-semibold ${
                      mod.highlight ? "text-paper" : "text-ink"
                    }`}
                  >
                    {mod.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      mod.highlight ? "text-paper/70" : "text-ink-muted"
                    }`}
                  >
                    {mod.body}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-dashed pt-4 text-sm"
                    style={{ borderColor: mod.highlight ? "rgba(246,241,230,0.2)" : "var(--color-line)" }}
                  >
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${mod.highlight ? "text-gold" : "text-gold-active"}`}
                          aria-hidden
                        />
                        <span className={mod.highlight ? "text-paper/85" : "text-ink-soft"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── A plataforma ─────────────────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">A plataforma</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-balance">
              O que você recebe dentro da plataforma.
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed text-ink-soft text-pretty">
              O Acervo não é uma sequência de aulas soltas. É uma estrutura de consulta, estudo e aplicação, em
              ordem progressiva — comportamento, comunicação, observação, elicitação, proteção, fontes e
              aplicação prática.
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

      {/* ── Como o acesso funciona ───────────────────────────── */}
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

      {/* ── 04/05. Para quem / Não é para ────────────────────── */}
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
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-active" aria-hidden />
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

      {/* ── 06. Ética e limites ──────────────────────────────── */}
      <section className="hairline-b bg-ink text-paper">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-gold mb-4">/ 06. Ética e limites</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-paper text-balance">
              Inteligência humana sem manipulação barata.
            </h2>
            <p className="mt-6 text-[15px] md:text-base leading-relaxed text-paper/75 text-pretty">
              O Acervo Tático não ensina coação, fraude, invasão, exposição ou exploração de vulnerabilidades. O
              foco é leitura de contexto, comunicação consciente, proteção informacional e tomada de decisão em
              interações humanas.
            </p>
            <p className="mt-5 text-lg font-display font-medium text-paper text-pretty">
              O operador não vence porque engana melhor. Vence porque percebe melhor, decide melhor e preserva
              confiança enquanto atua.
            </p>
          </div>
        </div>
      </section>

      {/* ── Oferta ───────────────────────────────────────────── */}
      <section id="oferta" className="hairline-b bg-paper-deep scroll-mt-20">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">A oferta</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-balance">
              Tudo incluso. Em um único pacote.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden border border-line bg-line lg:grid-cols-5">
            {/* Preço */}
            <div className="bg-paper-strong p-8 md:p-10 lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-gold-active">Acesso por 12 meses</p>
              <p className="mt-4 text-sm text-ink-muted line-through">De R$ 1.290</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-6xl font-bold text-ink">R$ 49</span>
              </div>
              <p className="mt-2 text-sm text-ink-muted">pagamento único · PIX ou cartão</p>
              <a
                href={CHECKOUT_URL}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-gold px-6 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Garantir meu acesso
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-mono uppercase tracking-wider text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold-active" aria-hidden /> 7 dias garantia
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
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-active" aria-hidden />
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
                  Se em uma semana o material não for para você, você pode solicitar o reembolso dentro do prazo
                  de garantia. Sem fricção e sem justificativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-center">
              Antes de decidir.
            </h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {FAQ.map((item, i) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5">
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-gold-active">
                        / {String(i + 1).padStart(2, "0")}
                      </span>
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

      {/* ── Aviso de segurança ───────────────────────────────── */}
      <section className="bg-ink text-paper">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4" aria-hidden />
              Aviso de segurança · Material protegido
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight tracking-tight text-paper text-balance">
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
              {PROTECTION.map((p) => (
                <div key={p.title} className="bg-ink p-6">
                  <p className="font-display text-base font-semibold text-paper">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/65">{p.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-[15px] leading-relaxed text-paper/80">
              Quem estuda este material aprende a fechar a própria pegada. Quem tenta copiá-lo, ironicamente,
              deixa a pegada mais visível de todas.
            </p>

            <div className="mt-12 text-center">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Quero acessar o acervo por R$ 49
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
