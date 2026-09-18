# Web Expressive

Web Expressive is a toolkit built on web standards that simplifies and accelerates UI development for the web. It brings the design intent of Material 3 Expressive to HTML and CSS through design tokens, components, and adaptable layout patterns.

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
    <link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.1/dist/core.css" />

    <!-- 3. A scheme -->
    <link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.1/dist/schemes/alpha/fuchsia-tonal.css" />

    <!-- 4. Components (as needed) -->
    <link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.1/dist/components/button.css" />
    <link rel="stylesheet" href="https://unpkg.com/web-expressive@0.5.1/dist/components/switch.css" />
  </head>

  <body>
    <button class="button tonal extra-large">Get Started</button>
    <input class="switch" type="checkbox" role="switch" aria-label="Enable feature" />
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
@import "web-expressive/core.css";
@import "web-expressive/schemes/alpha/classic-tonal.css";
@import "web-expressive/components/button.css";
```

Refer to [Imports](docs/reference/imports.md) for the full list of npm and CDN paths.

## Overview

Web Expressive is modular. Core foundations, schemes, and components ship as separate layers, so you can import the full toolkit or only the parts you need.

If you are starting from scratch, the usual path is:

1. Load `core.css`.
   This file provides the required foundation: a minimal reset and global system tokens based on the Material 3 token specification, such as typography, shape corners, and elevation. It does not include scheme colors or abstract shape tokens. Refer to [Tokens](docs/reference/tokens.md) for the full reference.
2. Load one or more schemes.
   Schemes provide the Material 3 color roles such as primary, secondary, tertiary, surface, error, and `on-*` variants. Each scheme includes light and dark mode, and multiple schemes can coexist. Start with the more vivid [`schemes/alpha/` collection](https://unpkg.com/browse/web-expressive@0.5.1/dist/schemes/alpha/). See [Imports](docs/reference/imports.md#schemes) for the full scheme guidance.
3. Add components as needed.
   Component stylesheets are optional. Import only the components you need, or build your own with the system tokens. Use [Imports](docs/reference/imports.md#components) for CDN and npm paths and [Components API](docs/reference/components.md) for component markup and modifiers.


## Resources

- [Layout starters](examples/layouts/Readme.md)
- [Tokens](docs/reference/tokens.md)
- [Imports](docs/reference/imports.md)
- [Available schemes](https://unpkg.com/browse/web-expressive@0.5.1/dist/schemes/alpha/)
- [Components API](docs/reference/components.md)
