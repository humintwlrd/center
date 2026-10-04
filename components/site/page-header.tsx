import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Breadcrumbs } from "@/components/site/breadcrumbs"

type Crumb = { label: string; href: string }

type PageHeaderProps = {
  title: ReactNode
  /** Linha fina abaixo do título. */
  lede?: ReactNode
  /** Trilha (sem "Início": o componente adiciona). Fica no lugar do rótulo acima do título. */
  breadcrumbs?: Crumb[]
  /** "snow" (claro) ou "night" (faixa escura). */
  tone?: "snow" | "night"
  size?: "lg" | "md"
  /** Ações logo abaixo da linha fina. */
  children?: ReactNode
  /** Coluna à direita (imagem, destaque). */
  aside?: ReactNode
  className?: string
}

/** Abertura das páginas no padrão da referência: trilha em caixa-alta, título 500, linha fina cinza. */
export function PageHeader({
  title,
  lede,
  breadcrumbs,
  tone = "snow",
  size = "md",
  children,
  aside,
  className,
}: PageHeaderProps) {
  const night = tone === "night"
  return (
    <header className={cn(night ? "night" : "bg-snow", "relative overflow-hidden", className)}>
      <div className={cn("container-site", size === "lg" ? "pt-12 pb-16 md:pt-20 md:pb-24" : "pt-10 pb-14 md:pt-16 md:pb-20")}>
        <div className={cn("grid gap-10", aside && "lg:grid-cols-2 lg:items-center lg:gap-[100px]")}>
          <div className={cn("min-w-0", !aside && "max-w-[760px]")}>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="mb-4">
                <Breadcrumbs items={breadcrumbs} tone={night ? "night" : "snow"} />
              </div>
            )}
            <h1 className={cn("text-tone", size === "lg" ? "text-mega" : "text-display")}>{title}</h1>
            {lede && <p className="mt-4 max-w-[60ch] text-base text-tone-2 md:text-lg">{lede}</p>}
            {children && <div className="mt-6">{children}</div>}
          </div>
          {aside && <div className="min-w-0">{aside}</div>}
        </div>
      </div>
    </header>
  )
}
