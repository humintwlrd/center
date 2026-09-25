import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Breadcrumbs } from "@/components/site/breadcrumbs"

type Crumb = { label: string; href: string }

type PageHeaderProps = {
  title: ReactNode
  /** Linha fina abaixo do título. */
  lede?: ReactNode
  /** Trilha (sem "Início": o componente adiciona). */
  breadcrumbs?: Crumb[]
  /** "snow" (papel, leitura) ou "night" (venda). */
  tone?: "snow" | "night"
  size?: "lg" | "md"
  /** Ações logo abaixo da linha fina. */
  children?: ReactNode
  /** Coluna à direita (imagem, destaque). */
  aside?: ReactNode
  className?: string
}

/** Abertura das páginas: trilha, título estendido, linha fina. Sem rótulo acima do título. */
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
    <header className={cn(night ? "night" : "bg-snow text-ink", className)}>
      <div className={cn("container-site", size === "lg" ? "pt-8 pb-16 md:pb-24" : "pt-8 pb-14 md:pb-20")}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-12 md:mb-16">
            <Breadcrumbs items={breadcrumbs} tone={night ? "night" : "snow"} />
          </div>
        )}
        <div className={cn("grid gap-10", aside && "lg:grid-cols-12 lg:items-end lg:gap-14")}>
          <div className={cn("min-w-0", aside ? "lg:col-span-7" : "max-w-5xl")}>
            <h1 className={cn("font-expanded font-extrabold", size === "lg" ? "text-mega" : "text-display")}>
              {title}
            </h1>
            {lede && <p className="mt-6 max-w-[58ch] text-lede text-tone-2 md:mt-8">{lede}</p>}
            {children && <div className="mt-8 md:mt-10">{children}</div>}
          </div>
          {aside && <div className="min-w-0 lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </header>
  )
}
