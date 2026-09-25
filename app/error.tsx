"use client"

import Link from "next/link"
import { useEffect } from "react"
import { RotateCcw } from "lucide-react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="night">
      <div className="container-site py-28 md:py-40">
        <h1 className="max-w-[16ch] font-expanded text-mega font-extrabold">Algo saiu do protocolo.</h1>
        <p className="mt-8 max-w-[50ch] text-lede text-mist">
          Não conseguimos carregar esta página agora. Tente de novo em alguns segundos; se continuar, avise a equipe.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn btn-signal btn-lg">
            <RotateCcw aria-hidden />
            Tentar de novo
          </button>
          <Link href="/suporte" className="btn btn-line btn-lg">
            Falar com o suporte
          </Link>
        </div>
        {error.digest && <p className="mt-8 text-sm text-mist-2">Código do erro: {error.digest}</p>}
      </div>
    </section>
  )
}
