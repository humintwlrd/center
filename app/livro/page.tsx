import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Em breve",
  description: "Em breve.",
  path: "/livro",
})

export default function LivroPage() {
  return (
    <main className="bg-paper">
      <section className="container-editorial py-24 sm:py-32">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow-gold">Mundo da HUMINT</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            Em breve
          </h1>
        </div>
      </section>
    </main>
  )
}
