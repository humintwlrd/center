import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { SplitSection } from "@/components/site/split-section"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Sobre o Mundo da HUMINT",
  description:
    "Uma plataforma editorial e educacional dedicada à inteligência humana aplicada. Por que existimos, o que publicamos e como trabalhamos.",
  path: "/sobre",
})

const PRINCIPLES = [
  { t: "Rigor", d: "Distinção clara entre evidência, inferência e hipótese, em todo texto publicado." },
  { t: "Contexto", d: "Nenhum fato existe no vácuo. Leitura contextual é parte do método." },
  { t: "Discrição", d: "Proteção de fontes e proporcionalidade no uso de informação." },
  { t: "Transparência", d: "Notas metodológicas, datas de atualização e log de correções." },
  { t: "Ética", d: "Limites legais, profissionais e morais explícitos." },
  { t: "Independência", d: "Sem patrocínio que comprometa a linha editorial." },
]

const TRANSPARENCY = [
  "Identificamos autor e revisor em cada texto.",
  "Datas de publicação e atualização são visíveis.",
  "Correções factuais são registradas no rodapé do artigo.",
  "IA generativa não é usada para inventar fatos, citações ou fontes.",
  "Conflitos de interesse, quando existirem, são declarados.",
]

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre o projeto"
        title="Uma plataforma editorial e educacional dedicada à inteligência humana aplicada."
        lede="O Mundo da HUMINT existe para ocupar o espaço editorial que falta em pt-BR: um lugar sério para quem investiga, verifica e decide com base no que outras pessoas dizem."
        breadcrumbs={[{ label: "Sobre", href: "/sobre" }]}
      />

      <SplitSection id="manifesto" eyebrow="Manifesto" title="Por que existimos." tone="strong">
        <div className="flex max-w-[62ch] flex-col gap-5 text-lg leading-relaxed text-ink-soft">
          <p>
            Inteligência humana aplicada é uma disciplina exigente. Mal traduzida, vira sensacionalismo. Mal
            ensinada, vira intuição disfarçada. Mal praticada, vira dano.
          </p>
          <p>
            Acreditamos que profissionais de segurança, compliance, jornalismo, pesquisa e análise merecem
            material editorial denso, honesto e útil, em português, com contexto local.
          </p>
        </div>
        <p className="mt-10 max-w-[30ch] border-l-2 border-brand pl-6 font-display text-display-md font-medium italic text-ink">
          Método antes de técnica. Contexto antes de conclusão. Ética antes de tudo.
        </p>
      </SplitSection>

      <SplitSection id="como-trabalhamos" eyebrow="Como trabalhamos" title="O que sustenta cada publicação.">
        <dl className="grid gap-px border-y border-ink bg-line sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <div key={p.t} className="bg-paper py-6 sm:px-6 sm:[&:nth-child(odd)]:pl-0">
              <dt className="flex items-baseline gap-3">
                <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-display-sm font-medium text-ink">{p.t}</span>
              </dt>
              <dd className="mt-2 pl-8 text-[0.9375rem] leading-relaxed text-ink-muted">{p.d}</dd>
            </div>
          ))}
        </dl>
      </SplitSection>

      <SplitSection
        id="transparencia"
        eyebrow="Transparência"
        title="O que você precisa saber para confiar no que lê aqui."
        tone="deep"
      >
        <ul className="border-t border-line-dark">
          {TRANSPARENCY.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 border-b border-line-dark py-4 text-lg leading-relaxed text-fog"
            >
              <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 bg-brand-bright" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-2">
          <Link href="/principios-editoriais" className="group bg-deep-2 p-6 transition-colors hover:bg-deep-3">
            <p className="eyebrow-brand">Documento</p>
            <p className="mt-2 font-display text-xl font-medium text-fog">Princípios editoriais e éticos</p>
            <p className="mt-1 text-sm text-fog-muted">Compromissos, políticas de fontes, IA e correções.</p>
            <ArrowRight className="mt-5 h-4 w-4 text-fog transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
          <Link href="/contato" className="group bg-deep-2 p-6 transition-colors hover:bg-deep-3">
            <p className="eyebrow-brand">Contato</p>
            <p className="mt-2 font-display text-xl font-medium text-fog">Imprensa, parcerias e dúvidas</p>
            <p className="mt-1 text-sm text-fog-muted">Fale com a equipe editorial.</p>
            <ArrowRight className="mt-5 h-4 w-4 text-fog transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </SplitSection>
    </>
  )
}
