"use client"

import { useEffect, useState } from "react"

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-humint-charcoal/92 backdrop-blur-xl border-b border-humint-amber/20 py-2"
          : "bg-humint-charcoal/40 backdrop-blur-md border-b border-white/5 py-2.5 md:py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center group" aria-label="Mundo da HUMINT">
          <img
            src="/images/pv/logo-mundo-humint.png"
            alt="Mundo da HUMINT"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop CTA — mobile uses sticky bottom CTA instead */}
        <a
          href="#oferta"
          className="hidden md:inline-flex items-center gap-2 bg-humint-amber text-humint-ink font-mono text-xs tracking-[0.18em] uppercase font-semibold px-5 py-2.5 hover:bg-humint-bone transition-colors"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-humint-blood animate-pulse" />
          Acessar acervo
        </a>

        {/* Mobile mini-CTA — only when scrolled past hero */}
        <a
          href="#oferta"
          className={`md:hidden inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] uppercase font-bold px-3 py-2 transition-all ${
            scrolled
              ? "bg-humint-amber text-humint-ink opacity-100"
              : "text-humint-amber border border-humint-amber/40 opacity-90"
          }`}
        >
          Acessar
        </a>
      </div>
    </nav>
  )
}
