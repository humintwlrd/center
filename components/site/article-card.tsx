import Image from "next/image"
import Link from "next/link"
import { isInstagramImage, type Article } from "@/lib/content/articles"
import { formatDateBR } from "@/lib/format"
import { cn } from "@/lib/utils"

type Props = {
  article: Article
  /**
   * default: imagem 4:5 + título (grades)
   * case: retrato 3:4, para o trilho de casos
   * row: miniatura à esquerda (listas)
   * compact: só texto
   */
  variant?: "default" | "case" | "row" | "compact"
  priority?: boolean
  headingLevel?: "h2" | "h3"
  className?: string
}

/**
 * Posts do Instagram são verticais (9:16) e trazem a legenda gravada na imagem.
 * Nunca recortamos: a imagem aparece inteira sobre a noite, dentro do quadro.
 */
function mediaFit(src?: string) {
  return isInstagramImage(src) ? "bg-night object-contain" : "object-cover"
}

function Meta({ article, withDate = true }: { article: Article; withDate?: boolean }) {
  return (
    <p className="mt-3 text-sm text-tone-3">
      {article.categoryLabel}
      <span aria-hidden> · </span>
      {withDate ? <time dateTime={article.publishedAt}>{formatDateBR(article.publishedAt)}</time> : article.readingTime}
    </p>
  )
}

export function ArticleCard({ article, variant = "default", priority, headingLevel = "h3", className }: Props) {
  const href = `/artigos/${article.slug}`
  const H = headingLevel

  if (variant === "compact") {
    return (
      <article className={cn("group border-b border-tone py-5 first:pt-0", className)}>
        <H className="text-lg font-bold leading-snug text-tone" style={{ fontStretch: "110%" }}>
          <Link href={href} className="transition-colors group-hover:text-signal">
            {article.title}
          </Link>
        </H>
        <Meta article={article} />
      </article>
    )
  }

  if (variant === "row") {
    return (
      <article className={cn("group grid grid-cols-[96px_1fr] gap-4 sm:grid-cols-[128px_1fr] sm:gap-5", className)}>
        <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-square overflow-hidden bg-snow-2">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt=""
            fill
            sizes="128px"
            className={cn("media-zoom", mediaFit(article.heroImage))}
          />
        </Link>
        <div className="min-w-0">
          <H className="text-lg font-bold leading-snug text-tone line-clamp-3" style={{ fontStretch: "110%" }}>
            <Link href={href} className="transition-colors group-hover:text-signal">
              {article.title}
            </Link>
          </H>
          <Meta article={article} />
        </div>
      </article>
    )
  }

  if (variant === "case") {
    return (
      <article className={cn("group flex w-[78vw] max-w-[340px] shrink-0 flex-col sm:w-[300px]", className)}>
        <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-[3/4] overflow-hidden bg-night-3">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt=""
            fill
            sizes="340px"
            priority={priority}
            className={cn(
              "media-zoom grayscale-[35%] transition-[filter] duration-700 group-hover:grayscale-0",
              mediaFit(article.heroImage),
            )}
          />
        </Link>
        <H className="mt-5 font-expanded text-xl font-extrabold leading-tight tracking-[-0.01em] text-tone">
          <Link href={href} className="transition-colors group-hover:text-signal">
            {article.title}
          </Link>
        </H>
        <Meta article={article} withDate={false} />
      </article>
    )
  }

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-[4/5] overflow-hidden bg-snow-2">
        <Image
          src={article.heroImage || "/placeholder.svg"}
          alt=""
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className={cn("media-zoom", mediaFit(article.heroImage))}
        />
      </Link>
      <H className="mt-5 text-xl font-bold leading-snug text-tone" style={{ fontStretch: "112%" }}>
        <Link href={href} className="transition-colors group-hover:text-signal">
          {article.title}
        </Link>
      </H>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-tone-2 line-clamp-2">{article.description}</p>
      <Meta article={article} />
    </article>
  )
}
