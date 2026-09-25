import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Obrigado",
  description: "Inscrição recebida.",
  path: "/livro/obrigado",
  noIndex: true,
})

export default function ObrigadoLivroPage() {
  return (
    <section className="bg-paper">
      <div className="container-editorial py-24 md:py-36">
        <p className="kicker">Livro · Inscrição recebida</p>
        <h1 className="mt-6 max-w-3xl font-display text-display-2xl font-medium text-ink">Obrigado. Avisaremos você.</h1>
        <p className="mt-6 max-w-[52ch] text-lede text-ink-soft">Você receberá um e-mail assim que o livro estiver disponível. Enquanto isso, continue lendo.</p>
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
