# Web Expressive

A toolkit built on web standards that simplifies and accelerates UI development for the web. It brings the design intent of Material 3 Expressive to HTML and CSS through design tokens, components, and adaptable layout patterns.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mobalti/web-expressive/blob/main/LICENSE) [![npm package](https://img.shields.io/npm/v/web-expressive.svg?color=green)](https://www.npmjs.com/package/web-expressive) [![Web Standards](https://img.shields.io/badge/built%20with-web%20standards-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)


## Resources

- [Homepage](https://mobalti.github.io/web-expressive/)
- [Documentation](https://mobalti.github.io/web-expressive/docs/)

### Quick start

This code snippet is a buildless example that loads `web-expressive` from a CDN. Check out the [quick start](https://mobalti.github.io/web-expressive/docs/#quick-start) guide for more information.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web Expressive Starter</title>
    <!-- 1. Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400..700&display=swap" />

    <!-- 2. Core (reset + system tokens) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/web-expressive@1.1.0/dist/core.css" />

    <!-- 3. A color scheme -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/web-expressive@1.1.0/dist/schemes/alpha/fuchsia-tonal.css" />

    <!-- 4. Components (as needed) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/web-expressive@1.1.0/dist/components/button.css" />
    <style>
      html {
        /* Update the font family for the typography system after loading the font from the CDN */
        --ref-typeface-base: "Roboto Flex";
      }
      .headline {
        font: var(--sys-typescale-headline-large);
      }
    </style>
  </head>
  <body>
    <h1 class="headline">Hello, World!</h1>
    <button class="button tonal large">Get Started</button>
  </body>
</html>
```

### Via npm

```sh
npm install web-expressive
```

See the [npm usage instructions](https://mobalti.github.io/web-expressive/docs/#via-npm) to import the styles into your project.

## Support

Having trouble? Get help via [GitHub Discussions](https://github.com/mobalti/web-expressive/discussions).
