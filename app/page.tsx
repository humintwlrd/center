import {
  Eye,
  Brain,
  MessagesSquare,
  Lock,
  FolderOpen,
  Settings2,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Award,
  Mail,
  KeyRound,
  CalendarClock,
  ChevronDown,
  ArrowDown,
  Flag,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StickyNav } from "@/components/sticky-nav"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { AccessButton } from "@/components/access-button"
import { HeroCountdown } from "@/components/hero-countdown"

export default function AcervoTaticoPage() {
  return (
    <main id="top" className="min-h-screen bg-humint-charcoal text-humint-bone overflow-x-hidden pb-20 md:pb-0">
      <ScrollReveal />
      <StickyNav />
      <MobileStickyCta />

      {/* ═══════════════════════════════════════════════════════════
           HERO — Cinematic, dossier-inspired, video background
         ═══════════════════════════════════════════════════════════ */}
      <header className="relative pt-20 md:pt-36 pb-12 md:pb-28 overflow-hidden">
        {/* Background — gradiente + grid (sem vídeo, mais leve) */}
        <div className="absolute inset-0 z-0">
          {/* Imagem de fundo — apenas mobile */}
          <img
            src="/hero-background-mobile.webp"
            alt=""
            aria-hidden="true"
            className="md:hidden absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Overlay para legibilidade do texto sobre a imagem (mobile) */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-humint-charcoal/70 via-humint-charcoal/40 to-humint-charcoal/85" />
          {/* Imagem de fundo — apenas desktop */}
          <img
            src="/hero-background-desktop.webp"
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Overlay para legibilidade do texto sobre a imagem (desktop) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-humint-charcoal/70 via-humint-charcoal/35 to-humint-charcoal/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          {/* Countdown (mobile only) */}
          <HeroCountdown />
          {/* Top metadata bar */}
          <div className="flex justify-center items-center gap-3 md:gap-4 mb-8 md:mb-10 reveal">
            <span className="stamp-confidential">
              <span className="h-1.5 w-1.5 rounded-full bg-humint-blood animate-pulse" />
              Acervo confidencial
            </span>
            <span className="md:hidden font-mono text-[10px] tracking-[0.24em] uppercase text-humint-blood/80">
              Limitado
            </span>
            <span className="hidden lg:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-humint-amber/70">
              <span className="h-px w-8 bg-humint-amber/30" />
              Condição de fundador
            </span>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-3xl text-center">
              {/* Eyebrow */}
              <div className="reveal mb-7 md:mb-8">
                <p className="font-mono text-[11px] md:text-xs tracking-[0.077em] uppercase text-humint-amber/80">
                  Conhecimento prático em HUMINT
                </p>
              </div>

              {/* Headline */}
              <h1 className="reveal font-serif font-light text-[2.4rem] sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] md:leading-[1.0] tracking-[-0.02em] text-balance">
                O primeiro e único{" "}
                <span className="underline decoration-humint-amber/60 decoration-[2px] underline-offset-[8px]">
                  acervo
                </span>{" "}
                tático de{" "}
                <span className="text-humint-amber">Inteligência Humana</span> do Brasil.
              </h1>

              {/* Amber rule */}
              <div className="reveal mt-10 md:mt-10 mb-8 md:mb-8 h-px w-24 md:w-32 bg-humint-amber/70 mx-auto" />

              {/* Subhead / body */}
              <p className="reveal max-w-xl mx-auto text-[16.5px] md:text-lg text-humint-bone/75 leading-[1.65] md:leading-relaxed font-light">
                Aprenda a identificar intenções ocultas, extrair informações sem resistência e antecipar
                comportamentos antes que eles se revelem. Técnicas de obtenção de dados através de pessoas,
                utilizadas em operações reais, aplicadas à negociação, influência, leitura comportamental e
                proteção contra manipulação.
              </p>

              {/* Mobile: animated scroll indicator — sempre visível ao carregar */}
              <div className="lg:hidden mt-14 flex justify-center">
                <a
                  href="#diagnostico"
                  aria-label="Continuar"
                  className="group inline-flex flex-col items-center gap-2"
                >
                  <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-humint-amber/60">
                    <span className="mt-1.5 h-1.5 w-[3px] rounded-full bg-humint-amber animate-scroll-hint-dot" />
                  </span>
                  <ChevronDown className="h-4 w-4 text-humint-amber/70 animate-scroll-hint" />
                </a>
              </div>

              {/* Desktop: CTA com animação de reveal */}
              <div className="reveal hidden lg:flex md:mt-12 justify-center">
                <a
                  href="#oferta"
                  className="inline-flex group relative items-center justify-center gap-3 border border-humint-amber/70 text-humint-amber hover:text-humint-ink hover:bg-humint-amber font-mono text-[12px] md:text-sm tracking-[0.22em] md:tracking-[0.24em] uppercase font-semibold px-7 md:px-10 py-4 md:py-5 rounded-full transition-colors min-h-[52px]"
                >
                  Acessar material
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker — hidden on mobile to save vertical space and bandwidth */}
        <div className="hidden md:block relative z-10 mt-16 md:mt-24 border-y border-humint-bone/10 bg-humint-charcoal/60 backdrop-blur-sm overflow-hidden">
          <div className="flex animate-ticker whitespace-nowrap py-3.5 font-mono text-[11px] tracking-[0.28em] uppercase text-humint-bone/35">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-10 px-5 shrink-0">
                {[
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
                ].map((t) => (
                  <span key={t} className="flex items-center gap-10 shrink-0">
                    {t}
                    <span className="text-humint-amber/60">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
           ANTES DA TÉCNICA — reconhecimento
         ═══════════════════════════════════════════════════════════ */}
      <section id="diagnostico" className="relative bg-humint-white py-24 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          {/* Eyebrow */}
          <div className="reveal mb-8 md:mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-humint-blood" aria-hidden />
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-humint-blood">
              / 02. A situação real
            </span>
          </div>
          {/* Abertura — lede ancorado por régua de acento */}
          <div className="reveal relative pl-6 md:pl-10 border-l-2 border-humint-amber">
            <p className="font-sans font-normal text-xl md:text-[1.6rem] text-humint-ink leading-[1.5] tracking-[-0.01em] text-pretty">
              Você provavelmente já viveu isso em uma negociação, reunião, venda, parceria ou conversa
              decisiva. Tudo parecia fazer sentido. A proposta era aceitável. O clima estava bom. Ninguém
              levantou a voz, ninguém pressionou de forma óbvia, ninguém pareceu estar manipulando nada.
            </p>
          </div>

          {/* Corpo editorial */}
          <div className="reveal mt-10 md:mt-14 space-y-6 md:space-y-7 font-sans text-[17px] md:text-lg text-humint-ink/70 leading-relaxed text-pretty">
            <p>
              Mas depois, quando a euforia passou e a decisão começou a produzir consequências, veio a
              sensação de que você perdeu espaço. Aceitou algo ruim demais. Cedeu antes da hora. Concordou
              com uma lógica que parecia correta no momento, mas que não sustentava a realidade depois.
            </p>
            <p>
              Isso raramente acontece porque a outra pessoa é mais inteligente. Acontece porque ela estava
              lendo a situação com mais precisão. Enquanto você prestava atenção apenas no que estava sendo
              dito, alguém observava o ritmo da conversa, seus sinais de hesitação, seus pontos de interesse,
              suas concessões pequenas e o momento exato em que você começava a justificar para si mesmo uma
              decisão que ainda não estava madura.
            </p>
            <p>
              Em qualquer interação importante, existem{" "}
              <span className="text-humint-blood font-medium">três posições</span>: quem conduz, quem negocia
              com consciência e quem é conduzido acreditando que ainda está no controle.
            </p>
          </div>

          {/* Pullquote — virada de chave */}
          <blockquote className="reveal my-12 md:my-16 border-l-2 border-humint-blood pl-6 md:pl-10">
            <p className="font-serif text-2xl md:text-[2rem] text-humint-ink leading-[1.3] tracking-[-0.01em] text-balance">
              A pior posição é sair de uma situação convencido de que decidiu bem, quando na prática você
              apenas reagiu melhor ao roteiro que alguém construiu para você.
            </p>
          </blockquote>

          <div className="reveal space-y-6 md:space-y-7 font-sans text-[17px] md:text-lg text-humint-ink/70 leading-relaxed text-pretty">
            <p>
              É isso que acontece quando você interpreta uma conversa apenas pelo conteúdo das palavras e
              ignora todo o resto: o ritmo, a tensão, os silêncios, as concessões pequenas, a urgência criada,
              a simpatia estratégica, os pontos em que você começa a justificar uma decisão antes de realmente
              avaliá-la.
            </p>
          </div>

          {/* Três posições — cadência em três linhas */}
          <div className="reveal my-12 md:my-16 divide-y divide-humint-ink/10 border-y border-humint-ink/10">
            <p className="py-4 md:py-5 font-serif text-xl md:text-2xl text-humint-ink/55">
              Quem é conduzido só percebe <span className="text-humint-ink">depois.</span>
            </p>
            <p className="py-4 md:py-5 font-serif text-xl md:text-2xl text-humint-ink/75">
              Quem negocia com consciência percebe <span className="text-humint-ink">durante.</span>
            </p>
            <p className="py-4 md:py-5 font-serif text-xl md:text-2xl text-humint-ink">
              Quem conduz percebe <span className="text-humint-blood">antes.</span>
            </p>
          </div>

          <div className="reveal space-y-6 md:space-y-7 font-sans text-[17px] md:text-lg text-humint-ink/70 leading-relaxed text-pretty">
            <p>
              <span className="text-humint-ink font-medium">O Acervo Tático foi construído para treinar essa
              percepção.</span>{" "}
              Para que você deixe de entrar em interações importantes apenas reagindo ao que aparece e passe a
              observar o que está sendo construído diante de você.
            </p>
          </div>

          {/* Atenção — ressalva ética */}
          <div className="reveal mt-12 md:mt-16 bg-humint-ink text-humint-bone p-6 md:p-9">
            <div className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-humint-amber mb-4">
              Atenção
            </div>
            <p className="font-sans text-lg md:text-xl text-humint-bone leading-relaxed text-pretty">
              Não se trata de manipular pessoas.
            </p>
            <p className="mt-4 font-sans text-[16px] md:text-lg text-humint-bone/70 leading-relaxed text-pretty">
              Trata-se de não ser ingênuo em ambientes onde percepção, linguagem, comportamento e decisão estão
              sempre em jogo. Porque, em qualquer interação relevante, alguém ocupa a posição de leitura. E
              quando essa pessoa não é você, normalmente você só entende o custo depois.
            </p>
          </div>

          <a
            href="#dossie"
            className="reveal group mt-14 md:mt-20 inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-humint-ink/60 hover:text-humint-ink transition-colors"
          >
            <span className="h-px w-8 bg-current transition-all group-hover:w-12" aria-hidden />
            A arquitetura do acervo
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           DOSSIÊS — Arquitetura do acervo
         ═══════════════════════════════════════════════════════════ */}
      <section id="dossie" className="relative bg-humint-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Cabeçalho da seção */}
          <div className="grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 mb-12 md:mb-20 items-start">
            <div className="lg:col-span-6 reveal">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-humint-amber" aria-hidden />
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-humint-amber">
                  / 03. A arquitetura
                </span>
              </div>
              <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] leading-[1.1] md:leading-[1.06] tracking-[-0.01em] text-balance">
                Seis fundamentos.
                <br />
                Um <span className="text-humint-amber">núcleo operacional</span>.
                <br />
                Um sistema para ler melhor interações humanas.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 reveal space-y-5 pt-1">
              <p className="text-[15px] md:text-base text-humint-bone/70 font-light leading-relaxed">
                Cada dossiê desenvolve uma camada específica da terceira posição: compreender
                comportamento, calibrar comunicação, observar sinais, conduzir conversas, proteger
                informação, organizar fontes e transformar conhecimento em prática.
              </p>
              <p className="text-[15px] md:text-base text-humint-bone/55 font-light leading-relaxed">
                O Acervo não foi estruturado como uma sequência aleatória de conteúdos. Ele funciona
                como um mapa progressivo para formar percepção, critério e precisão em interações
                humanas.
              </p>
            </div>
          </div>

          {/* Grade — seis fundamentos + núcleo operacional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-humint-bone/8 border border-humint-bone/8">
            {dossies.map((m, i) => {
              const isCore = i === dossies.length - 1
              return (
                <article
                  key={m.t}
                  className={`reveal group relative flex p-7 md:p-9 transition-colors duration-500 ${
                    isCore
                      ? "sm:col-span-2 lg:col-span-3 flex-col md:flex-row md:gap-12 bg-humint-amber/[0.05] hover:bg-humint-amber/[0.08]"
                      : "flex-col bg-humint-charcoal hover:bg-humint-graphite/60"
                  }`}
                >
                  <div className={isCore ? "md:flex-1" : "flex flex-col h-full"}>
                    <div className="flex items-start justify-between mb-6 md:mb-8">
                      <span
                        className={`font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase ${
                          isCore ? "text-humint-amber" : "text-humint-amber/60"
                        }`}
                      >
                        {m.label}
                      </span>
                      <m.Icon
                        className={`h-5 w-5 transition-colors ${
                          isCore ? "text-humint-amber" : "text-humint-amber/70 group-hover:text-humint-amber"
                        }`}
                      />
                    </div>

                    <h3 className="font-serif text-xl md:text-[1.6rem] text-humint-bone leading-tight mb-3 md:mb-4 text-balance">
                      {m.t}
                    </h3>
                    <p
                      className={`text-[14px] md:text-[15px] text-humint-bone/60 leading-relaxed font-light ${
                        isCore ? "" : "mb-6 md:mb-7"
                      }`}
                    >
                      {m.d}
                    </p>
                  </div>

                  <div
                    className={
                      isCore
                        ? "mt-7 md:mt-0 md:w-[300px] md:shrink-0 md:border-l md:border-t-0 border-t border-humint-bone/10 md:pl-12 pt-6 md:pt-0"
                        : "mt-auto pt-5 md:pt-6 border-t border-humint-bone/10"
                    }
                  >
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-humint-bone/40 mb-3.5">
                      {m.bulletsHeading}
                    </div>
                    <ul className="space-y-2.5">
                      {m.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-3 text-[13.5px] md:text-sm text-humint-bone/70 font-light leading-snug"
                        >
                          <span className="mt-2 h-px w-3 bg-humint-amber/60 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Fechamento discreto */}
          <div className="reveal mt-12 md:mt-16 flex items-start gap-5 max-w-3xl">
            <span className="mt-2.5 h-px w-10 bg-humint-amber/50 shrink-0" aria-hidden />
            <p className="text-[15px] md:text-base text-humint-bone/55 font-light leading-relaxed">
              Cada módulo cumpre uma função dentro do sistema. Primeiro, você entende o comportamento.
              Depois, aprende a observar a interação, conduzir conversas, proteger informação e
              transformar leitura em ação.
            </p>
          </div>

          {/* Indicador de scroll */}
          <div className="reveal mt-14 md:mt-20 flex justify-center" aria-hidden>
            <ChevronDown className="h-6 w-6 text-humint-amber/50 animate-scroll-hint" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           COMO O ACERVO FUNCIONA POR DENTRO
         ═══════════════════════════════════════════════════════════ */}
      <section
        id="acesso"
        className="relative bg-humint-charcoal py-24 md:py-32 overflow-hidden border-t border-humint-bone/5"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #d4a55a 1px, transparent 1px), linear-gradient(to bottom, #d4a55a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-5 md:px-8">
          {/* Heading */}
          <div className="reveal mb-10 md:mb-14 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-humint-amber/60" aria-hidden />
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-humint-amber/80">
                A plataforma
              </span>
              <span className="h-px w-8 bg-humint-amber/60" aria-hidden />
            </div>
            <h2 className="font-serif font-light text-[28px] md:text-5xl lg:text-[3.4rem] leading-[1.06] text-humint-bone tracking-[-0.01em] text-balance">
              O que você recebe dentro da plataforma.
            </h2>
            <p className="mt-5 md:mt-7 text-[16px] md:text-lg text-humint-bone/70 font-light leading-relaxed max-w-2xl mx-auto">
              O Acervo não é uma sequência de aulas soltas. É uma estrutura de consulta, estudo e aplicação.
            </p>
            <p className="mt-4 text-[15px] md:text-base text-humint-bone/55 font-light leading-relaxed max-w-2xl mx-auto">
              Dentro da plataforma, você acessa os dossiês e materiais auxiliares em uma ordem progressiva.
              Cada parte foi pensada para desenvolver uma camada de leitura humana: comportamento, comunicação,
              observação, elicitação, proteção, fontes e aplicação prática.
            </p>

            <img
              src="/members-area-mockup.webp"
              alt="Prévia da área de membros do Mundo da HUMINT em um celular, com a aula em andamento, lista de dossiês e progresso do operador"
              className="mt-10 md:mt-14 w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          {/* O que está incluído — 4 blocos */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-4 md:mt-6">
            {[
              {
                Icon: FolderOpen,
                title: "Dossiês completos",
                body: "Materiais em PDF para estudo profundo, revisão e consulta.",
              },
              {
                Icon: Settings2,
                title: "Protocolos práticos",
                body: "Estruturas para aplicar leitura, observação e análise com método.",
              },
              {
                Icon: CheckCircle2,
                title: "Checklists e modelos",
                body: "Ferramentas para organizar hipóteses, registrar sinais e revisar decisões.",
              },
              {
                Icon: CalendarClock,
                title: "Atualizações",
                body: "Novas liberações e melhorias durante o período de acesso.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="relative bg-humint-ink/50 border border-humint-bone/10 p-6 md:p-7 hover:border-humint-amber/30 transition-colors"
              >
                <Icon className="h-5 w-5 text-humint-amber/80 mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-[19px] md:text-[21px] leading-snug text-humint-bone mb-2.5 text-balance">
                  {title}
                </h3>
                <p className="text-[14px] md:text-[14.5px] text-humint-bone/60 font-light leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* How it works — 3 steps */}
          <div className="reveal mt-14 md:mt-20">
            <div className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-humint-bone/45 mb-6 md:mb-8 text-center">
              Como o acesso funciona
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  Icon: Mail,
                  step: "01",
                  title: "Compra com seu e-mail principal",
                  body: "Use o e-mail que você realmente acessa. Ele será usado para liberar sua entrada na plataforma.",
                },
                {
                  Icon: KeyRound,
                  step: "02",
                  title: "Recebe as credenciais",
                  body: "Em poucos minutos, os dados de acesso chegam no e-mail usado na compra.",
                },
                {
                  Icon: FolderOpen,
                  step: "03",
                  title: "Consulta no seu ritmo",
                  body: "Os materiais ficam disponíveis na área de membros para estudo, revisão e consulta durante o período de acesso.",
                },
              ].map(({ Icon, step, title, body }) => (
                <div
                  key={step}
                  className="relative bg-humint-ink/60 border border-humint-bone/10 p-5 md:p-7 hover:border-humint-amber/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4 md:mb-5">
                    <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-humint-amber/70">
                      / {step}
                    </span>
                    <Icon className="h-4 w-4 md:h-[18px] md:w-[18px] text-humint-amber/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-[19px] md:text-[22px] leading-snug text-humint-bone mb-2 md:mb-3 text-balance">
                    {title}
                  </h3>
                  <p className="text-[13.5px] md:text-[14.5px] text-humint-bone/60 font-light leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 md:mt-12 flex justify-center">
              <a
                href="#oferta"
                className="group inline-flex items-center justify-center gap-3 bg-humint-amber text-humint-ink font-mono text-[12px] md:text-sm tracking-[0.16em] md:tracking-[0.2em] uppercase font-bold px-8 md:px-10 py-4 md:py-5 min-h-[52px] hover:bg-humint-bone transition-colors"
              >
                Ver condições de acesso
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           PARA QUEM / NÃO É PARA
         ═══════════════════════════════════════════════════════════ */}
      <section
        id="para-quem"
        className="relative bg-humint-graphite py-24 md:py-32 border-t border-humint-bone/5"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {/* For */}
            <div className="reveal bg-humint-ink/30 border border-humint-amber/15 p-7 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-humint-amber" />
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-humint-amber">
                  / 04. Para quem
                </span>
              </div>
              <h3 className="font-serif font-light text-2xl sm:text-3xl md:text-[2.1rem] text-humint-bone mb-7 md:mb-9 leading-[1.15] text-balance">
                Para profissionais que dependem de leitura humana em decisões reais.
              </h3>
              <ul className="space-y-4 md:space-y-5">
                {[
                  "Negociadores, fundadores, executivos e líderes que precisam tomar decisões em ambientes de pressão.",
                  "Advogados, investigadores, analistas, consultores e profissionais que lidam com informação sensível.",
                  "Vendedores complexos, recrutadores e estrategistas que precisam compreender pessoas, interesses e contexto antes de agir.",
                  "Profissionais que precisam entrevistar, negociar, avaliar, proteger e decidir com mais precisão.",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-[14.5px] md:text-base text-humint-bone/80 font-light leading-relaxed"
                  >
                    <CheckCircle2 className="h-5 w-5 text-humint-amber shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for */}
            <div className="reveal bg-humint-ink/30 border border-humint-blood/20 p-7 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-humint-blood" />
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-humint-blood">
                  / 05. Não é para
                </span>
              </div>
              <h3 className="font-serif font-light text-2xl sm:text-3xl md:text-[2.1rem] text-humint-bone mb-7 md:mb-9 leading-[1.15] text-balance">
                Não é para quem procura poder sobre os outros.
              </h3>
              <ul className="space-y-4 md:space-y-5">
                {[
                  "Quem procura hack mental, truque de sedução, coação ou manual de manipulação.",
                  "Quem quer frases prontas no lugar de método, prática e leitura de contexto.",
                  "Quem confunde inteligência humana com paranoia.",
                  "Quem quer aprender a manipular, e não a decidir melhor.",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-[14.5px] md:text-base text-humint-bone/80 font-light leading-relaxed"
                  >
                    <span className="h-5 w-5 shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="block h-px w-3 bg-humint-blood" />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════����══════════════════════════════════════════════════════
           ÉTICA E LIMITES
         ═══════════════════════════════════════════════════════════ */}
      <section id="etica" className="relative bg-humint-white py-24 md:py-32 border-t border-humint-ink/10">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="reveal relative border-l-2 border-humint-blood pl-6 md:pl-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-humint-blood">
                / 06. Ética e limites
              </span>
            </div>
            <h2 className="font-serif font-light text-2xl sm:text-3xl md:text-[2.6rem] leading-[1.12] tracking-[-0.01em] text-humint-ink text-balance">
              Inteligência humana sem manipulação barata.
            </h2>
            <p className="mt-6 md:mt-8 text-[16px] md:text-lg text-humint-ink/70 font-light leading-relaxed text-pretty">
              O Acervo Tático não ensina coação, fraude, invasão, exposição ou exploração de
              vulnerabilidades. O foco é leitura de contexto, comunicação consciente, proteção
              informacional e tomada de decisão em interações humanas.
            </p>
            <blockquote className="mt-8 md:mt-10">
              <p className="font-serif text-xl md:text-[1.7rem] text-humint-ink leading-[1.3] tracking-[-0.01em] text-balance">
                O operador não vence porque engana melhor. Vence porque percebe melhor, decide melhor e
                preserva confiança enquanto atua.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           OFFER — Pricing box
         ═══════════════════════════════════════════════════════════ */}
      <section
        id="oferta"
        className="relative bg-humint-graphite py-24 md:py-32 overflow-hidden border-t border-humint-amber/15"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #d4a55a 1px, transparent 1px), linear-gradient(to bottom, #d4a55a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,90,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center mb-8 md:mb-14 reveal">
            <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.06] md:leading-[1.04] tracking-[-0.01em] text-balance">
              Tudo incluso.
              <br />
                <span className="text-humint-amber">Em um único pacote.</span>
            </h2>
          </div>

          <div className="reveal relative">
            {/* Glow border */}
            <div className="absolute -inset-px bg-gradient-to-br from-humint-amber via-humint-brass to-humint-leather opacity-60 blur-[2px]" />
            <div className="relative bg-humint-graphite border border-humint-amber/40">
              <div className="grid md:grid-cols-5">
                {/* On mobile: price first, then content. On desktop: content left, price right */}
                {/* Right — price (first on mobile via order) */}
                <div className="md:col-span-2 md:order-2 p-6 md:p-10 flex flex-col justify-center bg-humint-ink/40 border-b md:border-b-0 md:border-l border-humint-bone/10">
                  <div className="text-center">
                    {/* VARIANTE B (vitalício): trocar label por "Acesso vitalício" */}
                    <div className="font-mono text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-humint-amber/85 mb-2 md:mb-3">
                      Acesso por 12 meses
                    </div>
                    <div className="text-humint-bone/40 line-through text-[13px] md:text-sm mb-1">
                      De R$ 1.200
                    </div>
                    <div className="flex items-baseline justify-center gap-1.5 md:gap-2">
                      <span className="font-mono text-xs text-humint-bone/60 mt-3">12×</span>
                      <span className="font-serif text-5xl md:text-7xl text-humint-bone leading-none tabular-nums">
                    R$ 39
                  </span>
                  <span className="font-serif text-xl md:text-2xl text-humint-bone/70 mt-2 md:mt-3">
                    ,20
                  </span>
                    </div>
                    <div className="mt-2 text-[13px] md:text-sm text-humint-bone/65 font-light">
                      ou <span className="text-humint-bone">R$ 379 à vista</span> · PIX ou cartão
                    </div>

                    <AccessButton className="animate-amber-pulse mt-5 md:mt-7 group relative w-full inline-flex items-center justify-center gap-2 md:gap-3 bg-humint-amber text-humint-ink font-mono text-[12px] md:text-sm tracking-[0.16em] md:tracking-[0.18em] uppercase font-bold px-5 md:px-6 py-4 md:py-4 min-h-[52px] hover:bg-humint-bone transition-colors">
                      Garantir acesso agora
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </AccessButton>

                    <div className="mt-5 md:mt-6 grid grid-cols-3 gap-2 pt-4 md:pt-5 border-t border-humint-bone/10">
                      {[
                        { Icon: ShieldCheck, t: "7 dias garantia" },
                        { Icon: CalendarClock, t: "12 meses de acesso" },
                        { Icon: Lock, t: "Pagamento seguro" },
                      ].map(({ Icon, t }) => (
                        <div key={t} className="flex flex-col items-center gap-1.5">
                          <Icon className="h-4 w-4 text-humint-amber" />
                          <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-humint-bone/60 text-center leading-tight">
                            {t}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Left — what's included (second on mobile, first on desktop) */}
                <div className="md:col-span-3 md:order-1 p-6 md:p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-full max-w-md flex flex-col items-center">
                    <div className="font-mono text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-humint-amber mb-3 md:mb-4">
                      Conteúdo do acervo
                    </div>
                    <h3 className="font-serif text-2xl md:text-4xl text-humint-bone mb-5 md:mb-7 leading-tight text-balance">
                      Acervo Tático <span>HUMINT</span>
                    </h3>

                    <ul className="w-full space-y-2.5 md:space-y-3.5">
                      {[
                        "12 meses de acesso à área de membros.",
                        "7 entregas principais: 6 dossiês fundamentais + núcleo de ferramentas operacionais.",
                        "Materiais auxiliares: checklists, roteiros, modelos de análise e protocolos de aplicação.",
                        "Atualizações incluídas durante o período de acesso.",
                        "Garantia incondicional de 7 dias.",
                      ].map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-3 text-left text-[14px] md:text-base text-humint-bone/85 leading-relaxed text-pretty"
                        >
                          <CheckCircle2 className="h-[18px] w-[18px] text-humint-amber shrink-0 mt-0.5" />
                          <span className="font-light">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="reveal mt-8 md:mt-14 max-w-3xl mx-auto bg-humint-graphite/40 border border-humint-bone/10 p-5 md:p-9 flex flex-col items-center text-center gap-4 md:gap-6">
            <div className="shrink-0 h-14 w-14 md:h-16 md:w-16 rounded-full border-2 border-humint-amber/50 flex items-center justify-center">
              <Award className="h-6 w-6 md:h-7 md:w-7 text-humint-amber" />
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-humint-amber mb-1.5">
                Garantia incondicional
              </div>
              <h4 className="font-serif text-lg md:text-lg text-humint-bone leading-snug mb-2">
                7 dias para testar. Risco zero.
              </h4>
              <p className="text-[13.5px] md:text-sm text-humint-bone/65 font-light leading-relaxed">
                Se em uma semana o material não for para você, você pode solicitar o reembolso dentro do
                prazo de garantia. Sem fricção e sem justificativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           / 07 — PERGUNTAS FREQUENTES
         ═══════════════���������═════════════════════════════════════════ */}
      <section id="faq" className="relative bg-humint-charcoal py-24 md:py-32 border-t border-humint-bone/5">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="reveal font-serif font-light text-3xl md:text-5xl leading-[1.06] tracking-[-0.01em] text-humint-bone text-balance">
            Antes de decidir.
          </h2>

          <Accordion type="single" collapsible className="reveal mt-10 md:mt-14">
            {[
              {
                q: "Por que o instrutor é anônimo?",
                a: "Porque ele continua em atividade, e quem trabalha nessa área não aparece, já que um rosto público é um rosto inutilizado para qualquer coleta futura. A discrição aqui não é recurso de marketing, é condição de exercício da profissão, e acaba sendo também a primeira competência que o próprio acervo desenvolve em você.",
              },
              {
                q: "Funciona para mim, que não sou da área?",
                a: "O material foi escrito pensando em situações civis comuns, como uma negociação, uma contratação, uma sociedade, um relacionamento ou a proteção da sua própria família, e não tem a intenção de transformar você em agente. A intenção é tirar você da condição de alvo fácil, que é onde a maioria das pessoas passa a vida sem perceber.",
              },
              {
                q: "Isso é ético e legal?",
                a: "O acervo trata de elicitação ética e de defesa, nunca de coerção ou de invasão, e em nenhum ponto ensina a forçar alguém a coisa alguma. Se o que você procura é poder sobre os outros, a seção 'Não é para' já te avisou, e ela estava falando sério.",
              },
              {
                q: "Isso não é só linguagem corporal de internet?",
                a: "A leitura não-verbal é apenas um dos seis dossiês, e é justamente a parte que a maioria dos cursos vende como se fosse o conjunto inteiro. O peso real está na coleta, na elicitação, na contrainteligência e na proteção da própria informação, que é o que resta quando se tira o espetáculo da jogada.",
              },
              {
                q: "Como recebo o acesso?",
                a: "Logo após a compra, no e-mail que você usou, chegam o login, a senha e o link da área de membros. Não existe turma, cronograma ou aula ao vivo, de modo que o material fica disponível e o ritmo passa a ser definido por você.",
              },
              {
                q: "O acesso expira? E depois?",
                a: "O acesso vale por doze meses e não renova sozinho, e ao fim do período você decide se continua.",
              },
              {
                q: "E se não for para mim?",
                a: "Você tem sete dias para examinar o material por dentro, e se concluir que não serve, a devolução é integral, sem que precise justificar nada.",
              },
              {
                q: "Preciso de algum pré-requisito ou equipamento?",
                a: "Nenhum, além de atenção e disposição para praticar fora da tela. Todo o acervo é digital e funciona no próprio celular.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-${i}`}
                className="border-b border-humint-bone/10"
              >
                <AccordionTrigger className="py-5 md:py-6 text-left hover:no-underline group">
                  <span className="flex items-start gap-4">
                    <span className="font-mono text-[11px] tracking-[0.16em] text-humint-amber/60 mt-1.5 shrink-0">
                      {`/ 0${i + 1}`}
                    </span>
                    <span className="font-serif text-lg md:text-xl text-humint-bone leading-snug group-hover:text-humint-amber transition-colors">
                      {item.q}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-10 md:pl-11">
                  <p className="font-light text-humint-bone/70 leading-relaxed text-[15px]">
                    {item.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           AVISO DE PROTEÇÃO / PROPRIEDADE INTELECTUAL
         ════════���══════════════════════════════════════════════════ */}
      <section
        id="protecao"
        className="relative bg-humint-ink py-24 md:py-32 border-t border-humint-blood/30 overflow-hidden"
      >
        {/* textura de grade discreta */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8a1c1c 1px, transparent 1px), linear-gradient(to bottom, #8a1c1c 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden
        />
        {/* halo vermelho */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(138,28,28,0.18),transparent_60%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl px-5 md:px-8">
          <div className="reveal relative border-l-2 border-humint-blood pl-6 md:pl-10">
            {/* selo / classificação */}
            <div className="flex items-center gap-3 mb-7 md:mb-9">
              <Lock className="h-4 w-4 text-humint-blood" strokeWidth={2} />
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-humint-blood">
                Aviso de segurança · Material protegido
              </span>
            </div>

            <h2 className="font-serif font-light text-[26px] sm:text-3xl md:text-[2.7rem] leading-[1.1] tracking-[-0.01em] text-humint-bone text-balance">
              Cada linha deste material está catalogada, datada e rastreável até a fonte.
            </h2>

            <p className="mt-6 md:mt-8 text-[15px] md:text-[17px] text-humint-bone/75 font-light leading-relaxed text-pretty">
              Todo o conteúdo do <span className="text-humint-bone font-normal">Mundo da HUMINT</span>, incluindo
              marca, identidade, copy, narrativa, estrutura de página, dossiês, protocolos, ferramentas e qualquer
              material entregue na área de membros, é propriedade intelectual exclusiva e está protegido por
              direito autoral, direito de marca e legislação de concorrência desleal.
            </p>

            <p className="mt-5 text-[15px] md:text-[17px] text-humint-bone/75 font-light leading-relaxed text-pretty">
              Cópia, clonagem, reprodução, adaptação, revenda, redistribuição ou engenharia reversa, total ou
              parcial, não passa despercebida. Documentos carregam{" "}
              <span className="text-humint-bone font-normal">marcações ocultas</span> e identificadores
              individuais por operador. Quando um vazamento aparece, ele aponta de volta para quem o originou.
              Não é ameaça. É procedimento.
            </p>

            {/* bloco de consequências */}
            <div className="mt-9 md:mt-11 grid gap-px bg-humint-blood/20 border border-humint-blood/20">
              {[
                {
                  t: "Identificação",
                  d: "Cada acesso é nominal e marcado. A origem de qualquer cópia é determinável.",
                },
                {
                  t: "Notificação",
                  d: "Remoção imediata, derrubada de domínios, plataformas e meios de pagamento envolvidos.",
                },
                {
                  t: "Responsabilização",
                  d: "Medidas cíveis e criminais cabíveis, com perdas, danos e ressarcimento de custos.",
                },
              ].map((item) => (
                <div key={item.t} className="bg-humint-ink p-5 md:p-6 flex items-start gap-4">
                  <ShieldCheck className="h-5 w-5 text-humint-blood shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-humint-blood mb-1.5">
                      {item.t}
                    </div>
                    <p className="text-[14px] md:text-[15px] text-humint-bone/70 font-light leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-9 md:mt-11">
              <p className="font-serif text-lg md:text-[1.6rem] text-humint-bone leading-[1.3] tracking-[-0.01em] text-balance">
                Quem estuda este material aprende a fechar a própria pegada. Quem tenta copiá-lo,
                ironicamente, deixa a pegada mais visível de todas.
              </p>
            </blockquote>

            <p className="mt-7 font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-humint-bone/40 leading-relaxed">
              © {new Date().getFullYear()} Mundo da HUMINT. Todos os direitos reservados. Uso autorizado
              estritamente individual e intransferível.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           FOOTER
         ═══════════════════════════════════════════════════════════ */}
      <footer className="bg-humint-charcoal border-t border-humint-bone/8 py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex items-center">
              <img
                src="/logo-mundo-humint.png"
                alt="Mundo da HUMINT"
                className="h-10 w-auto object-contain opacity-90"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6 font-mono text-[11px] tracking-[0.2em] uppercase text-humint-bone/45">
              <a href="/termos" className="hover:text-humint-amber transition-colors">
                Termos
              </a>
              <a href="/privacidade" className="hover:text-humint-amber transition-colors">
                Privacidade
              </a>
              <a href="/suporte" className="hover:text-humint-amber transition-colors">
                Suporte
              </a>
            </div>

            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-humint-bone/35">
              © 2026 Mundo da HUMINT · Todos os direitos reservados
            </div>

            <p className="max-w-2xl text-[11px] leading-relaxed text-humint-bone/30 font-light text-pretty">
              Este site não é afiliado, associado, autorizado, endossado ou de qualquer forma oficialmente
              ligado ao Facebook, Instagram ou Meta Platforms, Inc. Os nomes Facebook, Instagram e Meta, bem
              como marcas e logotipos relacionados, são propriedade da Meta Platforms, Inc. Após sair do
              ambiente do Facebook ou Instagram, a responsabilidade pelo conteúdo desta página é exclusivamente
              nossa, e não da Meta.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

  /* ═══════════════════════════════════════════════════��══════════════
   Dossiês data
   ═════════════════════════════════════════════════════════════════���═ */

const dossies = [
  {
    Icon: Brain,
    label: "Dossiê 01",
    t: "Mecânicas do Comportamento",
    d: "Entenda os padrões que influenciam percepção, decisão e reação humana. A base para perceber por que pessoas cedem, resistem, justificam escolhas e mudam de posição.",
    bulletsHeading: "O que você treina:",
    points: [
      "Leitura de padrões comportamentais",
      "Identificação de gatilhos de decisão",
      "Compreensão de vieses e respostas automáticas",
    ],
  },
  {
    Icon: MessagesSquare,
    label: "Dossiê 02",
    t: "Comunicação e Influência",
    d: "Aprenda como mensagens são interpretadas, como decisões são conduzidas e como ajustar linguagem, ritmo e enquadramento sem depender de improviso.",
    bulletsHeading: "O que você treina:",
    points: ["Clareza na comunicação", "Construção de confiança", "Percepção de intenção e influência"],
  },
  {
    Icon: Eye,
    label: "Dossiê 03",
    t: "Linguagem Não-verbal",
    d: "Observe sinais físicos, expressões, ritmo, postura e microajustes de comportamento sem cair em leitura fantasiosa ou interpretação rasa.",
    bulletsHeading: "O que você treina:",
    points: [
      "Leitura de congruência",
      "Observação de tensão e conforto",
      "Percepção de mudanças no comportamento",
    ],
  },
  {
    Icon: HelpCircle,
    label: "Dossiê 04",
    t: "Elicitação Ética",
    d: "Conduza conversas para obter informação relevante por meio de perguntas, contexto e escuta ativa, sem pressão, exposição ou manipulação.",
    bulletsHeading: "O que você treina:",
    points: ["Perguntas indiretas", "Condução conversacional", "Extração ética de informação"],
  },
  {
    Icon: Lock,
    label: "Dossiê 05",
    t: "Contrainteligência & OPSEC",
    d: "Aprenda a proteger informações, reduzir exposição, reconhecer riscos e evitar que detalhes sensíveis sejam entregues sem necessidade.",
    bulletsHeading: "O que você treina:",
    points: [
      "Higiene digital e comportamental",
      "Detecção de exposição indevida",
      "Proteção de informação sensível",
    ],
  },
  {
    Icon: FolderOpen,
    label: "Dossiê 06",
    t: "Fontes de Informação",
    d: "Organize caminhos de busca, valide dados, relacione fontes e transforme informação dispersa em leitura útil de contexto.",
    bulletsHeading: "O que você treina:",
    points: ["Busca e validação de dados", "Cruzamento de fontes", "Análise de contexto"],
  },
  {
    Icon: Settings2,
    label: "Núcleo Operacional",
    t: "Ferramentas Operacionais",
    d: "Use instrumentos práticos para estruturar análise, registrar observações, organizar hipóteses e aplicar o repertório dos dossiês com mais clareza.",
    bulletsHeading: "O que você recebe:",
    points: ["Modelos de análise", "Checklists operacionais", "Protocolos de aplicação"],
  },
]
