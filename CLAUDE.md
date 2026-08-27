# CLAUDE.md — Mundo da HUMINT (repo `humintwlrd/center`)

Contexto do projeto para o Claude Code. Site institucional + conteúdo + Academy (loja de
cursos/e-books) do **Mundo da HUMINT** (mundodahumint.com).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config via `@theme`/`@utility` em `app/globals.css`, sem `tailwind.config`)
- **pnpm** (10.11) — use `pnpm`, não `npm` (há `pnpm-lock.yaml`)
- Ícones: **lucide-react**. UI base: **shadcn/ui** (Radix) em `components/ui/`
- Deploy: **Vercel** — push na branch `main` republica sozinho (auto-deploy)

## Comandos

```bash
pnpm install                      # dependências
pnpm dev                          # dev em http://localhost:3000
pnpm build                        # build de produção
pnpm typecheck                    # tsc --noEmit (mesmo que "lint")
pnpm generate:instagram-articles  # regenera artigos a partir do JSON (ver pipeline)
```

## Estrutura

```
app/
  page.tsx                 # home
  layout.tsx               # header (em <Suspense>, com HeaderFallback) + footer
  globals.css              # design tokens + utilitários (Tailwind v4)
  academy/                 # a "loja" (cursos + dossiês)
    page.tsx               # índice: hero + faixa de confiança + seções Cursos × Dossiês
    [slug]/page.tsx        # detalhe do produto (genérico) + branch do Acervo
  artigos/                 # blog/artigos (inclui os importados do Instagram)
  categorias/ metodos/ humint/ recursos/ sobre/ contato/ formacao/ livro/
  lp/                      # landing "Como Avaliar Pessoas" (R$49) — NÃO MEXER sem pedir
  api/                     # rotas de form (contato, etc.)
components/
  site/                    # header, footer, article-card, member-exclusives, etc.
  shop/                    # Academy: shop-hero, product-grid, product-card,
                           # acervo-detail (página de vendas rica do Acervo)
  ui/                      # shadcn/ui (não editar à toa)
lib/
  products.ts              # CATÁLOGO da Academy (tipo Product + PRODUCTS + getProductBySlug)
  site.ts                  # SITE (nome/urls) e NAV.primary (menu)
  content/
    articles.ts            # tipos Article/ArticleBlock + artigos manuais
    instagram-articles.generated.ts  # GERADO — não editar à mão
    categories.ts methods.ts resources.ts
  seo.ts schema.ts format.ts analytics.ts utils.ts
data/
  instagram-export.json    # fonte dos artigos do Instagram (entrada do gerador)
public/images/
  shop/                    # capas dos produtos (acervo-tatico.webp, dossie-01..06.webp, ...)
  instagram/ carrossel/    # imagens dos artigos
scripts/
  generate-instagram-articles.mjs   # JSON -> instagram-articles.generated.ts
```

## Design system (em `app/globals.css`)

Estética editorial: **escuro + dourado + serifada**, alinhado à esquerda, cantos retos.
Evitar "AI slop": nada de gradiente roxo, centralização excessiva, cantos arredondados
uniformes ou fonte Inter.

Tokens (CSS vars) e utilitários equivalentes:
- Dourado: `--color-gold` #d9a523, `gold-hover`, `gold-active`, `on-gold` → `.text-gold`, `.bg-gold`, `.text-on-gold`, `hover:bg-gold-hover`
- Tinta: `ink`, `ink-soft`, `ink-muted` → `.text-ink`, `.text-ink-soft`, `.text-ink-muted`
- Papel (fundos claros): `paper`, `paper-strong`, `paper-deep` → `.bg-paper*`
- Escuro: `deep`, `deep-2`, `ink` → `.bg-deep`, `.bg-deep-2`, `.bg-ink`; texto claro `--color-warm-text` → `.text-warm`
- Linhas: `line` → `.border-line`, `.hairline-b`; alerta `--color-alert` → `.text-alert`
- Utilitários próprios: `.eyebrow`, `.eyebrow-gold` (rótulos mono dourados), `.container-editorial` (container padrão), `font-display` (serifada), `font-mono`

Ao criar telas novas, **reutilize esses tokens/utilitários** (não invente cores).

## Academy (a loja)

- Catálogo em `lib/products.ts` (`PRODUCTS`). Cada `Product`: id, nome, tipo, badge?, preco,
  parcelado, descricao, destaques?, ementa?, image, imageAlt, checkoutUrl, destaque?.
- **Card mostra só o parcelado** (preço cheio não), selo **Cartão · Pix**, "Comprar agora"
  abre o `checkoutUrl` (HeroSpark) em **nova aba**, "Ver detalhes" → `/academy/<id>`.
- `/academy` separa em **Cursos** (`tipo` contém "curso") e **Dossiês / e-books** (`tipo` contém "book").
- `/academy/[slug]`: template genérico (capa + preço + ementa) **exceto** `acervo-tatico`,
  que renderiza `components/shop/acervo-detail.tsx` — página de vendas rica (conteúdo
  adaptado da humint.click: situação real, 6 dossiês + núcleo, ética, oferta, FAQ, aviso de segurança).
- Produtos atuais: **Acervo Tático** (R$900 · 12x R$93,09 · "Mais vendido"),
  **Engenharia Social** (R$120 · 12x R$12,41), **Dossiês 01–06** (R$190 · 12x R$19,65 · E-book).
- `/shop` redireciona para `/academy` e `/assinar` foi removido (ver `next.config.mjs`).
  A "Assinatura" foi substituída pela narrativa da Academy em todo o site.

## Pipeline de conteúdo (Instagram → artigos)

1. Edite/atualize `data/instagram-export.json`.
2. Rode `pnpm generate:instagram-articles`.
3. Isso reescreve `lib/content/instagram-articles.generated.ts` (NÃO edite esse arquivo à mão).
Slug dos artigos: `instagram-<shortcode>-<resumo>`. Capas em `public/images/instagram/`.

## Convenções e cuidados

- **Preços parcelados** nos cards (sem preço cheio); selo Cartão · Pix; CTAs de compra em nova aba.
- **`/lp` é intocável** salvo pedido explícito.
- Não editar `lib/content/instagram-articles.generated.ts` nem `components/ui/*` sem necessidade.
- Mantenha **fim de linha LF**.
- O header é renderizado em `<Suspense>`; o fallback fica em `app/layout.tsx` (`HeaderFallback`).
  Ao mudar o header/CTA, ajuste **os dois** (fallback + `components/site/site-header.tsx`).

## Deploy / verificação

- `git push origin main` → Vercel republica automaticamente.
- Como há cache de CDN, verifique a página com um cache-buster (`?v=algo`) e avise pra dar **Ctrl+F5**.
