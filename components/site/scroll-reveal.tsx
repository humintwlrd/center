"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    __revealReady?: boolean
  }
}

/**
 * Revela elementos [data-reveal] quando entram na tela (blur + subida, como na referência).
 * Sem JS nada fica escondido: o CSS só oculta sob html.js, marcado no <head> do layout.
 */
export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    window.__revealReady = true
    const root = document.documentElement
    if (!root.classList.contains("js")) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in")
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    )

    const observe = () => {
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el))
    }
    observe()

    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [pathname])

  return null
}
