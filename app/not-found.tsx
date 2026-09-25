import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="container-editorial grid gap-10 py-24 md:py-36 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="kicker">Erro 404</p>
          <h1 className="mt-6 font-display text-display-2xl font-medium text-ink">A trilha some aqui.</h1>
          <p className="mt-6 max-w-[52ch] text-lede text-ink-soft">
            A página que você procurou não existe, foi movida ou nunca esteve onde a memória sugere. Voltar à
            apuração é sempre uma boa decisão.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-ink btn-lg">
              Voltar para a home
              <ArrowRight aria-hidden />
            </Link>
            <Link href="/artigos" className="btn btn-outline btn-lg">
              Ver artigos
            </Link>
          </div>
        </div>
        <p
          aria-hidden
          className="hidden select-none self-end overflow-hidden text-right font-display text-[10rem] font-medium leading-none text-line lg:col-span-4 xl:block"
        >
          404
        </p>
      </div>
    </section>
  )
}
