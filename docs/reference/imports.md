# Imports

This reference lists all available exports in the Web Expressive toolkit. Use the npm imports in your global stylesheet and the CDN links in your document `<head>`.

## Core

Core provides the reset, base typography, and system tokens. It is required for all other exports. Refer to [Tokens](tokens.md) for the full token list.

**CDN (paste in `<head>`)**

```html
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/core.css" />
```

**npm (paste in your global stylesheet)**

```css
@import "web-expressive/core.css";
```

## Shape tokens

These tokens provide Material 3 Expressive shapes in two formats: masking (data URIs) and clipping (`shape()`).

**CDN (paste in `<head>`)**

```html
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/shapes/clip-tokens.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/shapes/mask-tokens.css" />
```

**npm (paste in your global stylesheet)**

```css
@import "web-expressive/shapes/clip-tokens.css";
@import "web-expressive/shapes/mask-tokens.css";
```

## Components

These are component stylesheets. Load the matching markup for each component. Refer to [Components](components.md) for markup and modifiers.

**CDN (paste in `<head>`)**

```html
<!-- Buttons -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/components/button.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/components/icon-button.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/components/toggle-button.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/components/toggle-icon-button.css" />

<!-- Button groups -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/components/connected-button-group.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/components/standard-button-group.css" />

<!-- Switch -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/components/switch.css" />
```

**npm (paste in your global stylesheet)**

```css
/* Buttons */
@import "web-expressive/components/button.css";
@import "web-expressive/components/icon-button.css";
@import "web-expressive/components/toggle-button.css";
@import "web-expressive/components/toggle-icon-button.css";

/* Button groups */
@import "web-expressive/components/connected-button-group.css";
@import "web-expressive/components/standard-button-group.css";

/* Switch */
@import "web-expressive/components/switch.css";
```

## Schemes

Predefined schemes based on Material 3 color roles. Each scheme supports light and dark mode. Import one scheme at a time and refer to [Tokens](tokens.md) for the color roles each scheme provides.

**CDN (paste in `<head>`)**

```html
<!-- Aqua schemes -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/aqua-expressive.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/aqua-neutral.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/aqua-tonal.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/aqua-vibrant.css" />

<!-- Baseline scheme -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/baseline.css" />

<!-- Berry schemes -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/berry-expressive.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/berry-neutral.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/berry-tonal.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/berry-vibrant.css" />

<!-- Classic schemes -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/classic-expressive.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/classic-neutral.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/classic-tonal.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/classic-vibrant.css" />

<!-- Forest schemes -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/forest-expressive.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/forest-neutral.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/forest-tonal.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/forest-vibrant.css" />

<!-- Fuchsia schemes -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/fuchsia-expressive.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/fuchsia-neutral.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/fuchsia-tonal.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/fuchsia-vibrant.css" />

<!-- Monochrome schemes -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/monochrome.css" />

<!-- Paper schemes -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/paper-expressive.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/paper-neutral.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/paper-tonal.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/paper-vibrant.css" />

<!-- Porcelain schemes -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/porcelain-expressive.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/porcelain-neutral.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/porcelain-tonal.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/porcelain-vibrant.css" />

<!-- Sun schemes -->
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/sun-expressive.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/sun-neutral.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/sun-tonal.css" />
<link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/sun-vibrant.css" />
```

**npm (paste in your global stylesheet)**

```css
/* Aqua schemes */
@import "web-expressive/schemes/aqua-expressive.css";
@import "web-expressive/schemes/aqua-neutral.css";
@import "web-expressive/schemes/aqua-tonal.css";
@import "web-expressive/schemes/aqua-vibrant.css";

/* Baseline scheme */
@import "web-expressive/schemes/baseline.css";

/* Berry schemes */
@import "web-expressive/schemes/berry-expressive.css";
@import "web-expressive/schemes/berry-neutral.css";
@import "web-expressive/schemes/berry-tonal.css";
@import "web-expressive/schemes/berry-vibrant.css";

/* Classic schemes */
@import "web-expressive/schemes/classic-expressive.css";
@import "web-expressive/schemes/classic-neutral.css";
@import "web-expressive/schemes/classic-tonal.css";
@import "web-expressive/schemes/classic-vibrant.css";

/* Forest schemes */
@import "web-expressive/schemes/forest-expressive.css";
@import "web-expressive/schemes/forest-neutral.css";
@import "web-expressive/schemes/forest-tonal.css";
@import "web-expressive/schemes/forest-vibrant.css";

/* Fuchsia schemes */
@import "web-expressive/schemes/fuchsia-expressive.css";
@import "web-expressive/schemes/fuchsia-neutral.css";
@import "web-expressive/schemes/fuchsia-tonal.css";
@import "web-expressive/schemes/fuchsia-vibrant.css";

/* Monochrome scheme */
@import "web-expressive/schemes/monochrome.css";

/* Paper schemes */
@import "web-expressive/schemes/paper-expressive.css";
@import "web-expressive/schemes/paper-neutral.css";
@import "web-expressive/schemes/paper-tonal.css";
@import "web-expressive/schemes/paper-vibrant.css";

/* Porcelain schemes */
@import "web-expressive/schemes/porcelain-expressive.css";
@import "web-expressive/schemes/porcelain-neutral.css";
@import "web-expressive/schemes/porcelain-tonal.css";
@import "web-expressive/schemes/porcelain-vibrant.css";

/* Sun schemes */
@import "web-expressive/schemes/sun-expressive.css";
@import "web-expressive/schemes/sun-neutral.css";
@import "web-expressive/schemes/sun-tonal.css";
@import "web-expressive/schemes/sun-vibrant.css";
```
