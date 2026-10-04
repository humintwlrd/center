import Link from "next/link"
import { StickyNav } from "@/components/landing/sticky-nav"
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta"
import { AcervoLetter } from "@/components/shop/acervo-letter"
import { BrandLogo } from "@/components/site/brand-logo"

/**
 * Landing de vendas do Acervo Tático (tráfego pago), com a carta de vendas completa.
 * Cabeçalho e rodapé próprios (o do site fica oculto pelo pv.css), Utmify no layout.
 * Preço e checkout vêm do catálogo (ACERVO em lib/products.ts).
 */
export default function AcervoTaticoPage() {
  return (
    <div id="top" className="pv-page min-h-screen bg-snow pb-20 md:pb-0">
      <StickyNav />
      <MobileStickyCta />
      <AcervoLetter />

      <footer className="night">
        <div className="container-site">
          <div className="flex flex-col gap-6 border-x border-tone px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4">
              <BrandLogo variant="white" className="h-9 self-start" />
              <p className="text-sm text-mist-2">© {new Date().getFullYear()} Mundo da HUMINT · Todos os direitos reservados</p>
            </div>
            <nav aria-label="Institucional" className="flex flex-wrap gap-6 text-sm">
              <Link href="/termos" className="text-white transition-colors hover:text-mist">
                Termos
              </Link>
              <Link href="/privacidade" className="text-white transition-colors hover:text-mist">
                Privacidade
              </Link>
              <Link href="/suporte" className="text-white transition-colors hover:text-mist">
                Suporte
              </Link>
            </nav>
          </div>
          <div className="bg-cell border border-tone px-5 py-6 sm:px-8">
            <p className="max-w-[80ch] text-xs leading-relaxed text-mist-2">
              Este site não é afiliado, associado, autorizado, endossado ou de qualquer forma oficialmente ligado ao
              Facebook, Instagram ou Meta Platforms, Inc. Os nomes Facebook, Instagram e Meta, bem como marcas e logotipos
              relacionados, são propriedade da Meta Platforms, Inc. Após sair do ambiente do Facebook ou Instagram, a
              responsabilidade pelo conteúdo desta página é exclusivamente nossa, e não da Meta.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
