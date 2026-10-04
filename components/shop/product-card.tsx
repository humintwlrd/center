import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/products"
import { Roll } from "@/components/site/roll"

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

/** Produto como célula da grade (cartão da referência): capa em painel, texto, preço parcelado e ações. */
export function ProductCard({ product, priority }: Props) {
  const { label, value } = splitParcelado(product.parcelado)
  const href = `/academy/${product.id}`

  return (
    <article className="group flex flex-col border-r border-b border-tone bg-snow">
      <div className="relative border-b border-tone bg-snow-2 p-6">
        <Link href={href} tabIndex={-1} aria-hidden className="relative mx-auto block aspect-[3/4] w-full max-w-[280px] overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt=""
            fill
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
            priority={priority}
            className="media-zoom object-cover"
          />
        </Link>
        {product.badge && (
          <span className="absolute top-0 left-0 border-r border-b border-tone bg-snow px-3 py-2 text-sm font-medium text-ink uppercase">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="subtitle">{product.tipo}</p>
        <h3 className="mt-2 text-xl leading-[1.25] text-tone">
          <Link href={href} className="transition-colors hover:text-ink-2">
            {product.nome}
          </Link>
        </h3>
        <p className="mt-3 text-[0.9375rem] text-tone-2 line-clamp-3">{product.descricao}</p>

        <div className="mt-auto pt-6">
          <p className="tabular text-tone">
            {label && <span className="text-tone-2">{label} </span>}
            <span className="text-2xl font-medium whitespace-nowrap tracking-[-0.03em]">{value}</span>
          </p>
          <p className="mt-1 text-sm text-tone-3">Cartão ou Pix</p>
          <div className="mt-5 flex flex-col gap-2">
            <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-signal btn-sm w-full">
              <Roll>Comprar agora</Roll>
              <ArrowUpRight aria-hidden />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <Link href={href} className="btn btn-line btn-sm w-full">
              <Roll>Ver detalhes</Roll>
              <ChevronRight aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
