import Image from "next/image"
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react"
import { StickyNav } from "@/components/landing/sticky-nav"
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta"
import { AccessButton } from "@/components/landing/access-button"
import { splitParcelado } from "@/components/shop/product-card"
import { ACERVO, PRODUCTS } from "@/lib/products"
import { TESTIMONIALS } from "@/lib/testimonials"

/**
 * Landing de vendas do Acervo Tático (tráfego pago). Header e footer próprios,
 * scripts da Utmify no layout. Preços e checkout vêm do catálogo.
 */

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })

function priceOf(preco: string) {
  return Number(preco.replace(/[^\d,]/g, "").replace(",", "."))
}

const DOSSIER_PRODUCTS = PRODUCTS.filter((p) => p.id.startsWith("dossie-"))

const DOSSIES = [
  {
    label: "Dossiê 01",
    t: "Mecânicas do Comportamento",
    d: "Entenda os padrões que influenciam percepção, decisão e reação humana. A base para perceber por que pessoas cedem, resistem, justificam escolhas e mudam de posição.",
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
    points: ["Clareza na comunicação", "Construção de confiança", "Percepção de intenção e influência"],
  },
  {
    label: "Dossiê 03",
    t: "Linguagem Não-verbal",
    d: "Observe sinais físicos, expressões, ritmo, postura e microajustes de comportamento sem cair em leitura fantasiosa ou interpretação rasa.",
    points: ["Leitura de congruência", "Observação de tensão e conforto", "Percepção de mudanças no comportamento"],
  },
  {
    label: "Dossiê 04",
    t: "Elicitação Ética",
    d: "Conduza conversas para obter informação relevante por meio de perguntas, contexto e escuta ativa, sem pressão, exposição ou manipulação.",
    points: ["Perguntas indiretas", "Condução conversacional", "Extração ética de informação"],
  },
  {
    label: "Dossiê 05",
    t: "Contrainteligência & OPSEC",
    d: "Aprenda a proteger informações, reduzir exposição, reconhecer riscos e evitar que detalhes sensíveis sejam entregues sem necessidade.",
    points: ["Higiene digital e comportamental", "Detecção de exposição indevida", "Proteção de informação sensível"],
  },
  {
    label: "Dossiê 06",
    t: "Fontes de Informação",
    d: "Organize caminhos de busca, valide dados, relacione fontes e transforme informação dispersa em leitura útil de contexto.",
    points: ["Busca e validação de dados", "Cruzamento de fontes", "Análise de contexto"],
  },
]

const CORE = {
  label: "Núcleo Operacional",
  t: "Ferramentas Operacionais",
  d: "Use instrumentos práticos para estruturar análise, registrar observações, organizar hipóteses e aplicar o repertório dos dossiês com mais clareza.",
  points: ["Modelos de análise", "Checklists operacionais", "Protocolos de aplicação"],
}

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
    q: "Funciona para mim, que não sou da área?",
    a: "O material foi escrito pensando em situações civis comuns, como uma negociação, uma contratação, uma sociedade, um relacionamento ou a proteção da sua própria família, e não tem a intenção de transformar você em agente. A intenção é tirar você da condição de alvo fácil, que é onde a maioria das pessoas passa a vida sem perceber.",
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

function BuyButton({ className = "", label = "Garantir acesso agora" }: { className?: string; label?: string }) {
  return (
    <AccessButton className={`btn btn-signal btn-lg ${className}`}>
      {label}
      <ArrowUpRight aria-hidden />
      <span className="sr-only">(abre em nova aba)</span>
    </AccessButton>
  )
}

