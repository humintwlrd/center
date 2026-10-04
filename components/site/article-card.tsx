import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { isInstagramImage, type Article } from "@/lib/content/articles"
import { formatDateBR } from "@/lib/format"
import { cn } from "@/lib/utils"

type Props = {
  article: Article
  /**
   * feature: imagem à esquerda, texto à direita, seta no canto (blog da referência, V1)
   * cell: célula de texto com seta no canto, imagem opcional no topo (V2)
   * default: imagem 4:5 + título (grades)
   * case: retrato 3:4, para trilhos
   * row: miniatura à esquerda (listas)
   * compact: só texto
   */
  variant?: "feature" | "cell" | "default" | "case" | "row" | "compact"
  /** Só para `cell`: mostra a imagem no topo da célula. */
  withImage?: boolean
  priority?: boolean
  headingLevel?: "h2" | "h3"
  className?: string
}

/**
 * Posts do Instagram são verticais (9:16) e trazem a legenda gravada na imagem.
 * Nunca recortamos: a imagem aparece inteira sobre a noite, dentro do quadro.
 */
function mediaFit(src?: string) {
  return isInstagramImage(src) ? "bg-night object-contain" : "mono object-cover"
}

export function ArticleMeta({ article, withDate = true, className }: { article: Article; withDate?: boolean; className?: string }) {
  return (
    <p className={cn("meta", className)}>
      {withDate ? <time dateTime={article.publishedAt}>{formatDateBR(article.publishedAt)}</time> : <span>{article.readingTime}</span>}
      <span className="sep" aria-hidden>
        /
      </span>
      <span>{article.categoryLabel}</span>
    </p>
  )
}

function ArrowCell({ className }: { className?: string }) {
  return (
    <span className={cn("arrow-cell absolute right-0 bottom-0", className)} aria-hidden>
      <ChevronRight />
    </span>
  )
}

export function ArticleCard({ article, variant = "default", withImage, priority, headingLevel = "h3", className }: Props) {
  const href = `/artigos/${article.slug}`
  const H = headingLevel

  if (variant === "feature") {
    return (
      <article className={cn("group relative grid border-r border-b border-tone md:grid-cols-2", className)}>
        <div className="relative aspect-[16/10] overflow-hidden bg-snow-2 md:aspect-auto md:min-h-[346px]">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt=""
            fill
            sizes="(min-width: 1024px) 568px, (min-width: 768px) 50vw, 100vw"
            priority={priority}
            className={cn("media-zoom", mediaFit(article.heroImage))}
          />
        </div>
        <div className="px-5 pt-6 pb-24 sm:px-8 md:pt-10 md:pb-20">
          <H className="max-w-[420px] text-heading text-tone">
            <Link href={href} className="after:absolute after:inset-0">
              {article.title}
            </Link>
          </H>
          <p className="mt-4 max-w-[420px] text-base text-tone-2 line-clamp-3">{article.description}</p>
          <ArticleMeta article={article} className="mt-4" />
        </div>
        <ArrowCell />
      </article>
    )
  }

  if (variant === "cell") {
    return (
      <article className={cn("group relative flex flex-col border-r border-b border-tone", className)}>
        {withImage && (
          <div className="relative aspect-[16/10] overflow-hidden bg-snow-2">
            <Image
              src={article.heroImage || "/placeholder.svg"}
              alt=""
              fill
              sizes="(min-width: 1024px) 632px, (min-width: 768px) 50vw, 100vw"
              priority={priority}
              className={cn("media-zoom", mediaFit(article.heroImage))}
            />
          </div>
        )}
        <div className={cn("flex-1 px-5 pt-6 pb-20 sm:px-8 md:pt-8", withImage && "md:pt-10")}>
          <H className={cn("max-w-[30ch] text-tone", withImage ? "text-heading" : "text-xl leading-[1.25] md:text-[1.375rem]")}>
            <Link href={href} className="after:absolute after:inset-0">
              {article.title}
            </Link>
          </H>
          <ArticleMeta article={article} className="mt-4" />
        </div>
        <ArrowCell />
      </article>
    )
  }

  if (variant === "compact") {
    return (
      <article className={cn("group relative border-b border-tone py-5 pr-14 first:pt-0", className)}>
        <H className="text-lg leading-snug text-tone">
          <Link href={href} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </H>
        <ArticleMeta article={article} className="mt-3" />
        <ChevronRight className="absolute top-1/2 right-0 size-4 -translate-y-1/2 text-tone-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </article>
    )
  }

  if (variant === "row") {
    return (
      <article className={cn("group relative grid grid-cols-[96px_1fr] gap-4 sm:grid-cols-[128px_1fr] sm:gap-5", className)}>
        <div className="relative aspect-square overflow-hidden bg-snow-2">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt=""
            fill
            sizes="128px"
            className={cn("media-zoom", mediaFit(article.heroImage))}
          />
        </div>
        <div className="min-w-0">
          <H className="text-lg leading-snug text-tone line-clamp-3">
            <Link href={href} className="after:absolute after:inset-0">
              {article.title}
            </Link>
          </H>
          <ArticleMeta article={article} className="mt-3" />
        </div>
      </article>
    )
  }

  if (variant === "case") {
    return (
      <article className={cn("group relative flex w-[78vw] max-w-[340px] shrink-0 flex-col border border-tone sm:w-[300px]", className)}>
        <div className="relative aspect-[3/4] overflow-hidden bg-snow-2">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt=""
            fill
            sizes="340px"
            priority={priority}
            className={cn("media-zoom", mediaFit(article.heroImage))}
          />
        </div>
        <div className="p-5 pb-6">
          <H className="text-xl leading-tight text-tone">
            <Link href={href} className="after:absolute after:inset-0">
              {article.title}
            </Link>
          </H>
          <ArticleMeta article={article} withDate={false} className="mt-3" />
        </div>
      </article>
    )
  }

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-snow-2">
        <Image
          src={article.heroImage || "/placeholder.svg"}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className={cn("media-zoom", mediaFit(article.heroImage))}
        />
      </div>
      <H className="mt-5 text-xl leading-[1.25] text-tone">
        <Link href={href} className="after:absolute after:inset-0">
          {article.title}
        </Link>
      </H>
      <p className="mt-2 text-[0.9375rem] text-tone-2 line-clamp-2">{article.description}</p>
      <ArticleMeta article={article} className="mt-3" />
    </article>
  )
}
