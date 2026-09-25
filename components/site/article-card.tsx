import Image from "next/image"
import Link from "next/link"
import { isInstagramImage, type Article } from "@/lib/content/articles"
import { formatDateBR } from "@/lib/format"
import { cn } from "@/lib/utils"

type Props = {
  article: Article
  /**
   * default: imagem 4:3 + título (grades)
   * lead: destaque grande (abertura de seção)
   * row: miniatura à esquerda (listas)
   * compact: só texto (colunas laterais)
   */
  variant?: "default" | "lead" | "row" | "compact"
  priority?: boolean
  headingLevel?: "h2" | "h3"
  className?: string
}

/** Posts do Instagram são verticais (9:16) com o texto no terço central. */
function imagePosition(src?: string) {
  return isInstagramImage(src) ? "center 38%" : "center"
}

function Meta({ article, withTime = true }: { article: Article; withTime?: boolean }) {
  return (
    <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-muted">
      <time dateTime={article.publishedAt}>{formatDateBR(article.publishedAt)}</time>
      {withTime && (
        <>
          <span aria-hidden className="mx-2 text-line-strong">
            /
          </span>
          {article.readingTime}
        </>
      )}
    </p>
  )
}

export function ArticleCard({
  article,
  variant = "default",
  priority,
  headingLevel = "h3",
  className,
}: Props) {
  const href = `/artigos/${article.slug}`
  const H = headingLevel

  if (variant === "compact") {
    return (
      <article className={cn("group border-b border-line py-4 first:pt-0", className)}>
        <p className="eyebrow-brand">{article.categoryLabel}</p>
        <H className="mt-1.5 font-display text-lg font-medium leading-snug text-ink">
          <Link href={href} className="transition-colors group-hover:text-brand">
            {article.title}
          </Link>
        </H>
        <Meta article={article} />
      </article>
    )
  }

  if (variant === "row") {
    return (
      <article className={cn("group grid grid-cols-[104px_1fr] gap-4 sm:grid-cols-[132px_1fr] sm:gap-5", className)}>
        <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-[4/3] overflow-hidden bg-paper-deep">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt=""
            fill
            sizes="132px"
            className="media-zoom object-cover"
            style={{ objectPosition: imagePosition(article.heroImage) }}
          />
        </Link>
        <div className="min-w-0">
          <p className="eyebrow-brand">{article.categoryLabel}</p>
          <H className="mt-1.5 font-display text-lg font-medium leading-snug text-ink line-clamp-3">
            <Link href={href} className="transition-colors group-hover:text-brand">
              {article.title}
            </Link>
          </H>
          <Meta article={article} withTime={false} />
        </div>
      </article>
    )
  }

  if (variant === "lead") {
    return (
      <article className={cn("group", className)}>
        <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-[16/10] overflow-hidden bg-paper-deep">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt=""
            fill
            sizes="(min-width: 1024px) 760px, 100vw"
            priority={priority}
            className="media-zoom object-cover"
            style={{ objectPosition: imagePosition(article.heroImage) }}
          />
        </Link>
        <div className="mt-5">
          <p className="eyebrow-brand">{article.categoryLabel}</p>
          <H className="mt-2 font-display text-display-lg font-medium text-ink">
            <Link href={href} className="transition-colors group-hover:text-brand">
              {article.title}
            </Link>
          </H>
          <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-ink-soft line-clamp-3">
            {article.description}
          </p>
          <Meta article={article} />
        </div>
      </article>
    )
  }

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-[4/3] overflow-hidden bg-paper-deep">
        <Image
          src={article.heroImage || "/placeholder.svg"}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="media-zoom object-cover"
          style={{ objectPosition: imagePosition(article.heroImage) }}
        />
      </Link>
      <div className="mt-4">
        <p className="eyebrow-brand">{article.categoryLabel}</p>
        <H className="mt-2 font-display text-xl font-medium leading-snug text-ink">
          <Link href={href} className="transition-colors group-hover:text-brand">
            {article.title}
          </Link>
        </H>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted line-clamp-2">
          {article.description}
        </p>
        <Meta article={article} />
      </div>
    </article>
  )
}
