import Image from "next/image"
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from "lucide-react"
import { StickyNav } from "@/components/landing/sticky-nav"
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta"
import { AccessButton } from "@/components/landing/access-button"
import { TestimonialsCarousel } from "@/components/landing/testimonials-carousel"
import { splitParcelado } from "@/components/shop/product-card"
import { ACERVO } from "@/lib/products"

/**
 * Landing de vendas do Acervo Tático (tráfego pago). Header e footer próprios,
 * scripts da Utmify no layout. Mesmo mundo visual de /academy/acervo-tatico.
 */

const TERMS = [
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
  {
    title: "Recebe as credenciais",
    body: "Em poucos minutos, os dados de acesso chegam no e-mail usado na compra.",
  },
  {
    title: "Consulta no seu ritmo",
    body: "Os materiais ficam disponíveis na área de membros para estudo, revisão e consulta durante o período de acesso.",
  },
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
]

export default function AcervoTaticoPage() {
  // Preço vem do catálogo (lib/products.ts): uma só fonte para loja e landing.
  const { value: installment } = splitParcelado(ACERVO.parcelado)
  const installments = ACERVO.parcelado.split("x")[0]

  return (
    <div id="top" className="pv-page min-h-screen overflow-x-hidden bg-night pb-20 text-white md:pb-0">
      <StickyNav />
      <MobileStickyCta />

      {/* ── Abertura ───────────────────────────────────────────── */}
      <header className="night pt-24 md:pt-32">
        <div className="container-site grid gap-14 pb-20 md:pb-28 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="font-expanded text-display font-extrabold">
              O primeiro e único acervo tático de Inteligência Humana do <span className="redact">Brasil.</span>
            </h1>
            <p className="mt-8 max-w-[58ch] text-lede text-mist">
              Aprenda a identificar intenções ocultas, extrair informações sem resistência e antecipar comportamentos
              antes que eles se revelem. Técnicas de obtenção de dados através de pessoas, utilizadas em operações
              reais, aplicadas à negociação, influência, leitura comportamental e proteção contra manipulação.
            </p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <a href="#oferta" className="btn btn-signal btn-lg">
                Acessar material
                <ArrowRight aria-hidden />
              </a>
              <a href="#diagnostico" className="link-more">
                Continuar lendo
                <ArrowDown aria-hidden />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden lg:max-w-none">
              <Image
                src="/images/shop/acervo-tatico.webp"
                alt="Capa do Acervo Tático HUMINT: dossiê sépia com a silhueta de um operador e documentos tarjados"
                fill
                priority
                sizes="(min-width: 1024px) 500px, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="hidden border-y border-line-night py-4 md:block">
          <ul className="container-site flex flex-wrap gap-x-8 gap-y-1 font-expanded font-bold text-mist-2">
            {TERMS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </header>

      {/* ── Antes da técnica ───────────────────────────────────── */}
      <section id="diagnostico" className="bg-snow text-ink" aria-label="Antes da técnica">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-[64ch]">
            <p className="text-[1.375rem] leading-normal text-ink md:text-[1.625rem]">
              Você provavelmente já viveu isso em uma negociação, reunião, venda, parceria ou conversa decisiva. Tudo
              parecia fazer sentido. A proposta era aceitável. O clima estava bom. Ninguém levantou a voz, ninguém
              pressionou de forma óbvia, ninguém pareceu estar manipulando nada.
            </p>

            <div className="mt-10 flex flex-col gap-6 text-lg leading-relaxed text-ink-2">
              <p>
                Mas depois, quando a euforia passou e a decisão começou a produzir consequências, veio a sensação de que
                você perdeu espaço. Aceitou algo ruim demais. Cedeu antes da hora. Concordou com uma lógica que parecia
                correta no momento, mas que não sustentava a realidade depois.
              </p>
              <p>
                Isso raramente acontece porque a outra pessoa é mais inteligente. Acontece porque ela estava lendo a
                situação com mais precisão. Enquanto você prestava atenção apenas no que estava sendo dito, alguém
                observava o ritmo da conversa, seus sinais de hesitação, seus pontos de interesse, suas concessões
                pequenas e o momento exato em que você começava a justificar para si mesmo uma decisão que ainda não
                estava madura.
              </p>
              <p>
                Em qualquer interação importante, existem <strong className="font-semibold text-ink">três posições</strong>:
                quem conduz, quem negocia com consciência e quem é conduzido acreditando que ainda está no controle.
              </p>
            </div>

            <blockquote className="my-14 font-expanded text-title font-extrabold md:my-16">
              A pior posição é sair de uma situação convencido de que decidiu bem, quando na prática você apenas reagiu
              melhor ao roteiro que alguém construiu para você.
            </blockquote>

            <p className="text-lg leading-relaxed text-ink-2">
              É isso que acontece quando você interpreta uma conversa apenas pelo conteúdo das palavras e ignora todo o
              resto: o ritmo, a tensão, os silêncios, as concessões pequenas, a urgência criada, a simpatia estratégica,
              os pontos em que você começa a justificar uma decisão antes de realmente avaliá-la.
            </p>

            <div className="my-14 border-y-2 border-ink font-expanded text-heading font-extrabold md:my-16">
              <p className="border-b border-line py-5 text-ink-3">Quem é conduzido só percebe depois.</p>
              <p className="border-b border-line py-5 text-ink-2">Quem negocia com consciência percebe durante.</p>
              <p className="py-5">
                Quem conduz percebe <span className="redact">antes.</span>
              </p>
            </div>

            <p className="text-lg leading-relaxed text-ink-2">
              <strong className="font-semibold text-ink">O Acervo Tático foi construído para treinar essa percepção.</strong>{" "}
              Para que você deixe de entrar em interações importantes apenas reagindo ao que aparece e passe a observar o
              que está sendo construído diante de você.
            </p>

            <div className="mt-14 border-t-2 border-ink pt-8">
              <p className="font-expanded text-heading font-extrabold">Não se trata de manipular pessoas.</p>
              <p className="mt-4 text-lg leading-relaxed text-ink-2">
                Trata-se de não ser ingênuo em ambientes onde percepção, linguagem, comportamento e decisão estão sempre
                em jogo. Porque, em qualquer interação relevante, alguém ocupa a posição de leitura. E quando essa pessoa
                não é você, normalmente você só entende o custo depois.
              </p>
            </div>

            <a href="#dossie" className="link-more mt-12">
              A arquitetura do acervo
              <ArrowDown aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* ── Arquitetura do acervo ──────────────────────────────── */}
      <section id="dossie" className="night" aria-labelledby="dossie-title">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h2 id="dossie-title" className="font-expanded text-title font-extrabold lg:col-span-7">
              Seis fundamentos. Um núcleo operacional. Um sistema para ler melhor interações humanas.
            </h2>
            <div className="flex max-w-[56ch] flex-col gap-5 text-lg leading-relaxed text-mist lg:col-span-5 lg:pt-3">
              <p>
                Cada dossiê desenvolve uma camada específica da terceira posição: compreender comportamento, calibrar
                comunicação, observar sinais, conduzir conversas, proteger informação, organizar fontes e transformar
                conhecimento em prática.
              </p>
              <p>
                O Acervo não foi estruturado como uma sequência aleatória de conteúdos. Ele funciona como um mapa
                progressivo para formar percepção, critério e precisão em interações humanas.
              </p>
            </div>
          </div>

          <ol className="mt-16 border-t border-line-night">
            {DOSSIES.map((m) => (
              <li key={m.t} className="grid gap-4 border-b border-line-night py-8 md:grid-cols-12 md:gap-8">
                <p aria-hidden className={`hidden font-bold md:col-span-2 md:block md:pt-1.5 ${m.core ? "text-white" : "text-mist-2"}`}>
                  {m.label}
                </p>
                <div className="md:col-span-6">
                  <h3 className="font-expanded text-heading font-extrabold">
                    <span className="md:sr-only">{m.label} · </span>
                    {m.t}
                  </h3>
                  <p className="mt-3 max-w-[54ch] leading-relaxed text-mist">{m.d}</p>
                </div>
                <div className="md:col-span-4 md:pt-1.5">
                  <p className="text-sm text-mist-2">{m.bulletsHeading}</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[0.9375rem]">
                        <span aria-hidden className="bar-mark" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-[62ch] text-lg leading-relaxed text-mist">
            Cada módulo cumpre uma função dentro do sistema. Primeiro, você entende o comportamento. Depois, aprende a
            observar a interação, conduzir conversas, proteger informação e transformar leitura em ação.
          </p>
        </div>
      </section>

      {/* ── A plataforma por dentro ────────────────────────────── */}
      <section id="acesso" className="night-2" aria-labelledby="acesso-title">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-6">
              <h2 id="acesso-title" className="font-expanded text-title font-extrabold">
                O que você recebe dentro da plataforma.
              </h2>
              <p className="mt-6 max-w-[52ch] text-lede text-mist">
                O Acervo não é uma sequência de aulas soltas. É uma estrutura de consulta, estudo e aplicação.
              </p>
              <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-mist-2">
                Dentro da plataforma, você acessa os dossiês e materiais auxiliares em uma ordem progressiva. Cada parte
                foi pensada para desenvolver uma camada de leitura humana: comportamento, comunicação, observação,
                elicitação, proteção, fontes e aplicação prática.
              </p>
            </div>
            <div className="lg:col-span-6">
              <Image
                src="/images/pv/members-area-mockup.webp"
                alt="Prévia da área de membros do Mundo da HUMINT em um celular, com a aula em andamento, lista de dossiês e progresso do operador"
                width={1254}
                height={921}
                sizes="(min-width: 1024px) 620px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <dl className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORM.map((item) => (
              <div key={item.title} className="border-t-2 border-white py-6">
                <dt className="font-expanded text-lg font-extrabold">{item.title}</dt>
                <dd className="mt-2 leading-relaxed text-mist">{item.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h3 className="font-expanded text-title font-extrabold">Como o acesso funciona.</h3>
              <a href="#oferta" className="btn btn-signal btn-lg mt-8">
                Ver condições de acesso
                <ArrowRight aria-hidden />
              </a>
            </div>
            <ol className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
              {STEPS.map((step, i) => (
                <li key={step.title}>
                  <span className="tabular font-expanded text-display font-extrabold text-mist-2">{i + 1}</span>
                  <h4 className="mt-3 text-lg font-bold">{step.title}</h4>
                  <p className="mt-2 leading-relaxed text-mist">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Depoimentos ────────────────────────────────────────── */}
      <section id="depoimentos" className="bg-snow text-ink" aria-labelledby="depoimentos-title">
        <div className="container-site py-20 md:py-28">
          <div className="mb-12 max-w-3xl md:mb-16">
            <h2 id="depoimentos-title" className="font-expanded text-title font-extrabold">
              Quem entrou no acervo não ficou só na teoria.
            </h2>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-ink-2">
              Leituras reais de quem estudou os dossiês, encontrou novas camadas de análise e levou o método para
              decisões concretas.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── Oferta ─────────────────────────────────────────────── */}
      <section id="oferta" className="night" aria-labelledby="oferta-title">
        <div className="container-site py-20 md:py-28">
          <h2 id="oferta-title" className="font-expanded text-display font-extrabold">
            Tudo incluso. Em um único pacote.
          </h2>

          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              {/* VARIANTE B (vitalício): trocar por "Acesso vitalício" */}
              <p className="text-lg font-semibold text-mist">Acesso por 12 meses</p>
              <p className="mt-4 text-mist-2 line-through">De R$ 1.290</p>
              <p className="tabular mt-1 flex items-baseline gap-2">
                <span className="text-mist">{installments}×</span>
                <span className="font-expanded text-display font-extrabold whitespace-nowrap">{installment}</span>
              </p>
              <p className="mt-2 text-lg text-mist">
                ou <span className="font-semibold text-white">{ACERVO.preco} à vista</span> · PIX ou cartão
              </p>
              <AccessButton className="btn btn-signal btn-lg mt-8 w-full sm:w-auto">
                Garantir acesso agora
                <ArrowUpRight aria-hidden />
                <span className="sr-only">(abre em nova aba)</span>
              </AccessButton>
              <p className="mt-6 text-mist-2">7 dias de garantia · 12 meses de acesso · Pagamento seguro</p>
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-expanded text-heading font-extrabold">Acervo Tático HUMINT</h3>
              <ul className="mt-6 border-t-2 border-white">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-line-night py-4 text-lg text-mist">
                    <span aria-hidden className="bar-mark" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-mist">
                <strong className="text-white">7 dias para testar. Risco zero.</strong> Se em uma semana o material não
                for para você, você pode solicitar o reembolso dentro do prazo de garantia. Sem fricção e sem
                justificativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Perguntas ──────────────────────────────────────────── */}
      <section id="faq" className="night-2" aria-labelledby="faq-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <h2 id="faq-title" className="font-expanded text-display font-extrabold lg:col-span-4">
            Antes de decidir.
          </h2>
          <div className="border-t-2 border-white lg:col-span-8">
            {FAQ.map((item) => (
              <details key={item.q} className="group border-b border-line-night">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-lg font-bold decoration-signal decoration-2 underline-offset-4 group-hover:underline">{item.q}</span>
                  <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden />
                </summary>
                <p className="max-w-[62ch] pb-6 text-lg leading-relaxed text-mist">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Decisão ────────────────────────────────────────────── */}
      <section className="night border-t border-line-night" aria-labelledby="final-title">
        <div className="container-site grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="final-title" className="font-expanded text-title font-extrabold">
              Você já sabe o que está em jogo. Agora, decida com mais informação.
            </h2>
            <p className="mt-6 max-w-[52ch] text-lede text-mist">
              Entre no Acervo Tático e transforme observação, contexto e método em decisões mais precisas.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <AccessButton className="btn btn-signal btn-lg w-full sm:w-auto">
              Garantir acesso ao acervo
              <ArrowUpRight aria-hidden />
              <span className="sr-only">(abre em nova aba)</span>
            </AccessButton>
            <p className="text-sm text-mist-2">Acesso imediato · 7 dias de garantia · Pagamento seguro</p>
          </div>
        </div>
      </section>

      {/* ── Rodapé ─────────────────────────────────────────────── */}
      <footer className="night border-t border-line-night">
        <div className="container-site flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/pv/logo-mundo-humint.png"
              alt="Mundo da HUMINT"
              width={800}
              height={270}
              className="h-10 w-auto self-start"
            />
            <p className="text-sm text-mist-2">© 2026 Mundo da HUMINT · Todos os direitos reservados</p>
          </div>
          <nav aria-label="Institucional" className="flex flex-wrap gap-6 text-sm text-mist">
            <a href="/termos" className="hover:text-white">
              Termos
            </a>
            <a href="/privacidade" className="hover:text-white">
              Privacidade
            </a>
            <a href="/suporte" className="hover:text-white">
              Suporte
            </a>
          </nav>
        </div>
        <div className="container-site pb-12">
          <p className="max-w-[80ch] text-xs leading-relaxed text-mist-2">
            Este site não é afiliado, associado, autorizado, endossado ou de qualquer forma oficialmente ligado ao
            Facebook, Instagram ou Meta Platforms, Inc. Os nomes Facebook, Instagram e Meta, bem como marcas e logotipos
            relacionados, são propriedade da Meta Platforms, Inc. Após sair do ambiente do Facebook ou Instagram, a
            responsabilidade pelo conteúdo desta página é exclusivamente nossa, e não da Meta.
          </p>
        </div>
      </footer>
    </div>
  )
}

const DOSSIES = [
  {
    label: "Dossiê 01",
    t: "Mecânicas do Comportamento",
    d: "Entenda os padrões que influenciam percepção, decisão e reação humana. A base para perceber por que pessoas cedem, resistem, justificam escolhas e mudam de posição.",
    bulletsHeading: "O que você treina",
    points: [
      "Leitura de padrões comportamentais",
      "Identificação de gatilhos de decisão",
      "Compreensão de vieses e respostas automáticas",
    ],
  },
  {
    label: "Dossiê 02",
    t: "Comunicação e Influência",
    d: "Aprenda como mensagens são interpretadas, como decisões são conduzidas e como ajustar linguagem, ritmo e enquadramento sem depender de improviso.",
    bulletsHeading: "O que você treina",
    points: ["Clareza na comunicação", "Construção de confiança", "Percepção de intenção e influência"],
  },
  {
    label: "Dossiê 03",
    t: "Linguagem Não-verbal",
    d: "Observe sinais físicos, expressões, ritmo, postura e microajustes de comportamento sem cair em leitura fantasiosa ou interpretação rasa.",
    bulletsHeading: "O que você treina",
    points: ["Leitura de congruência", "Observação de tensão e conforto", "Percepção de mudanças no comportamento"],
  },
  {
    label: "Dossiê 04",
    t: "Elicitação Ética",
    d: "Conduza conversas para obter informação relevante por meio de perguntas, contexto e escuta ativa, sem pressão, exposição ou manipulação.",
    bulletsHeading: "O que você treina",
    points: ["Perguntas indiretas", "Condução conversacional", "Extração ética de informação"],
  },
  {
    label: "Dossiê 05",
    t: "Contrainteligência & OPSEC",
    d: "Aprenda a proteger informações, reduzir exposição, reconhecer riscos e evitar que detalhes sensíveis sejam entregues sem necessidade.",
    bulletsHeading: "O que você treina",
    points: ["Higiene digital e comportamental", "Detecção de exposição indevida", "Proteção de informação sensível"],
  },
  {
    label: "Dossiê 06",
    t: "Fontes de Informação",
    d: "Organize caminhos de busca, valide dados, relacione fontes e transforme informação dispersa em leitura útil de contexto.",
    bulletsHeading: "O que você treina",
    points: ["Busca e validação de dados", "Cruzamento de fontes", "Análise de contexto"],
  },
  {
    label: "Núcleo Operacional",
    t: "Ferramentas Operacionais",
    d: "Use instrumentos práticos para estruturar análise, registrar observações, organizar hipóteses e aplicar o repertório dos dossiês com mais clareza.",
    bulletsHeading: "O que você recebe",
    points: ["Modelos de análise", "Checklists operacionais", "Protocolos de aplicação"],
    core: true,
  },
]
