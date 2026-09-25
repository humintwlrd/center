import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ShopHero } from "@/components/shop/shop-hero"
import { ProductGrid } from "@/components/shop/product-grid"
import { ProductFeature } from "@/components/shop/product-feature"
import { SectionHeading } from "@/components/site/section-heading"
import { PRODUCTS } from "@/lib/products"

export const metadata: Metadata = {
  title: { absolute: "Academy — Mundo da HUMINT" },
  description:
    "Academy do Mundo da HUMINT: cursos de inteligência humana aplicada e engenharia social. Pagamento via Cartão e Pix.",
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "Academy — Mundo da HUMINT",
    description:
      "Cursos de inteligência humana aplicada e engenharia social. Pagamento via Cartão e Pix.",
    url: "/academy",
  },
}

const COURSES = PRODUCTS.filter((p) => p.tipo.toLowerCase().includes("curso"))
const EBOOKS = PRODUCTS.filter((p) => p.tipo.toLowerCase().includes("book"))

export default function AcademyPage() {
  return (
    <>
      <ShopHero courses={COURSES.length} ebooks={EBOOKS.length} />

      <section aria-labelledby="cursos-title" className="container-editorial py-14 md:py-20">
        <SectionHeading
          id="cursos-title"
          eyebrow="Cursos"
          title="Formações completas"
          description="Programas estruturados para dominar a inteligência humana de ponta a ponta."
        />
        <div className="flex flex-col gap-6">
          {COURSES.map((product, i) => (
            <ProductFeature
              key={product.id}
              product={product}
              tone={product.destaque ? "deep" : "paper"}
              priority={i === 0}
            />
          ))}
        </div>
      </section>

      <div className="border-t border-line bg-paper-strong">
        <ProductGrid
          id="dossies-title"
          eyebrow="Dossiês"
          title="E-books individuais"
          subtitle="Cada dossiê é um módulo do Acervo Tático, também disponível avulso."
          items={EBOOKS}
        />
      </div>

      <section className="border-t border-line bg-paper" aria-labelledby="duvidas-title">
        <div className="container-editorial grid gap-8 py-14 md:grid-cols-12 md:items-end md:py-16">
          <div className="md:col-span-7">
            <p className="kicker">Suporte ao aluno</p>
            <h2 id="duvidas-title" className="mt-4 font-display text-display-md font-medium text-ink">
              Dúvidas sobre acesso, pagamento ou conteúdo?
            </h2>
            <p className="mt-3 max-w-[56ch] text-[0.9375rem] leading-relaxed text-ink-muted">
              Os links de compra abrem o checkout seguro da HeroSpark em nova aba. O acesso chega no e-mail usado
              na compra; se algo não chegar, fale com a gente.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Link href="/suporte" className="btn btn-ink">
              Falar com o suporte
              <ArrowRight aria-hidden />
            </Link>
            <Link href="/comoaproveitar" className="btn btn-outline">
              Como aproveitar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
