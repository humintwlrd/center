import Link from "next/link"
import { breadcrumbSchema } from "@/lib/schema"
import { cn } from "@/lib/utils"
import { JsonLd } from "./json-ld"

type Crumb = { label: string; href: string }

type BreadcrumbsProps = {
  items: Crumb[]
  tone?: "snow" | "night"
  schema?: boolean
}

/** Trilha em caixa-alta com barras, no lugar do rótulo acima do título (padrão da referência). */
export function Breadcrumbs({ items, tone = "snow", schema = true }: BreadcrumbsProps) {
  const full: Crumb[] = [{ label: "Início", href: "/" }, ...items.filter((c) => c.href !== "/")]
  const night = tone === "night"
  return (
    <>
      <nav aria-label="Trilha de navegação" className="text-sm font-medium uppercase">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {full.map((c, i) => {
            const isLast = i === full.length - 1
            return (
              <li key={c.href + i} className="flex min-w-0 items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className={cn("line-clamp-1", night ? "text-mist" : "text-ink-2")}>
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={c.href}
                      className={cn("transition-colors", night ? "text-mist-2 hover:text-white" : "text-ink-4 hover:text-ink")}
                    >
                      {c.label}
                    </Link>
                    <span className={night ? "text-line-night" : "text-line"} aria-hidden>
                      /
                    </span>
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
