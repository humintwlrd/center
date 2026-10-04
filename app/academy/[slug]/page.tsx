import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, Check, ChevronRight } from "lucide-react"
import { PRODUCTS, getProductBySlug } from "@/lib/products"
import { AcervoDetail } from "@/components/shop/acervo-detail"
import { ProductGrid } from "@/components/shop/product-grid"
import { splitParcelado } from "@/components/shop/product-card"
import { Roll } from "@/components/site/roll"
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
      <header className="bg-snow">
        <div className="container-site pt-10 pb-20 md:pt-16 md:pb-[120px]">
          <Breadcrumbs
            items={[
              { label: "Academy", href: "/academy" },
              { label: product.nome, href: `/academy/${product.id}` },
            ]}
          />
          <div className="rule-t rule-b mt-8 grid border-x border-line lg:grid-cols-12">
            <div className="relative border-b border-line bg-snow-2 p-6 md:p-10 lg:col-span-5 lg:border-r lg:border-b-0">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden lg:sticky lg:top-28">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 440px, 90vw"
                  priority
                  className="object-cover"
                />
              </div>
              {product.badge && (
                <span className="absolute top-0 left-0 border-r border-b border-line bg-snow px-3 py-2 text-sm font-medium text-ink uppercase">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="px-6 py-10 md:px-12 md:py-12 lg:col-span-7">
              <p className="subtitle">{product.tipo}</p>
              <h1 className="mt-2 text-display">{product.nome}</h1>
              <p className="mt-4 max-w-[56ch] text-base text-ink-2 md:text-lg">{product.descricao}</p>

              <div className="mt-8 border-y border-line py-8">
                <p className="tabular text-ink">
                  {label && <span className="text-ink-2">{label} </span>}
                  <span className="text-title">{value}</span>
                </p>
                <p className="mt-1 text-sm text-ink-3">Cartão ou Pix · Acesso imediato</p>
                <a
                  href={product.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-signal mt-6 w-full sm:w-auto"
                >
                  <Roll>Comprar agora</Roll>
                  <ArrowUpRight aria-hidden />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
                <p className="mt-5 text-sm text-ink-3">
                  Checkout seguro da HeroSpark. Dúvidas?{" "}
                  <Link href="/suporte" className="text-ink underline decoration-ink-4 underline-offset-4 hover:decoration-ink">
                    Suporte ao aluno
                  </Link>
                </p>
              </div>

              {product.ementa && product.ementa.length > 0 && (
                <section className="mt-10" aria-labelledby="ementa-title">
                  <h2 id="ementa-title" className="text-heading">
                    O que tem dentro
                  </h2>
                  <ol className="mt-5 border-t border-line">
                    {product.ementa.map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-line py-4 text-base text-ink">
                        <Check className="size-4 shrink-0" aria-hidden />
                        {item}
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
        <section className="bg-snow-2" aria-labelledby="upsell-title">
          <div className="container-site py-20 md:py-[120px]">
            <div className="rule-t rule-b grid border-x border-line bg-snow md:grid-cols-2">
              <div className="border-b border-line px-6 py-10 md:border-r md:border-b-0 md:px-16 md:py-12">
                <p className="subtitle">Acervo Tático</p>
                <h2 id="upsell-title" className="mt-2 text-title">
                  Este dossiê é um dos módulos do Acervo Tático.
                </h2>
              </div>
              <div className="flex flex-col justify-center gap-6 px-6 py-10 md:px-16 md:py-12">
                <p className="max-w-[440px] text-base text-ink-2">
                  No acervo completo você recebe os seis dossiês, o núcleo de ferramentas operacionais e 12 meses de
                  atualizações, por {flagship.parcelado}.
                </p>
                <Link href={`/academy/${flagship.id}`} className="btn btn-signal self-start">
                  <Roll>Conhecer o acervo</Roll>
                  <ChevronRight aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <section className="bg-snow py-20 md:py-[120px]" aria-labelledby="relacionados-title">
          <ProductGrid id="relacionados-title" title={isDossie ? "Outros dossiês" : "Veja também"} items={siblings} />
        </section>
      )}
    </article>
  )
}
