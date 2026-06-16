import type { Metadata } from "next"
import {
  Scale,
  History,
  KeyRound,
  Activity,
  FileSearch,
  AlertTriangle,
  Flag,
  Eye,
  BookOpen,
  FileText,
  ListChecks,
  ClipboardCheck,
  Check,
  X,
  Lock,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Como Avaliar Pessoas · Confiança, Risco e Vulnerabilidade",
  description:
    "Como investigadores, espiões e empresas obtêm informações através de pessoas. Um método de avaliação humana extraído de documentos desclassificados de inteligência para identificar confiança, risco e vulnerabilidades antes de decidir.",
  alternates: { canonical: "/lp" },
  openGraph: {
    title: `Como Avaliar Pessoas · ${SITE.name}`,
    description:
      "Como investigadores, espiões e empresas obtêm informações através de pessoas. Identifique confiança, risco e vulnerabilidades antes de decidir.",
    url: "/lp",
  },
}

// Atualize este link com o checkout real do produto.
const CHECKOUT_URL = "#oferta"

// Cada capítulo segue o mesmo protocolo de leitura.
const CHAPTER_FORMAT = [
  { tag: "Documento", body: "Trecho de um arquivo de inteligência desclassificado, traduzido na íntegra." },
  { tag: "História", body: "O contexto humano por trás do papel: quem era a pessoa e o que estava em jogo." },
  { tag: "O que aconteceu", body: "A decisão tomada, a confiança concedida e o custo que veio depois." },
  { tag: "Lição", body: "O princípio de avaliação que aquele episódio revela com clareza." },
  { tag: "Aplicação prática", body: "Como transportar a lição para suas próprias decisões de confiança." },
]

const PARTS = [
  {
    tag: "Parte 1",
    icon: AlertTriangle,
    title: "Os erros que nos fazem confiar nas pessoas erradas",
    body: "Antes de aprender a avaliar bem, é preciso entender por que avaliamos mal. Os três atalhos mentais que sabotam o julgamento de quase todo mundo.",
    chapters: [
      "Cap. 1 — A primeira impressão: por que decidimos confiar em segundos e quase nunca revisamos.",
      "Cap. 2 — O erro da autoridade: como títulos, cargos e credenciais desligam o senso crítico.",
      "Cap. 3 — O erro da afinidade: por que confiamos em quem se parece conosco e baixamos a guarda.",
    ],
  },
  {
    tag: "Parte 2",
    icon: FileSearch,
    title: "O que a inteligência procura antes de confiar",
    body: "Quando o custo de errar é alto, ninguém confia por impressão. Os quatro critérios que profissionais usam para avaliar uma pessoa antes de lhe dar acesso.",
    chapters: [
      "Cap. 4 — Motivação: o que realmente move uma pessoa por baixo do que ela declara.",
      "Cap. 5 — Consistência: o comportamento observado ao longo do tempo, não no melhor dia.",
      "Cap. 6 — Acesso: por que o que alguém alcança importa mais do que o cargo que ocupa.",
      "Cap. 7 — Vulnerabilidades: o que transforma uma pessoa comum em um risco real.",
    ],
  },
  {
    tag: "Parte 3",
    icon: History,
    title: "Os maiores erros de julgamento da história da inteligência",
    body: "Quatro casos reais em que sinais existiam, estavam à vista e foram ignorados por anos. Cada um é dissecado em o que foi observado, o que foi ignorado e o que deveria ter sido percebido.",
    chapters: [
      "Cap. 8 — Aldrich Ames: o homem cujo padrão de vida denunciava tudo.",
      "Cap. 9 — Kim Philby: o charme que blindou um traidor por décadas.",
      "Cap. 10 — Ana Montes: a analista exemplar que ninguém pensou em checar.",
      "Cap. 11 — Robert Hanssen: o especialista em segurança que usava as próprias regras contra a casa.",
    ],
  },
  {
    tag: "Parte 4",
    icon: KeyRound,
    title: "O método A.C.E.S.S.O.",
    body: "Tudo o que foi estudado nas partes anteriores condensado em um protocolo simples, repetível e aplicável a qualquer pessoa que você precise avaliar.",
    chapters: [
      "Um framework de seis perguntas para estruturar qualquer julgamento de confiança.",
      "Como aplicar a sócios, contratações, parcerias, fornecedores e relações pessoais.",
      "Como transformar leitura de pessoas em decisão registrada, e não em palpite.",
    ],
    highlight: true,
  },
]

