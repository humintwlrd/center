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
        className="btn btn-primary btn-lg"
      >
        <ArrowLeft aria-hidden />
        {label ?? "Voltar para a área de membros"}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-tone-muted transition-colors hover:text-tone"
    >
      <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
      {label ?? "Voltar"}
    </button>
  )
}
