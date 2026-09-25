import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="night">
      <div className="container-site py-28 md:py-40">
        <h1 className="max-w-[14ch] font-expanded text-mega font-extrabold">
          Esta página foi <span className="redact">apagada.</span>
        </h1>
        <p className="mt-8 max-w-[50ch] text-lede text-mist">
          Ou nunca existiu, ou foi movida, ou está onde a memória sugere e não onde ela está. Voltar à apuração é sempre
          uma boa decisão.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-solid btn-lg">
            Voltar ao início
            <ArrowRight aria-hidden />
          </Link>
          <Link href="/artigos" className="btn btn-line btn-lg">
            Ver os artigos
          </Link>
        </div>
      </div>
    </section>
  )
}