const METHOD = [
  {
    letter: "A",
    icon: KeyRound,
    title: "Acesso",
    q: "O que essa pessoa realmente sabe e alcança?",
    body: "Mapeie o que ela toca, vê e influencia de fato, para além do cargo no cartão.",
  },
  {
    letter: "C",
    icon: Activity,
    title: "Consistência",
    q: "O comportamento é estável ao longo do tempo?",
    body: "Compare o que foi dito ontem com o que é feito hoje. A confiança vive na repetição.",
  },
  {
    letter: "E",
    icon: FileSearch,
    title: "Evidências",
    q: "O que comprova aquilo que ela afirma?",
    body: "Separe o verificável da boa narrativa. Afirmação não é prova.",
  },
  {
    letter: "S",
    icon: AlertTriangle,
    title: "Situação",
    q: "Existem pressões ou vulnerabilidades em jogo?",
    body: "Dívida, ego, ressentimento ou necessidade mudam o que uma pessoa é capaz de fazer.",
  },
  {
    letter: "S",
    icon: Flag,
    title: "Sinais",
    q: "Há alertas sendo ignorados por conveniência?",
    body: "O problema raramente é a falta de sinal. É a vontade de não enxergá-lo.",
  },
  {
    letter: "O",
    icon: Eye,
    title: "Observação contínua",
    q: "A confiança continua merecida?",
    body: "Avaliar não é um veredito único. É um processo que acompanha a relação.",
  },
]

const CASES = [
  {
    name: "Aldrich Ames",
    seen: "Ascensão de padrão de vida incompatível com o salário, à vista de todos.",
    ignored: "Anos de sinais financeiros tratados como detalhe, não como evidência.",
    lesson: "Vulnerabilidade somada a acesso é a combinação que mais custa caro.",
  },
  {
    name: "Kim Philby",
    seen: "Carisma, pedigree e relações certas que abriam todas as portas.",
    ignored: "Inconsistências e laços antigos que a afinidade fazia parecer inofensivos.",
    lesson: "Quanto mais simpática a pessoa, mais barata fica a confiança e mais cara a checagem.",
  },
  {
    name: "Ana Montes",
    seen: "Desempenho exemplar e reputação impecável dentro da organização.",
    ignored: "A própria competência a tornava acima de qualquer suspeita ou auditoria.",
    lesson: "Reputação não é evidência. Quem nunca é checado é quem mais precisa ser.",
  },
  {
    name: "Robert Hanssen",
    seen: "Domínio técnico profundo dos próprios sistemas de segurança.",
    ignored: "Acesso amplo combinado com ressentimento silencioso e ausência de supervisão.",
    lesson: "Acesso sem observação contínua é um risco que só aparece quando já é tarde.",
  },
]

const PLATFORM = [
  {
    icon: BookOpen,
    title: "O guia completo",
    body: "As 4 partes e os 11 capítulos em PDF, para estudo profundo, revisão e consulta.",
  },
  {
    icon: FileText,
    title: "Os 4 dossiês de caso",
    body: "Ames, Philby, Montes e Hanssen dissecados em observado, ignorado e o que perceber.",
  },
  {
    icon: ListChecks,
    title: "O protocolo A.C.E.S.S.O.",
    body: "O framework de seis perguntas em formato aplicável a qualquer avaliação.",
  },
  {
    icon: ClipboardCheck,
    title: "Fichas e checklists",
    body: "Modelos para registrar sinais, pressões e evidências de uma pessoa antes de decidir.",
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
    title: "Estuda e aplica no seu ritmo",
    body: "O material fica disponível na área de membros para estudo, revisão e consulta durante o período de acesso.",
  },
]

