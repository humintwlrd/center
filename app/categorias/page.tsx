import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { pageMetadata } from "@/lib/seo"
import { PageHeader } from "@/components/site/page-header"
import { categories } from "@/lib/content/categories"
import { getArticlesByCategory } from "@/lib/content/articles"

export const metadata: Metadata = pageMetadata({
  title: "Categorias",
  description:
    "Explore os artigos do Mundo da HUMINT organizados por categoria: HUMINT, engenharia social, contrainteligência, OPSEC, psicologia e mais.",
  path: "/categorias",
})

export default function CategoriasPage() {
  const items = categories
    .map((c) => ({ ...c, count: getArticlesByCategory(c.slug).length }))
    .sort((a, b) => b.count - a.count)

  return (
    <>
      <PageHeader
        eyebrow="Navegue por tema"
        title="Categorias."
        lede="Os artigos do Mundo da HUMINT organizados por área de conhecimento."
        breadcrumbs={[{ label: "Categorias", href: "/categorias" }]}
      />

      <section className="bg-paper" aria-label="Lista de categorias">
        <div className="container-editorial py-14 md:py-20">
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {items.map((category, i) => (
              <li key={category.slug} className="bg-paper-strong">
                <Link
                  href={`/artigos?categoria=${category.slug}`}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-paper md:p-7"
                >
                  <span className="flex items-baseline justify-between gap-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      {category.count > 0
                        ? `${category.count} ${category.count === 1 ? "texto" : "textos"}`
                        : "Em desenvolvimento"}
                    </span>
                  </span>
                  <span className="mt-4 font-display text-display-sm font-medium text-ink transition-colors group-hover:text-brand">
                    {category.name}
                  </span>
                  <span className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted line-clamp-3">
                    {category.description}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    {category.count > 0 ? "Ver artigos" : "Acompanhar tema"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
