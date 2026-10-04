import type { Metadata, Viewport } from "next"
import { Archivo, Inter_Tight } from "next/font/google"
import { Suspense } from "react"
import Link from "next/link"
import { ChevronRight, Menu } from "lucide-react"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BrandLogo } from "@/components/site/brand-logo"
import { CookieBanner } from "@/components/site/cookie-banner"
import { OrganizationSchema } from "@/components/site/organization-schema"
import { Declassify } from "@/components/site/declassify"
import { ScrollReveal } from "@/components/site/scroll-reveal"
import { Roll } from "@/components/site/roll"
import { NAV, SITE } from "@/lib/site"
import "./globals.css"
import { SiteAnalytics } from "@/components/site/site-analytics"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
})

/** Só a /lp (escopo .world-legacy) usa a Archivo: sem preload no resto do site. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
  preload: false,
})

/**
 * Marca html.js antes da pintura para o reveal de scroll esconder só quando há JS.
 * Se o componente não montar em 3 s, tira a marca e mostra tudo.
 */
const REVEAL_BOOT = `document.documentElement.classList.add("js");setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.remove("js")},3000)`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "HUMINT",
    "inteligência humana",
    "OSINT",
    "investigação",
    "compliance",
    "jornalismo investigativo",
    "verificação de fontes",
    "análise de contexto",
    "contrainteligência",
    "engenharia social",
    "OPSEC",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Mundo da HUMINT: publicação editorial sobre inteligência humana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: ["/images/hero-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} ${archivo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOT }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader />
        </Suspense>
        <main id="main" className="overflow-x-clip">
          {children}
        </main>
        <SiteFooter />
        <CookieBanner />
        <Declassify />
        <ScrollReveal />
        <OrganizationSchema />
        {process.env.NODE_ENV === "production" && <SiteAnalytics />}
      </body>
    </html>
  )
}

function HeaderFallback() {
  return (
    <header className="sticky top-0 z-40 w-full bg-snow">
      <div className="container-site">
        <div className="flex h-16 items-stretch border-b border-l border-line lg:h-[67px]">
          <Link href="/" className="flex shrink-0 items-center px-4 sm:px-6" aria-label={`${SITE.name}, página inicial`}>
            <BrandLogo variant="black" className="h-8 sm:h-9" />
          </Link>
          <nav className="ml-auto hidden items-center pr-4 lg:flex" aria-label="Principal">
            {NAV.primary.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex items-center px-2.5 text-sm uppercase text-ink">
                {item.label}
              </Link>
            ))}
            <span className="ml-2 inline-flex size-10" aria-hidden />
          </nav>
          <Link
            href="/academy/acervo-tatico"
            className="btn btn-signal ml-auto min-h-0 px-4 text-[0.8125rem] sm:px-6 sm:text-sm lg:ml-0"
          >
            <Roll>Acervo Tático</Roll>
            <ChevronRight aria-hidden />
          </Link>
          <span className="inline-flex w-16 shrink-0 items-center justify-center text-ink lg:hidden" aria-hidden>
            <Menu className="size-6" />
          </span>
        </div>
      </div>
    </header>
  )
}
