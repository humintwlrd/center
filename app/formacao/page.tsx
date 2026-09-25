import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
        eyebrow="Formação · Em breve"
        title="Formação Mundo da HUMINT."
        lede="Estamos finalizando nossos primeiros programas ao vivo. Entre na lista para receber acesso antecipado a turmas, aulas abertas e novos materiais."
        breadcrumbs={[{ label: "Formação", href: "/formacao" }]}
      >
        <div className="flex flex-col gap-4 border-l-2 border-brand bg-paper-strong p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
            Quer começar agora? Os cursos e dossiês da Academy já estão disponíveis.
          </p>
          <Link href="/academy" className="btn btn-primary btn-sm shrink-0">
            Ver a Academy
            <ArrowRight aria-hidden />
          </Link>
        </div>
      </PageHeader>

      <SplitSection id="transparencia" eyebrow="Transparência" title="Sem turma aberta. Sem promessa vazia." tone="strong">
        <div className="flex max-w-[62ch] flex-col gap-5 text-lg leading-relaxed text-ink-soft">
          <p>
            A formação está em desenvolvimento. Antes de abrir turma, queremos ter o método consolidado, o material
            maduro e o convite certo para quem leva HUMINT a sério.
          </p>
          <p>
            A lista de interesse não é cobrança. É como organizamos o acesso antecipado a workshops, aulas abertas e
            novos programas, sem vender nada antes da hora.
          </p>
        </div>
      </SplitSection>

      <SplitSection id="programas" eyebrow="Em desenvolvimento" title="Programas previstos.">
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {FUTURE_PROGRAMS.map((p, i) => (
            <article key={p.title} className="flex flex-col gap-3 bg-paper-strong p-6 md:p-8">
              <p className="flex items-center justify-between gap-4">
                <span className="eyebrow">{p.format}</span>
                <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </p>
              <h3 className="font-display text-display-sm font-medium text-ink">{p.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-muted">{p.summary}</p>
            </article>
          ))}
        </div>
      </SplitSection>

      <section className="surface-deep" aria-labelledby="interesse-title">
        <div className="container-editorial grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-5">
            <p className="kicker">Lista de interesse</p>
            <h2 id="interesse-title" className="mt-5 font-display text-display-lg font-medium text-fog">
              Acesso antecipado às próximas turmas.
            </h2>
            <p className="mt-5 max-w-[44ch] text-[0.9375rem] leading-relaxed text-fog-muted">
              Avisamos com antecedência sobre aulas abertas, workshops e abertura de programas, na ordem em que
              forem confirmados.
            </p>
          </div>
          <div className="surface-deep-2 min-w-0 border border-line-dark p-6 md:p-10 lg:col-span-7">
            <InterestForm />
          </div>
        </div>
      </section>
    </>
  )
}
