"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { CHECKOUT_URL } from "@/components/landing/access-button"
import { ACERVO } from "@/lib/products"

export function MobileStickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const trigger = document.getElementById("diagnostico")
      const offer = document.getElementById("oferta")
      const triggerTop = trigger
        ? trigger.getBoundingClientRect().top + window.scrollY
        : Number.POSITIVE_INFINITY
      const offerTop = offer ? offer.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY
      // Aparece depois da abertura e se esconde ao chegar perto da oferta (que já tem CTA próprio)
      setShow(y > triggerTop - 120 && y < offerTop - 240)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 border-t border-line-night bg-night px-4 py-2.5">
        <div className="flex-1 min-w-0">
          <div className="tabular text-sm font-bold leading-tight text-white">{ACERVO.parcelado.replace("x de ", "× ")}</div>
          <div className="mt-0.5 truncate text-xs leading-tight text-mist">7 dias de garantia</div>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-signal btn-sm shrink-0"
        >
          Acessar
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
