"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

/**
 * Carrega os scripts da Utmify (UTMs + Pixel) somente no domínio oficial.
 *
 * A lista positiva evita que novos domínios de preview (como *.v0.build) ou
 * ambientes incorporados executem o pixel. O sandbox desses ambientes bloqueia
 * as consultas externas de IP da Utmify e produz erros "Failed to fetch".
 */
export function UtmifyScripts() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const productionHosts = new Set([
      "mundodahumint.com",
      "www.mundodahumint.com",
      "humint.click",
      "www.humint.click",
    ])
    const isTopLevelWindow = window.self === window.top

    if (productionHosts.has(window.location.hostname) && isTopLevelWindow) {
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
