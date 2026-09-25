import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CreditCard } from "lucide-react"
import type { Product } from "@/lib/products"

type Props = {
  product: Product
  priority?: boolean
}

/** Divide "12x de R$ 19,65" em rótulo ("12x de") e valor ("R$ 19,65"). */
export function splitParcelado(parcelado: string) {
  if (!parcelado.includes(" de ")) return { label: "", value: parcelado }
  const [first, ...rest] = parcelado.split(" de ")
  return { label: `${first} de`, value: rest.join(" de ") }
}

export function ProductCard({ product, priority }: Props) {
  const { label, value } = splitParcelado(product.parcelado)
  const href = `/academy/${product.id}`

  return (
    <article className="group flex flex-col border border-line bg-paper-strong transition-colors duration-200 hover:border-ink">
      <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-[3/4] overflow-hidden bg-deep">
        <Image
          src={product.image || "/placeholder.svg"}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="media-zoom object-cover"
        />
        <span className="absolute left-3 top-3 bg-ink px-2.5 py-1 font-mono text-[0.625rem] font-medium uppercase tracking-[0.16em] text-paper">
          {product.tipo}
        </span>
        {product.badge && (
          <span className="absolute right-3 top-3 bg-brand px-2.5 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-on-brand">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-display-sm font-medium text-ink">
          <Link href={href} className="transition-colors hover:text-brand">
            {product.nome}
          </Link>
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted line-clamp-3">{product.descricao}</p>

        <div className="mt-auto pt-6">
          <div className="border-t border-line pt-5">
            <p className="flex items-baseline gap-2">
              {label && (
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
                  {label}
                </span>
              )}
              <span className="font-display text-3xl font-medium leading-none text-ink">{value}</span>
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
              <CreditCard className="h-3.5 w-3.5" aria-hidden /> Cartão · Pix
            </p>
          </div>

          <a
            href={product.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-5 w-full"
          >
            Comprar agora
            <ArrowUpRight aria-hidden />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
          <Link href={href} className="link-arrow mt-4">
            Ver detalhes
            <ArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  )
}
