import type { Metadata } from "next"
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google"
import { UtmifyScripts } from "@/components/utmify-scripts"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const SITE_TITLE = "Acervo Tático HUMINT · Mundo da HUMINT"
const SITE_DESCRIPTION =
  "O primeiro e único acervo brasileiro de Inteligência Humana aplicada. Negociação, influência, leitura comportamental e proteção contra manipulação — acesso liberado."

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  generator: "v0.app",
  metadataBase: new URL("https://humint.click"),
  applicationName: "Mundo da HUMINT",
  keywords: [
    "HUMINT",
    "inteligência humana",
    "leitura comportamental",
    "negociação",
    "influência",
    "contrainteligência",
    "elicitação",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    url: "https://humint.click",
    siteName: "Mundo da HUMINT",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

export const viewport = {
  themeColor: "#1a1715",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <body className="bg-humint-ink text-foreground font-sans antialiased">
        {/* Pré-carrega a imagem de fundo do hero para um primeiro paint mais rápido.
            React 19 faz o hoist do <link> para o <head> automaticamente. */}
        <link
          rel="preload"
          as="image"
          href="/hero-background-mobile.webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/hero-background-desktop.webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        {children}
        {/* Utmify — carregado apenas em produção (ver componente) */}
        <UtmifyScripts />
      </body>
    </html>
  )
}
