import type { Metadata } from "next"
import { ShopHero } from "@/components/shop/shop-hero"
import { ProductGrid } from "@/components/shop/product-grid"

export const metadata: Metadata = {
  title: { absolute: "Loja — Mundo da HUMINT" },
  description:
    "Cursos e materiais de inteligência humana aplicada: Acervo Tático de HUMINT, Fundamentos de Engenharia Social e OSINT Playbook. Pagamento via Cartão e Pix.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Loja — Mundo da HUMINT",
    description:
      "Cursos e materiais de inteligência humana aplicada, engenharia social e OSINT. Pagamento via Cartão e Pix.",
    url: "/shop",
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
