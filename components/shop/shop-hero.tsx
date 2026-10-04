import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ringPattern } from "@/lib/dot-patterns"
import { DotMatrix } from "@/components/site/dot-matrix"
import { RiseText } from "@/components/site/rise-text"
import { Roll } from "@/components/site/roll"

/** Abertura da Academy no hero central da referência (V2): título dentro de um anel de pontos. */
export function ShopHero() {
  return (
    <header className="relative overflow-hidden bg-snow">
      <div className="container-site relative py-12 md:py-16">
        <div className="relative mx-auto max-w-[1040px]">
          <DotMatrix grid={ringPattern()} wipe className="opacity-90" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-[14%] text-center">
            <h1 className="max-w-[16ch] text-[clamp(1.5rem,0.9rem+2.6vw,3rem)] leading-[1.12] text-ink">
              <RiseText text="O método inteiro, em cursos e dossiês." />
            </h1>
            <p
              className="blur-in mt-4 hidden max-w-[48ch] text-base text-ink-2 md:block"
              style={{ ["--d" as string]: "450ms" }}
            >
              Comportamento, comunicação, linguagem não verbal, elicitação, contrainteligência e fontes. Material
              operacional para sair da teoria e aplicar de verdade.
            </p>
            <Link
              href="#cursos"
              className="blur-in btn btn-signal mt-5 hidden sm:inline-flex"
              style={{ ["--d" as string]: "600ms" }}
            >
              <Roll>Todos os cursos</Roll>
              <ChevronRight aria-hidden />
            </Link>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-[48ch] text-center text-base text-ink-2 md:hidden">
          Comportamento, comunicação, linguagem não verbal, elicitação, contrainteligência e fontes. Material operacional
          para sair da teoria e aplicar de verdade.
        </p>
        <p className="subtitle mt-6 text-center md:mt-8">Acesso imediato · Cartão ou Pix · 7 dias de garantia</p>
      </div>
    </header>
  )
}
