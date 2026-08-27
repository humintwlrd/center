"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

/**
 * Carrega os scripts da Utmify (UTMs + Pixel) apenas no domínio de produção.
 *
 * Dentro do iframe de preview do v0 (domínios *.vusercontent.net), o sandbox
 * bloqueia as requisições externas do pixel.js, gerando erros "Failed to fetch".
 * Isso é apenas ruído de ambiente — não afeta a produção. Ao restringir o
 * carregamento ao host real, mantemos o rastreamento intacto em produção e
 * eliminamos os erros no preview.
 */
export function UtmifyScripts() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const host = window.location.hostname
    const isPreview =
      host.endsWith("vusercontent.net") || host === "localhost" || host === "127.0.0.1"
    if (!isPreview) {
      setEnabled(true)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* Utmify — rastreamento de UTMs em todas as páginas */}
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        strategy="afterInteractive"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
      />
      {/* Utmify — Pixel Meta: define o pixelId antes de carregar o pixel.js */}
      <Script id="utmify-pixel-id" strategy="afterInteractive">
        {`window.pixelId = "6a2224af55ecba8492e4d111";`}
      </Script>
      <Script
        id="utmify-pixel"
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        strategy="afterInteractive"
        async
        defer
      />
    </>
  )
}
