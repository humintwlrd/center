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
  { t: "Transparência", d: "Notas metodológicas, datas de atualização e registro de correções." },
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
        tone="night"
        size="lg"
        title="Um lugar sério para quem decide com base no que outras pessoas dizem."
        lede="O Mundo da HUMINT é uma plataforma editorial e educacional de inteligência humana aplicada, em português, para quem investiga, verifica e decide."
        breadcrumbs={[{ label: "Sobre", href: "/sobre" }]}
      />

      <SplitSection id="manifesto" title="Por que existimos.">
        <div className="flex max-w-[60ch] flex-col gap-5 text-lg leading-relaxed text-ink-2">
          <p>
            Inteligência humana aplicada é uma disciplina exigente. Mal traduzida, vira sensacionalismo. Mal ensinada,
            vira intuição disfarçada. Mal praticada, vira dano.
          </p>
          <p>
            Profissionais de segurança, compliance, jornalismo, pesquisa e análise merecem material denso, honesto e
            útil, em português, com contexto local.
          </p>
        </div>
        <p className="mt-12 max-w-[24ch] font-expanded text-title font-extrabold">
          Método antes de técnica. Contexto antes de conclusão. Ética antes de tudo.
        </p>
      </SplitSection>

      <SplitSection id="como-trabalhamos" title="O que sustenta cada publicação." tone="snow-2">
        <dl className="grid gap-x-10 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.t} className="border-t-2 border-ink py-6">
              <dt className="font-expanded text-heading font-extrabold">{p.t}</dt>
              <dd className="mt-2 text-lg leading-relaxed text-ink-2">{p.d}</dd>
            </div>
          ))}
        </dl>
      </SplitSection>

      <SplitSection id="transparencia" title="O que você precisa saber para confiar no que lê aqui." tone="night">
        <ul>
          {TRANSPARENCY.map((item) => (
            <li key={item} className="border-t border-line-night py-5 text-lg leading-relaxed text-white">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/principios-editoriais" className="btn btn-solid">
            Princípios editoriais
            <ArrowRight aria-hidden />
          </Link>
          <Link href="/contato" className="btn btn-line">
            Falar com a equipe
          </Link>
        </div>
      </SplitSection>
    </>
  )
}
