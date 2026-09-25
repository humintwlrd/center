import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { SplitSection } from "@/components/site/split-section"
import { InterestForm } from "@/components/site/interest-form"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Formação Mundo da HUMINT: em breve",
  description:
    "Programas, workshops e aulas abertas em desenvolvimento. Entre na lista de interesse para receber acesso antecipado.",
  path: "/formacao",
})

const FUTURE_PROGRAMS = [
  {
    title: "Fundamentos de HUMINT aplicada",
    summary:
      "Programa introdutório voltado a profissionais que tomam decisão com base em pessoas. Foco em método, escuta e ética.",
    format: "Programa curto · Online",
  },
  {
    title: "Entrevista e elicitação na prática",
    summary:
      "Workshop intensivo sobre preparação, condução, registro e revisão de entrevistas profissionais.",
    format: "Workshop · Híbrido",
  },
  {
    title: "Validação de fontes humanas",
    summary:
      "Treinamento prático sobre avaliação de credibilidade, motivação e consistência, com casos reais e roleplay.",
    format: "Treinamento · Online",
  },
  {
    title: "HUMINT em compliance e integridade",
    summary:
      "Programa avançado para times de compliance, integridade e investigação interna.",
    format: "Programa corporativo · Sob demanda",
  },
]

export default function FormacaoPage() {
  return (
    <>
      <PageHeader
        title="Formação ao vivo: em breve."
        lede="Estamos finalizando os primeiros programas ao vivo. Entre na lista para receber acesso antecipado a turmas, aulas abertas e novos materiais."
        breadcrumbs={[{ label: "Formação", href: "/formacao" }]}
      >
        <p className="max-w-[56ch] text-lg text-ink-2">
          Quer começar agora? Os cursos e dossiês da Academy já estão disponíveis.{" "}
          <Link href="/academy" className="font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4">
            Ver a Academy
          </Link>
        </p>
      </PageHeader>

      <SplitSection id="transparencia" title="Sem turma aberta. Sem promessa vazia." tone="snow-2">
        <div className="flex max-w-[60ch] flex-col gap-5 text-lg leading-relaxed text-ink-2">
          <p>
            A formação está em desenvolvimento. Antes de abrir turma, queremos o método consolidado, o material maduro e
            o convite certo para quem leva HUMINT a sério.
          </p>
          <p>
            A lista de interesse não é cobrança. É como organizamos o acesso antecipado a workshops, aulas abertas e
            novos programas, sem vender nada antes da hora.
          </p>
        </div>
      </SplitSection>

      <SplitSection id="programas" title="Programas previstos.">
        <div>
          {FUTURE_PROGRAMS.map((p) => (
            <article key={p.title} className="border-t-2 border-ink py-6">
              <h3 className="font-expanded text-heading font-extrabold">{p.title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-ink-2">{p.summary}</p>
              <p className="mt-2 text-sm text-ink-3">{p.format}</p>
            </article>
          ))}
        </div>
      </SplitSection>

      <section className="night" aria-labelledby="interesse-title">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <h2 id="interesse-title" className="font-expanded text-title font-extrabold">
              Acesso antecipado às próximas turmas.
            </h2>
            <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-mist">
              Avisamos com antecedência sobre aulas abertas, workshops e abertura de programas, na ordem em que forem
              confirmados.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <InterestForm />
          </div>
        </div>
      </section>
    </>
  )
}
