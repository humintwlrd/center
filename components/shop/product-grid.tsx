import { PRODUCTS } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"

export function ProductGrid() {
  return (
    <section aria-labelledby="catalogo-title" className="container-editorial py-12 sm:py-16">
      <div className="mb-8 flex items-end justify-between gap-4 hairline-b pb-4">
        <div>
          <p className="eyebrow-gold mb-2">Catálogo</p>
          <h2 id="catalogo-title" className="font-display text-2xl sm:text-3xl font-semibold text-ink">
            Cursos e materiais
          </h2>
        </div>
        <p className="hidden sm:block font-mono text-[11px] uppercase tracking-widest text-ink-muted">
          Pagamento · Cartão e Pix
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.id} product={product} priority={i === 0} />
        ))}
      </div>
    </section>
  )
}
