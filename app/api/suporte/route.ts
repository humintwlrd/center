import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

const SUPPORT_EMAIL = "mundodahumint@pm.me"

const CATEGORIAS: Record<string, string> = {
  acesso: "Acesso e login",
  conteudo: "Conteúdo e artigos",
  pagamento: "Pagamentos e assinatura",
  tecnico: "Problema técnico",
  outro: "Outro assunto",
}

const Schema = z.object({
  nome: z.string().min(2, "Informe seu nome."),
  email: z.string().email("E-mail inválido."),
  categoria: z.string().refine((v) => v in CATEGORIAS, "Categoria inválida."),
  assunto: z.string().min(3, "Descreva o assunto."),
  mensagem: z.string().min(10, "Detalhe um pouco mais sua solicitação."),
  consent: z.boolean().refine((v) => v === true, "Consentimento obrigatório."),
})

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 })
  }

  const parsed = Schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Dados inválidos." },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Canal de suporte não configurado." },
      { status: 503 },
    )
  }

  const { nome, email, categoria, assunto, mensagem } = parsed.data
  const categoriaLabel = CATEGORIAS[categoria] ?? categoria
  const receivedAt = new Date().toISOString()

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px">Nova solicitação de suporte</h2>
      <p style="margin:0 0 4px"><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p style="margin:0 0 4px"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p style="margin:0 0 4px"><strong>Categoria:</strong> ${escapeHtml(categoriaLabel)}</p>
      <p style="margin:0 0 4px"><strong>Assunto:</strong> ${escapeHtml(assunto)}</p>
      <p style="margin:16px 0 4px"><strong>Mensagem:</strong></p>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(mensagem)}</p>
      <hr style="margin:24px 0;border:none;border-top:1px solid #ddd" />
      <p style="margin:0;font-size:12px;color:#888">Recebido em ${receivedAt} • Mundo da HUMINT</p>
    </div>
  `

  const text = [
    "Nova solicitação de suporte",
    "",
    `Nome: ${nome}`,
    `E-mail: ${email}`,
    `Categoria: ${categoriaLabel}`,
    `Assunto: ${assunto}`,
    "",
    "Mensagem:",
    mensagem,
    "",
    `Recebido em ${receivedAt}`,
  ].join("\n")

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: "Suporte Mundo da HUMINT <onboarding@resend.dev>",
      to: [SUPPORT_EMAIL],
      replyTo: email,
      subject: `[Suporte] ${categoriaLabel} — ${assunto}`,
      html,
      text,
    })

    if (error) {
      console.error("[suporte] resend error:", error)
      return NextResponse.json(
        { error: "Não foi possível enviar sua solicitação agora." },
        { status: 502 },
      )
    }
  } catch (err) {
    console.error("[suporte] resend unavailable:", err)
    return NextResponse.json(
      { error: "Não foi possível enviar sua solicitação agora." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
