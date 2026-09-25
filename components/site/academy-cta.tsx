import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import { cn } from "@/lib/utils"

const FLAGSHIP = PRODUCTS.find((p) => p.destaque) ?? PRODUCTS[0]

type AcademyCtaProps = {
  /**
   * band: faixa larga com capa do produto destaque (fim de páginas).
   * card: bloco compacto para colunas laterais.
   */
  variant?: "band" | "card"
  title?: string
  description?: string
  className?: string
}

/** Chamada única para a Academy, reutilizada em todo o site. */
export function AcademyCta({
  variant = "band",
  title = "Onde a teoria vira operação.",
  description = "Cursos e dossiês de comportamento, comunicação, elicitação, contrainteligência e OSINT. Método para aplicar de verdade.",
  className,
}: AcademyCtaProps) {
  if (variant === "card") {
    return (
      <aside className={cn("surface-deep p-6", className)} aria-label="Mundo da HUMINT Academy">
        <p className="kicker">Academy</p>
        <p className="mt-4 font-display text-display-sm font-medium text-fog">{title}</p>
        <p className="mt-3 text-sm leading-relaxed text-fog-muted">{description}</p>
        <Link href="/academy" className="btn btn-primary mt-6 w-full">
          Conhecer a Academy
          <ArrowRight aria-hidden />
        </Link>
      </aside>
    )
  }

  return (
    <section className={cn("surface-deep", className)} aria-labelledby="academy-cta-title">
      <div className="container-editorial grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-7">
          <p className="kicker">Mundo da HUMINT Academy</p>
          <h2
            id="academy-cta-title"
            className="mt-5 font-display text-display-lg font-medium text-fog"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-[56ch] text-lede text-fog-muted">{description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/academy" className="btn btn-primary btn-lg">
              Conhecer a Academy
              <ArrowRight aria-hidden />
            </Link>
            <Link href={`/academy/${FLAGSHIP.id}`} className="btn btn-outline btn-lg">
              Ver o {FLAGSHIP.nome.split(" de ")[0]}
            </Link>
          </div>
        </div>

        <Link
          href={`/academy/${FLAGSHIP.id}`}
          className="group grid grid-cols-[112px_1fr] items-center gap-5 border border-line-dark bg-deep-2 p-4 transition-colors hover:border-fog-muted sm:grid-cols-[140px_1fr] lg:col-span-5"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-deep-3">
            <Image
              src={FLAGSHIP.image}
              alt={FLAGSHIP.imageAlt}
              fill
              sizes="140px"
              className="media-zoom object-cover"
            />
          </div>
          <div className="min-w-0">
            {FLAGSHIP.badge && <p className="eyebrow-brand">{FLAGSHIP.badge}</p>}
            <p className="mt-2 font-display text-xl font-medium leading-snug text-fog">
              {FLAGSHIP.nome}
            </p>
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-fog-muted">
              {FLAGSHIP.parcelado} · Cartão · Pix
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
