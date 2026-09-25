import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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
      <header className="night">
        <div className="container-site pt-8 pb-20 md:pb-28">
          <Breadcrumbs
            tone="night"
            items={[
              { label: "Academy", href: "/academy" },
              { label: product.nome, href: `/academy/${product.id}` },
            ]}
          />
          <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden lg:sticky lg:top-28 lg:max-w-none">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  priority
                  className="object-cover"
                />
                {product.badge && (
                  <span className="absolute left-0 top-5 bg-snow px-3 py-1.5 text-sm font-bold text-ink">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              <h1 className="font-expanded text-title font-extrabold">{product.nome}</h1>
              <p className="mt-8 max-w-[56ch] text-lede text-mist">{product.descricao}</p>

              <div className="mt-10 border-y border-line-night py-8">
                <p className="tabular">
                  {label && <span className="text-mist">{label} </span>}
                  <span className="font-expanded text-title font-extrabold">{value}</span>
                </p>
                <p className="mt-1 text-mist-2">{product.tipo} · Cartão ou Pix · Acesso imediato</p>
                <a
                  href={product.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-signal btn-lg mt-7 w-full sm:w-auto"
                >
                  Comprar agora
                  <ArrowUpRight aria-hidden />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
                <p className="mt-5 text-sm text-mist-2">
                  Checkout seguro da HeroSpark. Dúvidas?{" "}
                  <Link href="/suporte" className="text-mist underline decoration-signal decoration-2 underline-offset-4">
                    Suporte ao aluno
                  </Link>
                </p>
              </div>

              {product.ementa && product.ementa.length > 0 && (
                <section className="mt-12" aria-labelledby="ementa-title">
                  <h2 id="ementa-title" className="font-expanded text-heading font-extrabold">
                    O que tem dentro
                  </h2>
                  <ol className="mt-6 border-t border-line-night">
                    {product.ementa.map((item) => (
                      <li key={item} className="border-b border-line-night py-4 text-lg">
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
        <section className="bg-snow-2 text-ink" aria-labelledby="upsell-title">
          <div className="container-site grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
            <div className="md:col-span-8">
              <h2 id="upsell-title" className="font-expanded text-title font-extrabold">
                Este dossiê é um dos módulos do Acervo Tático.
              </h2>
              <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-ink-2">
                No acervo completo você recebe os seis dossiês, o núcleo de ferramentas operacionais e 12 meses de
                atualizações, por {flagship.parcelado}.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link href={`/academy/${flagship.id}`} className="btn btn-solid btn-lg">
                Conhecer o acervo
                <ArrowRight aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <div className="bg-snow text-ink">
          <ProductGrid id="relacionados-title" title={isDossie ? "Outros dossiês" : "Veja também"} items={siblings} />
        </div>
      )}
    </article>
  )
}
