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
  pv/                      # landing de vendas do Acervo (header/footer próprios, Utmify)
  error.tsx not-found.tsx  # páginas de erro no padrão visual
  api/                     # rotas de form (contato, etc.)
components/
  site/                    # header, footer, page-header, section-heading, split-section,
                           # academy-cta, article-card, breadcrumbs, formulários
  shop/                    # Academy: shop-hero, product-grid, product-card, product-feature,
                           # acervo-detail (página de vendas rica do Acervo)
  landing/                 # peças da /pv (sticky-nav, mobile-sticky-cta, depoimentos...)
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

Estética editorial: **preto/branco + acento verde**, títulos em **serifada**, alinhado à
esquerda, **cantos retos**. Vermelho **só** para alerta (carimbos, erros). Evitar "AI slop":
nada de gradiente decorativo, centralização excessiva, cards com ícone em bolha, sombras,
cantos arredondados ou fonte Inter.

Fontes (via `next/font` em `app/layout.tsx`):
- `font-display` / `font-serif` → **Newsreader** (títulos e texto de artigo)
- `font-sans` → **Schibsted Grotesk** (UI e texto corrido)
- `font-mono` → **IBM Plex Mono** (rótulos, metadados)

Tokens (Tailwind v4 gera `bg-*`, `text-*`, `border-*` com suporte a `/opacidade`):
- Marca: `brand` #15803d, `brand-hover`, `brand-press`, `brand-soft`, `brand-bright` #4ade80 (acento sobre escuro), `on-brand`
- Papel: `paper` #f6f6f3, `paper-strong` #fff, `paper-deep` · Tinta: `ink`, `ink-soft`, `ink-muted`
- Filetes: `line`, `line-strong` (claro) · `line-dark`, `line-dark-strong` (escuro)
- Escuro: `deep` #0a0a0a, `deep-2`, `deep-3` · texto claro `fog`, `fog-muted`
- Alerta: `alert`, `alert-bright`
- Escala fluida: `text-display-2xl|xl|lg|md|sm`, `text-lede` (já com line-height/tracking)

Utilitários próprios (`@utility`):
- Superfícies: `surface-deep`, `surface-deep-2` (seção escura; ajusta sozinhas eyebrow, kicker, botões, campos). Cores que seguem o tom: `text-tone`, `text-tone-muted`, `border-tone`
- Layout: `container-editorial`, `prose-measure`, `rule-top` (filete grosso de seção), `hairline-t/b`
- Rótulos: `kicker` (mono com quadrado verde), `eyebrow`, `eyebrow-brand`, `stamp`
- Botões: `btn` + `btn-primary` | `btn-ink` | `btn-outline` (+ `btn-sm`/`btn-lg`); link `link-arrow`
- Texto: `article-prose` (serifada, artigos), `doc-prose` (institucional/legal)
- Formulários: `field`, `field-label` · Imagem em card: `media-zoom`

Componentes de página (reutilize antes de criar markup novo):
- `PageHeader` (abertura padrão: trilha, kicker, h1, linha fina, `tone="deep"` opcional)
- `SectionHeading` (cabeçalho de seção com filete) · `SplitSection` (título 4/12 + conteúdo 8/12)
- `AcademyCta` (`band` | `card`) · `ArticleCard` (`default` | `lead` | `row` | `compact`)

`cn()` (`lib/utils.ts`) usa `extendTailwindMerge` com a escala `display-*`/`lede`; se
criar novos tamanhos de texto, registre-os lá, senão o merge os descarta.

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
- O header é fixo (`sticky`) e renderizado em `<Suspense>`; o fallback fica em `app/layout.tsx`
  (`HeaderFallback`). Ao mudar o header/CTA, ajuste **os dois** (fallback + `components/site/site-header.tsx`).
  Barras fixas abaixo dele usam `top-16 lg:top-[72px]`.

## Deploy / verificação

- `git push origin main` → Vercel republica automaticamente.
- Como há cache de CDN, verifique a página com um cache-buster (`?v=algo`) e avise pra dar **Ctrl+F5**.
