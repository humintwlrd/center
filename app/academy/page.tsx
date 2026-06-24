import type { Metadata } from "next"
import { Zap, CreditCard, Target } from "lucide-react"
import { ShopHero } from "@/components/shop/shop-hero"
import { ProductGrid } from "@/components/shop/product-grid"
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

const TRUST = [
  { icon: Zap, title: "Acesso imediato", desc: "Material liberado na hora da compra." },
  { icon: CreditCard, title: "Cartão · Pix", desc: "À vista no Pix ou parcelado no cartão." },
  { icon: Target, title: "Para aplicar", desc: "Método prático, do comportamento à operação." },
]

export default function AcademyPage() {
  return (
    <>
      <ShopHero />

      {/* Faixa de confiança */}
      <section aria-label="Garantias" className="border-b border-line bg-paper-strong">
        <div className="container-editorial grid grid-cols-1 gap-5 py-6 sm:grid-cols-3">
          {TRUST.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-paper text-gold-active">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink">{title}</p>
                <p className="text-xs leading-relaxed text-ink-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductGrid
        eyebrow="Cursos"
        title="Formações completas"
        subtitle="Programas estruturados para dominar a inteligência humana de ponta a ponta."
        items={COURSES}
        priorityFirst
      />

      <ProductGrid
        eyebrow="Dossiês"
        title="E-books individuais"
        subtitle="Cada dossiê é um módulo do Acervo Tático — também disponível avulso."
        items={EBOOKS}
      />
    </>
  )
}
