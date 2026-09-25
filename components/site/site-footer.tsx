import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { NAV, SITE } from "@/lib/site"
import { BrandLogo } from "@/components/site/brand-logo"

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Publicação",
    links: [...NAV.primary, { label: "Recursos", href: "/recursos" }],
  },
  {
    title: "Temas",
    links: [...NAV.categories],
  },
  {
    title: "Academy",
    links: [
      { label: "Todos os cursos", href: "/academy" },
      { label: "Acervo Tático", href: "/academy/acervo-tatico" },
      { label: "Engenharia Social", href: "/academy/engenharia-social" },
      { label: "Formação", href: "/formacao" },
      { label: "Suporte ao aluno", href: "/suporte" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Contato", href: "/contato" },
      { label: "Princípios editoriais", href: "/principios-editoriais" },
      { label: "Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de uso", href: "/termos" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="surface-deep" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>

      <div className="container-editorial py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <BrandLogo variant="white" className="h-10 md:h-11" />
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-fog-muted">
              {SITE.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={SITE.social.instagram}
                aria-label="Instagram do Mundo da HUMINT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-line-dark text-fog-muted transition-colors hover:border-fog hover:text-fog"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label={`E-mail: ${SITE.email}`}
                className="inline-flex h-10 w-10 items-center justify-center border border-line-dark text-fog-muted transition-colors hover:border-fog hover:text-fog"
              >
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="eyebrow mb-4 border-t border-line-dark pt-4 font-mono font-medium">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5 text-[0.9375rem]">
                  {col.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-fog-muted transition-colors hover:text-fog"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="container-editorial flex flex-col items-start justify-between gap-3 py-6 text-xs text-fog-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em]">
            Análise · Fontes · Método · Casos
          </p>
        </div>
      </div>
    </footer>
  )
}
