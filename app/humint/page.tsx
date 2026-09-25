import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"

import { pageMetadata } from "@/lib/seo"
import { blogPostingSchema, faqSchema } from "@/lib/schema"
import { JsonLd } from "@/components/site/json-ld"
import { PageHeader } from "@/components/site/page-header"
import { AcademyCta } from "@/components/site/academy-cta"

export const metadata: Metadata = pageMetadata({
  title: "O Que é HUMINT: Inteligência Humana Explicada",
  description:
    "Guia completo sobre HUMINT (Human Intelligence): definição, métodos, aplicações, diferenças para OSINT, ética e como a inteligência humana é usada em operações reais.",
  path: "/humint",
})

const faqs = [
  {
    question: "O que significa HUMINT?",
    answer:
      "HUMINT é a sigla para Human Intelligence (Inteligência Humana). Refere-se à coleta de informações através de fontes humanas: pessoas que fornecem dados, análises ou acesso a informações que não estão disponíveis por outros meios.",
  },
  {
    question: "Qual a diferença entre HUMINT e OSINT?",
    answer:
      "OSINT (Open Source Intelligence) coleta informações de fontes abertas e públicas. HUMINT coleta através de interações humanas diretas. São disciplinas complementares: OSINT pode identificar alvos que depois são abordados via HUMINT, e HUMINT pode validar ou contextualizar dados de OSINT.",
  },
  {
    question: "HUMINT é legal?",
    answer:
      "Depende do contexto e jurisdição. Serviços de inteligência governamentais operam sob estruturas legais específicas. No setor privado, HUMINT é usada em due diligence, investigações corporativas e jornalismo investigativo, sempre dentro dos limites legais e éticos.",
  },
  {
    question: "Quem usa HUMINT?",
    answer:
      "Agências de inteligência governamentais, forças armadas, polícias, jornalistas investigativos, empresas de due diligence, departamentos de segurança corporativa, investigadores privados e profissionais de compliance.",
  },
  {
    question: "Como se aprende HUMINT?",
    answer:
      "Através de formação especializada em agências governamentais, cursos acadêmicos de inteligência, treinamentos corporativos, literatura especializada e experiência prática supervisionada. O Mundo da HUMINT oferece conteúdo educacional sobre fundamentos e aplicações.",
  },
]

const pillarTopics = [
  {
    title: "Fundamentos de HUMINT",
    description: "Conceitos essenciais, história e princípios que regem a inteligência humana.",
    href: "/artigos?categoria=fundamentos-de-humint",
  },
  {
    title: "Métodos e Tradecraft",
    description: "Técnicas operacionais: elicitação, rapport, recrutamento e comunicação segura.",
    href: "/metodos",
  },
  {
    title: "Engenharia Social",
    description: "Manipulação e influência interpessoal: como funciona e como se defender.",
    href: "/artigos?categoria=engenharia-social",
  },
  {
    title: "Contrainteligência",
    description: "Proteção contra espionagem, detecção de ameaças e prevenção de vazamentos.",
    href: "/artigos?categoria=contrainteligencia",
  },
  {
    title: "OPSEC",
    description: "Segurança operacional e proteção de informações críticas.",
    href: "/artigos?categoria=opsec",
  },
  {
    title: "Psicologia Comportamental",
    description: "Vieses cognitivos, tomada de decisão e comportamento humano em contextos de inteligência.",
    href: "/artigos?categoria=psicologia-comportamental",
  },
]

const TOC = [
  { id: "definicao", label: "Definição" },
  { id: "por-que-importa", label: "Por que HUMINT importa" },
  { id: "metodos", label: "Métodos principais" },
  { id: "humint-vs-osint", label: "HUMINT vs OSINT" },
  { id: "temas", label: "Explore por tema" },
  { id: "faq", label: "Perguntas frequentes" },
]

