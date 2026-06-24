import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Compass,
  Brain,
  MessageSquare,
  ScanFace,
  Eye,
  Ear,
  ShieldCheck,
  Database,
  Wrench,
  CreditCard,
  Lock,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react"
import type { Product } from "@/lib/products"

/**
 * Página de detalhe rica do Acervo Tático — no formato da landing /lp,
 * porém com o conteúdo do Acervo e no design do site. Renderizada em
 * /academy/acervo-tatico (os demais produtos seguem o template padrão).
 */

const MODULES = [
  {
    icon: Compass,
    n: "Comece por aqui",
    title: "Orientação inicial",
    body: "Como usar o acervo, em que ordem estudar e como construir sua base antes de avançar.",
  },
  {
    icon: Brain,
    n: "Módulo 01",
    title: "Mecânicas do Comportamento",
    body: "Os padrões que governam as decisões humanas: vieses, gatilhos e os sinais que antecipam uma reação.",
  },
  {
    icon: MessageSquare,
    n: "Módulo 02",
    title: "Comunicação e Influência",
    body: "Conduzir uma conversa: rapport, escuta ativa, enquadramento e influência ética que muda o resultado.",
  },
  {
    icon: ScanFace,
    n: "Módulo 03",
    title: "Linguagem Não Verbal",
    body: "Ler postura, microexpressões, gestos e tom — e alinhar a sua própria linguagem à mensagem que quer passar.",
  },
  {
    icon: Eye,
    n: "Módulo 04",
    title: "Observação de Linguagem Corporal",
    body: "Um guia de campo para observar e interpretar sinais com método, sem chutes nem mitos.",
  },
  {
    icon: Ear,
    n: "Módulo 05",
    title: "Elicitação",
    body: "Obter informação relevante por meio de conversa natural — inclui as “36 perguntas de Aron”. Sem interrogatório.",
  },
  {
    icon: ShieldCheck,
    n: "Módulo 06",
    title: "Contrainteligência e OPSEC",
    body: "Proteja suas informações, sua rotina e sua presença digital. Reduza exposição e reconheça observação.",
  },
  {
    icon: Database,
    n: "Módulo 07",
    title: "Fontes de Informação",
    body: "Onde encontrar informação confiável, como cruzar dados e como avaliar credibilidade antes de decidir.",
  },
  {
    icon: Wrench,
    n: "Módulo 08",
    title: "Ferramentas Operacionais",
    body: "O kit prático para aplicar tudo no dia a dia: dos checklists às rotinas de campo.",
  },
]

const SITUATION = [
  "Quase toda decisão cara passa por uma pessoa. O sócio parecia alinhado, o candidato parecia leal, o contato parecia sólido. Tudo fazia sentido no começo — e foi exatamente por isso que ninguém olhou com atenção.",
  "A maior parte das pessoas avalia caráter em segundos, comunica no improviso e expõe informação sem perceber. Confia em quem fala bem, entrega acesso a quem tem o título certo e deixa rastros que qualquer um saberia ler.",
  "Serviços de inteligência aprenderam, no custo mais alto possível, que isso não funciona. Quando errar significa perder operações e pessoas, ler comportamento, conduzir conversas e proteger informação deixa de ser instinto e vira método. Este acervo traduz esse método para o seu dia a dia.",
]

const DELIVERS = [
  {
    icon: BookOpen,
    title: "Nove módulos completos",
    body: "Do “comece por aqui” às ferramentas operacionais, em ordem progressiva para estudo e revisão.",
  },
  {
    icon: ClipboardCheck,
    title: "Guias e fichas de campo",
    body: "Materiais aplicáveis — incluindo o guia de observação de linguagem corporal e as 36 perguntas de Aron.",
  },
  {
    icon: Wrench,
    title: "Ferramentas operacionais",
    body: "Checklists e rotinas para transformar o que você aprende em prática, não em teoria parada.",
  },
  {
    icon: GraduationCap,
    title: "Acesso à área de membros",
    body: "Todo o acervo liberado na plataforma após a confirmação do pagamento, para consultar quando precisar.",
  },
]

const FOR_WHOM = [
  "Quem precisa ler pessoas e situações antes de decidir — e não pode descobrir o caráter de alguém só depois do prejuízo.",
  "Profissionais de segurança, investigação, RH, vendas e negociação que avaliam e influenciam pessoas no trabalho.",
  "Líderes e fundadores que decidem em quem delegar acesso e confiança.",
  "Quem quer comunicar com mais influência e, ao mesmo tempo, proteger as próprias informações.",
]

