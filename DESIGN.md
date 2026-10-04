---
name: Mundo da HUMINT
description: Escola de inteligência humana aplicada. Layout e web design adaptados da referência QuantumLab (home V1 + V2), monocromática, com os textos do Mundo da HUMINT.
colors:
  night: "#161616"
  night-2: "#1b1b1b"
  night-3: "#232323"
  line-night: "#292929"
  mist: "#e3e3e3"
  mist-2: "#ababab"
  snow: "#ffffff"
  snow-2: "#fbfbfb"
  snow-3: "#f3f3f3"
  ink: "#161616"
  ink-2: "#505050"
  ink-3: "#757575"
  ink-4: "#ababab"
  line: "#e3e3e3"
  line-2: "#cfcfcf"
  signal: "#161616 (claro) / #ffffff (faixa escura)"
  danger: "#d92d20"
typography:
  family: "Inter Tight (next/font, variável), ui-sans-serif, system-ui, sans-serif"
  mega: { fontSize: "clamp(2.25rem, 1.85rem + 1.25vw, 3rem)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.03em" }
  display: { fontSize: "clamp(2rem, 1.7rem + 0.95vw, 2.8rem)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.03em" }
  title: { fontSize: "clamp(1.75rem, 1.55rem + 0.62vw, 2.25rem)", fontWeight: 500, lineHeight: 1.25, letterSpacing: "-0.03em" }
  heading: { fontSize: "clamp(1.375rem, 1.22rem + 0.5vw, 1.875rem)", fontWeight: 500, lineHeight: 1.25, letterSpacing: "-0.03em" }
  body: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5, letterSpacing: "-0.03em", color: "{colors.ink-2}" }
  subtitle: { fontSize: "0.875rem", fontWeight: 500, textTransform: "uppercase", color: "{colors.ink-4}" }
  button: { fontSize: "0.875rem", fontWeight: 600, textTransform: "uppercase" }
layout:
  container: "1186px (1138px de conteúdo + 24px de respiro de cada lado; 16px no celular)"
  sectionPadding: "140px (seção), 120px (seção curta), 80px no celular"
radius: 0
shadows: none
---

# Design System: Mundo da HUMINT

## Overview

Desde 2026-10-03 o site segue o layout e o web design da referência **QuantumLab** (template Webflow,
páginas home V1 e V2), a pedido do dono: "copie o layout e o UI/UX dessa referência e mantenha só os
nossos textos". A estrutura, o ritmo, a tipografia, a grade de filetes e as interações são da
referência. Os textos, as imagens editoriais, as capas e as ilustrações são nossos: as ilustrações em
matriz de pontos (olho, lente, escudo, relevo, anel) são desenhadas em `lib/dot-patterns.ts` e
nenhum asset do template foi copiado.

**Características:**
- Monocromático: tinta `#161616`, texto corrido `#505050`, rótulos `#ababab`, filetes `#e3e3e3`,
  fundo neutro `#fbfbfb` e faixas escuras `#161616`. Não há cor de acento; a ação é a própria tinta
  (botão preto no claro, branco no escuro). Vermelho (`danger`) só em erro de formulário.
- Uma família: **Inter Tight**. Títulos em peso 500 com tracking −0.03em; botões e rótulos em caixa-alta.
- Cantos retos, sem sombra, sem gradiente.
- Filetes de 1px enquadram o conteúdo: verticais nas bordas do conteúdo (`frame`) e horizontais que
  passam do container e somem nas pontas (`rule-t`, `rule-b`).
- Ilustrações em matriz de quadrados (`DotMatrix`), em SVG leve (um path por tom).
- Fotos editoriais em preto e branco (`mono`), ganhando cor no hover. Capas do Instagram (9:16) nunca
  são recortadas: aparecem inteiras sobre a noite.

## Colors

| Token | Valor | Uso |
| --- | --- | --- |
| `ink` | #161616 | títulos, botão primário no claro, faixas escuras |
| `ink-2` | #505050 | texto corrido (cor do `body`) |
| `ink-3` | #757575 | metadados pequenos (contraste AA) |
| `ink-4` | #ababab | rótulo acima do título (`subtitle`) |
| `line` / `line-2` | #e3e3e3 / #cfcfcf | filetes e bordas de campo |
| `snow` / `snow-2` / `snow-3` | #fff / #fbfbfb / #f3f3f3 | fundo, faixa neutra, painéis |
| `night` / `night-2` / `night-3` | #161616 / #1b1b1b / #232323 | faixas escuras e rodapé |
| `line-night` | #292929 | filetes no escuro |
| `mist` / `mist-2` | #e3e3e3 / #ababab | texto no escuro |
| `signal` | tinta no claro, branco no escuro | `btn-signal`, foco |
| `danger` | #d92d20 | erro de formulário |

As superfícies `night` e `night-2` redefinem os tons (`--tone-*`), o `signal` e as cores de campo,
então botões, campos e textos dentro delas se ajustam sozinhos (`text-tone`, `text-tone-2..4`,
`border-tone`, `bg-cell`).

## Typography

Inter Tight variável (`next/font`, variável `--font-inter-tight`).