const FOR_WHOM = [
  "Quem decide sócios, contratações e parcerias e não pode descobrir o caráter de alguém só depois do prejuízo.",
  "Líderes, fundadores e gestores que precisam saber em quem delegar acesso e confiança.",
  "Investigadores, advogados, recrutadores e analistas que avaliam pessoas como parte do trabalho.",
  "Qualquer pessoa cansada de confiar pela primeira impressão e pagar a conta da ingenuidade.",
]

const NOT_FOR = [
  "Quem procura truque para manipular, seduzir ou controlar os outros.",
  "Quem quer um teste de personalidade mágico no lugar de método e observação.",
  "Quem confunde avaliar pessoas com viver em desconfiança paranoica.",
  "Quem quer julgar mais rápido, e não julgar melhor.",
]

const INCLUDED = [
  "O guia completo: 4 partes e 11 capítulos sobre como avaliar confiança, risco e vulnerabilidade.",
  "Os 4 dossiês de caso real, com a anatomia de cada erro de julgamento.",
  "O método A.C.E.S.S.O. em formato prático e aplicável.",
  "Fichas, checklists e modelos para registrar avaliações em vez de confiar na memória.",
  "12 meses de acesso à área de membros, com atualizações incluídas.",
  "Garantia incondicional de 7 dias.",
]

