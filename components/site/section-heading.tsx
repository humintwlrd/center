import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  id?: string
  title: ReactNode
  description?: ReactNode
  href?: string
  linkLabel?: string
  as?: "h2" | "h3"
  className?: string
}

/** Título de seção: o próprio título carrega o peso, sem rótulo nem filete. */
export function SectionHeading({
  id,
  title,
  description,
  href,
  linkLabel = "Ver tudo",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between", className)}>
      <div className="min-w-0 max-w-3xl">
        <Tag id={id} className="font-expanded text-title font-extrabold text-tone">
          {title}
        </Tag>
        {description && <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-tone-2">{description}</p>}
      </div>
      {href && (
        <Link href={href} className="link-more shrink-0">
          {linkLabel}
          <ArrowRight aria-hidden />
        </Link>
      )}
    </header>
  )
}
