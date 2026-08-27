import type { Metadata } from "next"
import { ShopHero } from "@/components/shop/shop-hero"
import { ProductGrid } from "@/components/shop/product-grid"
import { ShopCombos } from "@/components/shop/shop-combos"

export const metadata: Metadata = {
  title: "Loja",
  description:
    "Arsenal do Mundo da HUMINT: cursos e guias práticos de inteligência humana, OSINT e engenharia social. Do guia mais acessível ao programa completo.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Loja · Mundo da HUMINT",
    description:
      "Cursos e guias práticos de inteligência humana, OSINT e engenharia social.",
    url: "/shop",
  },
}

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ProductGrid />
      <ShopCombos />
    </>
  )
}
