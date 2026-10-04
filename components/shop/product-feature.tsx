import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/products"
import { splitParcelado } from "@/components/shop/product-card"
import { Roll } from "@/components/site/roll"
import { cn } from "@/lib/utils"

type Props = {
  product: Product
  tone?: "night" | "snow"
  priority?: boolean
  className?: string
}

/** Curso em destaque: painel de capa à esquerda, oferta à direita (painel de abas da referência, V2). */
export function ProductFeature({ product, tone = "snow", priority, className }: Props) {
  const { label, value } = splitParcelado(product.parcelado)
  const href = `/academy/${product.id}`
  const night = tone === "night"

  return (
    <article className={cn("group grid border-r border-b border-tone md:grid-cols-12", night ? "night-2" : "bg-snow", className)}>
      <div className="relative border-b border-tone bg-cell p-6 md:col-span-5 md:border-r md:border-b-0 md:p-10">
        <Link href={href} tabIndex={-1} aria-hidden className="relative mx-auto block aspect-[3/4] w-full max-w-[360px] overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt=""
            fill
            sizes="(min-width: 768px) 360px, 90vw"
            priority={priority}
            className="media-zoom object-cover object-top"
          />
        </Link>
        {product.badge && (
          <span className="absolute top-0 left-0 border-r border-b border-tone bg-snow px-3 py-2 text-sm font-medium text-ink uppercase">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col px-6 py-8 md:col-span-7 md:px-12 md:py-12">
        <p className="subtitle">{product.tipo}</p>
        <h3 className="mt-2 text-title text-tone">
          <Link href={href} className="transition-colors hover:text-tone-2">
            {product.nome}
          </Link>
        </h3>
        <p className="mt-4 max-w-[58ch] text-base text-tone-2">{product.descricao}</p>

        {product.destaques && product.destaques.length > 0 && (
          <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {product.destaques.map((d) => (
              <li key={d} className="flex items-center gap-2 text-base text-tone-2">
                <Check className="size-4 shrink-0 text-tone" aria-hidden />
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-1 flex-col justify-end gap-6">
          <p className="tabular text-tone">
            {label && <span className="text-tone-2">{label} </span>}
            <span className="text-title whitespace-nowrap">{value}</span>
            <span className="mt-1 block text-sm text-tone-3">Cartão ou Pix · Acesso imediato</span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-signal">
              <Roll>Comprar agora</Roll>
              <ArrowUpRight aria-hidden />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <Link href={href} className="btn btn-line">
              <Roll>Ver detalhes</Roll>
              <ChevronRight aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
