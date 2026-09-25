"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRight, Menu, Search, X } from "lucide-react"
import { NAV, SITE } from "@/lib/site"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/site/brand-logo"

/**
 * Cabeçalho editorial fixo:
 * - Logo + navegação alinhada à esquerda
 * - À direita: busca e CTA verde da Academy
 * - Em telas <lg: logo + CTA + menu em tela cheia
 *
 * O fallback (enquanto o Suspense resolve) fica em app/layout.tsx
 * (HeaderFallback) e deve espelhar esta estrutura.
 */
export function SiteHeader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : ""
    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const isActive = (href: string) => {
    const [basePath, query] = href.split("?")

    if (query) {
      if (pathname !== basePath) return false
      const expected = new URLSearchParams(query)
      return Array.from(expected.entries()).every(
        ([key, value]) => searchParams.get(key) === value,
      )
    }

    if (basePath === "/artigos") {
      return (
        pathname.startsWith("/artigos") &&
        !searchParams.get("categoria") &&
        !searchParams.get("tag")
      )
    }

    return pathname === basePath || (basePath !== "/" && pathname.startsWith(`${basePath}/`))
  }

  const academyActive = pathname.startsWith("/academy")

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-[background-color,border-color] duration-200",
        scrolled || open
          ? "bg-paper/95 backdrop-blur-md border-line-strong"
          : "bg-paper border-line",
      )}
    >
      <div className="container-editorial flex h-16 lg:h-[72px] items-center gap-4 lg:gap-10">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={`${SITE.name}, página inicial`}
        >
          <BrandLogo variant="black" priority className="h-8 sm:h-9" />
        </Link>

        <nav className="hidden lg:flex h-full items-stretch gap-7" aria-label="Principal">
          {NAV.primary.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center text-[0.9375rem] font-medium transition-colors",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-brand after:transition-transform after:duration-200 after:origin-left",
                  active
                    ? "text-ink after:scale-x-100"
                    : "text-ink-muted hover:text-ink after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
          <Link
            href="/artigos#busca"
            aria-label="Buscar artigos"
            className="hidden md:inline-flex h-10 w-10 items-center justify-center text-ink-muted transition-colors hover:text-ink"
          >
            <Search className="h-[18px] w-[18px]" aria-hidden />
          </Link>

          <Link
            href="/academy"
            aria-current={academyActive ? "page" : undefined}
            className="btn btn-primary btn-sm"
          >
            Academy
          </Link>

          <button
            type="button"
            className="lg:hidden -mr-2 inline-flex h-10 w-10 items-center justify-center text-ink"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-paper"
        >
          <nav className="container-editorial flex flex-col py-8" aria-label="Principal (mobile)">
            <p className="eyebrow mb-3">Publicação</p>
            <ul className="border-t border-ink">
              {NAV.primary.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-4 font-display text-2xl font-medium",
                        active ? "text-ink" : "text-ink-soft",
                      )}
                    >
                      {item.label}
                      {active && <span className="h-2 w-2 bg-brand" aria-hidden />}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <p className="eyebrow mt-10 mb-3">Mais</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {NAV.meta.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link href={item.href} className="block py-3 text-base text-ink-muted hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 surface-deep p-6">
              <p className="eyebrow-brand">Mundo da HUMINT Academy</p>
              <p className="mt-2 font-display text-2xl font-medium leading-tight text-fog">
                Onde a teoria vira operação.
              </p>
              <Link href="/academy" className="btn btn-primary mt-5 w-full">
                Conhecer a Academy
                <ArrowRight aria-hidden />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
