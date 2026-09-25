import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { pageMetadata } from "@/lib/seo"
import { blogPostingSchema, faqSchema } from "@/lib/schema"
import { JsonLd } from "@/components/site/json-ld"
import { PageHeader } from "@/components/site/page-header"
import { AcademyCta } from "@/components/site/academy-cta"
import { NewsletterInline } from "@/components/site/newsletter-inline"

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
        tone="deep"
        size="lg"
        eyebrow="Página pilar · Fundamentos"
        title="O que é HUMINT."
        lede="Inteligência humana (Human Intelligence) é a disciplina de coleta de informações através de fontes humanas. Este guia explica o que é, como funciona, quem usa e por que importa."
        breadcrumbs={[{ label: "Fundamentos", href: "/humint" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="#definicao" className="btn btn-primary btn-lg">
            Começar a leitura
            <ArrowRight aria-hidden />
          </Link>
          <Link href="/artigos?categoria=fundamentos-de-humint" className="btn btn-outline btn-lg">
            Artigos de fundamentos
          </Link>
        </div>
      </PageHeader>

      <div className="bg-paper">
        <div className="container-editorial grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <aside className="hidden lg:col-span-3 lg:block" aria-label="Neste guia">
            <nav className="sticky top-28">
              <p className="eyebrow mb-4">Neste guia</p>
              <ol className="border-t border-ink">
                {TOC.map((item, i) => (
                  <li key={item.id} className="border-b border-line">
                    <Link
                      href={`#${item.id}`}
                      className="grid grid-cols-[2rem_1fr] gap-2 py-3 text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      <span className="font-mono text-[0.6875rem] tracking-[0.12em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="article-prose min-w-0 lg:col-span-8 xl:col-span-7">
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

      <section id="temas" className="border-t border-line bg-paper-strong" aria-labelledby="temas-title">
        <div className="container-editorial py-16 md:py-20">
          <p className="kicker">Explore por tema</p>
          <h2 id="temas-title" className="mt-5 font-display text-display-lg font-medium text-ink">
            As dimensões da inteligência humana.
          </h2>
          <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {pillarTopics.map((topic, i) => (
              <li key={topic.href} className="bg-paper-strong">
                <Link
                  href={topic.href}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-paper md:p-7"
                >
                  <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 font-display text-display-sm font-medium text-ink transition-colors group-hover:text-brand">
                    {topic.title}
                  </span>
                  <span className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {topic.description}
                  </span>
                  <ArrowRight
                    className="mt-5 h-4 w-4 text-ink transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="border-t border-line bg-paper" aria-labelledby="faq-title">
        <div className="container-editorial grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="kicker">Perguntas frequentes</p>
            <h2 id="faq-title" className="mt-5 font-display text-display-lg font-medium text-ink">
              O essencial, em poucas linhas.
            </h2>
          </div>
          <div className="border-t border-ink lg:col-span-8">
            {faqs.map((faq, i) => (
              <details key={faq.question} className="group border-b border-line" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-xl font-medium text-ink transition-colors group-hover:text-brand">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className="relative mt-2 h-3 w-3 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-ink after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-ink after:transition-transform group-open:after:scale-y-0"
                  />
                </summary>
                <p className="max-w-[62ch] pb-6 text-[0.9375rem] leading-relaxed text-ink-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AcademyCta
        title="HUMINT com método e ética."
        description="Conteúdo rigoroso, sem sensacionalismo. Na Academy, os fundamentos deste guia viram prática estruturada."
      />

      <section className="bg-paper" aria-labelledby="news-title">
        <div className="container-editorial grid gap-8 py-14 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <p className="kicker">Newsletter</p>
            <h2 id="news-title" className="mt-4 font-display text-display-md font-medium text-ink">
              Receba os próximos guias por e-mail.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <NewsletterInline />
          </div>
        </div>
      </section>
    </>
  )
}
