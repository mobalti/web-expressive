# Web Expressive Snippets

HTML and CSS snippets for [Web Expressive](https://github.com/mobalti/web-expressive), a modern CSS toolkit based on Material 3 Expressive.

Quickly scaffold accessible component markup, insert design tokens, configure responsive breakpoints, and link CDN stylesheets in VS Code.

## Features

- **Starter Template**: Type `!we` (or `web-expressive-starter`) to generate a complete HTML document with font loading (Roboto Flex), core reset, design tokens, and a starter color scheme.
- **CDN Links**: Type `cdn-*` to quickly insert jsDelivr `<link>` tags for core, schemes, components, and shape tokens.
- **System Tokens**: Type `--` or `sys` in CSS files or inside HTML `<style>` blocks to discover M3 system tokens for color, typography, and elevation.
- **Configuration API Custom Properties**: Property and value suggestions to configure component sizing, width, and shape via container style queries (`--size-items`, `--width-items`, `--shape-items`), as well as typeface setup (`--ref-typeface-*`), with interactive value dropdowns and syntax hints.
- **Focus Ring Motion**: Access `--focus-ring-motion-spring` and `--focus-ring-motion-duration` to apply Web Expressive's shared spring focus interaction to custom components.
- **Responsive Breakpoint Queries**: Type `window-*` to scaffold Material 3 breakpoints (`compact`, `medium`, `expanded`, `large`, `extra-large`), including wider and narrower range queries (e.g. `window-medium-wider`).
- **Web Standards Helpers**: Modern CSS snippets such as `register-property` for `@property`, `media-*` for user preference queries, and `supports-*` for feature queries.

## Component Snippets

All component snippets are prefixed with `we-` (and their base component names) for fast autocompletion. Action components provide corresponding `<a>` navigation link variants:

| Component | Prefixes | HTML Element | Supported Variants & Modifiers |
| :--- | :--- | :--- | :--- |
| **Button** | `we-button`, `button` | `<button>` | **Variants:** `filled` (default), `tonal`, `outline`, `elevated`, `text`<br>**Sizes:** `extra-small`, `small` (default), `medium`, `large`, `extra-large`<br>**Shapes:** `round` (default), `square` |
| **Button (Link)** | `we-button:a`, `button:a` | `<a>` | Same as Button |
| **Toggle Button** | `we-toggle-button`, `toggle-button` | `<div>` + `<input>` + `<label>` | **Variants:** `filled` (default), `tonal`, `outline`, `elevated`<br>**Sizes:** `extra-small`, `small` (default), `medium`, `large`, `extra-large`<br>**Shapes:** `round` (default), `square` |
| **Icon Button** | `we-icon-button`, `icon-button` | `<button>` | **Variants:** `filled` (default), `tonal`, `outline`, `standard`<br>**Sizes:** `extra-small`, `small` (default), `medium`, `large`, `extra-large`<br>**Shapes:** `round` (default), `square`<br>**Widths:** `narrow`, `normal` (default), `wide` |
| **Icon Button (Link)** | `we-icon-button:a`, `icon-button:a` | `<a>` | Same as Icon Button |
| **Toggle Icon Button** | `we-toggle-icon-button`, `toggle-icon-button` | `<div>` + `<input>` + `<label>` | **Variants:** `filled` (default), `tonal`, `outline`, `standard`<br>**Sizes:** `extra-small`, `small` (default), `medium`, `large`, `extra-large`<br>**Shapes:** `round` (default), `square`<br>**Widths:** `narrow`, `normal` (default), `wide` |
| **Standard Button Group** | `we-standard-button-group`, `standard-button-group` | `<div>` | **Sizes:** `extra-small`, `small` (default), `medium`, `large`, `extra-large`<br>**Shapes:** `round` (default), `square`<br>**Widths:** `narrow`, `normal` (default), `wide` |
| **Connected Button Group** | `we-connected-button-group`, `connected-button-group` | `<div>` | **Sizes:** `extra-small`, `small` (default), `medium`, `large`, `extra-large`<br>**Shapes:** `round` (default), `square` |
| **FAB** | `we-fab`, `fab` | `<button>` | **Variants:** `primary-container` (default), `secondary-container`, `tertiary-container`, `primary`, `secondary`, `tertiary`<br>**Sizes:** `small` (56px, default), `medium` (80px), `large` (96px) |
| **FAB (Link)** | `we-fab:a`, `fab:a` | `<a>` | Same as FAB |
| **Extended FAB** | `we-extended-fab`, `extended-fab` | `<button>` | **Variants:** `primary-container` (default), `secondary-container`, `tertiary-container`, `primary`, `secondary`, `tertiary`<br>**Sizes:** `small` (56px, default), `medium` (80px), `large` (96px) |
| **Extended FAB (Link)** | `we-extended-fab:a`, `extended-fab:a` | `<a>` | Same as Extended FAB |
| **Switch** | `we-switch`, `switch` | `<input>` | **Modifiers:** `icon` |

> **Implicit Defaults:** In Web Expressive, modifiers like `.filled`, `.small`, `.round`, and `.normal` are applied automatically by default when no competing modifier is present. Do not include default classes explicitly in your markup unless overriding a parent query.

## Usage

In an HTML or CSS file, type a snippet prefix and select it from suggestions. Press `Tab` to cycle through the editable fields:

- **Starter Template:** In an empty HTML file, type `!we` (or `web-expressive-starter`) to scaffold a complete boilerplate, choose a starter color scheme from the dropdown, and jump straight into `<body>`.
- **Components:** Type `we` to view all components, or type a specific component name (`we-button`, `we-fab`, `we-switch`).
- **Navigation Links:** Use the `:a` suffix (`we-button:a`, `we-icon-button:a`, `we-fab:a`, `we-extended-fab:a`) for navigation elements styled as buttons.
- **Form Selection Controls:** In `we-toggle-button` and `we-toggle-icon-button`, typing an `id` automatically syncs the `<label for="...">` attribute, and pressing `Tab` jumps directly to the label text.
- **System Tokens:** Type `--` or `sys` in CSS or `<style>` blocks to view system color, typography, and motion tokens. Use typescale tokens with the CSS `font` shorthand (e.g. `font: var(--sys-typescale-body-large)`).
- **Configuration API:** Type `--size-items`, `--width-items`, `--shape-items`, or `--ref-typeface-` to select custom properties with interactive value dropdowns and syntax hints.

Refer to the [Web Expressive Documentation](https://mobalti.github.io/web-expressive/docs/) for complete guides, live interactive examples, and design token references.

## Installation

### From the VS Code Marketplace
1. Open VS Code.
2. Open the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Search for **Web Expressive Snippets**.
4. Click **Install**.

### Manual VSIX Installation
1. Download the `.vsix` file from the [Releases](https://github.com/mobalti/web-expressive/releases) page.
2. Open VS Code and open the Extensions view (`Ctrl+Shift+X`).
3. Click the `...` (More Actions) menu in the top-right corner of the Extensions panel.
4. Select **Install from VSIX...** and choose the downloaded file.

## Support & Contributing

- [Documentation](https://mobalti.github.io/web-expressive/docs/)
- [GitHub Repository](https://github.com/mobalti/web-expressive)
- [Discussions & Help](https://github.com/mobalti/web-expressive/discussions)
- [Issue Tracker](https://github.com/mobalti/web-expressive/issues)
