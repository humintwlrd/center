import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Product } from "@/lib/products"

type Props = {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority }: Props) {
  const isFeatured = Boolean(product.destaque)

  return (
    <article
      className={[
        "group flex flex-col bg-paper-strong transition-all duration-300",
        "border hover:-translate-y-1",
        isFeatured
          ? "border-gold shadow-[0_1px_0_0_var(--color-gold)] hover:shadow-[0_8px_30px_-12px_rgba(217,165,35,0.45)]"
          : "border-line hover:border-line-strong hover:shadow-[0_8px_30px_-16px_rgba(17,17,17,0.25)]",
      ].join(" ")}
    >
      {/* Capa — trocar pela capa real quando disponível */}
      <div className="relative aspect-[16/9] overflow-hidden bg-paper-deep">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Badge de tipo */}
        <span className="absolute left-3 top-3 inline-block bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
          {product.tipo}
        </span>
        {/* Badge premium */}
        {isFeatured && (
          <span
            className="absolute right-3 top-3 inline-block bg-gold px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest"
            style={{ color: "var(--color-on-gold)" }}
          >
            Mais completo
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-balance text-ink">
          {product.nome}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">
          {product.descricao}
        </p>

        {/* Destaques / módulos */}
        {product.destaques && product.destaques.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {product.destaques.slice(0, 4).map((d) => (
              <li
                key={d}
                className="border border-line bg-paper px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-soft"
              >
                {d}
              </li>
            ))}
            {product.destaques.length > 4 && (
              <li className="px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                +{product.destaques.length - 4}
              </li>
            )}
          </ul>
        )}

        {/* Preço — empurrado para a base do card */}
        <div className="mt-auto pt-6">
          <div className="flex items-baseline gap-2">
            {product.precoDe && (
              <span className="text-sm text-ink-muted line-through">{product.precoDe}</span>
            )}
            <span className="font-display text-2xl font-bold text-gold-active">
              {product.preco}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-ink-muted">{product.parcelamento}</p>

          {/* CTA principal */}
          <a
            href={product.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-gold px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-on-gold transition-colors hover:bg-gold-hover focus-visible:outline-2"
          >
            Quero acessar
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>

          {/* Link secundário */}
          <a
            href={product.detalhesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center font-mono text-[11px] uppercase tracking-widest text-ink-muted underline-offset-4 hover:text-gold-active hover:underline"
          >
            Ver detalhes
          </a>
        </div>
      </div>
    </article>
  )
}
