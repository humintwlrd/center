"use client"

import { useEffect } from "react"

export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))

    // Fallback: se o usuário prefere menos movimento ou não há suporte a
    // IntersectionObserver, revela tudo imediatamente.
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    )
    els.forEach((el) => io.observe(el))

    // Rede de segurança: se por qualquer motivo o observer não disparar
    // (ex.: dentro de um iframe de preview), revela tudo após um curto atraso
    // para garantir que o conteúdo nunca fique invisível.
    const safety = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in"))
    }, 1200)

    return () => {
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [])
  return null
}
