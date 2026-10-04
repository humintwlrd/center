import type { Product } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { SectionHeading } from "@/components/site/section-heading"

type Props = {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  items: Product[]
  priorityFirst?: boolean
}

/** Grade de produtos com filetes de 1px entre as células (grade da referência). */
export function ProductGrid({ id, eyebrow, title, subtitle, items, priorityFirst }: Props) {
  if (items.length === 0) return null
  return (
    <div className="container-site">
      <SectionHeading id={id} eyebrow={eyebrow} title={title} description={subtitle} />
      <div className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product, i) => (
          <ProductCard key={product.id} product={product} priority={Boolean(priorityFirst) && i === 0} />
        ))}
      </div>
    </div>
  )
}
