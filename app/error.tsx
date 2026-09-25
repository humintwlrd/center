"use client"

import Link from "next/link"
import { useEffect } from "react"
import { RotateCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="bg-paper">
      <div className="container-editorial py-24 md:py-36">
        <p className="kicker">Falha inesperada</p>
        <h1 className="mt-6 max-w-3xl font-display text-display-2xl font-medium text-ink">
          Algo saiu do protocolo.
        </h1>
        <p className="mt-6 max-w-[52ch] text-lede text-ink-soft">
          Não conseguimos carregar esta página agora. Tente novamente em alguns segundos; se o problema continuar,
          avise a equipe.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn btn-ink btn-lg">
            <RotateCcw aria-hidden />
            Tentar novamente
          </button>
          <Link href="/suporte" className="btn btn-outline btn-lg">
            Falar com o suporte
          </Link>
        </div>
        {error.digest && (
          <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
            Código: {error.digest}
          </p>
        )}
      </div>
    </section>
  )
}
