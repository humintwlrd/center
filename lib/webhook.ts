/**
 * Envia um payload JSON ao webhook dos formulários. Falha se o webhook não
 * responder 2xx em até 10 s, para a rota não confirmar ao visitante um envio
 * que se perdeu.
 */
export async function postToWebhook(url: string, payload: unknown): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(10_000),
  })
  if (!res.ok) throw new Error(`webhook respondeu ${res.status}`)
}
