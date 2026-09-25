import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Breadcrumbs } from "@/components/site/breadcrumbs"

type Crumb = { label: string; href: string }

type PageHeaderProps = {
  /** Rótulo de abertura (mono, com marcador verde). */
  eyebrow?: string
  title: ReactNode
  /** Linha fina abaixo do título. */
  lede?: ReactNode
  /** Trilha (sem "Início": o componente adiciona). */
  breadcrumbs?: Crumb[]
  /** "paper" (padrão) ou "deep" (seção escura). */
  tone?: "paper" | "deep"
  /** "lg" para páginas pilar; "md" para institucionais. */
  size?: "lg" | "md"
  /** Ações/metadados logo abaixo da linha fina. */
  children?: ReactNode
  /** Coluna à direita (imagem, índice, destaque). */
  aside?: ReactNode
  className?: string
}

/**
 * Abertura padrão das páginas: trilha, kicker, h1 serifado, linha fina.
 * Sempre alinhada à esquerda; a coluna lateral é opcional.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  breadcrumbs,
  tone = "paper",
  size = "md",
  children,
  aside,
  className,
}: PageHeaderProps) {
  const deep = tone === "deep"

  return (
    <header
      className={cn(
        "border-b",
        deep ? "surface-deep border-line-dark" : "bg-paper border-line",
        className,
      )}
    >
      <div
        className={cn(
          "container-editorial",
          size === "lg" ? "pt-8 pb-14 md:pt-10 md:pb-20" : "pt-8 pb-12 md:pt-10 md:pb-16",
        )}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-10 md:mb-14">
            <Breadcrumbs items={breadcrumbs} tone={tone} />
          </div>
        )}

        <div className={cn("grid gap-10", aside && "lg:grid-cols-12 lg:gap-12 lg:items-end")}>
          <div className={cn(aside ? "lg:col-span-7" : "max-w-4xl")}>
            {eyebrow && <p className="kicker mb-5">{eyebrow}</p>}
            <h1
              className={cn(
                "font-display font-medium",
                size === "lg" ? "text-display-2xl" : "text-display-xl",
                deep ? "text-fog" : "text-ink",
              )}
            >
              {title}
            </h1>
            {lede && (
              <p
                className={cn(
                  "mt-6 max-w-[60ch] text-lede",
                  deep ? "text-fog-muted" : "text-ink-soft",
                )}
              >
                {lede}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>

          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </header>
  )
}
