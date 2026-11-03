# Changelog

## 1.0.0

- Added explicit light and dark mode control through `data-mode` attributes and mode classes.
- Aligned elevation shadows with the system color preference and explicit mode overrides.
- Added the `design-system.overrides` cascade layer and adjusted core selector specificity and text sizing.
- Rebuilt the documentation site and added component examples, foundation examples, and scheme explorers.
- Reorganized layout starters and updated the homepage and README.

Upgrade note: Review custom overrides within the library's cascade layers, as selector specificity and layer precedence have changed.

## 0.5.1

First official release of Web Expressive.

- Added the core foundation and Material 3 Expressive system tokens.
- Added buttons, toggle buttons, icon buttons, toggle icon buttons, FABs, button groups, and switches.
- Added light and dark color schemes, including the recommended `schemes/alpha/` collection.
- Added abstract shape tokens for clipping and masking.
- Added reference documentation and adaptable single-file layout starters.