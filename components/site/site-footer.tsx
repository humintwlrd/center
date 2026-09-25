import Link from "next/link"
import { ArrowRight, Instagram, Mail } from "lucide-react"
import { NAV, SITE } from "@/lib/site"
import { PRODUCTS } from "@/lib/products"
import { BrandLogo } from "@/components/site/brand-logo"

const FLAGSHIP = PRODUCTS.find((p) => p.destaque) ?? PRODUCTS[0]

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Ler",
    links: [...NAV.primary.filter((i) => i.href !== "/academy"), { label: "Fundamentos", href: "/humint" }, { label: "Recursos", href: "/recursos" }],
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
    <footer className="night" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>

      <div className="border-b border-line-night">
        <div className="container-site flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between md:py-20">
          <p className="max-w-3xl font-expanded text-title font-extrabold text-white">
            O método que você lê aqui está inteiro no {FLAGSHIP.nome.split(" de ")[0]}.
          </p>
          <Link href={`/academy/${FLAGSHIP.id}`} className="btn btn-signal btn-lg shrink-0">
            Ver o que tem dentro
            <ArrowRight aria-hidden />
          </Link>
        </div>
      </div>

      <div className="container-site grid gap-12 py-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <BrandLogo variant="white" className="h-10" />
          <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-mist">{SITE.description}</p>
          <div className="mt-6 flex items-center gap-2">
            <a
              href={SITE.social.instagram}
              aria-label="Instagram do Mundo da HUMINT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center border border-line-night text-mist transition-colors hover:border-white hover:text-white"
            >
              <Instagram className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label={`E-mail: ${SITE.email}`}
              className="inline-flex h-11 w-11 items-center justify-center border border-line-night text-mist transition-colors hover:border-white hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 text-[0.9375rem] font-bold text-white">{col.title}</h3>
              <ul className="flex flex-col gap-2.5 text-[0.9375rem]">
                {col.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-mist transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-line-night">
        <div className="container-site flex flex-col items-start justify-between gap-2 py-6 text-sm text-mist-2 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p>Material catalogado, datado e rastreável.</p>
        </div>
      </div>
    </footer>
  )
}
