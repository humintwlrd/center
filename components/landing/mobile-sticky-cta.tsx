"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { CHECKOUT_URL } from "@/components/landing/access-button"
import { ACERVO } from "@/lib/products"

/** Barra de compra fixa no celular: aparece depois da abertura e some perto da oferta. */
export function MobileStickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const trigger = document.getElementById("problema")
      const offer = document.getElementById("oferta")
      const triggerTop = trigger ? trigger.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY
      const offerTop = offer ? offer.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY
      setShow(y > triggerTop - 120 && y < offerTop - 240)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 border-t border-line bg-snow px-4 py-2.5">
        <div className="min-w-0 flex-1">
          <div className="tabular text-sm leading-tight font-medium text-ink">{ACERVO.parcelado}</div>
          <div className="mt-0.5 truncate text-xs leading-tight text-ink-3">7 dias de garantia · Cartão ou Pix</div>
        </div>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-signal btn-sm shrink-0">
          Quero acessar
          <ArrowUpRight aria-hidden />
          <span className="sr-only">(abre em nova aba)</span>
        </a>
      </div>
    </div>
  )
}
