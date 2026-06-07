"use client"

import { ArrowLeft } from "lucide-react"

function goBack() {
  // Dentro da área de membros: volta para a página anterior da plataforma.
  if (typeof window !== "undefined" && window.history.length > 1) {
    window.history.back()
  } else {
    // Fallback caso a página tenha sido aberta diretamente, sem histórico.
    window.location.href = "/"
  }
}

type BackButtonProps = {
  variant?: "compact" | "solid"
  label?: string
}

export function BackButton({ variant = "compact", label }: BackButtonProps) {
  if (variant === "solid") {
    return (
      <button
        type="button"
        onClick={goBack}
        className="inline-flex items-center gap-2 bg-humint-amber text-humint-ink font-mono text-[11px] tracking-[0.16em] uppercase font-bold px-5 py-3.5 hover:bg-humint-bone transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        {label ?? "Voltar para a área de membros"}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.16em] uppercase text-humint-bone/60 hover:text-humint-amber transition-colors"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      {label ?? "Voltar"}
    </button>
  )
}
