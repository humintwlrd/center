"use client"

import { ArrowLeft } from "lucide-react"

export function BackButton() {
  function handleBack() {
    // Dentro da área de membros: volta para a página anterior da plataforma.
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back()
    } else {
      // Fallback caso a página tenha sido aberta diretamente, sem histórico.
      window.location.href = "/"
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-humint-bone/60 hover:text-humint-amber transition-colors"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      Voltar para a área de membros
    </button>
  )
}
