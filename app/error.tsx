"use client"

import Link from "next/link"
import { useEffect } from "react"
import { ChevronRight, RotateCcw } from "lucide-react"
import { DotMatrix } from "@/components/site/dot-matrix"
import { terrainPattern } from "@/lib/dot-patterns"


export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="night relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 w-[150%] max-w-none sm:w-full lg:w-[70%]">
        <DotMatrix grid={terrainPattern(64, 30)} tone="dark" twinkle={18} fill={0.6} />
      </div>
      <div className="container-site relative py-28 pb-56 md:py-40 lg:pb-40">
        <h1 className="max-w-[16ch] text-mega">Algo saiu do protocolo.</h1>
        <p className="mt-8 max-w-[50ch] text-base text-snow-3 md:text-lg">
          Não conseguimos carregar esta página agora. Tente de novo em alguns segundos; se continuar, avise a equipe.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn btn-signal">
            <RotateCcw aria-hidden />
            Tentar de novo
          </button>
          <Link href="/suporte" className="btn btn-line">
            Falar com o suporte
            <ChevronRight aria-hidden />
          </Link>
        </div>
        {error.digest && <p className="mt-8 text-sm text-mist-2">Código do erro: {error.digest}</p>}
      </div>
    </section>
  )
}
