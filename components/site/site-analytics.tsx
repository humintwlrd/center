"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"
import { CONSENT_EVENT, readConsent, type ConsentValue } from "@/lib/consent"

/** Vercel Analytics, só quando o visitante não recusou a medição. */
export function SiteAnalytics() {
  const [consent, setConsent] = useState<ConsentValue | null | undefined>(undefined)

  useEffect(() => {
    setConsent(readConsent())
    const onChange = (e: Event) => setConsent((e as CustomEvent<ConsentValue>).detail)
    window.addEventListener(CONSENT_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_EVENT, onChange)
  }, [])

  if (consent === undefined || consent === "essential") return null
  return <Analytics />
}
