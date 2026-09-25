"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const STORAGE_KEY = "mh:cookie-consent"

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setShow(true)
    } catch {
      // ignore
    }
  }, [])

  function setConsent(value: "all" | "essential") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, at: new Date().toISOString() }))
    } catch {
      // ignore
    }
    setShow(false)
  }

  if (!show) return null

  return (
    <div role="dialog" aria-label="Aviso de cookies" className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="night mx-auto flex max-w-4xl flex-col gap-4 border border-line-night p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6">
        <p className="flex-1 text-[0.9375rem] leading-relaxed text-mist">
          Usamos cookies essenciais para o site funcionar e, se você permitir, cookies opcionais para entender a
          leitura.{" "}
          <Link href="/politica-de-privacidade" className="text-white underline decoration-signal decoration-2">
            Política de privacidade
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={() => setConsent("essential")} className="btn btn-line btn-sm">
            Só essenciais
          </button>
          <button type="button" onClick={() => setConsent("all")} className="btn btn-signal btn-sm">
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  )
}
