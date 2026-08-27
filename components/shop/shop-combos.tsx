import { ArrowUpRight } from "lucide-react"
import { COMBOS } from "@/lib/products"

export function ShopCombos() {
  return (
    <section aria-labelledby="combos-title" className="bg-paper-deep">
      <div className="container-editorial py-12 sm:py-16">
        <div className="mb-8">
          <p className="eyebrow-gold mb-2">Leve junto</p>
          <h2 id="combos-title" className="font-display text-2xl sm:text-3xl font-semibold text-ink">
            Combos com desconto
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">
            Ofertas adicionais que aparecem no checkout do Acervo Tático ao adquirir junto.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {COMBOS.map((combo) => (
            <a
              key={combo.id}
              href={combo.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 border border-line bg-paper-strong p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold sm:p-6"
            >
              {/* Selo de desconto */}
              <div className="flex shrink-0 flex-col items-center justify-center border border-gold bg-gold-soft px-3 py-4 text-center">
                <span className="font-display text-lg font-bold leading-none text-ink">
                  {combo.desconto.split(" ")[0]}
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-widest text-ink-soft">
                  OFF
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink text-balance group-hover:text-gold-active">
                  {combo.titulo}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{combo.texto}</p>
                <p className="mt-2 text-sm text-ink-soft">
                  {combo.itemComDesconto}:{" "}
                  <span className="text-ink-muted line-through">{combo.precoDe}</span>{" "}
                  <span className="font-semibold text-gold-active">{combo.preco}</span>
                </p>
              </div>

              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-ink-muted transition-colors group-hover:text-gold-active"
                aria-hidden
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
