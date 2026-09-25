"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const STORAGE_KEY = "mh:cookie-consent"

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) setShow(true)
    } catch {
      // ignore
    }
  }, [])

  function setConsent(value: "all" | "essential") {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, at: new Date().toISOString() }),
      )
    } catch {
      // ignore
    }
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4"
    >
      <div className="surface-deep mx-auto max-w-4xl border border-line-dark">
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6">
          <p className="flex-1 text-sm leading-relaxed text-fog-muted">
            <span className="text-fog">Usamos cookies essenciais</span> para o funcionamento
            do site. Cookies opcionais ajudam a entender a leitura e melhorar conteúdos. Você
            decide.{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-fog underline decoration-brand-bright underline-offset-4 hover:text-brand-bright"
            >
              Política de privacidade
            </Link>
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setConsent("essential")}
              className="btn btn-outline btn-sm"
            >
              Apenas essenciais
            </button>
            <button
              type="button"
              onClick={() => setConsent("all")}
              className="btn btn-primary btn-sm"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
