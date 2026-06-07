import type React from "react"

/** URL de checkout (HeroSpark) — compra liberada. */
export const CHECKOUT_URL = "https://pay.herospark.com/acervo-tatico-de-inteligencia-humana-525712"

/**
 * Botão de acesso que leva direto ao checkout.
 * Mantém o mesmo visual dos antigos CTAs, mas agora navega para o pagamento.
 */
export function AccessButton({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <a href={CHECKOUT_URL} className={className}>
      {children}
    </a>
  )
}
