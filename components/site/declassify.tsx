"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Libera as tarjas (.redact) uma única vez, quando entram na tela.
 * Só esconde o texto depois que este script roda: sem JS, nada fica oculto.
 * Com prefers-reduced-motion, o texto aparece direto.
 */
export function Declassify() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const items = Array.from(document.querySelectorAll<HTMLElement>(".redact:not(.is-revealed)"))
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-revealed"))
      return
    }
    root.setAttribute("data-redact-ready", "")

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          const delay = Number(el.dataset.delay ?? 450)
          window.setTimeout(() => el.classList.add("is-revealed"), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.6 },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
