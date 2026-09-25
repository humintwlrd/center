import Link from "next/link"
import { breadcrumbSchema } from "@/lib/schema"
import { cn } from "@/lib/utils"
import { JsonLd } from "./json-ld"

type Crumb = { label: string; href: string }

type BreadcrumbsProps = {
  /** Itens da trilha, sem "Início" (adicionado aqui). */
  items: Crumb[]
  tone?: "paper" | "deep"
  /** Desliga o JSON-LD quando a página já publica o próprio BreadcrumbList. */
  schema?: boolean
}

export function Breadcrumbs({ items, tone = "paper", schema = true }: BreadcrumbsProps) {
  const rest = items.filter((c) => c.href !== "/")
  const full: Crumb[] = [{ label: "Início", href: "/" }, ...rest]
  const deep = tone === "deep"

  return (
    <>
      <nav
        aria-label="Trilha de navegação"
        className={cn(
          "font-mono text-[0.6875rem] uppercase tracking-[0.14em]",
          deep ? "text-fog-muted" : "text-ink-muted",
        )}
      >
        <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          {full.map((c, i) => {
            const isLast = i === full.length - 1
            return (
              <li key={c.href + i} className="flex items-center gap-2.5">
                {isLast ? (
                  <span aria-current="page" className={cn("line-clamp-1", deep ? "text-fog" : "text-ink")}>
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={c.href}
                      className={cn("transition-colors", deep ? "hover:text-fog" : "hover:text-ink")}
                    >
                      {c.label}
                    </Link>
                    <span aria-hidden className={deep ? "text-line-dark" : "text-line-strong"}>
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
