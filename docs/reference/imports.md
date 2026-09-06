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

Each scheme provides the Material 3 color roles and supports light and dark mode. Import one scheme globally. You can also load multiple schemes and select one on a subtree with its matching `data-theme` value. See the [color token reference](tokens.md#color-reference) for the available roles.

For example, `fuchsia-tonal.css` applies globally and can also be selected with `data-theme="fuchsia-tonal"`:

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
- `blue.css`, `green.css`, `orange.css`, `red.css`, `violet.css`, `yellow.css`
- `blue-green.css`, `green-orange.css`, `light-purple-blue.css`, `pink-indigo.css`, `yellow-red.css`

Start with `schemes/alpha/`: these palettes align with the newer Android color direction and tend to be more vivid, or "juicy." Use the regular `schemes/` collection when you want colors closer to the Material Design and Figma toolkit palettes, need a quieter result, or encounter a contrast issue while testing a particular UI.

Both collections expose the same filenames and color-role tokens, so switching between them only changes the import path. Web Expressive will continue to update both collections. Here, `alpha` identifies the newer palette collection; it does not change the stability of the CSS API.

These schemes currently generate identical values in both collections: `blue-green.css`, `blue.css`, `green-orange.css`, `green.css`, `indigo.css`, `light-purple-blue.css`, `monochrome.css`, `orange.css`, `pink-indigo.css`, `red.css`, `violet.css`, `yellow-red.css`, and `yellow.css`. They are intentionally present in both locations so the import structure stays predictable.

To choose a regular palette instead, remove `alpha/` from either import format:

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
