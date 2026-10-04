# CLAUDE.md — Mundo da HUMINT (repo `humintwlrd/center`)

Contexto do projeto para o Claude Code. Site institucional + conteúdo + Academy (loja de
cursos/e-books) do **Mundo da HUMINT** (mundodahumint.com).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config via `@theme`/`@utility` em `app/globals.css`, sem `tailwind.config`)
- **pnpm** (10.11) — use `pnpm`, não `npm` (há `pnpm-lock.yaml`)
- Ícones: **lucide-react**. Componentes próprios em `components/site` e `components/shop` (config shadcn em `components.json`, sem componentes instalados)
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
  lp/                      # landing "Como Avaliar Pessoas" (R$49) — só mexer com pedido explícito
                           # (visual anterior, escopo .world-legacy)
  pv/                      # landing de vendas do Acervo (header/footer próprios, Utmify,
                           # visual anterior, escopo .world-legacy)
  error.tsx not-found.tsx  # páginas de erro no padrão visual
  api/                     # rotas de form (contato, etc.)
components/
  site/                    # header, footer, page-header, section-heading, split-section,
                           # academy-cta, article-card, breadcrumbs, formulários,
                           # dot-matrix, roll, rise-text, scrub-text, scroll-reveal,
                           # declassify (tarjas da /pv e /lp)
  shop/                    # Academy: shop-hero, product-grid, product-card, product-feature,
                           # acervo-detail (página de vendas rica do Acervo)
  landing/                 # peças da /pv (sticky-nav, mobile-sticky-cta, access-button, utmify)
                           # (sem components/ui: nenhum componente shadcn em uso hoje)
lib/
  products.ts              # CATÁLOGO da Academy (tipo Product + PRODUCTS + getProductBySlug)
  dot-patterns.ts          # padrões das ilustrações em matriz de pontos (olho, anel, relevo, ícones)
  site.ts                  # SITE (nome/urls) e NAV.primary (menu)
  content/
    articles.ts            # tipos Article/ArticleBlock + artigos manuais
    instagram-articles.generated.ts  # GERADO — não editar à mão
    categories.ts methods.ts resources.ts
  seo.ts schema.ts format.ts analytics.ts utils.ts
  consent.ts               # escolha do banner de cookies (lida por Analytics e pixel)
  testimonials.ts          # os 7 DMs reais (capturas + trechos transcritos literalmente)
  webhook.ts               # postToWebhook: envio dos formulários com checagem de resposta
data/
  instagram-export.json    # fonte dos artigos do Instagram (entrada do gerador)
public/images/
  shop/                    # capas dos produtos (acervo-tatico.webp, dossie-01..06.webp, ...)
  instagram/ carrossel/    # imagens dos artigos
scripts/
  generate-instagram-articles.mjs   # JSON -> instagram-articles.generated.ts
.claude/
  skills/impeccable/       # skill de design do redesign de set/2026 (Apache-2.0, ver LICENSE/NOTICE)
  agents/impeccable-*.md   # revisor final, documentador etc. da skill
```

Na raiz há um **pacote de atualização não aplicado** (`APLICAR.md`, `CHANGES.diff`, `page.tsx`,
`instagram-export.json`): transcrições OCR dos carrosséis de 50 posts. O OCR tem muito ruído
("E a a Res Roso oficio..."); não aplique sem revisar o texto à mão.

## Design system (em `app/globals.css`; registro completo em `DESIGN.md`)

Desde 2026-10-03 o site segue o **layout e o web design da referência QuantumLab** (template Webflow,
home V1 e V2), a pedido do dono: estrutura, ritmo, tipografia, grade de filetes e interações da
referência, com **os textos do Mundo da HUMINT**. Nenhum asset do template foi copiado: as ilustrações
em matriz de pontos são desenhadas em `lib/dot-patterns.ts`. A `/pv` e a `/lp` continuam no visual
anterior pelo escopo `.world-legacy` (fim de `app/globals.css`).

Regras:
- **Uma família**: Inter Tight (`next/font`, `--font-inter-tight`). Títulos em **peso 500** e tracking
  −0.03em (nada de 700/800); botões em 600 e caixa-alta. A Archivo só carrega para o escopo legado.
- **Monocromático, sem acento**: tinta `#161616`, texto `#505050`, rótulo `#ababab`, filete `#e3e3e3`,
  neutro `#fbfbfb`, faixa escura `#161616`. A ação é a tinta (`btn-signal`: preto no claro, branco no
  escuro). Vermelho (`danger`) só em erro de formulário.
