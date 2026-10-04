import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SplitSectionProps = {
  id?: string
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  children: ReactNode
  tone?: "snow" | "snow-2" | "night"
  sticky?: boolean
  className?: string
}

/** Título à esquerda, conteúdo à direita, separados por filete (célula dividida da referência). */
export function SplitSection({ id, eyebrow, title, intro, children, tone = "snow", sticky = false, className }: SplitSectionProps) {
  const headingId = id ? `${id}-title` : undefined
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(tone === "night" ? "night" : tone === "snow-2" ? "bg-snow-2" : "bg-snow", className)}
    >
      <div className="container-site py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className={cn(sticky && "lg:sticky lg:top-28")}>
              {eyebrow && <p className="subtitle mb-2">{eyebrow}</p>}
              <h2 id={headingId} className="text-title text-tone">
                {title}
              </h2>
              {intro && <p className="mt-4 max-w-[44ch] text-base text-tone-2 md:text-lg">{intro}</p>}
            </div>
          </div>
          <div className="min-w-0 lg:col-span-7">{children}</div>
        </div>
      </div>
    </section>
  )
}
