import type { Metadata } from "next"
import { UtmifyScripts } from "@/components/landing/utmify-scripts"
import { SITE } from "@/lib/site"
import "./pv.css"

export const metadata: Metadata = {
  title: "Acervo Tático de Inteligência Humana",
  description:
    "Toda decisão importante passa por uma pessoa. O Acervo Tático HUMINT ensina o método da inteligência humana em seis dossiês e um núcleo de ferramentas: observar, perguntar e checar antes de confiar.",
  alternates: {
    canonical: `${SITE.url}/pv`,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${SITE.url}/pv`,
    title: "Acervo Tático de Inteligência Humana",
    description:
      "Toda decisão importante passa por uma pessoa. Aprenda a avaliá-la com método.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acervo Tático de Inteligência Humana",
    description:
      "Toda decisão importante passa por uma pessoa. Aprenda a avaliá-la com método.",
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
