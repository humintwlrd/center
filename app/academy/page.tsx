import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ShopHero } from "@/components/shop/shop-hero"
import { ProductGrid } from "@/components/shop/product-grid"
import { ProductFeature } from "@/components/shop/product-feature"
import { PRODUCTS } from "@/lib/products"
import { Roll } from "@/components/site/roll"

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

      <section id="cursos" aria-labelledby="cursos-title" className="bg-snow pb-20 md:pb-[140px]">
        <div className="container-site">
          <h2 id="cursos-title" className="subtitle mb-4">
            Cursos
          </h2>
          <div className="rule-t border-l border-line">
            {COURSES.map((product, i) => (
              <ProductFeature key={product.id} product={product} priority={i === 0} className="rule-b" />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="dossies-title" className="bg-snow-2 py-20 md:py-[120px]">
        <ProductGrid
          id="dossies-title"
          eyebrow="Dossiês"
          title="Dossiês avulsos"
          subtitle="Cada dossiê é um módulo do Acervo Tático, também vendido separadamente."
          items={EBOOKS}
        />
      </section>

      <section className="bg-snow" aria-labelledby="duvidas-title">
        <div className="container-site py-20 md:py-[120px]">
          <div className="rule-t rule-b grid border-x border-line md:grid-cols-2">
            <div className="border-b border-line px-6 py-10 md:border-r md:border-b-0 md:px-16 md:py-12">
              <p className="subtitle">Suporte</p>
              <h2 id="duvidas-title" className="mt-2 text-title">
                Dúvidas sobre acesso, pagamento ou conteúdo?
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-6 px-6 py-10 md:px-16 md:py-12">
              <p className="max-w-[440px] text-base text-ink-2">
                A compra abre o checkout seguro da HeroSpark em nova aba. O acesso chega no e-mail usado na compra; se
                algo não chegar, fale com a gente.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/suporte" className="btn btn-signal">
                  <Roll>Falar com o suporte</Roll>
                  <ChevronRight aria-hidden />
                </Link>
                <Link href="/comoaproveitar" className="btn btn-line">
                  <Roll>Como aproveitar</Roll>
                  <ChevronRight aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
