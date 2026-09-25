import type { Metadata, Viewport } from "next"
import { Newsreader, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google"
import { Suspense } from "react"
import Link from "next/link"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BrandLogo } from "@/components/site/brand-logo"
import { CookieBanner } from "@/components/site/cookie-banner"
import { OrganizationSchema } from "@/components/site/organization-schema"
import { NAV, SITE } from "@/lib/site"
import "./globals.css"

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
})

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
})

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
  themeColor: "#f6f6f3",
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
      className={`${newsreader.variable} ${schibsted.variable} ${plexMono.variable} bg-paper`}
      suppressHydrationWarning
    >
      <body className="font-sans text-ink">
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader />
        </Suspense>
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieBanner />
        <OrganizationSchema />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}

function HeaderFallback() {
  return (
    <header className="sticky top-0 z-40 w-full bg-paper border-b border-line">
      <div className="container-editorial flex h-16 lg:h-[72px] items-center gap-4 lg:gap-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${SITE.name}, página inicial`}>
          <BrandLogo variant="black" className="h-8 sm:h-9" />
        </Link>
        <nav className="hidden lg:flex h-full items-stretch gap-7" aria-label="Principal">
          {NAV.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center text-[0.9375rem] font-medium text-ink-muted hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
          <span className="hidden md:inline-flex h-10 w-10" aria-hidden />
          <Link href="/academy" className="btn btn-primary btn-sm">
            Academy
          </Link>
          <span className="lg:hidden -mr-2 inline-flex h-10 w-10" aria-hidden />
        </div>
      </div>
    </header>
  )
}