const NOT_FOR = [
  "Quem procura truque para manipular, seduzir ou enganar os outros.",
  "Quem quer resultado sem estudo nem prática.",
  "Quem confunde inteligência humana com viver em desconfiança paranoica.",
  "Quem quer um atalho mágico no lugar de método e observação.",
]

const INCLUDED = [
  "Os 9 módulos do Acervo: do comportamento humano às ferramentas operacionais.",
  "O guia de observação de linguagem corporal e as 36 perguntas de Aron.",
  "Fichas, checklists e ferramentas para aplicar no dia a dia.",
  "Fundamentos de contrainteligência e OPSEC para proteger o que é seu.",
  "Acesso à área de membros, com as atualizações do acervo incluídas.",
  "Pagamento via Cartão (em até 12x) ou Pix, com acesso imediato.",
]

const FAQ = [
  {
    q: "O que está incluído no Acervo?",
    a: "Nove módulos cobrindo mecânicas do comportamento, comunicação e influência, linguagem não verbal, observação corporal, elicitação, contrainteligência e OPSEC, fontes de informação e ferramentas operacionais — além de guias, fichas e checklists aplicáveis.",
  },
  {
    q: "Preciso de experiência prévia?",
    a: "Não. O acervo começa pelo “comece por aqui” e avança de forma progressiva, do fundamento à aplicação. Não exige formação anterior em inteligência ou investigação.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação do pagamento, o acesso é liberado na área de membros e enviado para o e-mail usado na compra. Use sempre o e-mail principal que você realmente acessa.",
  },
  {
    q: "Isso é ético e legal?",
    a: "Sim. O foco é compreender pessoas, comunicar melhor e proteger as próprias informações. Não há nada sobre coação, fraude, invasão ou manipulação.",
  },
  {
    q: "Posso pagar no Pix ou parcelar?",
    a: "Os dois. Você paga à vista no Pix ou parcela em até 12x no cartão. O acesso é liberado assim que o pagamento é confirmado.",
  },
  {
    q: "E se não for para mim?",
    a: "Você conta com o prazo de garantia de 7 dias (direito de arrependimento para compras online). Dentro do prazo, basta solicitar o reembolso.",
  },
]

