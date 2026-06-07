"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { CHECKOUT_URL } from "@/components/access-button"

export function MobileStickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const trigger = document.getElementById("para-quem")
      const offer = document.getElementById("oferta")
      const triggerTop = trigger
        ? trigger.getBoundingClientRect().top + window.scrollY
        : Number.POSITIVE_INFINITY
      const offerTop = offer ? offer.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY
      // Aparece a partir da seção "Para quem" e se esconde ao chegar perto da oferta (que já tem CTA próprio)
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
      <div className="bg-humint-charcoal/97 backdrop-blur-xl border-t border-humint-amber/30 px-3 py-2.5 flex items-center gap-2.5 shadow-[0_-12px_32px_rgba(0,0,0,0.4)]">
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-humint-amber/85 leading-tight">
            12× R$ 39,20
          </div>
          <div className="text-[11px] text-humint-bone/65 truncate leading-tight mt-0.5">
            7 dias de garantia
          </div>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 bg-humint-amber text-humint-ink font-mono text-[11px] tracking-[0.16em] uppercase font-bold px-4 py-3 min-h-[44px] active:bg-humint-bone"
        >
          Acessar
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
