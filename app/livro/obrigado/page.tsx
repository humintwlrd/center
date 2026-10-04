import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Obrigado",
  description: "Inscrição recebida.",
  path: "/livro/obrigado",
  noIndex: true,
})

export default function ObrigadoLivroPage() {
  return (
    <section className="night">
      <div className="container-site py-28 md:py-40">
        <h1 className="max-w-[14ch] text-mega font-medium">Obrigado. Avisaremos você.</h1>
        <p className="mt-8 max-w-[52ch] text-lede text-mist">Você recebe um e-mail assim que o livro estiver disponível. Enquanto isso, continue lendo.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/artigos" className="btn btn-solid btn-lg">
            Ler os artigos
            <ChevronRight aria-hidden />
          </Link>
          <Link href="/academy" className="btn btn-line btn-lg">
            Conhecer a Academy
          </Link>
        </div>
      </div>
    </section>
  )
}
