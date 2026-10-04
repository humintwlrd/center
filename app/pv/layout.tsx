import type { Metadata } from "next"
import { UtmifyScripts } from "@/components/landing/utmify-scripts"
import { SITE } from "@/lib/site"
import "./pv.css"

export const metadata: Metadata = {
  title: "Acervo Tático de Inteligência Humana",
  description:
    "Suas decisões dependem de pessoas. O Acervo Tático HUMINT reúne seis dossiês para ensinar você a observar pessoas, conduzir conversas e avaliar informações de forma mais estruturada. Sem leitura mental, sem truques, com método.",
  alternates: {
    canonical: `${SITE.url}/pv`,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${SITE.url}/pv`,
    title: "Acervo Tático de Inteligência Humana",
    description:
      "Suas decisões dependem de pessoas. Inteligência humana de operações reais, traduzida para as suas decisões.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acervo Tático de Inteligência Humana",
    description:
      "Suas decisões dependem de pessoas. Inteligência humana de operações reais, traduzida para as suas decisões.",
  },
}

export default function PvLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <UtmifyScripts />
    </>
  )
}
