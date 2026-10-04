import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Roll } from "@/components/site/roll"

type SectionHeadingProps = {
  id?: string
  /** Rótulo curto em caixa-alta acima do título (padrão da referência). */
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  href?: string
  linkLabel?: string
  as?: "h2" | "h3"
  align?: "left" | "center"
  className?: string
}

/** Título de seção da referência: rótulo, título 500 e descrição à esquerda; botão escuro à direita. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Ver tudo",
  as: Tag = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  const center = align === "center"
  return (
    <header
      className={cn(
        "mb-8 flex flex-col gap-6",
        center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("min-w-0 max-w-[640px]", center && "mx-auto")}>
        {eyebrow && <p className="subtitle mb-2">{eyebrow}</p>}
        <Tag id={id} className="text-title text-tone">
          {title}
        </Tag>
        {description && <p className="mt-3 max-w-[60ch] text-base text-tone-2">{description}</p>}
      </div>
      {href && (
        <Link href={href} className="btn btn-signal shrink-0 self-start md:self-auto">
          <Roll>{linkLabel}</Roll>
          <ChevronRight aria-hidden />
        </Link>
      )}
    </header>
  )
}
