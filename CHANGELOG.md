# Changelog

## 1.1.0

- Added `--sys-elevation-level-0` and applied it to components with no resting shadow.
- Corrected typography weights and sizes to match the Material 3 type scale, including weight 700 for emphasized title medium/small and label styles.
- Renamed `--sys-motion-spring-pop-focus` to `--focus-ring-motion-spring` and added `--focus-ring-motion-duration` to control focus-ring timing independently of other motion tokens.
- Added WebKit-prefixed text-selection prevention to buttons, toggle buttons, and FABs (`-webkit-user-select: none`).
- Added border-box sizing to the switch track and thumb to preserve their dimensions without the core reset.
- Renamed the embedded switch icon font to `WE-Switch-Icons`.
- Reset the switch input's native background and border, fixing a Firefox artifact in the disabled state.
- Updated token documentation, examples, scheme tools, and downloadable starters for this release.

Upgrade note: If you used the previously undocumented `--sys-motion-spring-pop-focus` token, replace it with `--focus-ring-motion-spring`. Use `--focus-ring-motion-duration` to customize focus-ring timing; changing `--sys-motion-spring-fast-spatial-duration` no longer changes component focus-ring timing. Load font weight 700 when using the emphasized title medium/small or label styles.

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
