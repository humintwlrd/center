import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, X, Plus } from "lucide-react"
import { Breadcrumbs } from "@/components/site/breadcrumbs"
import type { Product } from "@/lib/products"

/**
 * Página de vendas do Acervo Tático, em /academy/acervo-tatico.
 * Conteúdo adaptado da humint.click para o design system do site.
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
  { title: "Dossiês completos", body: "Materiais em PDF para estudo profundo, revisão e consulta." },
  { title: "Protocolos práticos", body: "Estruturas para aplicar leitura, observação e análise com método." },
  { title: "Checklists e modelos", body: "Ferramentas para organizar hipóteses, registrar sinais e revisar decisões." },
  { title: "Atualizações", body: "Novas liberações e melhorias durante o período de acesso." },
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
  { title: "Identificação", body: "Cada acesso é nominal e marcado. A origem de qualquer cópia é determinável." },
  { title: "Notificação", body: "Remoção imediata, derrubada de domínios, plataformas e meios de pagamento envolvidos." },
  { title: "Responsabilização", body: "Medidas cíveis e criminais cabíveis, com perdas, danos e ressarcimento de custos." },
]

export function AcervoDetail({ product }: { product: Product }) {
  const checkout = product.checkoutUrl
  const parcelado = product.parcelado // "12x de R$ 93,09"

  const BuyButton = ({ label = "Garantir acesso agora", size = "btn-lg" }: { label?: string; size?: string }) => (
    <a href={checkout} target="_blank" rel="noopener noreferrer" className={`btn btn-signal ${size}`}>
      {label}
      <ArrowUpRight aria-hidden />
      <span className="sr-only">(abre em nova aba)</span>
    </a>
  )

  return (
    <div>
      {/* ── Abertura ───────────────────────────────────────────── */}
      <header className="night">
        <div className="container-site pt-8 pb-20 md:pb-28">
          <Breadcrumbs
            tone="night"
            items={[
              { label: "Academy", href: "/academy" },
              { label: "Acervo Tático", href: `/academy/${product.id}` },
            ]}
          />
          <div className="mt-12 grid gap-14 md:mt-16 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <h1 className="font-expanded text-display font-extrabold">
                Inteligência humana de operações reais, traduzida para as <span className="redact">suas decisões.</span>
              </h1>
              <p className="mt-8 max-w-[56ch] text-lede text-mist">
                Aprenda a identificar intenções ocultas, extrair informações sem resistência e antecipar
                comportamentos antes que eles se revelem. Técnicas de obtenção de dados através de pessoas, usadas em
                operações reais, aplicadas à negociação, influência, leitura comportamental e proteção contra
                manipulação.
              </p>
              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                <a href="#oferta" className="btn btn-signal btn-lg">
                  Acessar o acervo
                  <ArrowRight aria-hidden />
                </a>
                <p className="tabular text-mist">
                  {parcelado} <span className="text-mist-2">· 7 dias de garantia</span>
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden lg:max-w-none">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 500px, 80vw"
                  priority
                  className="object-cover"
                />
              </div>
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

      {/* ── A situação ─────────────────────────────────────────── */}
      <section className="bg-snow text-ink" aria-labelledby="situacao-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="situacao-title" className="font-expanded text-display font-extrabold lg:sticky lg:top-28">
              Quem conduz percebe antes.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="flex max-w-[62ch] flex-col gap-5 text-lg leading-relaxed text-ink-2">
              {SITUATION.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <blockquote className="my-14 max-w-[30ch] font-expanded text-heading font-extrabold">
              A pior posição é sair convencido de que decidiu bem, quando você apenas reagiu melhor ao roteiro que
              alguém construiu.
            </blockquote>
            <dl className="border-t-2 border-ink">
              {POSITIONS.map((p, i) => (
                <div
                  key={p.who}
                  className={`flex items-baseline justify-between gap-6 border-b border-line py-5 ${
                    i === 0 ? "text-ink-3" : i === 1 ? "text-ink-2" : "text-ink"
                  }`}
                >
                  <dt className="text-lg font-semibold">{p.who}</dt>
                  <dd className="font-expanded text-lg font-extrabold">{p.when}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-12 max-w-[62ch] text-lg leading-relaxed text-ink-2">
              O Acervo Tático foi construído para treinar essa percepção: deixar de reagir ao que aparece e passar a
              observar o que está sendo construído diante de você.
            </p>
            <p className="mt-6 max-w-[62ch] text-lg font-semibold leading-relaxed">
              Não se trata de manipular pessoas. Trata-se de não ser ingênuo onde percepção, linguagem, comportamento
              e decisão estão sempre em jogo.
            </p>
          </div>
        </div>
      </section>

      {/* ── A arquitetura ──────────────────────────────────────── */}
      <section id="dossie" className="night" aria-labelledby="arquitetura-title">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h2 id="arquitetura-title" className="font-expanded text-display font-extrabold lg:col-span-7">
              Seis dossiês. Um núcleo operacional.
            </h2>
            <p className="max-w-[56ch] text-lg leading-relaxed text-mist lg:col-span-5 lg:pt-3">
              Cada dossiê desenvolve uma camada: compreender comportamento, calibrar comunicação, observar sinais,
              conduzir conversas, proteger informação e organizar fontes. Um mapa progressivo, não uma sequência
              aleatória de conteúdos.
            </p>
          </div>

          <ol className="mt-16 border-t border-line-night">
            {MODULES.map((m) => (
              <li
                key={m.title}
                className={`grid gap-4 border-b border-line-night py-8 md:grid-cols-12 md:gap-8 ${m.highlight ? "text-white" : ""}`}
              >
                <p
                  aria-hidden
                  className={`hidden text-sm font-bold md:col-span-2 md:block md:pt-2 ${m.highlight ? "text-white" : "text-mist-2"}`}
                >
                  {m.tag}
                </p>
                <div className="md:col-span-6">
                  <h3 className="font-expanded text-heading font-extrabold">
                    <span className="md:sr-only">{m.tag} · </span>
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-[54ch] text-mist">{m.body}</p>
                </div>
                <ul className="flex flex-col gap-2 md:col-span-4 md:pt-2">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[0.9375rem]">
                      <span aria-hidden className="bar-mark" />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── A plataforma e o acesso ────────────────────────────── */}
      <section className="bg-snow-2 text-ink" aria-labelledby="plataforma-title">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 id="plataforma-title" className="font-expanded text-display font-extrabold">
                O que você recebe.
              </h2>
              <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-2">
                Uma estrutura de consulta, estudo e aplicação, em ordem progressiva.
              </p>
            </div>
            <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
              {PLATFORM.map((card) => (
                <div key={card.title} className="border-t-2 border-ink py-6">
                  <dt className="font-expanded text-lg font-extrabold">{card.title}</dt>
                  <dd className="mt-2 text-ink-2">{card.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <h2 className="font-expanded text-title font-extrabold lg:col-span-5">Como o acesso funciona.</h2>
            <ol className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
              {STEPS.map((step, i) => (
                <li key={step.n}>
                  <span className="tabular font-expanded text-display font-extrabold text-ink-3">{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-ink-2">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Para quem ──────────────────────────────────────────── */}
      <section className="bg-snow text-ink" aria-label="Para quem é o Acervo">
        <div className="container-site grid gap-16 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <h2 className="font-expanded text-title font-extrabold">Para quem depende de ler pessoas em decisões reais.</h2>
            <ul className="mt-8">
              {FOR_WHOM.map((item) => (
                <li key={item} className="flex items-start gap-4 border-t border-line py-4 text-lg leading-relaxed text-ink-2">
                  <span aria-hidden className="bar-mark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-expanded text-title font-extrabold">Não é para quem procura poder sobre os outros.</h2>
            <ul className="mt-8">
              {NOT_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-line py-4 text-lg leading-relaxed text-ink-3">
                  <X className="mt-1.5 h-5 w-5 shrink-0 text-ink-3" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Ética ──────────────────────────────────────────────── */}
      <section className="night" aria-labelledby="etica-title">
        <div className="container-site py-20 md:py-28">
          <h2 id="etica-title" className="max-w-[18ch] font-expanded text-mega font-extrabold">
            Inteligência humana sem manipulação barata.
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <p className="max-w-[56ch] text-lede text-mist lg:col-span-6">
              O Acervo Tático não ensina coação, fraude, invasão, exposição ou exploração de vulnerabilidades. O foco é
              leitura de contexto, comunicação consciente, proteção informacional e tomada de decisão.
            </p>
            <p className="max-w-[40ch] font-expanded text-heading font-extrabold lg:col-span-6">
              O operador não vence porque engana melhor. Vence porque percebe melhor, decide melhor e preserva
              confiança enquanto atua.
            </p>
          </div>
        </div>
      </section>

      {/* ── Oferta ─────────────────────────────────────────────── */}
      <section id="oferta" className="bg-snow text-ink" aria-labelledby="oferta-title">
        <div className="container-site py-20 md:py-28">
          <h2 id="oferta-title" className="font-expanded text-display font-extrabold">
            Tudo incluso. Um único pacote.
          </h2>
          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-lg font-semibold text-ink-2">Acesso por 12 meses</p>
              <p className="tabular mt-3 font-expanded text-display font-extrabold whitespace-nowrap">{parcelado.split(" de ")[1] ?? parcelado}</p>
              <p className="mt-2 text-lg text-ink-2">
                em {parcelado.split(" de ")[0]} no cartão, ou {product.preco} à vista no Pix
              </p>
              <div className="mt-8">
                <BuyButton />
              </div>
              <p className="mt-6 text-ink-3">7 dias de garantia incondicional · Pagamento seguro · Acesso por e-mail</p>
            </div>
            <div className="lg:col-span-7">
              <h3 className="font-expanded text-heading font-extrabold">Acervo Tático HUMINT</h3>
              <ul className="mt-6 border-t-2 border-ink">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-line py-4 text-lg text-ink-2">
                    <span aria-hidden className="bar-mark" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-ink-2">
                <strong className="text-ink">7 dias para testar.</strong> Se em uma semana o material não for para
                você, solicite o reembolso dentro do prazo. Sem fricção e sem justificativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Perguntas ──────────────────────────────────────────── */}
      <section className="bg-snow-2 text-ink" aria-labelledby="faq-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="faq-title" className="font-expanded text-display font-extrabold">
              Antes de decidir.
            </h2>
            <p className="mt-6 text-lg text-ink-2">
              Outra dúvida?{" "}
              <Link href="/suporte" className="font-semibold underline decoration-signal decoration-2 underline-offset-4">
                Fale com o suporte
              </Link>
              .
            </p>
          </div>
          <div className="border-t-2 border-ink lg:col-span-8">
            {FAQ.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-lg font-bold decoration-signal decoration-2 underline-offset-4 group-hover:underline">{item.q}</span>
                  <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden />
                </summary>
                <p className="max-w-[62ch] pb-6 text-lg leading-relaxed text-ink-2">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Material protegido ─────────────────────────────────── */}
      <section className="night" aria-labelledby="aviso-title">
        <div className="container-site py-20 md:py-28">
          <h2 id="aviso-title" className="max-w-[22ch] font-expanded text-display font-extrabold">
            Cada linha deste material está catalogada, datada e <span className="redact">rastreável.</span>
          </h2>
          <div className="mt-12 grid gap-8 text-lg leading-relaxed text-mist lg:grid-cols-2 lg:gap-16">
            <p>
              Todo o conteúdo do Mundo da HUMINT (marca, identidade, textos, estrutura, dossiês, protocolos e
              ferramentas) é propriedade intelectual exclusiva, protegida por direito autoral, direito de marca e
              legislação de concorrência desleal.
            </p>
            <p>
              Documentos carregam marcações ocultas e identificadores individuais por operador. Quando um vazamento
              aparece, ele aponta de volta para quem o originou. Não é ameaça. É procedimento.
            </p>
          </div>
          <dl className="mt-14 grid gap-x-10 border-t border-line-night sm:grid-cols-3">
            {PROTECTION.map((p) => (
              <div key={p.title} className="border-b border-line-night py-6 sm:border-b-0">
                <dt className="font-expanded text-lg font-extrabold">{p.title}</dt>
                <dd className="mt-2 text-mist">{p.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-16 flex flex-col gap-6 border-t border-line-night pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[46ch] text-lede text-mist">
              Quem estuda este material aprende a fechar a própria pegada. Quem tenta copiá-lo deixa a pegada mais
              visível de todas.
            </p>
            <div className="flex flex-col gap-2 md:items-end">
              <BuyButton label="Garantir meu acesso" />
              <p className="tabular text-sm text-mist-2">{parcelado} · Cartão ou Pix</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
