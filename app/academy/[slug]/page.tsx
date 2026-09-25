import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, CreditCard, LifeBuoy, Lock, Zap } from "lucide-react"
import { PRODUCTS, getProductBySlug } from "@/lib/products"
import { AcervoDetail } from "@/components/shop/acervo-detail"
import { ProductGrid } from "@/components/shop/product-grid"
import { splitParcelado } from "@/components/shop/product-card"
import { Breadcrumbs } from "@/components/site/breadcrumbs"

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
    title: { absolute: `${product.nome} — Academy Mundo da HUMINT` },
    description: product.descricao,
    alternates: { canonical: `/academy/${product.id}` },
    openGraph: {
      title: product.nome,
      description: product.descricao,
      url: `/academy/${product.id}`,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  // O Acervo Tático (carro-chefe) tem uma página de vendas rica, estilo landing.
  if (product.id === "acervo-tatico") {
    return <AcervoDetail product={product} />
  }

  const isDossie = product.id.startsWith("dossie-")
  const flagship = PRODUCTS.find((p) => p.destaque)
  const siblings = PRODUCTS.filter((p) => p.id !== product.id && p.tipo === product.tipo).slice(0, 3)
  const { label, value } = splitParcelado(product.parcelado)

  return (
    <article>
      <header className="border-b border-line bg-paper">
        <div className="container-editorial pt-8 pb-14 md:pt-10 md:pb-20">
          <Breadcrumbs
            items={[
              { label: "Academy", href: "/academy" },
              { label: product.nome, href: `/academy/${product.id}` },
            ]}
          />

          <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden border border-line bg-deep lg:sticky lg:top-28 lg:max-w-none">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  priority
                  className="object-cover"
                />
                {product.badge && (
                  <span className="absolute left-4 top-4 bg-brand px-2.5 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-on-brand">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="kicker">{product.tipo}</p>
              <h1 className="mt-5 font-display text-display-xl font-medium text-ink">{product.nome}</h1>
              <p className="mt-6 max-w-[58ch] text-lede text-ink-soft">{product.descricao}</p>

              <div className="mt-10 border border-line border-t-2 border-t-ink bg-paper-strong p-6 md:p-8">
                <p className="flex flex-wrap items-baseline gap-x-3">
                  {label && (
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">{label}</span>
                  )}
                  <span className="font-display text-5xl font-medium leading-none text-ink">{value}</span>
                </p>
                <p className="mt-3 flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
                  <CreditCard className="h-3.5 w-3.5" aria-hidden /> Cartão · Pix
                </p>
                <a
                  href={product.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg mt-6 w-full sm:w-auto"
                >
                  Comprar agora
                  <ArrowUpRight aria-hidden />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
                <ul className="mt-6 grid gap-2 border-t border-line pt-5 text-sm text-ink-muted sm:grid-cols-3">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-brand" aria-hidden /> Acesso imediato
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-brand" aria-hidden /> Checkout seguro
                  </li>
                  <li className="flex items-center gap-2">
                    <LifeBuoy className="h-4 w-4 text-brand" aria-hidden /> Suporte ao aluno
                  </li>
                </ul>
              </div>

              {product.destaques && product.destaques.length > 0 && (
                <div className="mt-10">
                  <p className="eyebrow mb-3">Destaques</p>
                  <ul className="flex flex-wrap gap-2">
                    {product.destaques.map((d) => (
                      <li
                        key={d}
                        className="border border-line bg-paper-strong px-3 py-1.5 text-sm text-ink-soft"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.ementa && product.ementa.length > 0 && (
                <section className="mt-12" aria-labelledby="ementa-title">
                  <h2 id="ementa-title" className="rule-top pt-4 font-display text-display-sm font-medium">
                    Ementa
                  </h2>
                  <ol className="mt-4">
                    {product.ementa.map((item, i) => (
                      <li
                        key={item}
                        className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line py-4 text-ink-soft"
                      >
                        <span className="pt-0.5 font-mono text-[0.6875rem] tracking-[0.14em] text-ink-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>
        </div>
      </header>

      {isDossie && flagship && (
        <section className="surface-deep" aria-labelledby="upsell-title">
          <div className="container-editorial grid gap-8 py-14 md:grid-cols-12 md:items-center md:py-16">
            <div className="md:col-span-8">
              <p className="kicker">Parte do Acervo Tático</p>
              <h2 id="upsell-title" className="mt-4 font-display text-display-md font-medium text-fog">
                Este dossiê é um dos módulos do {flagship.nome}.
              </h2>
              <p className="mt-3 max-w-[60ch] text-[0.9375rem] leading-relaxed text-fog-muted">
                No acervo completo você recebe os seis dossiês, o núcleo de ferramentas operacionais e 12 meses de
                atualizações, por {flagship.parcelado}.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link href={`/academy/${flagship.id}`} className="btn btn-primary btn-lg">
                Conhecer o acervo
                <ArrowRight aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <div className="bg-paper-strong">
          <ProductGrid
            id="relacionados-title"
            eyebrow="Academy"
            title={isDossie ? "Outros dossiês" : "Veja também"}
            items={siblings}
          />
        </div>
      )}
    </article>
  )
}
