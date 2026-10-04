import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import { terrainPattern } from "@/lib/dot-patterns"
import { cn } from "@/lib/utils"
import { DotMatrix } from "@/components/site/dot-matrix"
import { Roll } from "@/components/site/roll"

const FLAGSHIP = PRODUCTS.find((p) => p.destaque) ?? PRODUCTS[0]

type AcademyCtaProps = {
  variant?: "band" | "card"
  title?: string
  description?: string
  className?: string
}

/** Chamada para o Acervo Tático: faixa escura com relevo de pontos (CTA da referência). */
export function AcademyCta({
  variant = "band",
  title = "Toda decisão importante passa por uma pessoa. Aprenda a avaliá-la com método.",
  description = "O Acervo Tático HUMINT reúne seis dossiês e um núcleo de ferramentas para observar, perguntar e checar antes de confiar.",
  className,
}: AcademyCtaProps) {
  if (variant === "card") {
    return (
      <aside className={cn("night relative overflow-hidden", className)} aria-label={FLAGSHIP.nome}>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0">
          <DotMatrix grid={terrainPattern(32, 10, 3)} tone="dark" twinkle={6} fill={0.6} />
        </div>
        <div className="relative p-7 pb-28">
          <p className="subtitle">Academy</p>
          <p className="mt-2 text-xl leading-[1.25] font-medium text-white">{title}</p>
          <p className="mt-3 text-[0.9375rem] text-mist">{description}</p>
          <Link href={`/academy/${FLAGSHIP.id}`} className="btn btn-signal mt-6 w-full">
            <Roll>Ver o Acervo Tático</Roll>
            <ChevronRight aria-hidden />
          </Link>
        </div>
      </aside>
    )
  }

  return (
    <section className={cn("night relative overflow-hidden", className)} aria-labelledby="academy-cta-title">
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 w-[150%] max-w-none sm:w-full lg:w-[74%]">
        <DotMatrix grid={terrainPattern(64, 30)} tone="dark" twinkle={22} fill={0.6} />
      </div>
      <div className="container-site relative py-20 md:py-[120px]">
        <div className="max-w-[460px] pb-40 sm:pb-56 lg:pb-0">
          <p className="subtitle">Academy</p>
          <h2 id="academy-cta-title" className="mt-2 text-title">
            {title}
          </h2>
          <p className="mt-4 text-base text-snow-3">{description}</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={`/academy/${FLAGSHIP.id}`} className="btn btn-signal self-start">
              <Roll>Quero acessar o Acervo Tático</Roll>
              <ChevronRight aria-hidden />
            </Link>
            <p className="tabular text-sm text-mist">
              {FLAGSHIP.parcelado} <span className="text-mist-2">· Cartão ou Pix</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
