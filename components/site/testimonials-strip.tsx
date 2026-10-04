import type { ReactNode } from "react"
import Image from "next/image"
import { TESTIMONIALS } from "@/lib/testimonials"
import { cn } from "@/lib/utils"

type TestimonialsStripProps = {
  id?: string
  /** Ação opcional abaixo da faixa. */
  action?: ReactNode
  className?: string
}

/**
 * Depoimentos reais (capturas de DM) numa faixa em loop que para no hover, sobre o fundo neutro.
 * A segunda cópia da lista é só visual (aria-hidden), para o loop fechar sem emenda.
 */
export function TestimonialsStrip({ id, action, className }: TestimonialsStripProps) {
  return (
    <section id={id} aria-labelledby="depoimentos-title" className={cn("overflow-hidden bg-snow-2 py-20 md:py-[120px]", className)}>
      <div className="container-site">
        <header className="flex flex-col gap-4 pb-10 md:flex-row md:items-end md:justify-between md:pb-8" data-reveal>
          <h2 id="depoimentos-title" className="max-w-[420px] text-display">
            Quem comprou, recomenda.
          </h2>
          <p className="max-w-[400px] text-lg text-ink-2">Capturas reais de mensagens de alunos. Os nomes foram ocultados.</p>
        </header>
      </div>
      <div className="border-y border-line">
        <ul className="marquee [--marquee-duration:70s]">
          {[0, 1].map((copy) =>
            TESTIMONIALS.map((t) => (
              <li
                key={`${copy}-${t.src}`}
                aria-hidden={copy === 1 || undefined}
                className="-mr-px w-[200px] shrink-0 border-x border-line bg-snow p-3 md:w-[240px]"
              >
                <span className="relative block aspect-[9/16] overflow-hidden bg-snow-2">
                  <Image src={t.src} alt={copy === 1 ? "" : t.alt} fill sizes="240px" className="object-cover" />
                </span>
              </li>
            )),
          )}
        </ul>
      </div>
      {action && <div className="flex justify-center pt-8">{action}</div>}
    </section>
  )
}
