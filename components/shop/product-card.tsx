import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CreditCard } from "lucide-react"
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
        "group flex flex-col bg-paper-strong transition-all duration-300 border hover:-translate-y-1",
        isFeatured
          ? "border-gold shadow-[0_1px_0_0_var(--color-gold)] hover:shadow-[0_12px_36px_-12px_rgba(217,165,35,0.55)]"
          : "border-line hover:border-gold/60 hover:shadow-[0_12px_32px_-16px_rgba(217,165,35,0.4)]",
      ].join(" ")}
    >
      {/* Capa real do produto (object-contain sobre fundo escuro para exibir o pôster inteiro) */}
      <div className="relative aspect-[3/4] overflow-hidden bg-deep">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 inline-block bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
          {product.tipo}
        </span>
        {product.badge && (
          <span
            className="absolute right-3 top-3 inline-block bg-gold px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
            style={{ color: "var(--color-on-gold)" }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-balance text-ink">
          {product.nome}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-2">
          {product.descricao}
        </p>

        {/* Preço parcelado + compra — empurrado para a base do card */}
        <div className="mt-auto pt-6">
          <p className="font-display text-2xl font-bold text-gold-active">{product.parcelado}</p>
          <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
            <CreditCard className="h-3.5 w-3.5" aria-hidden /> Cartão · Pix
          </p>

          <a
            href={product.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-gold px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-on-gold transition-colors hover:bg-gold-hover focus-visible:outline-2"
          >
            Comprar agora
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>

          <Link
            href={`/academy/${product.id}`}
            className="mt-3 block text-center font-mono text-[11px] uppercase tracking-widest text-ink-muted underline-offset-4 hover:text-gold-active hover:underline"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  )
}
