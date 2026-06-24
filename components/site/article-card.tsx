import Image from "next/image"
import Link from "next/link"
import { isInstagramImage, type Article } from "@/lib/content/articles"
import { formatDateBR } from "@/lib/format"

type Props = {
  article: Article
  variant?: "default" | "featured" | "compact" | "horizontal"
  priority?: boolean
}

export function ArticleCard({ article, variant = "default", priority }: Props) {
  const href = `/artigos/${article.slug}`

  if (variant === "featured") {
    const naturalOnMobile = isInstagramImage(article.heroImage)
    return (
      <article className="group">
        <Link href={href} className="block">
          <div className="relative overflow-hidden bg-deep">
            {naturalOnMobile ? (
              <>
                {/* Mobile: proporção original da imagem do post */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.heroImage || "/placeholder.svg"}
                  alt={article.heroAlt}
                  className="md:hidden block w-full h-auto"
                  loading={priority ? "eager" : "lazy"}
                />
                {/* Desktop: enquadramento editorial 16:9 */}
                <div className="hidden md:block relative aspect-[16/9]">
                  <Image
                    src={article.heroImage}
                    alt={article.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 720px, 100vw"
                    preload={priority}
                    loading={priority ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </>
            ) : (
              <div className="relative aspect-[16/9]">
                <Image
                  src={article.heroImage}
                  alt={article.heroAlt}
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  preload={priority}
                  loading={priority ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/10 to-transparent" />
            <div className="absolute left-0 bottom-0 p-6 sm:p-8 max-w-2xl">
              <span className="inline-block bg-gold px-2.5 py-1 text-[11px] font-mono uppercase tracking-widest mb-3" style={{ color: "var(--color-on-gold)" }}>
                {article.categoryLabel}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-paper text-balance leading-tight">
                {article.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[var(--color-warm-text)] line-clamp-2 max-w-xl">
                {article.description}
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--color-warm-text)]">
                <span>{formatDateBR(article.publishedAt)}</span>
                <span aria-hidden>·</span>
                <span>{article.readingTime} de leitura</span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  if (variant === "overlay") {
    return (
      <article className="group flex flex-col">
        <Link href={href} className="relative block overflow-hidden bg-paper-deep">
          <div className="relative aspect-[16/9]">
            <Image
              src={article.heroImage || "/placeholder.svg"}
              alt={article.heroAlt}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
              preload={priority}
              loading={priority ? "eager" : "lazy"}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <span className="absolute left-3 top-3 inline-block bg-ink/85 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-paper backdrop-blur-sm">
            {article.categoryLabel}
          </span>
        </Link>
        <Link href={href} className="mt-3 block">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink text-balance group-hover:text-gold-active transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="mt-2 text-[11px] font-mono uppercase tracking-widest text-ink-muted">
          {formatDateBR(article.publishedAt)}
        </p>
      </article>
    )
  }

  if (variant === "horizontal") {
    const naturalOnMobile = isInstagramImage(article.heroImage)
    return (
      <article className="group grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-6 hairline-b pb-6">
        <Link href={href} className="block overflow-hidden bg-paper-deep">
          {naturalOnMobile ? (
            <>
              {/* Mobile: proporção original da imagem do post */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.heroImage || "/placeholder.svg"}
                alt={article.heroAlt}
                className="sm:hidden block w-full h-auto"
                loading="lazy"
              />
              {/* Desktop: thumb 4:3 em coluna de 200px */}
              <div className="hidden sm:block relative aspect-[4/3]">
                <Image
                  src={article.heroImage}
                  alt={article.heroAlt}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </>
          ) : (
            <div className="relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={article.heroImage}
                alt={article.heroAlt}
                fill
                sizes="(min-width: 640px) 200px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          )}
        </Link>
        <div className="flex flex-col">
          <Link href={href} className="block">
            <p className="eyebrow-gold mb-2">{article.categoryLabel}</p>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink text-balance leading-tight group-hover:text-gold-active transition-colors">
              {article.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted line-clamp-2">{article.description}</p>
          </Link>
          <div className="mt-3 flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-ink-muted">
            <span>{formatDateBR(article.publishedAt)}</span>
            <span aria-hidden>·</span>
            <span>{article.readingTime}</span>
            <span aria-hidden>·</span>
            <span>{article.author}</span>
          </div>
        </div>
      </article>
    )
  }

  if (variant === "compact") {
    return (
      <article className="group hairline-b pb-4">
        <Link href={href} className="block">
          <p className="eyebrow mb-1.5">{article.categoryLabel}</p>
          <h3 className="font-display text-base font-semibold text-ink leading-snug group-hover:text-gold-active">
            {article.title}
          </h3>
          <p className="mt-1.5 text-xs font-mono uppercase tracking-widest text-ink-muted">
            {formatDateBR(article.publishedAt)} · {article.readingTime}
          </p>
        </Link>
      </article>
    )
  }

  const naturalOnMobile = isInstagramImage(article.heroImage)
  return (
    <article className="group flex flex-col">
      <Link href={href} className="block overflow-hidden bg-paper-deep mb-4">
        {naturalOnMobile ? (
          <>
            {/* Mobile: proporção original da imagem do post */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.heroImage || "/placeholder.svg"}
              alt={article.heroAlt}
              className="md:hidden block w-full h-auto"
              loading={priority ? "eager" : "lazy"}
            />
            {/* Desktop: enquadramento editorial 16:9 */}
            <div className="hidden md:block relative aspect-[16/9]">
              <Image
                src={article.heroImage}
                alt={article.heroAlt}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                preload={priority}
                loading={priority ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </>
        ) : (
          <div className="relative aspect-[16/9]">
            <Image
              src={article.heroImage}
              alt={article.heroAlt}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              preload={priority}
              loading={priority ? "eager" : "lazy"}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}
      </Link>
      <Link href={href} className="block">
        <p className="eyebrow-gold mb-2">{article.categoryLabel}</p>
        <h3 className="font-display text-xl font-semibold text-ink text-balance leading-snug group-hover:text-gold-active transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-ink-muted line-clamp-3 leading-relaxed">
          {article.description}
        </p>
      </Link>
      <div className="mt-3 flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-ink-muted">
        <span>{formatDateBR(article.publishedAt)}</span>
        <span aria-hidden>·</span>
        <span>{article.readingTime}</span>
      </div>
    </article>
  )
}
