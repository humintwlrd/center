"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRight, Menu, Search, X } from "lucide-react"
import { NAV, SITE } from "@/lib/site"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/site/brand-logo"

/**
 * Cabeçalho fixo, sempre escuro (como o site de uma agência).
 * O fallback do Suspense fica em app/layout.tsx (HeaderFallback) e
 * espelha esta estrutura.
 */
export function SiteHeader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false)

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
      return Array.from(expected.entries()).every(([key, value]) => searchParams.get(key) === value)
    }
    if (basePath === "/artigos") {
      return pathname.startsWith("/artigos") && !searchParams.get("categoria") && !searchParams.get("tag")
    }
    return pathname === basePath || (basePath !== "/" && pathname.startsWith(`${basePath}/`))
  }

  return (
    <header className="night sticky top-0 z-40 w-full border-b border-line-night">
      <div className="container-site flex h-16 items-center gap-6 lg:h-[72px] lg:gap-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${SITE.name}, página inicial`}>
          <BrandLogo variant="white" priority className="h-8 sm:h-9" />
        </Link>

        <nav className="hidden h-full items-stretch gap-8 lg:flex" aria-label="Principal">
          {NAV.primary.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center text-[0.9375rem] font-semibold transition-colors",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-signal after:transition-transform after:duration-300 after:origin-left",
                  active ? "text-white after:scale-x-100" : "text-mist hover:text-white after:scale-x-0",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link
            href="/artigos#busca"
            aria-label="Buscar artigos"
            className="hidden h-10 w-10 items-center justify-center text-mist transition-colors hover:text-white md:inline-flex"
          >
            <Search className="h-[18px] w-[18px]" aria-hidden />
          </Link>
          <Link href="/academy/acervo-tatico" className="btn btn-signal btn-sm">
            Acervo Tático
          </Link>
          <button
            type="button"
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
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
        <div id="mobile-nav" className="night fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto lg:hidden">
          <nav className="container-site flex min-h-full flex-col pt-6 pb-10" aria-label="Principal (mobile)">
            <ul>
              {NAV.primary.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.href} className="border-b border-line-night">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-5 font-expanded text-[1.75rem] font-extrabold tracking-[-0.02em]",
                        active ? "text-white" : "text-mist",
                      )}
                    >
                      {item.label}
                      {active && <span className="h-2.5 w-2.5 bg-signal" aria-hidden />}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-1">
              {NAV.meta.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-2.5 text-base text-mist hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/academy/acervo-tatico" className="btn btn-signal btn-lg mt-auto w-full">
              Conhecer o Acervo Tático
              <ArrowRight aria-hidden />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
