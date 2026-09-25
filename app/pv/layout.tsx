import type { Metadata } from "next"
import { UtmifyScripts } from "@/components/landing/utmify-scripts"
import { SITE } from "@/lib/site"
import "./pv.css"

export const metadata: Metadata = {
  title: "Acervo Tático de Inteligência Humana",
  description:
    "O primeiro acervo tático brasileiro de Inteligência Humana: análise comportamental, comunicação estratégica, contrainteligência e leitura de pessoas.",
  alternates: {
    canonical: `${SITE.url}/pv`,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${SITE.url}/pv`,
    title: "Acervo Tático de Inteligência Humana",
    description:
      "Conhecimento prático em HUMINT reunido em um acervo confidencial e atualizado.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acervo Tático de Inteligência Humana",
    description:
      "Conhecimento prático em HUMINT reunido em um acervo confidencial e atualizado.",
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
