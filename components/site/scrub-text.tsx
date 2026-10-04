"use client"

import { Fragment, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type ScrubTextProps = {
  text: string
  className?: string
}

/**
 * Parágrafo grande que "acende" letra a letra conforme a rolagem (interação da referência).
 * Um único --p (0..1) é atualizado no contêiner; cada letra compara com o próprio --i.
 * O texto inteiro fica num span sr-only; as letras são só visuais.
 */
export function ScrubText({ text, className }: ScrubTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1.2")
      return
    }
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 quando o topo entra a 85% da tela; 1 quando o fim passa de 45%
      const start = vh * 0.85
      const end = vh * 0.45
      const total = r.height + (start - end)
      const p = Math.min(1.2, Math.max(0, (start - r.top) / total))
      el.style.setProperty("--p", p.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const words = text.split(" ")
  const total = text.replace(/ /g, "").length
  let index = 0

  return (
    <p ref={ref} className={cn("scrub", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, w) => (
          <Fragment key={w}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((ch, c) => {
                const i = index++ / total
                return (
                  <span key={c} className="c" style={{ ["--i" as string]: i.toFixed(4) }}>
                    {ch}
                  </span>
                )
              })}
            </span>
            {w < words.length - 1 && " "}
          </Fragment>
        ))}
      </span>
    </p>
  )
}
