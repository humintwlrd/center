---
name: Mundo da HUMINT
description: Escola de inteligência humana aplicada, apresentada como o site de uma agência. Preto, branco e um vermelho de operação.
colors:
  signal: "#e5252a"
  signal-hover: "#c81e23"
  on-signal: "#ffffff"
  night: "#0b0b0c"
  night-2: "#151516"
  night-3: "#202022"
  line-night: "#2e2e31"
  mist: "#b6b6ba"
  mist-2: "#8c8c92"
  snow: "#ffffff"
  snow-2: "#f3f3f2"
  ink: "#0b0b0c"
  ink-2: "#3a3a3d"
  ink-3: "#66666c"
  line: "#e3e3e5"
typography:
  mega:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.15rem + 6.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.25rem + 3.8vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.15rem + 2.2vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.024em"
    fontVariation: "'wdth' 125"
  heading:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1.12rem + 0.75vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1.14
    letterSpacing: "-0.014em"
    fontVariation: "'wdth' 125"
  lede:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.04rem + 0.36vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  prose:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.72
    fontVariation: "'wdth' 100"
  card-title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.375
    fontVariation: "'wdth' 112"
  button:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'wdth' 112"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  meta:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    fontVariation: "'wdth' 100"
rounded:
  none: "0px"
spacing:
  gutter: "20px"
  gutter-md: "32px"
  gutter-lg: "48px"
  section: "80px"
  section-md: "112px"
  heading-gap: "40px"
  heading-gap-md: "56px"
  column-gap: "48px"
  column-gap-lg: "64px"
  row: "16px"
  row-lg: "32px"
components:
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
    height: "48px"
  button-signal-hover:
    backgroundColor: "{colors.signal-hover}"
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.snow}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
    height: "48px"
  button-solid-night:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.night}"
  button-solid-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
  button-line:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.snow}"
  button-line-night:
    textColor: "{colors.snow}"
  button-line-night-hover:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.night}"
  button-lg:
    padding: "16px 30px"
    height: "56px"
  button-sm:
    padding: "9px 16px"
    height: "40px"
  field:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: "48px"
  field-night:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.snow}"
  field-label:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  badge:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  feature-panel:
    backgroundColor: "{colors.snow-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "56px"
  feature-panel-night:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.snow}"
  cta-card:
    backgroundColor: "{colors.night}"
    textColor: "{colors.snow}"
    rounded: "{rounded.none}"
    padding: "28px"
  nav-link:
    textColor: "{colors.mist}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.snow}"
  redact-bar:
    backgroundColor: "{colors.ink}"
  redact-bar-night:
    backgroundColor: "{colors.snow}"
  bar-mark:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "1.1em"
    height: "0.42em"
  bar-mark-night:
    backgroundColor: "{colors.snow}"
  withheld:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "0.9em"
  chapter-numeral:
    textColor: "{colors.mist-2}"
    typography: "{typography.title}"
  chapter-numeral-snow:
    textColor: "{colors.ink-3}"
---

# Design System: Mundo da HUMINT

## Overview

**Creative North Star: "O Dossiê Liberado"**

O Mundo da HUMINT é uma escola de inteligência humana apresentada como o site de uma agência. O sistema trabalha com três materiais: preto e branco absolutos, um único vermelho de operação e uma família tipográfica (Archivo variável) que ganha autoridade alargando-se e pesando, não trocando de voz. O confidencial não aparece como fantasia de carimbo. Ele é um sistema: tarjas que escondem um trecho e o liberam uma vez, tarjas permanentes onde a identidade do instrutor fica omitida, tarjas curtas que marcam itens de lista. É o motivo gráfico com origem verdadeira (o documento desclassificado) que o posicionamento pede.

A página alterna duas superfícies com funções diferentes. A noite (quase preto) vende: abertura, casos, oferta, ética, cabeçalho e rodapé. O papel branco lê: situação, listas longas, artigos, perguntas no site. Não há moldura, sombra nem canto arredondado. A densidade é de página de venda cinematográfica: seções altas, títulos enormes alinhados à esquerda, fotografia em tela cheia escurecida até a noite, casos reais tratados como capítulos numerados. A recusa confirmada é o portal editorial ou blog genérico: aqui quem organiza a página é o peso do título e a troca de superfície.

