import type { Metadata, Viewport } from "next"
import { Archivo } from "next/font/google"
import { Suspense } from "react"
import Link from "next/link"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BrandLogo } from "@/components/site/brand-logo"
import { CookieBanner } from "@/components/site/cookie-banner"
import { OrganizationSchema } from "@/components/site/organization-schema"
import { Declassify } from "@/components/site/declassify"
import { NAV, SITE } from "@/lib/site"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
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
  themeColor: "#0b0b0c",
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
      className={archivo.variable}
      suppressHydrationWarning
    >
      <body>
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader />
        </Suspense>
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieBanner />
        <Declassify />
        <OrganizationSchema />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}

function HeaderFallback() {
  return (
    <header className="night sticky top-0 z-40 w-full border-b border-line-night">
      <div className="container-site flex h-16 items-center gap-6 lg:h-[72px] lg:gap-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${SITE.name}, página inicial`}>
          <BrandLogo variant="white" className="h-8 sm:h-9" />
        </Link>
        <nav className="hidden h-full items-stretch gap-8 lg:flex" aria-label="Principal">
          {NAV.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center text-[0.9375rem] font-semibold text-mist hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link href="/academy/acervo-tatico" className="btn btn-signal btn-sm">
            Acervo Tático
          </Link>
          <span className="-mr-2 inline-flex h-10 w-10 lg:hidden" aria-hidden />
        </div>
      </div>
    </header>
  )
}
