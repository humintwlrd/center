import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import { cn } from "@/lib/utils"

const FLAGSHIP = PRODUCTS.find((p) => p.destaque) ?? PRODUCTS[0]

type AcademyCtaProps = {
  variant?: "band" | "card"
  title?: string
  description?: string
  className?: string
}

/** Chamada para o Acervo Tático, reutilizada em todo o site. */
export function AcademyCta({
  variant = "band",
  title = "Aprenda a ler pessoas com o método inteiro.",
  description = "Seis dossiês e um núcleo de ferramentas operacionais: comportamento, comunicação, linguagem não verbal, elicitação, contrainteligência e fontes.",
  className,
}: AcademyCtaProps) {
  if (variant === "card") {
    return (
      <aside className={cn("night p-7", className)} aria-label={FLAGSHIP.nome}>
        <p className="font-expanded text-heading font-extrabold">{title}</p>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-mist">{description}</p>
        <Link href={`/academy/${FLAGSHIP.id}`} className="btn btn-signal mt-6 w-full">
          Ver o Acervo Tático
          <ArrowRight aria-hidden />
        </Link>
      </aside>
    )
  }

  return (
    <section className={cn("night overflow-hidden", className)} aria-labelledby="academy-cta-title">
      <div className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 id="academy-cta-title" className="font-expanded text-display font-extrabold">
            {title}
          </h2>
          <p className="mt-6 max-w-[54ch] text-lede text-mist">{description}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href={`/academy/${FLAGSHIP.id}`} className="btn btn-signal btn-lg">
              Conhecer o Acervo Tático
              <ArrowRight aria-hidden />
            </Link>
            <p className="tabular text-mist">
              {FLAGSHIP.parcelado} <span className="text-mist-2">· Cartão ou Pix</span>
            </p>
          </div>
        </div>
        <Link
          href={`/academy/${FLAGSHIP.id}`}
          tabIndex={-1}
          aria-hidden
          className="group relative mx-auto block aspect-[3/4] w-full max-w-sm overflow-hidden lg:col-span-5 lg:max-w-none"
        >
          <Image src={FLAGSHIP.image} alt="" fill sizes="(min-width: 1024px) 480px, 80vw" className="media-zoom object-cover" />
        </Link>
      </div>
    </section>
  )
}
