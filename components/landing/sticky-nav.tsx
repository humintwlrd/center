import { ArrowUpRight } from "lucide-react"
import { BrandLogo } from "@/components/site/brand-logo"
import { Roll } from "@/components/site/roll"
import { CHECKOUT_URL } from "@/components/landing/access-button"

/**
 * Cabeçalho da /pv no padrão do site (caixa com filete, CTA em bloco à direita),
 * sem navegação: a landing tem uma saída só, o checkout.
 */
export function StickyNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-snow">
      <div className="container-site">
        <div className="flex h-16 items-stretch border-b border-l border-line lg:h-[67px]">
          <a href="#top" className="flex shrink-0 items-center px-4 sm:px-6" aria-label="Mundo da HUMINT, início da página">
            <BrandLogo variant="black" priority className="h-8 sm:h-9" />
          </a>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-signal ml-auto min-h-0 px-4 text-[0.8125rem] sm:px-6 sm:text-sm"
          >
            <span className="sm:hidden">Quero acessar</span>
            <span className="hidden sm:inline-grid">
              <Roll>Quero acessar o Acervo Tático</Roll>
            </span>
            <ArrowUpRight aria-hidden />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </div>
    </header>
  )
}