const FAQ = [
  {
    q: "De onde vem o conteúdo deste material?",
    a: "O guia parte de documentos de inteligência desclassificados e de casos públicos de contrainteligência, traduzidos e analisados. Sobre essa base é construído um método próprio de avaliação de pessoas, com lições e aplicação prática para o seu dia a dia.",
  },
  {
    q: "Preciso trabalhar com investigação ou inteligência?",
    a: "Não. O material foi escrito para quem avalia pessoas em decisões comuns mas caras: sócios, contratações, parcerias, fornecedores e relações. Não exige nenhuma formação prévia.",
  },
  {
    q: "Isso é ético e legal?",
    a: "Sim. O foco é avaliar confiança, risco e vulnerabilidade para decidir melhor, e proteger a si mesmo. Não há nada sobre coação, fraude, invasão ou manipulação de pessoas.",
  },
  {
    q: "Não é só mais um material de leitura corporal?",
    a: "Não. Linguagem não-verbal é um detalhe menor. O núcleo é critério de julgamento: motivação, consistência, acesso, vulnerabilidade, evidência e observação ao longo do tempo.",
  },
  {
    q: "Por que o autor é anônimo?",
    a: "Avaliação humana se exerce melhor em discrição. O foco está no método e nos documentos, não na figura de quem ensina.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a compra, as credenciais chegam em poucos minutos no e-mail usado no pagamento. Use sempre o e-mail principal que você realmente acessa.",
  },
  {
    q: "E se não for para mim?",
    a: "Você tem 7 dias de garantia incondicional. Se o material não for para você, basta solicitar o reembolso dentro do prazo, sem fricção e sem justificativa.",
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
            <p className="eyebrow-gold mb-5">Como avaliar pessoas</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-ink text-balance">
              Como investigadores, espiões e empresas obtêm informações através de pessoas
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-ink-soft text-pretty">
              Um método de avaliação humana extraído de documentos de inteligência desclassificados, para
              identificar confiança, risco e vulnerabilidade em alguém — antes de dar acesso, fechar negócio ou
              colocar o seu nome ao lado do dela.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Quero aprender o método
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
                Quase todo prejuízo grande começa com uma boa impressão. O sócio parecia alinhado. O funcionário
                parecia leal. O parceiro parecia sólido. Tudo fazia sentido no começo — e foi exatamente por isso
                que ninguém olhou com atenção.
              </p>
              <p>
                A verdade desconfortável é que a maioria das pessoas avalia caráter em segundos e quase nunca
                revisa esse julgamento. Confiamos em quem fala bem, em quem tem o título certo, em quem se parece
                conosco. E então entregamos acesso, dinheiro, informação e reputação com base em pouco mais do
                que simpatia.
              </p>
              <p>
                Serviços de inteligência aprenderam, no custo mais alto possível, que isso não funciona. Quando
                confiar na pessoa errada significa perder agentes, operações e vidas, a avaliação deixa de ser
                instinto e vira método. Este material traduz esse método para as decisões da sua vida.
              </p>
            </div>

            <div className="my-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
              <div className="bg-paper-strong p-6">
                <p className="font-display text-lg font-semibold text-ink">Quem confia por impressão</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">descobre depois.</p>
              </div>
              <div className="bg-paper-strong p-6">
                <p className="font-display text-lg font-semibold text-ink">Quem avalia com critério</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">percebe durante.</p>
              </div>
              <div className="bg-paper-strong p-6">
                <p className="font-display text-lg font-semibold text-ink">Quem observa com método</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">percebe antes.</p>
              </div>
            </div>

            <div className="mt-8 border-l-2 border-gold bg-paper-deep p-6">
              <p className="eyebrow-gold mb-2">Atenção</p>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Não se trata de desconfiar de todo mundo nem de manipular ninguém. Trata-se de parar de confiar no
                escuro. Em toda relação que importa, alguém está avaliando alguém. Quando você não sabe avaliar,
                normalmente só entende o custo depois que ele já chegou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. Como cada capítulo funciona ──────────────────── */}
      <section className="hairline-b bg-paper-deep">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">/ 03. O protocolo de leitura</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-balance">
              Cada capítulo parte de um documento real e termina em aplicação prática.
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed text-ink-soft text-pretty">
              Não é teoria solta nem opinião. Cada lição nasce de um arquivo de inteligência desclassificado e é
              conduzida pelo mesmo percurso, do documento à decisão que você toma amanhã.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {CHAPTER_FORMAT.map((step, i) => (
              <div key={step.tag} className="bg-paper-strong p-6">
                <span className="font-mono text-xs text-gold-active">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{step.tag}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. A arquitetura: 4 partes / 11 capítulos ───────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">/ 04. A arquitetura</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-balance">
              Quatro partes. Onze capítulos. Um método para avaliar qualquer pessoa.
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed text-ink-soft text-pretty">
              Você começa entendendo por que erra ao confiar, aprende o que a inteligência procura antes de
              confiar, estuda os maiores erros de julgamento da história e termina com um método próprio para
              aplicar a partir de hoje.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {PARTS.map((part) => {
              const Icon = part.icon
              return (
                <div
                  key={part.title}
                  className={`flex flex-col p-7 md:p-8 ${part.highlight ? "bg-ink text-paper" : "bg-paper-strong"}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center ${
                        part.highlight ? "bg-gold text-on-gold" : "bg-paper-deep text-gold-active"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span
                      className={`font-mono text-[11px] uppercase tracking-widest ${
                        part.highlight ? "text-gold" : "text-ink-muted"
                      }`}
                    >
                      {part.tag}
                    </span>
                  </div>
                  <h3
                    className={`mt-5 font-display text-xl font-semibold leading-snug ${
                      part.highlight ? "text-paper" : "text-ink"
                    }`}
                  >
                    {part.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${part.highlight ? "text-paper/70" : "text-ink-muted"}`}
                  >
                    {part.body}
                  </p>
                  <ul
                    className="mt-5 space-y-2 border-t border-dashed pt-4 text-sm"
                    style={{ borderColor: part.highlight ? "rgba(246,241,230,0.2)" : "var(--color-line)" }}
                  >
                    {part.chapters.map((ch) => (
                      <li key={ch} className="flex items-start gap-2">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${part.highlight ? "text-gold" : "text-gold-active"}`}
                          aria-hidden
                        />
                        <span className={part.highlight ? "text-paper/85" : "text-ink-soft"}>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 05. Os 4 casos reais ─────────────────────────────── */}
      <section className="hairline-b bg-paper-deep">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">/ 05. Os casos</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-balance">
              Quatro traições que ninguém viu chegar — até ser tarde.
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed text-ink-soft text-pretty">
              Em todos eles os sinais existiam, estavam à vista e foram explicados como qualquer outra coisa. Cada
              caso é dissecado em três colunas: o que foi observado, o que foi ignorado e o que deveria ter sido
              percebido.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-px overflow-hidden border border-line bg-line">
            {CASES.map((c) => (
              <div key={c.name} className="bg-paper-strong p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <Scale className="h-5 w-5 text-gold-active" aria-hidden />
                  <h3 className="font-display text-xl font-semibold text-ink">{c.name}</h3>
                </div>
                <div className="mt-5 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                  <div className="bg-paper-deep p-5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-gold-active">Observado</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.seen}</p>
                  </div>
                  <div className="bg-paper-deep p-5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">Ignorado</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.ignored}</p>
                  </div>
                  <div className="bg-paper-deep p-5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink">A lição</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. O método A.C.E.S.S.O. ────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow-gold mb-4">/ 06. O método</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-balance">
              A.C.E.S.S.O. — seis perguntas antes de confiar em alguém.
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed text-ink-soft text-pretty">
              Todo o conteúdo do guia condensado em um protocolo simples o bastante para você usar de cabeça em
              qualquer avaliação — de uma contratação a uma sociedade.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {METHOD.map((m) => {
              const Icon = m.icon
              return (
                <div key={m.title} className="bg-paper-strong p-7">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center bg-ink font-display text-2xl font-bold text-gold">
                      {m.letter}
                    </span>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-gold-active" aria-hidden />
                      <h3 className="font-display text-lg font-semibold text-ink">{m.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 font-display text-[15px] font-medium leading-snug text-ink">{m.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{m.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── A plataforma / entregável ────────────────────────── */}
      <section className="hairline-b bg-paper-deep">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">O que você recebe</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink text-balance">
              Um material para estudar uma vez e consultar pela vida toda.
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed text-ink-soft text-pretty">
              Tudo entregue na área de membros, em ordem progressiva: do erro de julgamento ao método pronto para
              aplicar.
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
      <section className="hairline-b">
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

      {/* ── Para quem / Não é para ───────────────────────────── */}
      <section className="hairline-b bg-paper-deep">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
            <div className="bg-paper-strong p-8 md:p-10">
              <p className="eyebrow-gold mb-4">/ 07. Para quem</p>
              <h2 className="font-display text-2xl font-bold leading-snug text-ink text-balance">
                Para quem paga caro quando confia na pessoa errada.
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
              <p className="eyebrow mb-4">/ 08. Não é para</p>
              <h2 className="font-display text-2xl font-bold leading-snug text-ink text-balance">
                Não é para quem quer poder sobre os outros.
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

      {/* ── Ética e limites ──────────────────────────────────── */}
      <section className="hairline-b bg-ink text-paper">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-gold mb-4">/ 09. Ética e limites</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-paper text-balance">
              Avaliar pessoas não é manipular pessoas.
            </h2>
            <p className="mt-6 text-[15px] md:text-base leading-relaxed text-paper/75 text-pretty">
              Este material não ensina coação, fraude, invasão, chantagem ou exploração de vulnerabilidades. Ele
              ensina a julgar confiança com critério, a enxergar risco antes do prejuízo e a proteger o que é
              seu — começando pela própria capacidade de decidir.
            </p>
            <p className="mt-5 text-lg font-display font-medium text-paper text-pretty">
              Quem sabe avaliar não vence porque engana melhor. Vence porque percebe melhor, decide melhor e para
              de pagar a conta da confiança cega.
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
              <p className="eyebrow mb-4">Conteúdo do material</p>
              <h3 className="font-display text-xl font-semibold text-ink">Como Avaliar Pessoas</h3>
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
              guias, dossiês, protocolos, ferramentas e qualquer material entregue na área de membros — é
              propriedade intelectual exclusiva e está protegido por direito autoral, direito de marca e
              legislação de concorrência desleal.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/70">
              Cópia, clonagem, reprodução, adaptação, revenda, redistribuição ou engenharia reversa não passa
              despercebida. Documentos carregam marcações ocultas e identificadores individuais por leitor.
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
              Quem estuda este material aprende a enxergar a pegada dos outros. Quem tenta copiá-lo,
              ironicamente, deixa a pegada mais visível de todas.
            </p>

            <div className="mt-12 text-center">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Quero aprender o método por R$ 49
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
