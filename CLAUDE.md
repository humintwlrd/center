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
  pv/                      # landing de vendas do Acervo (header/footer próprios, Utmify)
  error.tsx not-found.tsx  # páginas de erro no padrão visual
  api/                     # rotas de form (contato, etc.)
components/
  site/                    # header, footer, page-header, section-heading, split-section,
                           # academy-cta, article-card, breadcrumbs, declassify, formulários
  shop/                    # Academy: shop-hero, product-grid, product-card, product-feature,
                           # acervo-detail (página de vendas rica do Acervo)
  landing/                 # peças da /pv (sticky-nav, mobile-sticky-cta, access-button, utmify)
                           # (sem components/ui: nenhum componente shadcn em uso hoje)
lib/
  products.ts              # CATÁLOGO da Academy (tipo Product + PRODUCTS + getProductBySlug)
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
  skills/impeccable/       # skill de design usada no redesign (Apache-2.0, ver LICENSE/NOTICE)
  agents/impeccable-*.md   # revisor final, documentador etc. da skill
```

Na raiz há um **pacote de atualização não aplicado** (`APLICAR.md`, `CHANGES.diff`, `page.tsx`,
`instagram-export.json`): transcrições OCR dos carrosséis de 50 posts. O OCR tem muito ruído
("E a a Res Roso oficio..."); não aplique sem revisar o texto à mão.

## Design system (em `app/globals.css`; registro completo em `DESIGN.md`)

Mundo visual definido com a skill **impeccable** (contrato em `.impeccable/surfaces/app-page-tsx.md`,
produto em `PRODUCT.md`). Tese: **uma escola de inteligência apresentada como o site de uma agência**:
preto, branco e um vermelho de operação, tipografia estendida e pesada, casos reais como capítulos.
Referências: MasterClass "The Art of Intelligence", CIA.gov (2021) e SPYSCAPE. **Não** é portal
editorial: nada de filetes decorativos, rótulos acima de títulos ou colunas de jornal.

Regras que não se negociam:
- **Uma família**: Archivo variável (`next/font`, eixo `wdth`). Títulos com `font-expanded`
  (largura 118–125%) e `font-extrabold`; texto corrido em largura normal. Sem serifada, sem mono.
- **Um acento**: `signal` (#e5252a), reservado a ação (CTA de compra, foco, link ativo, hover, erro de formulário)
  e à tarja liberada. Nada de vermelho decorativo: ícones, marcadores, numerais e selos ficam em tinta/branco.
- **Cantos retos** (radius 0), sem sombras, sem gradiente decorativo (só o escurecimento da foto do hero).
- **Proibido** (craft floor da skill): eyebrow/kicker acima de título, numeração de seção decorativa,
  borda lateral colorida (>1px) em citação/callout, mono “de fantasia”, cards com ícone em bolha,
  template “número grande + legenda”, fontes Inter/Newsreader/IBM Plex/Space Grotesk/Fraunces.

Tokens (Tailwind v4 gera `bg-*`, `text-*`, `border-*`):
- Noite (vendas): `night` #0b0b0c, `night-2`, `night-3`, `line-night`; texto claro `mist`, `mist-2`, `white`
- Papel (leitura): `snow` #fff, `snow-2` #f3f3f2; tinta `ink`, `ink-2`, `ink-3`; filete `line`
- Sinal: `signal`, `signal-hover`, `on-signal`
- Escala fluida: `text-mega` (manchete da home), `text-display`, `text-title`, `text-heading`, `text-lede`

Utilitários próprios (`@utility`):
- Superfícies: `night`, `night-2` (seção escura; ajustam `--tone-*` para botões, campos e textos).
  Cores que seguem o tom: `text-tone`, `text-tone-2`, `text-tone-3`, `border-tone`
- Layout: `container-site` (máx. 1360px); `rail` + `scroller` para trilhos horizontais com
  scroll-snap alinhados ao container (casos, depoimentos)
- Tipo: `font-expanded`, `tabular`; texto longo `prose-read`
- Tarjas: `redact` (trecho tarjado que o `Declassify` libera uma vez ao entrar na tela;
  `data-delay` em ms), `withheld` (tarja fixa para trecho omitido, ex.: prévia de documento na /lp) e
  `bar-mark` (marcador de lista em forma de tarja curta; use no lugar de check/traço)
- Botões: `btn` + `btn-signal` | `btn-solid` | `btn-line` (+ `btn-sm`/`btn-lg`); link `link-more`
- Formulários: `field`, `field-label` · Imagem em card: `media-zoom`

Movimento: a liberação da tarja (`components/site/declassify.tsx`, montado no layout) é o
**único** momento autoral. Respeita `prefers-reduced-motion` e funciona sem JS (texto visível).
Use no máximo uma tarja por tela, em manchete. Sem marquee, pulso, scroll-reveal ou ticker animado.

Imagens: capas do Instagram (9:16, com legenda gravada) **nunca** são recortadas; aparecem
inteiras com `object-contain` sobre `bg-night` dentro do quadro 4:5 (ver `ArticleCard`).
Números só quando carregam ordem (capítulos de casos, passos de acesso, partes/capítulos).

Componentes de página (reutilize antes de criar markup novo):
- `PageHeader` (`tone="snow" | "night"`, `size="lg" | "md"`, trilha, h1, linha fina, `aside`)
- `SectionHeading` (h2 + descrição + link) · `SplitSection` (título 5/12 + conteúdo 7/12, `sticky`)
- `AcademyCta` (`band` | `card`) · `ArticleCard` (`default` | `case` | `row` | `compact`)
- Academy: `ShopHero`, `ProductFeature`, `ProductCard` (exporta `splitParcelado`), `ProductGrid`

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
- Mudanças de design: siga a skill impeccable (`.claude/skills/impeccable`) e o `DESIGN.md`.
- **Não cite o instrutor nem o anonimato dele** (nada de "instrutor anônimo" ou "o foco está no
  método, não em quem ensina"). Também não mostre nome ou rosto.
- Mantenha **fim de linha LF**.
- O header é fixo (`sticky`) e renderizado em `<Suspense>`; o fallback fica em `app/layout.tsx`
  (`HeaderFallback`). Ao mudar o header/CTA, ajuste **os dois** (fallback + `components/site/site-header.tsx`).
  Barras fixas abaixo dele usam `top-16 lg:top-[72px]`.

## Deploy / verificação

- `git push origin main` → Vercel republica automaticamente.
- Domínios: `mundodahumint.com` e `.com.br` apontam para o mesmo projeto Vercel; o canônico vem de
  `NEXT_PUBLIC_SITE_URL` (padrão `https://www.mundodahumint.com.br`). E-mail: `contato@mundodahumint.com.br`.
- Como há cache de CDN, verifique a página com um cache-buster (`?v=algo`) e avise pra dar **Ctrl+F5**.
