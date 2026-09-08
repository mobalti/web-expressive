# Imports

This reference lists the public CSS exports in Web Expressive 0.5.1. With npm, use the package export path in a global stylesheet. Without a build step, use the matching unpkg URL in your document `<head>`.

## Core

Core provides the reset, base typography, and system tokens. It is required for all other exports. Refer to [Tokens](tokens.md) for the full token list.

**CDN**

```html
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.1/dist/core.css" />
```

**npm**

```css
@import "web-expressive/core.css";
```

## Shape tokens

Shape tokens are optional. They provide Material 3 Expressive shapes as either CSS `shape()` values for clipping or data URIs for masking.

**CDN**

```html
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.1/dist/shapes/clip-tokens.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.1/dist/shapes/mask-tokens.css" />
```

**npm**

```css
@import "web-expressive/shapes/clip-tokens.css";
@import "web-expressive/shapes/mask-tokens.css";
```

## Components

Load only the stylesheets for the components you use. Refer to the [Components API](components.md) for markup, modifiers, and component dependencies.

| Component | Export path |
| --- | --- |
| Button | `components/button.css` |
| Toggle button | `components/toggle-button.css` |
| Icon button | `components/icon-button.css` |
| Toggle icon button | `components/toggle-icon-button.css` |
| Standard button group | `components/standard-button-group.css` |
| Connected button group | `components/connected-button-group.css` |
| Extended FAB | `components/extended-fab.css` |
| FAB | `components/fab.css` |
| Switch | `components/switch.css` |

Use an export path from the table in either format:

```html
<!-- CDN: https://unpkg.com/web-expressive@0.5.1/dist/{export-path} -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.1/dist/components/button.css" />
```

```css
/* npm: web-expressive/{export-path} */
@import "web-expressive/components/button.css";
```

