import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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
    <article className="group flex flex-col">
      <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-[3/4] overflow-hidden bg-night">
        <Image
          src={product.image || "/placeholder.svg"}
          alt=""
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="media-zoom object-cover"
        />
        {product.badge && (
          <span className="absolute left-0 top-4 bg-snow px-3 py-1.5 text-sm font-bold text-ink">
            {product.badge}
          </span>
        )}
      </Link>

      <h3 className="mt-6 font-expanded text-heading font-extrabold text-tone">
        <Link href={href} className="transition-colors hover:text-signal">
          {product.nome}
        </Link>
      </h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-tone-2 line-clamp-3">{product.descricao}</p>

      <div className="mt-auto pt-6">
        <p className="tabular text-tone">
          {label && <span className="text-tone-2">{label} </span>}
          <span className="whitespace-nowrap font-expanded text-2xl font-extrabold">{value}</span>
        </p>
        <p className="mt-1 text-sm text-tone-3">{product.tipo} · Cartão ou Pix</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-signal">
            Comprar agora
            <ArrowUpRight aria-hidden />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
          <Link href={href} className="link-more">
            Ver detalhes
            <ArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  )
}
