import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ringPattern } from "@/lib/dot-patterns"
import { DotMatrix } from "@/components/site/dot-matrix"
import { RiseText } from "@/components/site/rise-text"
import { Roll } from "@/components/site/roll"

/** Abertura da Academy no hero central da referência (V2): a promessa do Acervo dentro de um anel de pontos. */
export function ShopHero() {
  return (
    <header className="relative overflow-hidden bg-snow">
      <div className="container-site relative py-12 md:py-16">
        <div className="relative mx-auto max-w-[1040px]">
          <DotMatrix grid={ringPattern()} wipe className="opacity-90" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-[14%] text-center">
            <h1 className="max-w-[20ch] text-[clamp(1.25rem,0.7rem+2.4vw,2.75rem)] leading-[1.12] text-ink">
              <RiseText text="Inteligência humana de operações reais, traduzida para as suas decisões." />
            </h1>
            <p
              className="blur-in mt-4 hidden max-w-[48ch] text-base text-ink-2 md:block"
              style={{ ["--d" as string]: "450ms" }}
            >
              O Acervo Tático HUMINT reúne seis dossiês para ensinar você a observar pessoas, conduzir conversas e
              avaliar informações de forma mais estruturada.
            </p>
            <Link
              href="/academy/acervo-tatico"
              className="blur-in btn btn-signal mt-5 hidden sm:inline-flex"
              style={{ ["--d" as string]: "600ms" }}
            >
              <Roll>Quero acessar o Acervo Tático</Roll>
              <ChevronRight aria-hidden />
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-6 flex max-w-[48ch] flex-col items-center gap-5 text-center md:hidden">
          <p className="text-base text-ink-2">
            O Acervo Tático HUMINT reúne seis dossiês para ensinar você a observar pessoas, conduzir conversas e avaliar
            informações de forma mais estruturada.
          </p>
          <Link href="/academy/acervo-tatico" className="btn btn-signal sm:hidden">
            <Roll>Quero acessar o Acervo Tático</Roll>
            <ChevronRight aria-hidden />
          </Link>
        </div>
        <p className="subtitle mt-6 text-center md:mt-8">Acesso imediato · Cartão ou Pix · 7 dias de garantia</p>
      </div>
    </header>
  )
}
