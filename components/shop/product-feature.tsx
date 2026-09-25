import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, CreditCard } from "lucide-react"
import type { Product } from "@/lib/products"
import { splitParcelado } from "@/components/shop/product-card"
import { cn } from "@/lib/utils"

type Props = {
  product: Product
  tone?: "deep" | "paper"
  priority?: boolean
}

/** Card horizontal para cursos (capa + descrição + destaques + preço). */
export function ProductFeature({ product, tone = "paper", priority }: Props) {
  const { label, value } = splitParcelado(product.parcelado)
  const href = `/academy/${product.id}`
  const deep = tone === "deep"

  return (
    <article
      className={cn(
        "group grid border md:grid-cols-12",
        deep ? "surface-deep border-line-dark" : "border-line bg-paper-strong",
      )}
    >
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden
        className="relative block aspect-[4/3] overflow-hidden bg-deep md:col-span-5 md:aspect-auto md:min-h-[420px]"
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt=""
          fill
          sizes="(min-width: 768px) 520px, 100vw"
          priority={priority}
          className="media-zoom object-cover object-top"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 bg-brand px-2.5 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-on-brand">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-col p-6 sm:p-8 md:col-span-7 lg:p-10">
        <p className="eyebrow-brand">{product.tipo}</p>
        <h3 className="mt-3 font-display text-display-md font-medium text-tone">
          <Link href={href} className={cn("transition-colors", deep ? "hover:text-white" : "hover:text-brand")}>
            {product.nome}
          </Link>
        </h3>
        <p className="mt-4 max-w-[60ch] text-[0.9375rem] leading-relaxed text-tone-muted md:text-base">
          {product.descricao}
        </p>

        {product.destaques && product.destaques.length > 0 && (
          <ul className="mt-6 grid gap-x-6 gap-y-2 text-[0.9375rem] sm:grid-cols-2">
            {product.destaques.map((d) => (
              <li key={d} className="flex items-start gap-2.5">
                <Check
                  className={cn("mt-1 h-4 w-4 shrink-0", deep ? "text-brand-bright" : "text-brand")}
                  aria-hidden
                />
                <span className="text-tone">{d}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-1 flex-col justify-end">
        <div className="flex flex-col gap-6 border-t border-tone pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-baseline gap-2">
              {label && (
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-tone-muted">
                  {label}
                </span>
              )}
              <span className="font-display text-4xl font-medium leading-none text-tone">{value}</span>
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-tone-muted">
              <CreditCard className="h-3.5 w-3.5" aria-hidden /> Cartão · Pix · Acesso imediato
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href={product.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Comprar agora
              <ArrowUpRight aria-hidden />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <Link href={href} className="link-arrow">
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
