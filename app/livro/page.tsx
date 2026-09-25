import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Livro: em breve",
  description: "O livro do Mundo da HUMINT está em produção.",
  path: "/livro",
  noIndex: true,
})

export default function LivroPage() {
  return (
    <section className="bg-paper">
      <div className="container-editorial py-24 md:py-36">
        <p className="kicker">Livro · Em produção</p>
        <h1 className="mt-6 max-w-3xl font-display text-display-2xl font-medium text-ink">Em breve.</h1>
        <p className="mt-6 max-w-[52ch] text-lede text-ink-soft">O livro do Mundo da HUMINT está em produção. Enquanto isso, o arquivo editorial e a Academy seguem abertos.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/artigos" className="btn btn-ink">
            Ler os artigos
            <ArrowRight aria-hidden />
          </Link>
          <Link href="/academy" className="btn btn-outline">
            Conhecer a Academy
          </Link>
        </div>
      </div>
    </section>
  )
}
