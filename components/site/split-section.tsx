import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SplitSectionProps = {
  id?: string
  title: ReactNode
  intro?: ReactNode
  children: ReactNode
  tone?: "snow" | "snow-2" | "night"
  sticky?: boolean
  className?: string
}

/** Título à esquerda (5/12), conteúdo à direita (7/12). */
export function SplitSection({ id, title, intro, children, tone = "snow", sticky = false, className }: SplitSectionProps) {
  const headingId = id ? `${id}-title` : undefined
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(tone === "night" ? "night" : tone === "snow-2" ? "bg-snow-2 text-ink" : "bg-snow text-ink", className)}
    >
      <div className="container-site grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className={cn(sticky && "lg:sticky lg:top-28")}>
            <h2 id={headingId} className="font-expanded text-title font-extrabold text-tone">
              {title}
            </h2>
            {intro && <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-tone-2">{intro}</p>}
          </div>
        </div>
        <div className="min-w-0 lg:col-span-7">{children}</div>
      </div>
    </section>
  )
}
