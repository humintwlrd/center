"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronRight, Menu, Search, X } from "lucide-react"
import { NAV, SITE } from "@/lib/site"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/site/brand-logo"
import { Roll } from "@/components/site/roll"

/**
 * Cabeçalho fixo no padrão da referência: caixa com filete à esquerda e embaixo,
 * navegação em caixa-alta e o CTA em bloco escuro encostado à direita.
 * O fallback do Suspense fica em app/layout.tsx (HeaderFallback) e espelha esta estrutura.
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
    <header className="sticky top-0 z-40 w-full bg-snow">
      <div className="container-site">
        <div className="flex h-16 items-stretch border-b border-l border-line lg:h-[67px]">
          <Link href="/" className="flex shrink-0 items-center px-4 sm:px-6" aria-label={`${SITE.name}, página inicial`}>
            <BrandLogo variant="black" priority className="h-8 sm:h-9" />
          </Link>

          <nav className="ml-auto hidden items-center pr-4 lg:flex" aria-label="Principal">
            {NAV.primary.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="inline-flex items-center gap-2 px-2.5 text-sm uppercase text-ink"
                >
                  {active && <span className="size-1.5 bg-ink" aria-hidden />}
                  <Roll>{item.label}</Roll>
                </Link>
              )
            })}
            <Link
              href="/artigos#busca"
              aria-label="Buscar artigos"
              className="ml-2 inline-flex size-10 items-center justify-center text-ink transition-colors hover:text-ink-2"
            >
              <Search className="size-[17px]" aria-hidden />
            </Link>
          </nav>

          <Link
            href="/academy/acervo-tatico"
            className="btn btn-signal ml-auto min-h-0 px-4 text-[0.8125rem] sm:px-6 sm:text-sm lg:ml-0"
          >
            <Roll>Acervo Tático</Roll>
            <ChevronRight aria-hidden />
          </Link>
          <button
            type="button"
            className="inline-flex w-16 shrink-0 items-center justify-center text-ink lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-snow lg:hidden">
          <nav className="container-site flex min-h-full flex-col pb-8" aria-label="Principal (mobile)">
            <div className="flex flex-1 flex-col border-x border-line">
              <ul>
                {NAV.primary.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <li key={item.href} className="border-b border-line">
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="flex items-center justify-between px-5 py-5 text-2xl font-medium tracking-[-0.03em] text-ink"
                      >
                        <span className="flex items-center gap-3">
                          {active && <span className="size-2 bg-ink" aria-hidden />}
                          {item.label}
                        </span>
                        <ChevronRight className="size-5 text-ink-4" aria-hidden />
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <ul className="grid grid-cols-2">
                {NAV.meta.map((item, i) => (
                  <li key={item.href} className={cn("border-b border-line", i % 2 === 0 && "border-r")}>
                    <Link href={item.href} className="block px-5 py-4 text-sm uppercase text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-5">
                <Link href="/artigos#busca" className="btn btn-line w-full">
                  <Search aria-hidden />
                  Buscar artigos
                </Link>
              </div>
            </div>
            <Link href="/academy/acervo-tatico" className="btn btn-signal w-full">
              Quero acessar o Acervo Tático
              <ChevronRight aria-hidden />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