export function AcervoDetail({ product }: { product: Product }) {
  const checkout = product.checkoutUrl

  return (
    <div className="bg-paper">
      {/* Trilha */}
      <section className="container-editorial pt-8 md:pt-10">
        <nav className="font-mono text-[11px] uppercase tracking-widest text-ink-muted" aria-label="Trilha">
          <Link href="/academy" className="hover:text-ink">
            Academy
          </Link>
          <span className="px-2" aria-hidden>
            /
          </span>
          <span className="text-ink-soft">{product.nome}</span>
        </nav>
      </section>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow-gold mb-4">Acervo Tático · Curso completo</p>
            <h1 className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink text-balance sm:text-5xl">
              O acervo definitivo de inteligência humana.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
              Nove módulos que reúnem o que a inteligência sabe sobre comportamento, comunicação e proteção —
              traduzido em método prático para você ler pessoas, conduzir conversas e proteger o que é seu.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Quero o Acervo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                {product.parcelado} · Cartão e Pix
              </span>
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden border border-line bg-deep lg:max-w-md">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.imageAlt}
              fill
              sizes="(min-width: 1024px) 440px, 80vw"
              priority
              className="object-cover"
            />
            {product.badge && (
              <span
                className="absolute right-3 top-3 inline-block bg-gold px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "var(--color-on-gold)" }}
              >
                {product.badge}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── 02. Por que isso importa ───────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">/ 02. Por que isso importa</p>
            <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {SITUATION.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="my-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
              <div className="bg-paper-strong p-6">
                <p className="font-display text-lg font-semibold text-ink">Quem age por impressão</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">descobre depois.</p>
              </div>
              <div className="bg-paper-strong p-6">
                <p className="font-display text-lg font-semibold text-ink">Quem age com critério</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">percebe durante.</p>
              </div>
              <div className="bg-paper-strong p-6">
                <p className="font-display text-lg font-semibold text-ink">Quem opera com método</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">percebe antes.</p>
              </div>
            </div>

            <div className="mt-8 border-l-2 border-gold bg-paper-deep p-6">
              <p className="eyebrow-gold mb-2">A diferença</p>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Inteligência humana não é desconfiar de todos nem manipular ninguém. É parar de agir no escuro:
                entender comportamento, conduzir conversas com intenção e proteger a própria informação — antes
                que o custo apareça.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. Os 9 módulos ───────────────────────────────────── */}
      <section id="modulos" className="hairline-b bg-paper-deep scroll-mt-20">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">/ 03. O que você vai dominar</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink text-balance md:text-4xl">
              Nove módulos. Do comportamento humano à operação.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft text-pretty md:text-base">
              Você começa entendendo como as pessoas decidem, aprende a se comunicar e a ler sinais, domina a
              elicitação e termina sabendo proteger as próprias informações e operar com ferramentas práticas.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => {
              const Icon = m.icon
              return (
                <div key={m.title} className="flex flex-col bg-paper-strong p-7">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center bg-paper-deep text-gold-active">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">{m.n}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{m.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 04. O que você recebe ──────────────────────────────── */}
      <section className="hairline-b">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">O que você recebe</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink text-balance md:text-4xl">
              Um acervo para estudar uma vez e consultar pela vida toda.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {DELIVERS.map((card) => {
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

      {/* ── 05. Para quem / Não é para ─────────────────────────── */}
      <section className="hairline-b bg-paper-deep">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
            <div className="bg-paper-strong p-8 md:p-10">
              <p className="eyebrow-gold mb-4">/ 04. Para quem é</p>
              <h2 className="font-display text-2xl font-bold leading-snug text-ink text-balance">
                Para quem decide, comunica e protege.
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

      {/* ── 06. Ética e limites ────────────────────────────────── */}
      <section className="hairline-b bg-ink text-paper">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-gold">/ 06. Ética e limites</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-paper text-balance md:text-4xl">
              Inteligência humana não é manipular pessoas.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-paper/75 text-pretty md:text-base">
              Este acervo não ensina coação, fraude, invasão ou exploração de vulnerabilidades. Ensina a entender
              comportamento, comunicar com intenção e proteger o que é seu — começando pela própria capacidade de
              decidir.
            </p>
            <p className="mt-5 font-display text-lg font-medium text-paper text-pretty">
              Quem domina inteligência humana não vence porque engana melhor. Vence porque percebe melhor, comunica
              melhor e se protege melhor.
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
              Tudo incluso. Em um único acervo.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden border border-line bg-line lg:grid-cols-5">
            {/* Preço */}
            <div className="bg-paper-strong p-8 md:p-10 lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-gold-active">Acervo Tático completo</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-ink sm:text-5xl">{product.parcelado}</span>
              </div>
              <p className="mt-2 text-sm text-ink-muted">no cartão · ou Pix · acesso imediato</p>
              <a
                href={checkout}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-gold px-6 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Garantir meu acesso
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold-active" aria-hidden /> 7 dias de garantia
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-gold-active" aria-hidden /> Pagamento seguro
                </span>
              </div>
            </div>

            {/* Incluso */}
            <div className="bg-paper-strong p-8 md:p-10 lg:col-span-3">
              <p className="eyebrow mb-4">O que está incluso</p>
              <h3 className="font-display text-xl font-semibold text-ink">{product.nome}</h3>
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
                <p className="eyebrow-gold mb-1">Garantia</p>
                <h3 className="font-display text-lg font-semibold text-ink">7 dias para decidir. Risco zero.</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  Você conta com o prazo de garantia de 7 dias (direito de arrependimento para compras online).
                  Dentro do prazo, basta solicitar o reembolso — sem fricção.
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

      {/* ── CTA final ──────────────────────────────────────────── */}
      <section className="bg-ink text-paper">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-gold">Mundo da HUMINT Academy</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-paper text-balance md:text-4xl">
              Onde a teoria vira operação.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-paper/75 md:text-base">
              Comece pelo acervo completo de inteligência humana e aplique a partir de hoje.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={checkout}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-base font-semibold text-on-gold transition-colors hover:bg-gold-hover"
              >
                Garantir meu acesso
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <span className="font-mono text-xs uppercase tracking-widest text-paper/60">
                {product.parcelado} · Cartão e Pix
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