O movimento é quase nulo por princípio. Há um só momento autoral, a liberação da tarja, que acontece uma vez quando o trecho entra na tela. O resto é resposta de estado: troca de cor em 180ms, seta que avança 3px, imagem que se aproxima devagar.

**Key Characteristics:**
- Duas superfícies com papéis fixos: noite para vender, papel para ler.
- Um acento, vermelho sinal, preso a ação e à tarja liberada.
- Uma família, Archivo variável; a hierarquia sai do eixo de largura (100% a 125%) e do peso (400 a 800).
- A tarja como sistema gráfico: liberada, permanente (instrutor anônimo) e como marcador de lista.
- Plano absoluto: raio 0, sem sombra, profundidade só por troca de tom.
- Fotografia cinematográfica em tela cheia, escurecida, com cinza parcial liberado no hover.
- Casos, etapas e partes numerados como capítulos, em algarismos tabulares largos.

## Colors

Monocromático quase puro, levemente frio, com um único vermelho de operação que só aparece onde algo age ou responde.

### Primary
- **Vermelho Sinal** (#e5252a): o botão de compra e todo CTA principal (`btn-signal`), o sublinhado de 2px dos links de ação, o sublinhado de 3px do item ativo da navegação, o quadrado de 10px do item ativo no menu mobile, a cor de hover dos títulos clicáveis, o contorno de foco (2px, afastado 3px), a borda de campo em foco ou inválido, o texto de erro de formulário, a seleção de texto e o sublinhado fino que fica sob a tarja depois de liberada. Branco sobre ele fecha em 4.54:1.
- **Vermelho Sinal Fechado** (#c81e23): só o hover do botão sinal.
- **Branco sobre Sinal** (#ffffff): texto e ícone dentro de qualquer preenchimento vermelho.

### Neutral
- **Noite de Operação** (#0b0b0c): fundo das superfícies de venda, do cabeçalho fixo, do rodapé e do `html` (a cor que aparece no overscroll e na barra do navegador). Também é o fundo sob as capas do Instagram.
- **Sala Escura** (#151516): a segunda noite (`night-2`), para alternar seções de venda consecutivas (acesso, FAQ e oferta nas landings) e para o painel de destaque de produto sobre a noite. Campos sobre a noite usam este tom como fundo, e vice-versa.
- **Moldura Noturna** (#202022): fundo de espera dos quadros de imagem sobre a noite (trilho de casos, miniaturas de capítulo) antes de a foto carregar.
- **Filete Noturno** (#2e2e31): filetes de 1px sobre a noite: separadores de linha em listas, borda inferior do cabeçalho, divisões do rodapé.
- **Névoa** (#b6b6ba): texto secundário sobre a noite (linha fina, descrições, links do rodapé, itens inativos da navegação). 9.7:1 sobre a noite.
- **Névoa Funda** (#8c8c92): terciário sobre a noite: metadados, tempo de leitura, rótulo "Dossiê 01" em listas, numerais de capítulo. 5.9:1 sobre a noite.
- **Papel Branco** (#ffffff): fundo de leitura (`bg-snow`) e o branco de todo texto sobre a noite.
- **Papel de Arquivo** (#f3f3f2): a segunda superfície de leitura (`bg-snow-2`), para alternar seções claras consecutivas (depoimentos, plataforma, FAQ) e para o painel de destaque de produto no papel; também fundo de espera das imagens no papel.
- **Tinta** (#0b0b0c): títulos e texto forte no papel, o preto das tarjas no papel e os filetes de 2px que abrem listas.
- **Tinta Corrida** (#3a3a3d): texto de corpo e descrições no papel, incluindo o texto de artigo.
- **Tinta Apagada** (#66666c): terciário no papel: metadados, trilha de navegação, numerais das etapas, itens das listas "não é para". 5.7:1 sobre o branco.
- **Filete de Papel** (#e3e3e5): separadores de 1px entre linhas de lista no papel.

Os aliases do shadcn/ui (`primary`, `ring`, `destructive`, `background`, `muted`...) apontam para estes mesmos valores e não são uma segunda paleta.

### Named Rules
**A Regra do Sinal Único.** O vermelho marca apenas o que se clica ou o estado de algo: CTA, link de ação, item ativo, hover, foco, erro e a tarja liberada. Teste: se o vermelho sumir e nenhuma ação ou estado ficar ilegível, ele não devia estar ali.

**A Regra das Duas Superfícies.** Noite vende, papel lê. Seções vizinhas trocam de superfície (noite ↔ papel) ou de passo dentro dela (`night` ↔ `night-2`, `snow` ↔ `snow-2`); a troca é o divisor entre seções.

**A Regra do Tom Herdado.** Componentes que podem cair nas duas superfícies herdam as cores dela (`text-tone`, `text-tone-2`, `text-tone-3`, `border-tone`, e as variáveis `--tone-*` e `--redact-bar` que `night`/`night-2` definem). Botão, campo, marcador e tarja nunca recebem cor fixa.

Sobre a noite, o vermelho como cor de texto só funciona em tamanho de título (`heading` ou maior): como texto corrido ele fica em 4.3:1 sobre `night` e 4.0:1 sobre `night-2`.

## Typography

**Display Font:** Archivo variável, eixo de largura `wdth` (com ui-sans-serif, system-ui, sans-serif)
**Body Font:** Archivo variável, largura normal (mesma pilha)

**Character:** Uma grotesca só, que vira voz de agência quando se alarga a 125% e pesa 800, e volta a ser texto neutro e legível na largura normal. A régua é a identidade de 2021 da CIA: grotesca estendida e pesada, escala grande, sem ornamento.

### Hierarchy
- **Mega** (800, `clamp(2.75rem, 1.15rem + 6.2vw, 6rem)`, 0.94, -0.035em, largura 125%): a manchete da abertura e uma ou duas declarações por página (ética do Acervo). Medida curta (13 a 18ch).
- **Display** (800, `clamp(2.25rem, 1.25rem + 3.8vw, 4.5rem)`, 0.98, -0.03em, 125%): h1 das páginas internas e de produto, títulos de oferta e de FAQ, o caso principal.
- **Title** (800, `clamp(1.75rem, 1.15rem + 2.2vw, 3rem)`, 1.04, -0.024em, 125%): títulos de seção (`SectionHeading`, `SplitSection`), frase de fechamento do rodapé, valor do preço em destaque, numerais de capítulo a partir de 768px.
- **Heading** (800, `clamp(1.3125rem, 1.12rem + 0.75vw, 1.75rem)`, 1.14, -0.014em, 125%): títulos de itens em lista (dossiês, cenas de aplicação, capítulos no celular), nome do produto no card, citações de destaque, a escada de percepção.
- **Card title** (700, 1.125 a 1.25rem, 1.375, largura 110 a 112%): títulos de artigo em grade e em lista, títulos de etapa, perguntas do FAQ.
- **Lede** (400, `clamp(1.125rem, 1.04rem + 0.36vw, 1.3125rem)`, 1.5): linha fina sob h1 e títulos de seção; 46 a 58ch.
- **Body** (400, 1rem, 1.6): texto de interface. Descrições de seção sobem para 1.125rem com entrelinha relaxada.
- **Prose** (400, 1.0625rem, 1.1875rem a partir de 768px, 1.72, cor Tinta Corrida, máximo 68ch): corpo de artigo (`prose-read`). h2 no tamanho Heading; h3 em 1.1875rem, 700, largura 112%; lista quadrada com marcador em Tinta; citação em itálico 500, 1.35em; links em Tinta com sublinhado vermelho de 2px.
- **Button / Label** (700 ou 600, 0.9375rem, largura 112% no botão): botões, links de ação, rótulos de campo, links da navegação.
- **Meta** (400, 0.875rem): categoria · data · tempo de leitura, trilha, legendas; sempre no terciário da superfície.

Títulos (`h1` a `h6`) nascem a 118% e 800 com `text-wrap: balance`; `font-expanded` leva a 125%. Parágrafos usam `text-wrap: pretty`. Sobre a noite o tracking abre levemente (+0.004em). Preços, numerais de capítulo e valores usam algarismos tabulares (`tabular`).

### Named Rules
**A Regra da Largura.** O contraste tipográfico vem do eixo `wdth` e do peso dentro da mesma Archivo: 100% para ler, 110 a 112% para interface e títulos pequenos (700), 118% para títulos padrão e 125% para display (800). Citações também são Archivo: estendida e pesada nas páginas de venda, itálico 500 dentro do artigo.

**A Regra do Teto.** O display para em 6rem e o tracking nunca fecha além de -0.04em. Escala maior que isso vira pôster e perde a leitura no celular.

## Layout

Container único (`container-site`): largura máxima de 1360px, respiro lateral de 20px no celular, 32px a partir de 768px e 48px a partir de 1280px. Texto sempre alinhado à esquerda, títulos inclusive; só capas de produto se centralizam no celular, quando ficam sozinhas na coluna (até 384 a 448px de largura).

Seções têm 80px de padding vertical no celular e 112px a partir de 768px. O cabeçalho de seção fica a 40px (56px no desktop) do conteúdo. No desktop a grade é de 12 colunas com 48 a 64px de gap: o padrão é título em 5/12 e conteúdo em 7/12 (`SplitSection`, com o título opcionalmente fixo a 112px do topo); aberturas com capa invertem para texto em 7/12 e imagem em 5/12. Listas numeradas usam uma calha fixa à esquerda para o numeral (2.25rem, 2.75rem a partir de 640px, 5rem a partir de 768px) e o conteúdo na coluna seguinte.

O trilho horizontal (`rail` + `scroller`) sangra até a borda da tela mantendo o primeiro item alinhado ao container, com snap por item e sem barra de rolagem; é usado para depoimentos e sequências de cards.

O cabeçalho é fixo, com 64px (72px a partir de 1024px); barras fixas abaixo dele usam `top-16 lg:top-[72px]` e âncoras param 88px abaixo do topo. Celular primeiro: a foto da abertura troca de corte (retrato no celular, paisagem a partir de 768px) e ocupa o topo da tela, com a manchete encostada embaixo.

### Named Rules
**A Regra do Filete de Lista.** O filete organiza conteúdo dentro de uma seção: uma lista, tabela ou FAQ abre com 2px no tom do texto (Tinta no papel, branco na noite) e cada linha fecha com 1px (`line` ou `line-night`). O bloco final de ação dentro de uma seção pode abrir com o mesmo filete. Entre seções, quem divide é a troca de superfície.

## Elevation & Depth

O sistema é plano. Não existe `box-shadow` em nenhum componente. A profundidade vem de três fontes: a troca de superfície (noite, Sala Escura e Moldura Noturna empilham três passos de escuro; papel e Papel de Arquivo, dois de claro), a sobreposição da fotografia pela noite (degradês que só existem sobre foto, sempre terminando em `night`, para dar leitura ao texto por cima) e a escala tipográfica. Um painel (destaque de produto, chamada da Academy) se separa do fundo por tom, nunca por borda ou sombra.

### Named Rules
**A Regra da Superfície Plana.** Nada flutua. Se algo precisa se destacar, troca de tom ou cresce em escala; degradê só como véu sobre fotografia, sempre indo para a noite.

## Shapes

Retângulo puro. Todos os raios do sistema são 0 (`--radius` e toda a escala `--radius-*`, inclusive a do shadcn/ui), e os componentes de `components/ui` herdam isso. As espessuras de traço são uma pequena escala com função: 1px para separar linhas, 1.5px para contornar botão e campo, 2px para abrir lista e sublinhar link de ação, 3px para o item ativo da navegação.

As formas recorrentes são todas barras: a tarja sobre o texto, a tarja permanente (`withheld`, altura de 0.9em), o marcador de lista (1.1em × 0.42em) e o selo do produto, encostado sem margem na borda esquerda da capa. Os quadros de imagem têm proporções fixas por papel: 3:4 para capas de produto e trilho de casos, 4:5 para artigos em grade, 16:10 para miniaturas de capítulo, 1:1 para miniaturas em lista e 9:16 para as capturas de depoimento. Capas do Instagram (9:16, com legenda gravada) nunca são recortadas: entram inteiras (`object-contain`) sobre a noite dentro do quadro que for.

## Components

### Buttons
Retangulares, pesados e diretos: parecem um comando, não um enfeite.
- **Shape:** cantos retos (0), contorno de 1.5px transparente por padrão; altura mínima de 48px (40px no `btn-sm`, 56px no `btn-lg`); largura 112%, 700, 0.9375rem.
- **Sinal (`btn-signal`):** preenchimento Vermelho Sinal, texto branco. É o botão de compra e o CTA principal de cada seção de venda. Compra abre o checkout em nova aba com a seta diagonal (`ArrowUpRight`) e o texto oculto "(abre em nova aba)"; navegação interna usa a seta para a direita.
- **Sólido (`btn-solid`):** preenchimento no tom do texto da superfície (Tinta no papel, branco na noite) com o texto no tom do fundo; no hover vira Vermelho Sinal. Ações secundárias de peso (suporte).
- **Contorno (`btn-line`):** contorno de 1.5px no tom do texto, fundo transparente; no hover preenche com o tom do texto. Par secundário ao lado do sinal ("Ver os casos", "Ver o que tem dentro").
- **Hover / Focus:** troca de fundo, texto e borda em 180ms com `cubic-bezier(0.16, 1, 0.3, 1)`; o último ícone avança 3px em 220ms. Foco: contorno Vermelho Sinal de 2px afastado 3px. Desabilitado: 50% de opacidade.
- **Link de ação (`link-more`):** texto 700 a 112% no tom da superfície, sublinhado Vermelho Sinal de 2px afastado 0.3em, seta que avança 3px no hover. "Ver detalhes", "Todos os casos", "Continuar lendo".

### Chips
- **Style:** um só selo, o do produto ("Mais vendido"): fundo Papel Branco, texto Tinta 700 em 0.875rem, 6px × 12px, encostado na borda esquerda da capa a 16 a 20px do topo.
- **State:** não há variantes de seleção ou filtro.

### Cards / Containers
- **Corner Style:** retos (0).
- **Background:** cards de produto e de artigo não têm caixa: imagem e texto sentam direto na superfície. O painel de destaque (`ProductFeature`) usa Papel de Arquivo no papel ou Sala Escura na noite, com capa em 5/12 e oferta em 7/12. A chamada lateral da Academy (`AcademyCta` card) é um bloco noite com 28px de padding.
- **Shadow Strategy:** nenhuma (ver Elevation & Depth).
- **Border:** nenhuma; em listas, os filetes da Regra do Filete de Lista.
- **Internal Padding:** painel de destaque em 28px, 40px a partir de 640px e 56px a partir de 1024px.
- **Hover:** o título vira Vermelho Sinal; a imagem se aproxima 3.5% em 900ms (`media-zoom`); fotos de caso saem de 35 a 40% de cinza para a cor em 700ms.
- **Bloco de preço:** só o parcelado, dividido em rótulo ("12x de", no secundário) e valor (estendido, 800, tabular, em 1.5rem no card e em Title no destaque), seguido de "tipo · Cartão ou Pix" no terciário.

### Inputs / Fields
- **Style:** retângulo de 48px de altura, 12px × 16px, 1.5px de contorno no tom de campo da superfície (#8c8c92 no papel, #6b6b70 na noite, ambos acima de 3:1 contra o fundo); fundo branco no papel, e na noite o passo de noite oposto ao da seção. Placeholder no terciário da superfície. Rótulo acima em 0.9375rem, 600.
- **Focus:** a borda vira Vermelho Sinal em 160ms (mais o contorno de foco global).
- **Error / Disabled:** `aria-invalid` deixa a borda em Vermelho Sinal; a mensagem aparece abaixo em 0.875rem Vermelho Sinal com `role="alert"`. No boletim, campo e botão sinal ficam colados (gap 0 a partir de 640px).

### Navigation
- **Cabeçalho:** sempre noite, fixo, 64px (72px no desktop), filete noturno embaixo. Logo branco à esquerda; links em 0.9375rem, 600, Névoa, que viram branco no hover. O item ativo fica branco com uma barra Vermelho Sinal de 3px na base, que cresce da esquerda em 300ms. À direita, busca (ícone Névoa) e o botão sinal pequeno "Acervo Tático", sempre visível. O fallback do Suspense em `app/layout.tsx` espelha essa estrutura.
- **Mobile:** menu em tela cheia na noite, itens em 1.75rem, 800, largura 125%, separados por filete noturno; ativo em branco com um quadrado Vermelho Sinal de 10px; links secundários em duas colunas; botão sinal grande de largura total no pé.
- **Trilha:** 0.875rem no terciário, separada por chevron; o item atual em 600 no secundário.
- **Rodapé:** noite; abre com uma frase em Title e o botão sinal grande, depois logo, descrição e quatro colunas de links em Névoa.

### A Tarja (assinatura)
O único momento autoral do site. Um trecho curto, sempre as últimas palavras de uma manchete ("com método.", "Brasil.", "antes.", "rastreável."), nasce coberto por uma barra na cor da tinta da superfície (preta no papel, branca na noite) e, quando 60% dele entra na tela, é liberado uma vez após 450ms (700ms na abertura): o texto volta em 420ms com 260ms de atraso, a barra some em 640ms, e fica um sublinhado Vermelho Sinal de 0.1em. O texto está sempre no DOM e acessível; sem JavaScript nada fica escondido, e com `prefers-reduced-motion` o trecho já aparece liberado. No máximo uma tarja por manchete.
- **Tarja permanente (`withheld`):** barra na cor da tinta onde a identidade do instrutor é omitida ("Quem ensina: ▇▇▇▇"), com `role="img"` e `aria-label="nome omitido"`; também compõe prévias de documento com linhas omitidas.

### Marcador de tarja e listas
Itens de lista afirmativa (destaques, o que está incluso, para quem é, pontos de dossiê) são marcados por `bar-mark`: uma tarja curta de 1.1em × 0.42em, alinhada à primeira linha, que segue o tom da superfície. Listas negativas ("não é para") usam um X de 20px em Tinta Apagada, com o texto também em Tinta Apagada.

### Numeral de capítulo
Listas ordenadas (casos 01 a 04, etapas de acesso 1 a 3, partes e capítulos da landing) levam o número em algarismo tabular, estendido, 800, no terciário da superfície (Névoa Funda na noite, Tinta Apagada no papel), numa calha fixa à esquerda. O tamanho acompanha o título do item (Heading a Title, ou Display nas etapas).

### Escada de percepção
Três linhas empilhadas em Heading estendido, entre filete de 2px em cima e embaixo, que escurecem de Tinta Apagada para Tinta Corrida e Tinta; a última traz a tarja ("Quem conduz percebe antes."). Usada nas páginas de venda para mostrar a progressão depois → durante → antes.

### Perguntas (acordeão)
`details` nativo: lista aberta por filete de 2px, cada pergunta em 1.125rem 700 que ganha sublinhado Vermelho Sinal de 2px no hover (texto em vermelho não passa 4.5:1 sobre `snow-2` e `night-2`), com um "+" que gira 45° em 300ms quando abre; resposta em 1.125rem, entrelinha relaxada, até 62ch.

## Do's and Don'ts

### Do:
- **Use** Vermelho Sinal (#e5252a) só para CTA, link de ação, item ativo, hover, foco, erro e o sublinhado da tarja liberada.
- **Alterne** noite (venda) e papel (leitura) entre seções, e use `night-2` / `snow-2` quando duas seções da mesma superfície se encostam.
- **Componha** todo título em Archivo 800, estendida (`font-expanded`, 125%), nas classes `text-mega`, `text-display`, `text-title` ou `text-heading`; texto corrido na largura normal.
- **Escreva** componentes com `text-tone*`, `border-tone` e as variáveis `--tone-*`, para que funcionem nas duas superfícies sem variante.
- **Marque** itens de lista afirmativa com `bar-mark`, e listas negativas com o X em Tinta Apagada.
- **Mostre** capas do Instagram inteiras, `object-contain` sobre `bg-night`, dentro do quadro.
- **Use** algarismos tabulares em preços e numerais de capítulo; nos cards mostre só o parcelado, com "Cartão ou Pix".
- **Abra** o checkout em nova aba com `ArrowUpRight` e o aviso "(abre em nova aba)" para leitores de tela.
- **Coloque** a tarja nas últimas palavras de uma manchete, uma por manchete, com o texto real no DOM.
- **Preserve** o logo do cérebro e as capas sépia dos produtos exatamente como são; onde o instrutor apareceria, use `withheld`.

### Don't:
- **Não use** `box-shadow` nem raio de borda: o sistema é plano e retangular.
- **Não use** degradê fora de fotografia; sobre foto, o véu sempre termina em `night`.
- **Não crie** um segundo momento autoral de movimento; além da tarja, só transições de estado (160 a 300ms) e o `media-zoom`.
- **Não traga** outra família tipográfica; citação e destaque também são Archivo.
- **Não expresse** o confidencial com carimbo; o dispositivo do mundo é a tarja.
- **Não use** Vermelho Sinal como cor de texto corrido sobre a noite (fica abaixo de 4.5:1); na noite, o vermelho como texto só em títulos.
- **Não recorte** capa do Instagram nem a coloque sobre o papel.
- **Não mostre** nome ou rosto do instrutor.
- **Não use** os tokens e fontes do mundo editorial anterior (verde `brand`, `paper`, `deep`, Newsreader, Schibsted Grotesk, IBM Plex Mono): eles não existem mais em `app/globals.css`.
