import type { Metadata } from "next"
import { Fraunces, JetBrains_Mono } from "next/font/google"
import { UtmifyScripts } from "@/components/landing/utmify-scripts"
import "./pv.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-pv-serif",
  display: "swap",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-pv-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Acervo Tático de Inteligência Humana",
  description:
    "O primeiro acervo tático brasileiro de Inteligência Humana: análise comportamental, comunicação estratégica, contrainteligência e leitura de pessoas.",
  alternates: {
    canonical: "https://mundodahumint.com/pv",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mundodahumint.com/pv",
    title: "Acervo Tático de Inteligência Humana",
    description:
      "Conhecimento prático em HUMINT reunido em um acervo confidencial e atualizado.",
    images: [
      {
        url: "/images/pv/hero-background-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Acervo Tático de Inteligência Humana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acervo Tático de Inteligência Humana",
    description:
      "Conhecimento prático em HUMINT reunido em um acervo confidencial e atualizado.",
    images: ["/images/pv/hero-background-desktop.webp"],
  },
}

export default function PvLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${fraunces.variable} ${jetBrainsMono.variable}`}>
      {children}
      <UtmifyScripts />
    </div>
  )
}