export default function HumintPage() {
  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema({
            title: "O Que é HUMINT: Inteligência Humana Explicada",
            description:
              "Guia completo sobre HUMINT: definição, métodos, aplicações e ética da inteligência humana.",
            slug: "humint",
            image: "/images/hero-home.jpg",
            publishedAt: "2024-01-15",
            updatedAt: new Date().toISOString().split("T")[0],
            author: "Mundo da HUMINT",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        tone="night"
        size="lg"
        title="O que é HUMINT."
        lede="Inteligência humana (Human Intelligence) é a disciplina de coleta de informações através de fontes humanas. Este guia explica o que é, como funciona, quem usa e por que importa."
        breadcrumbs={[{ label: "Fundamentos", href: "/humint" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="#definicao" className="btn btn-signal btn-lg">
            Começar a leitura
            <ArrowRight aria-hidden />
          </Link>
          <Link href="/artigos?categoria=fundamentos-de-humint" className="btn btn-line btn-lg">
            Artigos de fundamentos
          </Link>
        </div>
      </PageHeader>

      <div className="bg-snow text-ink">
        <div className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
          <aside className="hidden lg:col-span-3 lg:block" aria-label="Neste guia">
            <nav className="sticky top-28">
              <p className="mb-3 font-bold">Neste guia</p>
              <ol className="border-t-2 border-ink">
                {TOC.map((item) => (
                  <li key={item.id} className="border-b border-line">
                    <Link href={`#${item.id}`} className="block py-3 text-ink-2 transition-colors hover:text-signal">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="prose-read min-w-0 lg:col-span-8 lg:col-start-5">
            <h2 id="definicao">Definição</h2>
            <p>
              <strong>HUMINT</strong> (Human Intelligence, ou Inteligência Humana) é uma das disciplinas de coleta de
              inteligência que obtém informações através de fontes humanas. Diferente de SIGINT (sinais), IMINT
              (imagens) ou OSINT (fontes abertas), HUMINT depende de interações interpessoais.
            </p>
            <p>
              Uma fonte humana pode ser um informante recrutado, um contato voluntário, um diplomata, um desertor ou
              qualquer pessoa com acesso a informações de interesse. O operador de HUMINT (também chamado de case
              officer ou handler) é responsável por identificar, abordar, desenvolver e gerenciar essas fontes.
            </p>

            <h2 id="por-que-importa">Por que HUMINT importa</h2>
            <p>
              Em um mundo saturado de dados digitais, pode parecer que inteligência humana é obsoleta. O oposto é
              verdadeiro. Sistemas técnicos capturam o que acontece; fontes humanas explicam o porquê, revelam
              intenções e fornecem contexto que nenhum algoritmo consegue inferir.
            </p>
            <ul>
              <li>
                <strong>Intenções:</strong> HUMINT é a única disciplina capaz de acessar diretamente o que um
                adversário planeja fazer.
              </li>
              <li>
                <strong>Contexto:</strong> Dados sem contexto são ruído. Fontes humanas explicam o significado.
              </li>
              <li>
                <strong>Acesso:</strong> Algumas informações não existem em nenhum sistema, apenas na mente de
                pessoas.
              </li>
              <li>
                <strong>Validação:</strong> HUMINT pode confirmar ou refutar inteligência obtida por outros meios.
              </li>
            </ul>

            <h2 id="metodos">Métodos principais</h2>
            <p>A coleta de HUMINT envolve um ciclo de operações que inclui:</p>
            <ol>
              <li>
                <strong>Identificação de alvos:</strong> Quem tem acesso às informações necessárias?
              </li>
              <li>
                <strong>Avaliação:</strong> A pessoa é acessível? Tem motivação? Representa riscos?
              </li>
              <li>
                <strong>Abordagem:</strong> Primeiro contato, construção de rapport, avaliação mútua.
              </li>
              <li>
                <strong>Recrutamento:</strong> Formalização do relacionamento, estabelecimento de termos.
              </li>
              <li>
                <strong>Gerenciamento:</strong> Comunicação segura, tasking, validação de informações.
              </li>
              <li>
                <strong>Encerramento:</strong> Quando e como terminar o relacionamento de forma segura.
              </li>
            </ol>

            <h2 id="humint-vs-osint">HUMINT vs OSINT</h2>
            <p>
              OSINT e HUMINT não são concorrentes, são complementares. Uma investigação robusta frequentemente começa
              com OSINT (pesquisa em fontes abertas) para mapear o terreno, identificar alvos e preparar abordagens.
              HUMINT então aprofunda, valida e contextualiza.
            </p>
            <blockquote>
              OSINT coleta o que está público; HUMINT acessa o que está protegido, classificado ou simplesmente não
              documentado.
            </blockquote>
          </article>
        </div>
      </div>

      <section id="temas" className="bg-snow-2 text-ink" aria-labelledby="temas-title">
        <div className="container-site py-20 md:py-24">
          <h2 id="temas-title" className="font-expanded text-title font-extrabold">
            As dimensões da inteligência humana.
          </h2>
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {pillarTopics.map((topic) => (
              <li key={topic.href} className="border-t-2 border-ink">
                <Link href={topic.href} className="group flex h-full flex-col py-6">
                  <span className="font-expanded text-heading font-extrabold transition-colors group-hover:text-signal">
                    {topic.title}
                  </span>
                  <span className="mt-2 flex-1 text-lg leading-relaxed text-ink-2">{topic.description}</span>
                  <ArrowRight className="mt-5 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="bg-snow text-ink" aria-labelledby="faq-title">
        <div className="container-site grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-14">
          <h2 id="faq-title" className="font-expanded text-title font-extrabold lg:col-span-4">
            Perguntas frequentes.
          </h2>
          <div className="border-t-2 border-ink lg:col-span-8">
            {faqs.map((faq, i) => (
              <details key={faq.question} className="group border-b border-line" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-lg font-bold transition-colors group-hover:text-signal">{faq.question}</span>
                  <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden />
                </summary>
                <p className="max-w-[62ch] pb-6 text-lg leading-relaxed text-ink-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AcademyCta
        title="HUMINT com método e ética."
        description="Conteúdo rigoroso, sem sensacionalismo. Na Academy, os fundamentos deste guia viram prática estruturada."
      />
    </>
  )
}
