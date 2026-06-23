import type { Metadata } from "next"
import { ShopHero } from "@/components/shop/shop-hero"
import { ProductGrid } from "@/components/shop/product-grid"

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

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ProductGrid />
    </>
  )
}