- **Cantos retos**, sem sombras, sem gradiente decorativo.
- **Rótulo acima do título** (`subtitle`) faz parte do padrão: curto, com vocabulário que já existe no
  site (Casos, Academy, Depoimentos, Artigos...). Não invente copy nova.
- Fotos editoriais em preto e branco (`mono`, cor no hover). Capas do Instagram (9:16, com legenda
  gravada) **nunca** são recortadas: inteiras, `object-contain` sobre `bg-night` (ver `ArticleCard`).

Tokens (Tailwind v4 gera `bg-*`, `text-*`, `border-*`):
- Claro: `snow` #fff, `snow-2` #fbfbfb, `snow-3` #f3f3f3; tinta `ink`, `ink-2`, `ink-3`, `ink-4`; filetes `line`, `line-2`
- Escuro: `night`, `night-2`, `night-3`, `line-night`; texto `mist`, `mist-2`
- Ação: `signal`, `signal-hover`, `on-signal` (seguem o tom da superfície) · erro: `danger`
- Escala: `text-mega` (manchete da home), `text-display`, `text-title`, `text-heading`, `text-lede`

Utilitários próprios (`@utility`):
- Superfícies: `night`, `night-2` (ajustam `--tone-*`, `signal` e campos). Seguem o tom: `text-tone`,
  `text-tone-2`, `text-tone-3`, `text-tone-4`, `border-tone`, `bg-cell`
- Layout: `container-site` (1186px = 1138 de conteúdo); `frame` (filetes verticais nas bordas do
  conteúdo); `rule-t` / `rule-b` (filetes horizontais longos que esmaecem; ajuste com `--rule-left`,
  `--rule-width`, `--rule-shift`); `grid-fade` (grade clara do hero); `rail` + `scroller`
- Tipo: `subtitle` (rótulo), `meta` (data / categoria), `tabular`, `prose-read`
- Botões: `btn` + `btn-signal` | `btn-solid` | `btn-line` (+ `btn-sm`); `arrow-cell`; link `link-more`
- Formulários: `field`, `field-label` · Imagem: `media-zoom`, `mono`
- Movimento: `words-rise` (via `RiseText`), `blur-in`, `scrub` (via `ScrubText`), `roll` (via `Roll`),
  `marquee`; `[data-reveal]` + `ScrollReveal`
- Legado (só /pv e /lp): `redact`, `withheld`, `bar-mark`, `font-expanded`

Movimento (interações da referência): manchete que sobe palavra a palavra, linha fina que entra do
desfoque, blocos que entram ao rolar (`data-reveal`), parágrafo grande que acende com a rolagem,
faixas em loop que param no hover, texto de botão que rola no hover, pontos que piscam devagar.
Tudo respeita `prefers-reduced-motion` e nada fica escondido sem JS (o reveal só oculta sob `html.js`,
marcado no `<head>` do layout).

Componentes (reutilize antes de criar markup novo):
- `PageHeader` (`tone="snow" | "night"`, `size="lg" | "md"`, trilha, h1, linha fina, `aside`)
- `SectionHeading` (`eyebrow`, h2, descrição, botão à direita, `align`) · `SplitSection` (`eyebrow`)
- `AcademyCta` (`band` | `card`) · `ArticleCard` (`feature` | `cell` | `default` | `case` | `row` | `compact`)
- Academy: `ShopHero` (anel de pontos), `ProductFeature`, `ProductCard` (exporta `splitParcelado`), `ProductGrid`
- `DotMatrix` + `lib/dot-patterns.ts` (`eyePattern`, `ringPattern`, `terrainPattern`, `ICON_EYE`,
  `ICON_LENS`, `ICON_SHIELD`) · `Roll` · `RiseText` · `ScrubText` · `ScrollReveal`

