/**
 * Consentimento de cookies, guardado no navegador pelo banner.
 * "essential" desliga a medição de audiência (Vercel Analytics) e o pixel de
 * anúncios (Utmify/Meta na /pv). Sem escolha registrada, nada é bloqueado.
 */
export const CONSENT_KEY = "mh:cookie-consent"
export const CONSENT_EVENT = "mh:consent-change"

export type ConsentValue = "all" | "essential"

export function readConsent(): ConsentValue | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const value = JSON.parse(raw)?.value
    return value === "all" || value === "essential" ? value : null
  } catch {
    return null
  }
}

export function saveConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, at: new Date().toISOString() }))
  } catch {
    // navegação privada ou armazenamento bloqueado: a escolha vale só para esta visita
  }
  window.dispatchEvent(new CustomEvent<ConsentValue>(CONSENT_EVENT, { detail: value }))
}
