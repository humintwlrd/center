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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line-night bg-night py-2" : "border-transparent bg-night/70 py-2.5 md:py-3"
      }`}
    >
      <div className="container-site flex items-center justify-between">
        <a href="#top" className="flex items-center group" aria-label="Mundo da HUMINT">
          <img
            src="/images/pv/logo-mundo-humint.png"
            alt="Mundo da HUMINT"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop CTA — mobile uses sticky bottom CTA instead */}
        <a href="#oferta" className="btn btn-signal btn-sm hidden md:inline-flex">
          Acessar acervo
        </a>

        {/* Mobile mini-CTA — only when scrolled past hero */}
        <a href="#oferta" className={`btn btn-sm md:hidden ${scrolled ? "btn-signal" : "border-white text-white"}`}>
          Acessar
        </a>
      </div>
    </nav>
  )
}
