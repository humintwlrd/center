import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, CreditCard, Check } from "lucide-react"
import { PRODUCTS, getProductBySlug } from "@/lib/products"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) {
    return { title: "Produto não encontrado", robots: { index: false, follow: false } }
  }
  return {
    title: { absolute: `${product.nome} — Loja Mundo da HUMINT` },
    description: product.descricao,
    alternates: { canonical: `/shop/${product.id}` },
    openGraph: {
      title: product.nome,
      description: product.descricao,
      url: `/shop/${product.id}`,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <article>
      <section className="container-editorial pt-8 md:pt-10">
        <nav className="font-mono text-[11px] uppercase tracking-widest text-ink-muted" aria-label="Trilha">
          <Link href="/shop" className="hover:text-ink">
            Loja
          </Link>
          <span className="px-2" aria-hidden>
            /
          </span>
          <span className="text-ink-soft">{product.nome}</span>
        </nav>
      </section>

      <div className="container-editorial grid gap-10 py-10 md:py-14 lg:grid-cols-2">
        {/* Capa real */}
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-deep">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            priority
            className="object-contain"
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

        {/* Info + compra */}
        <div className="flex flex-col">
          <p className="eyebrow-gold">{product.tipo}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-balance text-ink md:text-4xl">
            {product.nome}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{product.descricao}</p>

          <p className="mt-6 font-display text-4xl font-bold text-gold-active">{product.parcelado}</p>
          <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
            <CreditCard className="h-3.5 w-3.5" aria-hidden /> Cartão · Pix
          </p>

          <a
            href={product.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-gold px-5 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-on-gold transition-colors hover:bg-gold-hover focus-visible:outline-2 sm:w-auto"
          >
            Comprar agora
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>

      {/* Ementa */}
      {product.ementa && product.ementa.length > 0 && (
        <section className="container-editorial pb-16 md:pb-20">
          <div className="max-w-[68ch]">
            <p className="eyebrow-gold mb-2">Conteúdo</p>
            <h2 className="font-display text-2xl font-semibold text-ink">Ementa</h2>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {product.ementa.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3 text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-active" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={product.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-gold px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-on-gold transition-colors hover:bg-gold-hover"
            >
              Comprar agora
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </section>
      )}
    </article>
  )
}
