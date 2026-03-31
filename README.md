# Web Expressive

A frontend toolkit that enables developers to communicate the intent of Material 3 Expressive through web standards.

## Quick start

To start without a build step, load `web-expressive` from a CDN.

Load the core foundation first, then a scheme, then any components you need.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web Expressive Starter</title>

    <!-- 1. Typography -->
    <!-- Web Expressive uses Google Sans Flex by default. -->
    <!-- To use a custom font, load it here and update --ref-typeface-base with your own value. -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400..600&display=swap" />

    <!-- 2. Core (reset + essential tokens) -->
    <link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/core.css" />

    <!-- 3. A scheme -->
    <link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/schemes/fuchsia-tonal.css" />

    <!-- 4. Components (as needed) -->
    <link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/components/button.css" />
    <link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.0/dist/components/switch.css" />
  </head>

  <body>
    <button class="btn tonal xl">Get Started</button>
    <input class="switch" type="checkbox" role="switch" />
  </body>
</html>
```

---

### Via npm

Install with:

```bash
npm install web-expressive
```

Import the styles you need into your global stylesheet:

```css
@import "web-expressive/dist/core.css";
@import "web-expressive/dist/schemes/blue-tonal.css";
@import "web-expressive/dist/components/button.css";
```

## Overview

Web Expressive is modular. Core foundations, schemes, and components ship as separate layers, so you can import the full toolkit or only the parts you need.

If you are starting from scratch, the usual path is:

1. Load `core.css`.
   Minimal reset and global system tokens for spacing, shape, typography, and elevation. Color tokens are not included here. Refer to [Tokens](./tokens.md) for the full reference.
2. Load one or more schemes.
   Material 3 color roles: primary, secondary, tertiary, surface, error, and `on-*` variants. Each scheme includes light and dark mode. Multiple schemes can coexist. Browse the available files in [`dist/schemes/`](https://unpkg.com/browse/web-expressive/dist/schemes/) or preview them in the [Schemes showcase](https://web-expressive-schemes.netlify.app/).
3. Add components as needed.
   Import only the components you need from `dist/components/`, or build your own with the system tokens. Use [Components API](./components.md) for component markup and modifiers.

## Resources

**View**

- [Live examples](https://codepen.io/collection/gPxbxr)
- [Schemes showcase](https://web-expressive-schemes.netlify.app/)

**Reference**

- [Tokens](./tokens.md)
- [Available schemes](https://unpkg.com/browse/web-expressive/dist/schemes/)
- [Components API](./components.md)
