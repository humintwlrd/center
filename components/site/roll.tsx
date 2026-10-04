import type { ReactNode } from "react"

/**
 * Texto que rola para cima no hover do link/botão pai (interação da referência).
 * A cópia de baixo é só visual (aria-hidden), então leitores de tela leem uma vez.
 */
export function Roll({ children }: { children: ReactNode }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  )
}
