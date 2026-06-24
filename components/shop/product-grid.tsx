import type { Product } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  items: Product[]
  priorityFirst?: boolean
}

export function ProductGrid({ eyebrow, title, subtitle, items, priorityFirst }: Props) {
  if (items.length === 0) return null
  return (
    <section aria-label={title} className="container-editorial py-12 sm:py-16">
      <div className="mb-8 hairline-b pb-4">
        {eyebrow && <p className="eyebrow-gold mb-2">{eyebrow}</p>}
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">{title}</h2>
          <p className="hidden shrink-0 sm:block font-mono text-[11px] uppercase tracking-widest text-ink-muted">
            {items.length} {items.length === 1 ? "item" : "itens"}
          </p>
        </div>
        {subtitle && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={Boolean(priorityFirst) && i === 0}
          />
        ))}
      </div>
    </section>
  )
}
