import type React from "react"
import { ACERVO } from "@/lib/products"

/** URL de checkout (HeroSpark) do Acervo, a mesma do catálogo. */
export const CHECKOUT_URL = ACERVO.checkoutUrl

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
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
