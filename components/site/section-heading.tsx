import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  href?: string
  linkLabel?: string
  /** Nível do título (padrão h2). */
  as?: "h2" | "h3"
  className?: string
}

/**
 * Cabeçalho de seção com filete grosso no topo (padrão de jornal).
 * Herda o tom da superfície (surface-deep ajusta cores sozinho).
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Ver tudo",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("rule-top mb-8 pt-4 md:mb-10", className)}>
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          {eyebrow && <p className="eyebrow-brand mb-2">{eyebrow}</p>}
          <Tag id={id} className="font-display text-display-md font-medium">
            {title}
          </Tag>
          {description && (
            <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-tone-muted">
              {description}
            </p>
          )}
        </div>
        {href && (
          <Link href={href} className="link-arrow mt-1 hidden shrink-0 sm:inline-flex">
            {linkLabel}
            <ArrowRight aria-hidden />
          </Link>
        )}
      </div>
    </header>
  )
}
