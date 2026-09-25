import type { Product } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { SectionHeading } from "@/components/site/section-heading"

type Props = {
  id?: string
  title: string
  subtitle?: string
  items: Product[]
  priorityFirst?: boolean
}

export function ProductGrid({ id, title, subtitle, items, priorityFirst }: Props) {
  if (items.length === 0) return null
  return (
    <section aria-labelledby={id} className="container-site py-20 md:py-28">
      <SectionHeading id={id} title={title} description={subtitle} />
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product, i) => (
          <ProductCard key={product.id} product={product} priority={Boolean(priorityFirst) && i === 0} />
        ))}
      </div>
    </section>
  )
}
