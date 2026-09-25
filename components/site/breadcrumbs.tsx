import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { breadcrumbSchema } from "@/lib/schema"
import { cn } from "@/lib/utils"
import { JsonLd } from "./json-ld"

type Crumb = { label: string; href: string }

type BreadcrumbsProps = {
  items: Crumb[]
  tone?: "snow" | "night"
  schema?: boolean
}

export function Breadcrumbs({ items, tone = "snow", schema = true }: BreadcrumbsProps) {
  const full: Crumb[] = [{ label: "Início", href: "/" }, ...items.filter((c) => c.href !== "/")]
  const night = tone === "night"
  return (
    <>
      <nav aria-label="Trilha de navegação" className={cn("text-sm", night ? "text-mist-2" : "text-ink-3")}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {full.map((c, i) => {
            const isLast = i === full.length - 1
            return (
              <li key={c.href + i} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className={cn("line-clamp-1 font-semibold", night ? "text-mist" : "text-ink-2")}>
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className={cn("transition-colors", night ? "hover:text-white" : "hover:text-ink")}>
                      {c.label}
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      {schema && <JsonLd data={breadcrumbSchema(full)} />}
    </>
  )
}
