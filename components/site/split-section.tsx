import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SplitSectionProps = {
  id?: string
  eyebrow?: string
  title: ReactNode
  /** Texto curto abaixo do título, na coluna esquerda. */
  intro?: ReactNode
  children: ReactNode
  tone?: "paper" | "strong" | "deep"
  /** Mantém o título visível enquanto a coluna direita rola. */
  sticky?: boolean
  className?: string
}

/**
 * Seção editorial em duas colunas: rótulo + título à esquerda (4/12),
 * conteúdo à direita (8/12). Padrão das páginas institucionais.
 */
export function SplitSection({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "paper",
  sticky = false,
  className,
}: SplitSectionProps) {
  const headingId = id ? `${id}-title` : undefined
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "border-b",
        tone === "deep"
          ? "surface-deep border-line-dark"
          : tone === "strong"
            ? "border-line bg-paper-strong"
            : "border-line bg-paper",
        className,
      )}
    >
      <div className="container-editorial grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className={cn(sticky && "lg:sticky lg:top-28")}>
            {eyebrow && <p className="kicker">{eyebrow}</p>}
            <h2 id={headingId} className="mt-5 font-display text-display-lg font-medium text-tone">
              {title}
            </h2>
            {intro && <p className="mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-tone-muted">{intro}</p>}
          </div>
        </div>
        <div className="min-w-0 lg:col-span-8">{children}</div>
      </div>
    </section>
  )
}
