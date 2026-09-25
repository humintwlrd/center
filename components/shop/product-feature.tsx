import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import type { Product } from "@/lib/products"
import { splitParcelado } from "@/components/shop/product-card"
import { cn } from "@/lib/utils"

type Props = {
  product: Product
  tone?: "night" | "snow"
  priority?: boolean
}

/** Curso em destaque: capa grande de um lado, oferta do outro. */
export function ProductFeature({ product, tone = "snow", priority }: Props) {
  const { label, value } = splitParcelado(product.parcelado)
  const href = `/academy/${product.id}`
  const night = tone === "night"

  return (
    <article className={cn("group grid md:grid-cols-12", night ? "night-2" : "bg-snow-2 text-ink")}>
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden
        className="relative block aspect-[4/5] overflow-hidden bg-night md:col-span-5 md:aspect-auto md:min-h-[520px]"
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt=""
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          priority={priority}
          className="media-zoom object-cover object-top"
        />
        {product.badge && (
          <span className="absolute left-0 top-5 bg-snow px-3 py-1.5 text-sm font-bold text-ink">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-col p-7 sm:p-10 md:col-span-7 lg:p-14">
        <h3 className="font-expanded text-title font-extrabold text-tone">
          <Link href={href} className="transition-colors hover:text-signal">
            {product.nome}
          </Link>
        </h3>
        <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-tone-2">{product.descricao}</p>

        {product.destaques && product.destaques.length > 0 && (
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {product.destaques.map((d) => (
              <li key={d} className="border-t border-tone py-3 font-semibold text-tone">
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-1 flex-col justify-end">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="tabular text-tone">
              {label && <span className="text-tone-2">{label} </span>}
              <span className="whitespace-nowrap font-expanded text-title font-extrabold">{value}</span>
              <span className="mt-1 block text-sm text-tone-3">
                {product.tipo} · Cartão ou Pix · Acesso imediato
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-signal btn-lg">
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
        </div>
      </div>
    </article>
  )
}
