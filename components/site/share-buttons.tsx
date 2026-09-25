"use client"

import { Link2, Mail } from "lucide-react"
import { useState } from "react"
import { track } from "@/lib/analytics"

type Props = {
  url: string
  title: string
}

export function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false)

  const encoded = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  function onCopy() {
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true)
      track("article_share", { channel: "copy" })
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function onShare(channel: string) {
    track("article_share", { channel })
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? "Link copiado" : "Copiar link"}
        className="inline-flex h-10 items-center gap-2 border-[1.5px] border-ink px-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
      >
        <Link2 className="w-3.5 h-3.5" />
        <span>{copied ? "Copiado" : "Copiar link"}</span>
      </button>
      <a
        onClick={() => onShare("whatsapp")}
        href={`https://wa.me/?text=${encodedTitle}%20${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 items-center gap-2 border-[1.5px] border-ink px-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
        aria-label="Compartilhar no WhatsApp"
      >
        WhatsApp
      </a>
      <a
        onClick={() => onShare("linkedin")}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 items-center gap-2 border-[1.5px] border-ink px-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
        aria-label="Compartilhar no LinkedIn"
      >
        LinkedIn
      </a>
      <a
        onClick={() => onShare("x")}
        href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 items-center gap-2 border-[1.5px] border-ink px-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
        aria-label="Compartilhar no X"
      >
        X
      </a>
      <a
        onClick={() => onShare("email")}
        href={`mailto:?subject=${encodedTitle}&body=${encoded}`}
        className="inline-flex h-10 items-center gap-2 border-[1.5px] border-ink px-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
        aria-label="Compartilhar por e-mail"
      >
        <Mail className="w-3.5 h-3.5" />
        <span>E-mail</span>
      </a>
    </div>
  )
}
