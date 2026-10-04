import Link from "next/link"
import { ChevronRight, Instagram, LifeBuoy, Mail } from "lucide-react"
import { SITE } from "@/lib/site"
import { PRODUCTS } from "@/lib/products"
import { BrandLogo } from "@/components/site/brand-logo"
import { Roll } from "@/components/site/roll"

const FLAGSHIP = PRODUCTS.find((p) => p.destaque) ?? PRODUCTS[0]

const LINKS: { label: string; href: string }[][] = [
  [
    { label: "Casos", href: "/artigos?categoria=casos-historicos" },
    { label: "Artigos", href: "/artigos" },
    { label: "Métodos", href: "/metodos" },
    { label: "Fundamentos", href: "/humint" },
    { label: "Recursos", href: "/recursos" },
    { label: "Sobre", href: "/sobre" },
  ],
  [
    { label: "Academy", href: "/academy" },
    { label: "Acervo Tático", href: "/academy/acervo-tatico" },
    { label: "Engenharia Social", href: "/academy/engenharia-social" },
    { label: "Formação", href: "/formacao" },
    { label: "Suporte ao aluno", href: "/suporte" },
    { label: "Contato", href: "/contato" },
  ],
]

const LEGAL = [
  { label: "Princípios editoriais", href: "/principios-editoriais" },
  { label: "Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de uso", href: "/termos" },
]

const CONTACTS = [
  { label: "E-mail", value: SITE.email, href: `mailto:${SITE.email}`, icon: Mail, external: false },
  { label: "Instagram", value: "@mundodahumint", href: SITE.social.instagram, icon: Instagram, external: true },
  { label: "Suporte", value: "Suporte ao aluno", href: "/suporte", icon: LifeBuoy, external: false },
]

export function SiteFooter() {
  return (
    <footer className="night overflow-x-clip" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>

      <div className="container-site">
        {/* Logo + CTA cells */}
        <div className="rule-b flex flex-col border-x border-tone sm:flex-row">
          <Link
            href="/"
            className="flex h-24 items-center justify-center border-b border-tone px-8 sm:h-[134px] sm:w-[132px] sm:border-r sm:border-b-0 sm:px-0"
            aria-label={`${SITE.name}, página inicial`}
          >
            <BrandLogo variant="white" className="h-9 w-auto sm:h-auto sm:w-[92px]" />
          </Link>
          <Link
            href={`/academy/${FLAGSHIP.id}`}
            className="bg-cell flex h-24 items-center justify-center gap-2 text-sm font-semibold uppercase text-white transition-colors hover:bg-night-3 sm:ml-auto sm:h-[134px] sm:w-[387px] sm:border-l sm:border-tone"
          >
            <Roll>Ver o que tem dentro</Roll>
            <ChevronRight className="size-3.5" aria-hidden />
          </Link>
        </div>

        {/* Statement + links */}
        <div className="rule-b grid gap-12 border-x border-tone px-5 py-14 sm:px-10 md:py-20 lg:grid-cols-[minmax(0,355px)_minmax(0,1fr)] lg:gap-16 lg:px-[88px]">
          <div>
            <p className="text-[1.625rem] leading-[1.25] font-medium tracking-[-0.03em] text-white md:text-3xl">
              O método que você lê aqui está inteiro no {FLAGSHIP.nome.split(" de ")[0]}.
            </p>
            <p className="mt-4 text-base text-mist">{SITE.description}</p>
          </div>
          <nav aria-label="Rodapé" className="grid gap-x-6 sm:grid-cols-2 lg:justify-end lg:[grid-template-columns:repeat(2,minmax(0,216px))]">
            {LINKS.map((col, i) => (
              <ul key={i}>
                {col.map((item) => (
                  <li key={item.href} className="border-b border-tone last:border-b-0 max-sm:last:border-b">
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between px-5 py-4 text-base text-snow-2 transition-colors hover:text-white"
                    >
                      {item.label}
                      <ChevronRight className="size-3.5 text-mist-2 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* Contact cells */}
        <ul className="rule-b grid border-l border-tone md:grid-cols-3">
          {CONTACTS.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label} className="border-r border-b border-tone md:border-b-0">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 px-5 py-6 sm:px-10 sm:py-8"
              >
                <span className="bg-cell flex size-14 shrink-0 items-center justify-center text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-base text-mist-2">{label}</span>
                  <span className="block truncate text-base font-medium text-white transition-colors group-hover:text-mist">
                    {value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom bar */}
        <div className="bg-cell flex flex-col gap-4 border border-t-0 border-tone px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-mist-2">
            <p>
              © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
            </p>
            <p className="mt-1">Material catalogado, datado e rastreável.</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {LEGAL.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white transition-colors hover:text-mist">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