Button groups style their layout only. Also import the component styles used inside each group, as described in the [Components API](components.md#button-groups).

## Schemes

Each scheme provides the Material 3 color roles and supports light and dark mode. For an ordinary single-theme interface, import one scheme globally; no HTML attribute is required. See the [color token reference](tokens.md#color-reference) for the available roles.

For example, import `fuchsia-tonal.css` globally:

```html
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.1/dist/schemes/alpha/fuchsia-tonal.css" />
```

```css
@import "web-expressive/schemes/alpha/fuchsia-tonal.css";
```

Available scheme filenames:

- `aqua-expressive.css`, `aqua-neutral.css`, `aqua-tonal.css`, `aqua-vibrant.css`
- `berry-expressive.css`, `berry-neutral.css`, `berry-tonal.css`, `berry-vibrant.css`
- `carbon-expressive.css`, `carbon-neutral.css`, `carbon-tonal.css`, `carbon-vibrant.css`
- `classic-expressive.css`, `classic-neutral.css`, `classic-tonal.css`, `classic-vibrant.css`
- `forest-expressive.css`, `forest-neutral.css`, `forest-tonal.css`, `forest-vibrant.css`
- `fuchsia-expressive.css`, `fuchsia-neutral.css`, `fuchsia-tonal.css`, `fuchsia-vibrant.css`
- `paper-expressive.css`, `paper-neutral.css`, `paper-tonal.css`, `paper-vibrant.css`
- `porcelain-expressive.css`, `porcelain-neutral.css`, `porcelain-tonal.css`, `porcelain-vibrant.css`
- `sun-expressive.css`, `sun-neutral.css`, `sun-tonal.css`, `sun-vibrant.css`
- `baseline.css`, `monochrome.css`
- `blue.css`, `green.css`, `indigo.css`, `orange.css`, `red.css`, `violet.css`, `yellow.css`
- `blue-green.css`, `green-orange.css`, `light-purple-blue.css`, `pink-indigo.css`, `yellow-red.css`

### Select a scheme

#### 1. Identify the brand direction

Use an explicit user choice first. Otherwise, identify the primary brand color from the logo, key imagery, existing assets, or product domain. Prefer the color carrying the brand emphasis rather than averaging every color in an asset.

#### 2. Choose a variant family and start with tonal

Unless the user requests a particular scheme or specialized surface behavior, match the brand color against these variant-family sources:

- Variant families: `aqua` `#006a62`; `berry` `#924759`; `carbon` `#578f70`; `classic` `#6e84b2`; `forest` `#3b6930`; `fuchsia` `#834a7d`; `paper` `#837eb2`; `porcelain` `#6f5d00`; `sun` `#aa7b40`.

Start with that family's `-tonal.css` variant. Tonal is the primary and most balanced choice. Select another variant only when the product context or user direction calls for a different character:

- **Default, corporate, or professional:** keep `-tonal.css`.
- **Quiet, minimalist, or reading-focused:** use `-neutral.css`.
- **Energetic, sporty, or action-focused:** use `-vibrant.css`.
- **Editorial, creative, bold, or emotional:** use `-expressive.css`.

For example, a blue identity can start with `classic-tonal.css`, while a violet identity can start with `paper-tonal.css`. Move within the selected family only when the requested character changes. Product context and explicit user direction take priority over these defaults.

#### 3. Use a specialized scheme when its behavior is required

Treat single- and dual-color schemes as purposeful alternatives to the variant-family path. Re-evaluate the brand color against the relevant source list instead of carrying over the previously selected family.

- **Untinted surfaces:** choose the closest single-color scheme: `blue` `#3689c9`; `green` `#5f913f`; `indigo` `#8777cf`; `orange` `#ba7412`; `red` `#cb656c`; `violet` `#ae6bb6`; or `yellow` `#9f8000`. Surface roles remain neutral white, gray, and black while key roles retain color.
- **Playful or multi-hue:** choose the closest dual-color scheme: `blue-green` `#3f8da4`; `green-orange` `#728c4b`; `light-purple-blue` `#8f79b5`; `pink-indigo` `#b07095`; or `yellow-red` `#968333`.

Use one of these schemes when the user explicitly selects it or when its behavior clearly fits the product.

#### 4. Use the default collection and validate

Start with `schemes/alpha/`. If validation finds one or two contrast problems, override the affected role group in project CSS as shown below. If contrast problems are widespread, or the product needs a quieter palette overall, use the matching filename from `schemes/` by removing `alpha/` from the import path.

Both collections expose the same filenames and color-role tokens, so changing collection only changes the import path:

```css
@import "web-expressive/schemes/fuchsia-tonal.css";
```

### Adapt a scheme to your brand

Treat a generated scheme as a starting point. Override individual roles in your project's global CSS or a later `<style>` block instead of editing the package file. This keeps the customization local while allowing the underlying Web Expressive scheme to receive updates.

```css
html {
  --sys-color-error: light-dark(oklch(50% 0.18 29), oklch(83% 0.07 22));
  --sys-color-on-error: light-dark(oklch(100% 0 0), oklch(32% 0.11 28));
  --sys-color-error-container: light-dark(
    oklch(92% 0.03 23),
    oklch(42% 0.15 28)
  );
  --sys-color-on-error-container: light-dark(
    oklch(25% 0.08 28),
    oklch(92% 0.03 23)
  );
}
```

Override related foreground and container roles together, then verify contrast in both light and dark modes.

### Multiple schemes in one document

Only use `data-theme` when a project intentionally loads multiple scheme files. Each loaded scheme applies globally and can also be selected on a subtree with its matching `data-theme` value, such as `data-theme="fuchsia-tonal"`. A single-theme interface does not need this attribute.

### Complete the theme

Scheme selection is only one part of the product identity. Use the [typography tokens](tokens.md#typography-reference), [shape tokens](tokens.md#shape-corner-reference), and documented [component variants and sizes](components.md) to make the complete UI match its purpose.
