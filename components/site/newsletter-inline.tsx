"use client"

import Link from "next/link"
import { useId, useState } from "react"
import { track } from "@/lib/analytics"
import { cn } from "@/lib/utils"

type Props = {
  variant?: "light" | "dark"
  placeholder?: string
}

export function NewsletterInline({ variant = "light", placeholder = "seu@email.com" }: Props) {
  const emailId = useId()
  const msgId = useId()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Erro ao inscrever")
      track("newsletter_signup", { source: "inline" })
      setStatus("success")
      setMessage("Inscrição confirmada. Em breve você receberá nossos envios.")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setMessage(err instanceof Error ? err.message : "Não foi possível inscrever.")
    }
  }

  const isDark = variant === "dark"

  return (
    <form onSubmit={onSubmit} className="w-full" aria-label="Assinar newsletter">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
        <label htmlFor={emailId} className="sr-only">
          E-mail
        </label>
        <input
          id={emailId}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          autoComplete="email"
          aria-invalid={status === "error"}
          aria-describedby={message ? msgId : undefined}
          disabled={status === "loading" || status === "success"}
          className={cn(
            "h-12 w-full min-w-0 flex-1 border px-4 sm:w-0 text-[0.9375rem] outline-none transition-colors",
            isDark
              ? "border-line-dark-strong bg-deep-2 text-fog placeholder:text-fog-muted focus:border-fog"
              : "border-line-strong bg-paper-strong text-ink placeholder:text-ink-muted focus:border-ink",
          )}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="btn btn-primary h-12"
        >
          {status === "loading" ? "Enviando…" : status === "success" ? "Inscrito" : "Assinar"}
        </button>
      </div>
      {message && (
        <p
          id={msgId}
          role={status === "error" ? "alert" : "status"}
          className={cn(
            "mt-2 text-sm",
            status === "error"
              ? isDark
                ? "text-alert-bright"
                : "text-alert"
              : isDark
                ? "text-brand-bright"
                : "text-brand",
          )}
        >
          {message}
        </p>
      )}
      <p className={cn("mt-3 text-xs leading-relaxed", isDark ? "text-fog-muted" : "text-ink-muted")}>
        Ao assinar, você concorda com nossa{" "}
        <Link
          href="/politica-de-privacidade"
          className={cn("underline underline-offset-2", isDark ? "text-fog" : "text-ink-soft")}
        >
          Política de Privacidade
        </Link>
        .
      </p>
    </form>
  )
}