| Papel | Classe | Referência a 1440px |
| --- | --- | --- |
| Manchete da home | `text-mega` | 48px / 1.12 |
| Título de página | `text-display` | 44.8px / 1.15 |
| Título de seção | `text-title` | 36px / 1.25 |
| Título de card/parágrafo grande | `text-heading` | 30px / 1.25 |
| Título de célula | `text-xl` | 20px / 1.25 |
| Texto | (base) | 16px / 1.5, #505050 |
| Rótulo | `subtitle` | 14px, 500, caixa-alta, #ababab |
| Detalhes (data / categoria) | `meta` | 14px, 500, caixa-alta, barra `/` em `line` |
| Botão | `btn` | 14px, 600, caixa-alta |

Todo título usa peso 500 (nada de 700/800). O tracking −0.03em vale para todo o texto.

## Layout

- `container-site`: 1186px máximos com 24px de respiro (16px no celular): 1138px de conteúdo.
- Seções com 140px de respiro vertical (120px nas faixas neutras; 80px no celular).
- Grade de filetes: células com `border-r border-b` dentro de um contêiner com `border-t border-l`;
  `frame` desenha as verticais nas bordas do conteúdo; `rule-t`/`rule-b` desenham as horizontais
  longas que esmaecem (ajuste fino por `--rule-left`, `--rule-width`, `--rule-shift`).
- `main` e o rodapé têm `overflow-x: clip`, para os filetes de 100vw não criarem rolagem lateral.

## Components

- **Header** (`components/site/site-header.tsx` + `HeaderFallback` em `app/layout.tsx`): caixa com
  filete à esquerda e embaixo, logo, navegação em caixa-alta com texto que rola no hover (`Roll`),
  busca e o CTA "Acervo Tático" em bloco escuro encostado à direita. 64px no celular, 67px no desktop.
- **Botões** (`btn` + `btn-signal` | `btn-solid` | `btn-line`, `btn-sm`): 66px de altura, caixa-alta,
  chevron que avança 3px; o texto rola no hover quando envolvido em `<Roll>`.
- **Seta em célula** (`arrow-cell`): quadrado de 60px no canto do card; inverte no hover do `.group`.
- **Cards de artigo** (`ArticleCard`): `feature` (imagem à esquerda, texto à direita, seta no canto),
  `cell` (célula de texto com seta, imagem opcional), `default`, `case`, `row`, `compact`.
- **Produtos**: `ProductFeature` (painel de capa + oferta), `ProductCard` (célula da grade),
  `ProductGrid` (grade com filetes), `ShopHero` (título dentro do anel de pontos, hero V2).
- **Seções**: `PageHeader` (trilha em caixa-alta no lugar do rótulo, título 500, linha fina),
  `SectionHeading` (rótulo opcional, título, descrição e botão escuro à direita), `SplitSection`,
  `AcademyCta` (faixa escura com relevo de pontos; variante `card`).
- **Rodapé**: células de logo e CTA, chamada + links com chevron em duas colunas, três contatos com
  ícone em quadrado, barra final com direitos e links legais.
- **Campos** (`field`, `field-label`): 64px, borda `line`, hover/foco escurece a borda e acende o fundo.

## Motion

Interações da referência, todas respeitando `prefers-reduced-motion` e legíveis sem JS:
- `RiseText`: palavras da manchete sobem de uma máscara ao carregar (só CSS).
- `blur-in`: linha fina e ações entram do desfoque, com atraso (`--d`).
- `[data-reveal]` + `ScrollReveal`: blocos entram do desfoque ao chegar na tela. Só escondem sob
  `html.js` (marcado no `<head>`; se o componente não montar em 3s, a marca sai).
- `ScrubText`: parágrafo grande que acende letra a letra com a rolagem.
- `marquee`: faixas em loop (temas, depoimentos) que param no hover/foco.
- `DotMatrix`: `wipe` revela a grade linha a linha; `twinkle` faz alguns pontos piscarem devagar.
- `Roll`: texto de botão e navegação rola para cima no hover.

## Do's and Don'ts

**Faça:** reutilize tokens e componentes acima; mantenha títulos em 500; use `subtitle` curto com
vocabulário que já existe no site; desenhe novas ilustrações como padrões em `lib/dot-patterns.ts`.

**Não faça:** copiar imagens, ícones ou código do template; usar cor de acento (o vermelho só aparece
em erro de formulário); pesos 700/800; cantos arredondados, sombras ou gradientes decorativos;
recortar capas do Instagram.

## Mundo legado (/pv e /lp)

A `/pv` (venda do Acervo) e a `/lp` ("Como Avaliar Pessoas") continuam no sistema anterior (Archivo
variável estendida em 800, vermelho de operação #e5252a, grade de 1360px, tarjas `redact`,
`withheld` e `bar-mark`). O escopo `.world-legacy` (fim de `app/globals.css`) restaura esses tokens
e utilitários só dentro dessas páginas; a Archivo é carregada sem preload. A especificação completa
desse sistema está no histórico do git (DESIGN.md até o commit `43e6c34`).
