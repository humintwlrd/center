import type { Metadata } from "next"
import Link from "next/link"

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
        title="Categorias."
        lede="Os artigos do Mundo da HUMINT organizados por área de conhecimento."
        breadcrumbs={[{ label: "Categorias", href: "/categorias" }]}
      />
      <section className="border-t border-line bg-snow text-ink" aria-label="Lista de categorias">
        <div className="container-site py-14 md:py-20">
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((category) => (
              <li key={category.slug} className="border-t-2 border-ink">
                <Link href={`/artigos?categoria=${category.slug}`} className="group flex h-full flex-col py-6">
                  <span className="font-expanded text-heading font-extrabold transition-colors group-hover:text-signal">
                    {category.name}
                  </span>
                  <span className="mt-2 flex-1 leading-relaxed text-ink-2 line-clamp-3">{category.description}</span>
                  <span className="mt-4 text-sm text-ink-3">
                    {category.count > 0 ? `${category.count} ${category.count === 1 ? "texto" : "textos"}` : "Em desenvolvimento"}
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
