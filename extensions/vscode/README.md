# Web Expressive Snippets

Snippets for [Web Expressive](https://github.com/mobalti/web-expressive). A frontend toolkit based on Material 3 Expressive. These snippets provide scaffolding for common markup, tokens, and queries in VS Code to speed up authoring and keep naming consistent.

## Features

This extension provides snippets for:

- **Starter template**: Type `web-expressive-starter` to generate a complete document with font loading, core styles, and a starter scheme.
- **Markup**: Type base classes such as `btn`, `toggle-btn`, `icon-btn`, `standard-btn-group`, or `connected-btn-group` to scaffold markup. Refer to the [Components Reference](https://github.com/mobalti/web-expressive/blob/main/docs/reference/components.md).
- **System tokens**: Type `--` to discover Web Expressive tokens. Refer to the [Tokens Reference](https://github.com/mobalti/web-expressive/blob/main/docs/reference/tokens.md).
- **CDN links**: Use the `cdn-*` prefix to insert unpkg `<link>` tags for core, schemes, components, and shape tokens.
- **Window size queries**: Type `window-*` to scaffold M3 Expressive window classes (`compact`, `medium`, `expanded`, `large`, `extra-large`) as media queries, including wider and narrower variants such as `window-medium-wider`.
- **Additional helpers**: Snippets for modern web standards such as `register-property` to register CSS custom properties, `media-*` for user preference queries, and `supports-*` for feature detection.

## Installation

**From the Marketplace:**

1. Open VS Code.
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Search for "Web Expressive Snippets".
4. Click Install.

**Manual VSIX Installation:**
If you have been given the `.vsix` package file:

1. Open VS Code.
2. Go to the Extensions view.
3. Click the `...` menu in the top right corner of the Extensions view.
4. Select **Install from VSIX...** and choose the downloaded file.
