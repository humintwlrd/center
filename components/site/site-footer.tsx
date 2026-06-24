import Link from "next/link"
import { Instagram, Mail, ArrowRight } from "lucide-react"
import { NAV, SITE, DOSSIERS } from "@/lib/site"
import { BrandLogo } from "@/components/site/brand-logo"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>
      
      <div className="container-editorial py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <BrandLogo variant="white" className="h-10 md:h-12" />
              <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-warm-text">
                Publicação editorial
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-warm-text mb-6">
              {SITE.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-deep-2 flex items-center justify-center text-warm-text hover:text-paper hover:border-paper transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="E-mail"
                className="w-8 h-8 border border-deep-2 flex items-center justify-center text-warm-text hover:text-paper hover:border-paper transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-paper mb-4">
              Navegar
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {NAV.primary.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-warm-text hover:text-paper transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dossiers */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-paper mb-4">
              Dossiês
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {DOSSIERS.slice(0, 6).map((dossier) => (
                <li key={dossier.slug}>
                  <Link
                    href={dossier.href}
                    className="text-warm-text hover:text-paper transition-colors"
                  >
                    {dossier.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-paper mb-4">
              Institucional
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="text-warm-text hover:text-paper transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-warm-text hover:text-paper transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/principios-editoriais"
                  className="text-warm-text hover:text-paper transition-colors"
                >
                  Princípios editoriais
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-warm-text hover:text-paper transition-colors"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  className="text-warm-text hover:text-paper transition-colors"
                >
                  Recursos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Academy */}
        <div className="mt-10 pt-8 border-t border-deep-2">
          <div className="relative overflow-hidden border border-paper/15 bg-gradient-to-br from-deep to-ink p-6 md:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 top-0 h-full w-px rotate-12 bg-paper/15"
            />
            <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-mono text-xs uppercase tracking-widest text-warm-text mb-2">
                  Mundo da HUMINT Academy
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-paper text-balance leading-tight">
                  Onde a teoria vira operação.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-warm-text">
                  Cursos e materiais operacionais — comportamento, comunicação, elicitação,
                  contrainteligência e OSINT. Método para aplicar de verdade.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/academy"
                  className="inline-flex items-center justify-center gap-2 bg-paper px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:bg-warm-text"
                >
                  Conhecer a Academy
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-deep-2">
        <div className="container-editorial py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-warm-text">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono uppercase tracking-widest text-[10px]">
            Análise · Fontes · Método · Casos
          </p>
        </div>
      </div>
    </footer>
  )
}