export default function AcervoTaticoPage() {
  const { value: installment } = splitParcelado(ACERVO.parcelado)
  const installments = ACERVO.parcelado.split("x")[0]
  const acervoPrice = priceOf(ACERVO.preco)
  const dossierPrice = priceOf(DOSSIER_PRODUCTS[0]?.preco ?? "0")
  const dossierSum = DOSSIER_PRODUCTS.reduce((sum, p) => sum + priceOf(p.preco), 0)
  const savings = dossierSum - acervoPrice
  const [lead, ...moreQuotes] = TESTIMONIALS.filter((t) => t.quote)
  const supporting = moreQuotes.slice(0, 3)
  const valueQuote = moreQuotes[3]

  return (
    <div id="top" className="pv-page min-h-screen overflow-x-hidden bg-night pb-20 text-white md:pb-0">
      <StickyNav />
      <MobileStickyCta />

      {/* ── Abertura ───────────────────────────────────────────── */}
      <header className="night pt-24 md:pt-32">
        <div className="container-site grid gap-12 pb-16 md:pb-24 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="font-expanded text-display font-extrabold">
              Inteligência humana de operações reais, traduzida para as <span className="redact">suas decisões.</span>
            </h1>
            <p className="mt-7 max-w-[52ch] text-lede text-mist">
              Aprenda a identificar intenções ocultas, extrair informações sem resistência e antecipar comportamentos
              antes que eles se revelem.
            </p>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <a href="#oferta" className="btn btn-signal btn-lg">
                Acessar o acervo
                <ArrowRight aria-hidden />
              </a>
              <a href="#valor" className="link-more">
                Ver o que vem no acervo
              </a>
            </div>
            <p className="tabular mt-9 flex flex-col gap-1 text-mist-2 sm:flex-row sm:flex-wrap sm:gap-x-3">
              <span>6 dossiês + núcleo operacional</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span>12 meses de acesso</span>
              <span aria-hidden className="hidden sm:inline">·</span>
              <span className="text-white">
                {installments}× {installment}
              </span>
            </p>
          </div>

          <figure className="lg:col-span-5">
            <ul className="grid grid-cols-3 gap-2.5 sm:gap-4">
              {DOSSIER_PRODUCTS.map((p, i) => (
                <li key={p.id} className={i % 3 === 1 ? "translate-y-[12%]" : ""}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-night-3">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      priority={i < 3}
                      sizes="(min-width: 1024px) 170px, 30vw"
                      className="object-cover"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <figcaption className="mt-8 text-sm text-mist-2">
              Os seis dossiês do acervo. O núcleo operacional vem junto.
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ── Prova: quem comprou ────────────────────────────────── */}
      <section id="prova" className="bg-snow-2 text-ink" aria-labelledby="prova-title">
        <div className="container-site pt-20 md:pt-28">
          {lead && (
            <figure className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <blockquote className="lg:col-span-7">
                <p className="max-w-[14ch] font-expanded text-mega font-extrabold">“Valeu cada centavo!”</p>
                <p className="mt-8 max-w-[52ch] text-lede text-ink-2">
                  {lead.quote?.replace(/^Valeu cada centavo! /, "")}
                </p>
                <figcaption className="mt-6 text-sm text-ink-3">Mensagem de aluno, com o nome ocultado.</figcaption>
              </blockquote>
              <div className="relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden bg-snow lg:col-span-5 lg:mr-0">
                <Image src={lead.src} alt={lead.alt} fill sizes="320px" className="object-cover" />
              </div>
            </figure>
          )}

          <div className="mt-20 md:mt-28">
            <h2 id="prova-title" className="max-w-[24ch] font-expanded text-title font-extrabold">
              Quem entrou no acervo não ficou só na teoria.
            </h2>
            <div className="mt-10 grid gap-x-10 md:grid-cols-3">
              {supporting.map((t) => (
                <blockquote key={t.src} className="border-t-2 border-ink py-6">
                  <p className="font-expanded text-lg font-extrabold leading-snug">“{t.quote}”</p>
                  <footer className="mt-3 text-sm text-ink-3">Mensagem de aluno</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>

        <ul className="scroller mt-10 flex gap-4 overflow-x-auto pb-20 rail md:mt-12 md:gap-5 md:pb-28" aria-label="Capturas das mensagens">
          {TESTIMONIALS.filter((t) => t.src !== lead?.src).map((t) => (
            <li key={t.src} className="relative aspect-[9/16] w-[72vw] max-w-[280px] shrink-0 overflow-hidden bg-snow sm:w-[260px]">
              <Image src={t.src} alt={t.alt} fill sizes="280px" className="object-cover" />
            </li>
          ))}
        </ul>
      </section>

      {/* ── 1. Vale o preço? ───────────────────────────────────── */}
      <section id="valor" className="night" aria-labelledby="valor-title">
        <div className="container-site py-20 md:py-28">
          <h2 id="valor-title" className="font-expanded text-display font-extrabold">
            Vale o preço?
          </h2>
          <p className="mt-6 max-w-[58ch] text-lede text-mist">
            Cada dossiê também é vendido separado, por {brl.format(dossierPrice)}. Veja, item por item, o que vem no
            acervo.
          </p>

          <ol className="mt-14 border-t-2 border-white">
            {DOSSIES.map((m, i) => {
              const product = DOSSIER_PRODUCTS[i]
              return (
                <li
                  key={m.t}
                  className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 border-b border-line-night py-6 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,18rem)_7rem] md:gap-x-8"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-night-3">
                    {product && <Image src={product.image} alt="" fill sizes="96px" className="object-cover" />}
                  </div>
                  <div>
                    <h3 className="font-expanded text-heading font-extrabold">
                      <span className="text-mist-2">{m.label} · </span>
                      {m.t}
                    </h3>
                    <p className="mt-2 hidden max-w-[56ch] leading-relaxed text-mist sm:block">{m.d}</p>
                    <p className="tabular mt-3 font-semibold md:hidden">
                      {product ? `${brl.format(priceOf(product.preco))} avulso` : null}
                    </p>
                  </div>
                  <ul className="col-start-2 mt-3 flex flex-col gap-1.5 text-[0.9375rem] md:col-start-auto md:mt-1">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span aria-hidden className="bar-mark" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="tabular hidden text-right md:block md:pt-1">
                    <span className="block text-lg font-bold">{product ? brl.format(priceOf(product.preco)) : ""}</span>
                    <span className="text-sm text-mist-2">avulso</span>
                  </p>
                </li>
              )
            })}
            <li className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 border-b border-line-night py-6 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,18rem)_7rem] md:gap-x-8">
              <div className="relative aspect-[3/4] overflow-hidden bg-night-3">
                <Image src={ACERVO.image} alt="" fill sizes="96px" className="object-cover" />
              </div>
              <div>
                <h3 className="font-expanded text-heading font-extrabold">
                  <span className="text-mist-2">{CORE.label} · </span>
                  {CORE.t}
                </h3>
                <p className="mt-2 hidden max-w-[56ch] leading-relaxed text-mist sm:block">{CORE.d}</p>
                <p className="mt-3 font-semibold md:hidden">Só no acervo</p>
              </div>
              <ul className="col-start-2 mt-3 flex flex-col gap-1.5 text-[0.9375rem] md:col-start-auto md:mt-1">
                {CORE.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span aria-hidden className="bar-mark" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="hidden text-right md:block md:pt-1">
                <span className="block text-lg font-bold">Só no acervo</span>
              </p>
            </li>
          </ol>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <dl className="lg:col-span-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line-night pb-5">
                <dt className="text-lg text-mist">Os seis dossiês, comprados um a um</dt>
                <dd className="tabular font-expanded text-title font-extrabold text-mist">{brl.format(dossierSum)}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-6">
                <dt className="max-w-[30ch] text-lg">O acervo completo, com o núcleo operacional e 12 meses de atualizações</dt>
                <dd className="tabular font-expanded text-mega font-extrabold md:text-display">
                  <span className="redact" data-delay="300">
                    {brl.format(acervoPrice)}
                  </span>
                </dd>
              </div>
              <p className="tabular mt-4 text-mist">
                ou {installments}× {installment} no cartão ·{" "}
                <span className="text-white">{brl.format(savings)} a menos que os seis avulsos</span>
              </p>
            </dl>
            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
              <BuyButton className="w-full sm:w-auto" />
              <p className="text-sm text-mist-2">7 dias de garantia incondicional · Pix ou cartão</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Serve para mim? ─────────────────────────────────── */}
      <section id="serve" className="bg-snow text-ink" aria-labelledby="serve-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 id="serve-title" className="font-expanded text-display font-extrabold">
                Serve para mim?
              </h2>
              <blockquote className="mt-8 max-w-[26ch] font-expanded text-xl font-extrabold leading-snug lg:text-heading">
                A pior posição é sair de uma situação convencido de que decidiu bem, quando na prática você apenas
                reagiu melhor ao roteiro que alguém construiu para você.
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex max-w-[64ch] flex-col gap-6 text-lg leading-relaxed text-ink-2">
              <p className="text-lede text-ink">
                Você provavelmente já viveu isso em uma negociação, reunião, venda, parceria ou conversa decisiva. Tudo
                parecia fazer sentido. A proposta era aceitável. O clima estava bom. Ninguém levantou a voz, ninguém
                pressionou de forma óbvia, ninguém pareceu estar manipulando nada.
              </p>
              <p>
                Mas depois, quando a euforia passou e a decisão começou a produzir consequências, veio a sensação de que
                você perdeu espaço. Aceitou algo ruim demais. Cedeu antes da hora. Concordou com uma lógica que parecia
                correta no momento, mas que não sustentava a realidade depois.
              </p>
              <p>
                Isso raramente acontece porque a outra pessoa é mais inteligente. Acontece porque ela estava lendo a
                situação com mais precisão.
              </p>
            </div>

            <div className="my-12 max-w-[64ch] border-y-2 border-ink font-expanded text-heading font-extrabold md:my-14">
              <p className="border-b border-line py-5 text-ink-3">Quem é conduzido só percebe depois.</p>
              <p className="border-b border-line py-5 text-ink-2">Quem negocia com consciência percebe durante.</p>
              <p className="py-5">Quem conduz percebe antes.</p>
            </div>

            <p className="max-w-[64ch] text-lg leading-relaxed text-ink-2">
              <strong className="font-semibold text-ink">O Acervo Tático foi construído para treinar essa percepção.</strong>{" "}
              Para que você deixe de entrar em interações importantes apenas reagindo ao que aparece e passe a observar o
              que está sendo construído diante de você.
            </p>

            <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
              <div>
                <h3 className="font-expanded text-heading font-extrabold">É para você se</h3>
                <ul className="mt-5">
                  {FOR_WHOM.map((item) => (
                    <li key={item} className="flex items-start gap-4 border-t border-line py-4 leading-relaxed text-ink-2">
                      <span aria-hidden className="bar-mark" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-expanded text-heading font-extrabold">Não é para você se</h3>
                <ul className="mt-5">
                  {NOT_FOR.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-t border-line py-4 leading-relaxed text-ink-3">
                      <X className="mt-1 h-5 w-5 shrink-0 text-ink-3" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A plataforma por dentro ────────────────────────────── */}
      <section id="acesso" className="night-2" aria-labelledby="acesso-title">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <h2 id="acesso-title" className="font-expanded text-title font-extrabold">
                O que você recebe dentro da plataforma.
              </h2>
              <p className="mt-6 max-w-[52ch] text-lede text-mist">
                O Acervo não é uma sequência de aulas soltas. É uma estrutura de consulta, estudo e aplicação.
              </p>
              <dl className="mt-10 grid gap-x-8 sm:grid-cols-2">
                {PLATFORM.map((item) => (
                  <div key={item.title} className="border-t-2 border-white py-5">
                    <dt className="font-expanded text-lg font-extrabold">{item.title}</dt>
                    <dd className="mt-2 leading-relaxed text-mist">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-6">
              <Image
                src="/images/pv/members-area-mockup-v3.webp"
                alt="Prévia da área de membros do Mundo da HUMINT em um celular, com a aula em andamento, lista de dossiês e progresso do operador"
                width={1254}
                height={921}
                sizes="(min-width: 1024px) 620px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <h3 className="font-expanded text-title font-extrabold lg:col-span-5">Como o acesso funciona.</h3>
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

      {/* ── 3. É ético? ────────────────────────────────────────── */}
      <section id="etica" className="night" aria-labelledby="etica-title">
        <div className="container-site py-20 md:py-28">
          <div>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 id="etica-title" className="font-expanded text-display font-extrabold">
                  É ético?
                </h2>
                <p className="mt-6 max-w-[18ch] font-expanded text-title font-extrabold">Não se trata de manipular pessoas.</p>
              </div>
              <div className="flex max-w-[60ch] flex-col gap-6 text-lg leading-relaxed text-mist lg:col-span-7 lg:pt-3">
                <p>
                  Trata-se de não ser ingênuo em ambientes onde percepção, linguagem, comportamento e decisão estão
                  sempre em jogo. Porque, em qualquer interação relevante, alguém ocupa a posição de leitura. E quando essa
                  pessoa não é você, normalmente você só entende o custo depois.
                </p>
                <p>
                  O acervo trata de elicitação ética e de defesa, nunca de coerção ou de invasão, e em nenhum ponto ensina
                  a forçar alguém a coisa alguma. Se o que você procura é poder sobre os outros, este material não é para
                  você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Oferta ─────────────────────────────────────────────── */}
      <section id="oferta" className="night-2 scroll-mt-16" aria-labelledby="oferta-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-4">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden lg:mx-0 lg:max-w-none">
              <Image
                src={ACERVO.image}
                alt={ACERVO.imageAlt}
                fill
                sizes="(min-width: 1024px) 400px, 300px"
                className="object-cover"
              />
            </div>
            {valueQuote && (
              <blockquote className="mt-8 border-t-2 border-white pt-5">
                <p className="font-expanded text-lg font-extrabold">“{valueQuote.quote}”</p>
                <footer className="mt-2 text-sm text-mist-2">Mensagem de aluno</footer>
              </blockquote>
            )}
          </div>

          <div className="order-1 lg:order-2 lg:col-span-8">
            <h2 id="oferta-title" className="font-expanded text-display font-extrabold">
              Tudo incluso. Em um único pacote.
            </h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="text-lg font-semibold text-mist">Acesso por 12 meses</p>
                <p className="tabular mt-4 text-mist-2">
                  Os seis dossiês avulsos somam {brl.format(dossierSum)}.{" "}
                  <span className="text-white">No acervo, {brl.format(savings)} a menos e com o núcleo.</span>
                </p>
                <p className="tabular mt-1 flex items-baseline gap-2">
                  <span className="text-mist">{installments}×</span>
                  <span className="font-expanded text-display font-extrabold whitespace-nowrap">{installment}</span>
                </p>
                <p className="mt-2 text-lg text-mist">
                  ou <span className="font-semibold text-white">{ACERVO.preco} à vista</span> · Pix ou cartão
                </p>
                <BuyButton className="mt-8 w-full sm:w-auto" />
                <p className="mt-5 text-sm text-mist-2">7 dias de garantia · 12 meses de acesso · Pagamento seguro</p>
              </div>

              <div>
                <h3 className="font-expanded text-heading font-extrabold">Acervo Tático HUMINT</h3>
                <ul className="mt-5 border-t-2 border-white">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-4 border-b border-line-night py-3.5 text-mist">
                      <span aria-hidden className="bar-mark" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-12 max-w-[64ch] text-lg leading-relaxed text-mist">
              <strong className="text-white">7 dias para testar. Risco zero.</strong> Se em uma semana o material não for
              para você, você pode solicitar o reembolso dentro do prazo de garantia. Sem fricção e sem justificativa.
            </p>
          </div>
        </div>
      </section>

      {/* ── Perguntas ──────────────────────────────────────────── */}
      <section id="faq" className="bg-snow text-ink" aria-labelledby="faq-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <h2 id="faq-title" className="font-expanded text-display font-extrabold lg:col-span-4">
            Antes de decidir.
          </h2>
          <div className="border-t-2 border-ink lg:col-span-8">
            {FAQ.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-lg font-bold decoration-signal decoration-2 underline-offset-4 group-hover:underline">
                    {item.q}
                  </span>
                  <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden />
                </summary>
                <p className="max-w-[62ch] pb-6 text-lg leading-relaxed text-ink-2">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Decisão ────────────────────────────────────────────── */}
      <section className="night" aria-labelledby="final-title">
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
            <BuyButton className="w-full sm:w-auto" />
            <p className="tabular text-sm text-mist-2">
              {installments}× {installment} · 7 dias de garantia · Pagamento seguro
            </p>
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
