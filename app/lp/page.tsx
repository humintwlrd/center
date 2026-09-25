import type { Metadata } from "next"
import { ArrowRight, Plus, X } from "lucide-react"
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
    title: "Acesso",
    q: "O que essa pessoa realmente sabe e alcança?",
    body: "Mapeie o que ela toca, vê e influencia de fato, para além do cargo no cartão.",
  },
  {
    letter: "C",
    title: "Consistência",
    q: "O comportamento é estável ao longo do tempo?",
    body: "Compare o que foi dito ontem com o que é feito hoje. A confiança vive na repetição.",
  },
  {
    letter: "E",
    title: "Evidências",
    q: "O que comprova aquilo que ela afirma?",
    body: "Separe o verificável da boa narrativa. Afirmação não é prova.",
  },
  {
    letter: "S",
    title: "Situação",
    q: "Existem pressões ou vulnerabilidades em jogo?",
    body: "Dívida, ego, ressentimento ou necessidade mudam o que uma pessoa é capaz de fazer.",
  },
  {
    letter: "S",
    title: "Sinais",
    q: "Há alertas sendo ignorados por conveniência?",
    body: "O problema raramente é a falta de sinal. É a vontade de não enxergá-lo.",
  },
  {
    letter: "O",
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
    title: "O guia completo",
    body: "As 4 partes e os 11 capítulos em PDF, para estudo profundo, revisão e consulta.",
  },
  {
    title: "Os 4 dossiês de caso",
    body: "Ames, Philby, Montes e Hanssen dissecados em observado, ignorado e o que perceber.",
  },
  {
    title: "O protocolo A.C.E.S.S.O.",
    body: "O framework de seis perguntas em formato aplicável a qualquer avaliação.",
  },
  {
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

/** Larguras das tarjas da prévia: o trecho do documento não é reproduzido aqui. */
const WITHHELD_LINES = [
  ["w-[34%]", "w-[22%]", "w-[30%]"],
  ["w-[18%]", "w-[40%]", "w-[26%]"],
  ["w-[46%]", "w-[14%]", "w-[24%]"],
  ["w-[28%]", "w-[36%]"],
]

function splitChapter(text: string) {
  const [num, ...rest] = text.split(" — ")
  return rest.length ? { num, text: rest.join(" — ") } : { num: null, text }
}

export default function LandingPage() {
  const ames = CASES[0]

  return (
    <div className="bg-night">
      {/* ── Abertura ─────────────────────────────────────────── */}
      <section className="night" aria-labelledby="lp-title">
        <div className="container-site grid gap-14 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-28">
          <div className="lg:col-span-7">
            <h1 id="lp-title" className="font-expanded text-display font-extrabold">
              Como investigadores, espiões e empresas obtêm informações através de pessoas
            </h1>
            <p className="mt-8 max-w-[56ch] text-lede text-mist">
              Um método de avaliação humana extraído de documentos de inteligência desclassificados, para identificar
              confiança, risco e vulnerabilidade em alguém — antes de dar acesso, fechar negócio ou colocar o seu nome
              ao lado do dela.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <a href={CHECKOUT_URL} className="btn btn-signal btn-lg">
                Quero aprender o método
                <ArrowRight aria-hidden />
              </a>
              <p className="tabular text-mist">
                R$ 49 <span className="text-mist-2">· 7 dias de garantia</span>
              </p>
            </div>
          </div>

          {/* Prévia do formato de um capítulo */}
          <figure className="lg:col-span-5">
            <div className="bg-snow p-6 text-ink [--redact-bar:var(--color-ink)] md:p-8">
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-4">
                <p className="font-expanded text-lg font-extrabold">Cap. 8 · {ames.name}</p>
                <p className="text-sm text-ink-3">Parte 3</p>
              </div>
              <div className="border-b border-line py-5">
                <p className="text-sm font-semibold text-ink-3">Documento</p>
                <div role="img" aria-label="Trecho do documento omitido nesta prévia" className="mt-3 flex flex-col gap-2.5">
                  {WITHHELD_LINES.map((line, i) => (
                    <p key={i} className="flex gap-2">
                      {line.map((w, j) => (
                        <span key={j} className={`withheld ${w}`} />
                      ))}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border-b border-line py-5">
                <p className="text-sm font-semibold text-ink-3">O que foi observado</p>
                <p className="mt-2 leading-relaxed">{ames.seen}</p>
              </div>
              <div className="pt-5">
                <p className="text-sm font-semibold text-ink-3">O que foi ignorado</p>
                <p className="mt-2 leading-relaxed">{ames.ignored}</p>
              </div>
            </div>
            <figcaption className="mt-3 text-sm text-mist-2">
              Prévia do formato de um capítulo. O trecho do documento fica omitido aqui.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── A situação real ──────────────────────────────────── */}
      <section className="bg-snow text-ink" aria-label="A situação real">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-[64ch]">
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink-2">
              <p className="text-[1.375rem] leading-normal text-ink md:text-[1.625rem]">
                Quase todo prejuízo grande começa com uma boa impressão. O sócio parecia alinhado. O funcionário parecia
                leal. O parceiro parecia sólido. Tudo fazia sentido no começo — e foi exatamente por isso que ninguém
                olhou com atenção.
              </p>
              <p>
                A verdade desconfortável é que a maioria das pessoas avalia caráter em segundos e quase nunca revisa
                esse julgamento. Confiamos em quem fala bem, em quem tem o título certo, em quem se parece conosco. E
                então entregamos acesso, dinheiro, informação e reputação com base em pouco mais do que simpatia.
              </p>
              <p>
                Serviços de inteligência aprenderam, no custo mais alto possível, que isso não funciona. Quando confiar
                na pessoa errada significa perder agentes, operações e vidas, a avaliação deixa de ser instinto e vira
                método. Este material traduz esse método para as decisões da sua vida.
              </p>
            </div>

            <div className="my-14 border-y-2 border-ink font-expanded text-heading font-extrabold md:my-16">
              <p className="border-b border-line py-5 text-ink-3">Quem confia por impressão descobre depois.</p>
              <p className="border-b border-line py-5 text-ink-2">Quem avalia com critério percebe durante.</p>
              <p className="py-5">
                Quem observa com método percebe <span className="redact">antes.</span>
              </p>
            </div>

            <p className="font-expanded text-heading font-extrabold">Não se trata de desconfiar de todo mundo.</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-2">
              Nem de manipular ninguém. Trata-se de parar de confiar no escuro. Em toda relação que importa, alguém está
              avaliando alguém. Quando você não sabe avaliar, normalmente só entende o custo depois que ele já chegou.
            </p>
          </div>
        </div>
      </section>

      {/* ── Como cada capítulo funciona ──────────────────────── */}
      <section className="night" aria-labelledby="formato-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="formato-title" className="font-expanded text-title font-extrabold">
              Cada capítulo parte de um documento real e termina em aplicação prática.
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-mist">
              Não é teoria solta nem opinião. Cada lição nasce de um arquivo de inteligência desclassificado e é
              conduzida pelo mesmo percurso, do documento à decisão que você toma amanhã.
            </p>
          </div>
          <ol className="border-t border-line-night lg:col-span-7">
            {CHAPTER_FORMAT.map((step, i) => (
              <li
                key={step.tag}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-b border-line-night py-6 md:grid-cols-[3rem_12rem_minmax(0,1fr)] md:gap-x-6"
              >
                <span className="tabular font-expanded text-lg font-extrabold text-mist-2">{i + 1}</span>
                <h3 className="font-expanded text-lg font-extrabold">{step.tag}</h3>
                <p className="col-start-2 mt-1 leading-relaxed text-mist md:col-start-3 md:mt-0">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── A arquitetura: 4 partes, 11 capítulos ────────────── */}
      <section className="night-2" aria-labelledby="partes-title">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h2 id="partes-title" className="font-expanded text-title font-extrabold lg:col-span-7">
              Quatro partes. Onze capítulos. Um método para avaliar qualquer pessoa.
            </h2>
            <p className="max-w-[52ch] text-lg leading-relaxed text-mist lg:col-span-5 lg:pt-2">
              Você começa entendendo por que erra ao confiar, aprende o que a inteligência procura antes de confiar,
              estuda os maiores erros de julgamento da história e termina com um método próprio para aplicar a partir de
              hoje.
            </p>
          </div>

          <ol className="mt-16 border-t border-line-night">
            {PARTS.map((part, i) => (
              <li key={part.title} className="grid gap-6 border-b border-line-night py-10 lg:grid-cols-12 lg:gap-16">
                <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 lg:col-span-5 lg:grid-cols-[3.5rem_minmax(0,1fr)]">
                  <span className="tabular font-expanded text-title font-extrabold text-mist-2">{i + 1}</span>
                  <div>
                    <h3 className="font-expanded text-heading font-extrabold">{part.title}</h3>
                    <p className="mt-3 leading-relaxed text-mist">{part.body}</p>
                  </div>
                </div>
                <ul className="lg:col-span-7">
                  {part.chapters.map((ch) => {
                    const { num, text } = splitChapter(ch)
                    return (
                      <li
                        key={ch}
                        className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 border-t border-line-night py-3.5 first:border-t-0 first:pt-0"
                      >
                        {num ? (
                          <span className="tabular text-sm font-bold text-mist-2">{num}</span>
                        ) : (
                          <span aria-hidden className="bar-mark" />
                        )}
                        <span className="leading-relaxed">{text}</span>
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Os 4 casos reais ─────────────────────────────────── */}
      <section className="night" aria-labelledby="casos-title">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 id="casos-title" className="font-expanded text-title font-extrabold">
              Quatro traições que ninguém viu chegar — até ser tarde.
            </h2>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-mist">
              Em todos eles os sinais existiam, estavam à vista e foram explicados como qualquer outra coisa. Cada caso é
              dissecado em três colunas: o que foi observado, o que foi ignorado e o que deveria ter sido percebido.
            </p>
          </div>

          <div className="mt-14">
            <div aria-hidden className="hidden grid-cols-12 gap-8 border-b-2 border-white pb-3 text-sm font-semibold text-mist-2 md:grid">
              <span className="col-span-3">Caso</span>
              <span className="col-span-3">O que foi observado</span>
              <span className="col-span-3">O que foi ignorado</span>
              <span className="col-span-3">A lição</span>
            </div>
            {CASES.map((c) => (
              <dl key={c.name} className="grid gap-4 border-b border-line-night py-7 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <dt className="sr-only">Caso</dt>
                  <dd className="font-expanded text-heading font-extrabold">{c.name}</dd>
                </div>
                <div className="md:col-span-3">
                  <dt className="text-sm font-semibold text-mist-2 md:sr-only">O que foi observado</dt>
                  <dd className="mt-1 leading-relaxed text-mist md:mt-0">{c.seen}</dd>
                </div>
                <div className="md:col-span-3">
                  <dt className="text-sm font-semibold text-mist-2 md:sr-only">O que foi ignorado</dt>
                  <dd className="mt-1 leading-relaxed text-mist md:mt-0">{c.ignored}</dd>
                </div>
                <div className="md:col-span-3">
                  <dt className="text-sm font-semibold text-mist-2 md:sr-only">A lição</dt>
                  <dd className="mt-1 font-semibold leading-relaxed md:mt-0">{c.lesson}</dd>
                </div>
              </dl>
            ))}
          </div>
        </div>
      </section>

      {/* ── O método A.C.E.S.S.O. ────────────────────────────── */}
      <section className="bg-snow text-ink" aria-labelledby="metodo-title">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 id="metodo-title" className="font-expanded text-title font-extrabold">
              A.C.E.S.S.O. — seis perguntas antes de confiar em alguém.
            </h2>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-ink-2">
              Todo o conteúdo do guia condensado em um protocolo simples o bastante para você usar de cabeça em qualquer
              avaliação — de uma contratação a uma sociedade.
            </p>
          </div>

          <dl className="mt-14 grid gap-x-12 md:grid-cols-2">
            {METHOD.map((m) => (
              <div key={m.title} className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 border-t-2 border-ink py-7">
                <span aria-hidden className="font-expanded text-display font-extrabold leading-none">
                  {m.letter}
                </span>
                <div>
                  <dt className="font-expanded text-heading font-extrabold">{m.title}</dt>
                  <dd className="mt-2 text-lg font-semibold leading-snug">{m.q}</dd>
                  <dd className="mt-2 leading-relaxed text-ink-2">{m.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── O material e o acesso ────────────────────────────── */}
      <section className="night-2" aria-labelledby="material-title">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 id="material-title" className="font-expanded text-title font-extrabold">
              Um material para estudar uma vez e consultar pela vida toda.
            </h2>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-mist">
              Tudo entregue na área de membros, em ordem progressiva: do erro de julgamento ao método pronto para
              aplicar.
            </p>
          </div>

          <dl className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORM.map((card) => (
              <div key={card.title} className="border-t-2 border-white py-6">
                <dt className="font-expanded text-lg font-extrabold">{card.title}</dt>
                <dd className="mt-2 leading-relaxed text-mist">{card.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <h3 className="font-expanded text-title font-extrabold lg:col-span-5">Como o acesso funciona.</h3>
            <ol className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
              {STEPS.map((step, i) => (
                <li key={step.n}>
                  <span className="tabular font-expanded text-display font-extrabold text-mist-2">{i + 1}</span>
                  <h4 className="mt-3 text-lg font-bold">{step.title}</h4>
                  <p className="mt-2 leading-relaxed text-mist">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Para quem / Não é para ───────────────────────────── */}
      <section className="bg-snow text-ink" aria-label="Para quem é o material">
        <div className="container-site grid gap-16 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <h2 className="font-expanded text-title font-extrabold">Para quem paga caro quando confia na pessoa errada.</h2>
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
            <h2 className="font-expanded text-title font-extrabold">Não é para quem quer poder sobre os outros.</h2>
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

      {/* ── Ética e limites ──────────────────────────────────── */}
      <section className="night" aria-labelledby="etica-title">
        <div className="container-site py-20 md:py-28">
          <h2 id="etica-title" className="max-w-[18ch] font-expanded text-display font-extrabold">
            Avaliar pessoas não é manipular pessoas.
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <p className="max-w-[56ch] text-lede text-mist lg:col-span-6">
              Este material não ensina coação, fraude, invasão, chantagem ou exploração de vulnerabilidades. Ele ensina a
              julgar confiança com critério, a enxergar risco antes do prejuízo e a proteger o que é seu — começando pela
              própria capacidade de decidir.
            </p>
            <p className="max-w-[40ch] font-expanded text-heading font-extrabold lg:col-span-6">
              Quem sabe avaliar não vence porque engana melhor. Vence porque percebe melhor, decide melhor e para de pagar
              a conta da confiança cega.
            </p>
          </div>
        </div>
      </section>

      {/* ── Oferta ───────────────────────────────────────────── */}
      <section id="oferta" className="night-2 scroll-mt-20" aria-labelledby="oferta-title">
        <div className="container-site py-20 md:py-28">
          <h2 id="oferta-title" className="font-expanded text-display font-extrabold">
            Tudo incluso. Em um único pacote.
          </h2>
          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-lg font-semibold text-mist">Acesso por 12 meses</p>
              <p className="mt-4 text-mist-2 line-through">De R$ 1.290</p>
              <p className="tabular mt-1 font-expanded text-mega font-extrabold">R$ 49</p>
              <p className="mt-2 text-lg text-mist">pagamento único · PIX ou cartão</p>
              <a href={CHECKOUT_URL} className="btn btn-signal btn-lg mt-8 w-full sm:w-auto">
                Garantir meu acesso
                <ArrowRight aria-hidden />
              </a>
              <p className="mt-6 text-mist-2">7 dias de garantia · Pagamento seguro</p>
            </div>
            <div className="lg:col-span-7">
              <h3 className="font-expanded text-heading font-extrabold">Como Avaliar Pessoas</h3>
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

      {/* ── Perguntas ────────────────────────────────────────── */}
      <section className="bg-snow text-ink" aria-labelledby="faq-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <h2 id="faq-title" className="font-expanded text-display font-extrabold lg:col-span-4">
            Antes de decidir.
          </h2>
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

      {/* ── Material protegido ───────────────────────────────── */}
      <section className="night" aria-labelledby="aviso-title">
        <div className="container-site py-20 md:py-28">
          <h2 id="aviso-title" className="max-w-[22ch] font-expanded text-display font-extrabold">
            Cada linha deste material está catalogada, datada e <span className="redact">rastreável.</span>
          </h2>
          <div className="mt-12 grid gap-8 text-lg leading-relaxed text-mist lg:grid-cols-2 lg:gap-16">
            <p>
              Todo o conteúdo do Mundo da HUMINT — marca, identidade, copy, narrativa, estrutura de página, guias,
              dossiês, protocolos, ferramentas e qualquer material entregue na área de membros — é propriedade
              intelectual exclusiva e está protegido por direito autoral, direito de marca e legislação de concorrência
              desleal.
            </p>
            <p>
              Cópia, clonagem, reprodução, adaptação, revenda, redistribuição ou engenharia reversa não passa
              despercebida. Documentos carregam marcações ocultas e identificadores individuais por leitor. Quando um
              vazamento aparece, ele aponta de volta para quem o originou. Não é ameaça. É procedimento.
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
              Quem estuda este material aprende a enxergar a pegada dos outros. Quem tenta copiá-lo, ironicamente, deixa a
              pegada mais visível de todas.
            </p>
            <a href={CHECKOUT_URL} className="btn btn-signal btn-lg">
              Quero aprender o método por R$ 49
              <ArrowRight aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