`cn()` (`lib/utils.ts`) usa `extendTailwindMerge` com `mega/display/title/heading/lede`; se
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
- **`/pv` lê preço e checkout do catálogo** (`ACERVO` em `lib/products.ts`): mude o preço só lá.
- **`/lp`**: checkout em `NEXT_PUBLIC_LP_CHECKOUT_URL` (Vercel). Sem a variável, a página fica `noindex`.
- `/shop` redireciona para `/academy` e `/assinar` foi removido (ver `next.config.mjs`).
  A "Assinatura" foi substituída pela narrativa da Academy em todo o site.

## Pipeline de conteúdo (Instagram → artigos)

1. Edite/atualize `data/instagram-export.json`.
2. Rode `pnpm generate:instagram-articles`.
3. Isso reescreve `lib/content/instagram-articles.generated.ts` (NÃO edite esse arquivo à mão).
Slug dos artigos: `instagram-<shortcode>-<resumo>`. Capas em `public/images/instagram/`.

## Privacidade e formulários

- Banner de cookies grava a escolha em `localStorage` (`lib/consent.ts`). "Só essenciais" desliga
  o Vercel Analytics (`components/site/site-analytics.tsx`) e o pixel da Utmify na `/pv`.
  O banner não aparece na `/pv` (decisão de conversão, ver `app/pv/pv.css`).
- Rotas de formulário (`app/api/*`) enviam para webhooks via `postToWebhook`: só respondem
  sucesso se o webhook devolver 2xx em até 10 s.

## Convenções e cuidados

- **Preços parcelados** nos cards (sem preço cheio); selo Cartão · Pix; CTAs de compra em nova aba.
- **`/lp` é intocável** salvo pedido explícito (o redesign de 2026 foi pedido pelo dono).
- Não editar `lib/content/instagram-articles.generated.ts` à mão.
  Para um componente shadcn novo, adicione só o que for usar (`pnpm dlx shadcn@latest add <nome>`).
- Depoimentos: só os de `lib/testimonials.ts`; os trechos são literais das capturas, não edite.
- Mudanças de design: siga o `DESIGN.md` (padrão QuantumLab). Na `/pv` e na `/lp`, o visual anterior
  (escopo `.world-legacy`) e a skill impeccable (`.claude/skills/impeccable`).
- **Não cite o instrutor nem o anonimato dele** (nada de "instrutor anônimo" ou "o foco está no
  método, não em quem ensina"). Também não mostre nome ou rosto.
- Mantenha **fim de linha LF**.
- O header é fixo (`sticky`) e renderizado em `<Suspense>`; o fallback fica em `app/layout.tsx`
  (`HeaderFallback`). Ao mudar o header/CTA, ajuste **os dois** (fallback + `components/site/site-header.tsx`).
  Ele tem 64px no celular e 67px no desktop: barras fixas abaixo dele usam `top-16 lg:top-[67px]`.

## Deploy / verificação

- `git push origin main` → Vercel republica automaticamente.
- Domínios: o canônico é `https://mundodahumint.com` (fixo em `SITE.url`, `lib/site.ts`). O `.com.br`
  (com ou sem `www`) aponta para o mesmo projeto Vercel e redireciona com 308 para o `.com` pelo
  `next.config.mjs`. Na Vercel, nunca configure redirecionamento `.com` → `.com.br` (daria loop).
  E-mail: `contato@mundodahumint.com.br` (caixa de e-mail, não muda).
- Como há cache de CDN, verifique a página com um cache-buster (`?v=algo`) e avise pra dar **Ctrl+F5**.
