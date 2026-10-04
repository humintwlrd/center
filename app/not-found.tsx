import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { RiseText } from "@/components/site/rise-text"
import { DotMatrix } from "@/components/site/dot-matrix"
import { terrainPattern } from "@/lib/dot-patterns"


export default function NotFound() {
  return (
    <section className="night relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 w-[150%] max-w-none sm:w-full lg:w-[70%]">
        <DotMatrix grid={terrainPattern(64, 30)} tone="dark" twinkle={18} fill={0.6} />
      </div>
      <div className="container-site relative py-28 pb-56 md:py-40 lg:pb-40">
        <h1 className="max-w-[14ch] text-mega">
          <RiseText text="Esta página foi apagada." />
        </h1>
        <p className="mt-8 max-w-[50ch] text-base text-snow-3 md:text-lg">
          Ou nunca existiu, ou foi movida, ou está onde a memória sugere e não onde ela está. Voltar à apuração é sempre
          uma boa decisão.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-signal">
            Voltar ao início
            <ChevronRight aria-hidden />
          </Link>
          <Link href="/artigos" className="btn btn-line">
            Ver os artigos
            <ChevronRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
