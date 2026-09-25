import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ShopHero } from "@/components/shop/shop-hero"
import { ProductGrid } from "@/components/shop/product-grid"
import { ProductFeature } from "@/components/shop/product-feature"
import { PRODUCTS } from "@/lib/products"

export const metadata: Metadata = {
  title: { absolute: "Academy — Mundo da HUMINT" },
  description:
    "Academy do Mundo da HUMINT: cursos de inteligência humana aplicada e engenharia social. Pagamento via Cartão e Pix.",
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "Academy — Mundo da HUMINT",
    description: "Cursos de inteligência humana aplicada e engenharia social. Pagamento via Cartão e Pix.",
    url: "/academy",
  },
}

const COURSES = PRODUCTS.filter((p) => p.tipo.toLowerCase().includes("curso"))
const EBOOKS = PRODUCTS.filter((p) => p.tipo.toLowerCase().includes("book"))

export default function AcademyPage() {
  return (
    <>
      <ShopHero />

      <section aria-label="Cursos" className="night">
        <div className="container-site flex flex-col gap-8 py-16 md:gap-10 md:py-24">
          {COURSES.map((product, i) => (
            <ProductFeature key={product.id} product={product} tone="night" priority={i === 0} />
          ))}
        </div>
      </section>

      <div className="bg-snow text-ink">
        <ProductGrid
          id="dossies-title"
          title="Dossiês avulsos"
          subtitle="Cada dossiê é um módulo do Acervo Tático, também vendido separadamente."
          items={EBOOKS}
        />
      </div>

      <section className="bg-snow-2 text-ink" aria-labelledby="duvidas-title">
        <div className="container-site grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-7">
            <h2 id="duvidas-title" className="font-expanded text-heading font-extrabold">
              Dúvidas sobre acesso, pagamento ou conteúdo?
            </h2>
            <p className="mt-3 max-w-[58ch] text-lg leading-relaxed text-ink-2">
              A compra abre o checkout seguro da HeroSpark em nova aba. O acesso chega no e-mail usado na compra; se
              algo não chegar, fale com a gente.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Link href="/suporte" className="btn btn-solid">
              Falar com o suporte
              <ArrowRight aria-hidden />
            </Link>
            <Link href="/comoaproveitar" className="btn btn-line">
              Como aproveitar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
