# Tokens reference

This reference lists the CSS custom properties exposed by Web Expressive. Use them to apply typography, color, elevation, motion, and shape consistently across a project.

## Contents

- [Typography reference](#typography-reference)
- [Color reference](#color-reference)
- [Elevation reference](#elevation-reference)
- [Motion reference](#motion-reference)
- [Shape corner reference](#shape-corner-reference)
- [Abstract shapes reference](#abstract-shapes-reference)

> [!NOTE]
> Most tokens in this reference are based on Material 3 Expressive specifications.

## Typography reference

| ⠀⠀⠀⠀⠀⠀⠀⠀⠀**Variable**⠀⠀⠀⠀⠀⠀⠀⠀⠀|⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**Emphasized**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀| **Common use cases**                                           |
| --------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Display**                       |                                              |                                                                            |
| `--sys-typescale-display-large`   | `--sys-typescale-emphasized-display-large`   | **Hero sections.** Huge impact text for landing page titles.               |
| `--sys-typescale-display-medium`  | `--sys-typescale-emphasized-display-medium`  | **Large section headers.** High-visibility headings for major sections.    |
| `--sys-typescale-display-small`   | `--sys-typescale-emphasized-display-small`   | **Secondary hero headings.** Strong headings for supporting hero content.  |
| **Headline**                      |                                              |                                                                            |
| `--sys-typescale-headline-large`  | `--sys-typescale-emphasized-headline-large`  | **H1 elements.** Primary page headings and major article titles.           |
| `--sys-typescale-headline-medium` | `--sys-typescale-emphasized-headline-medium` | **H2 elements.** Secondary section headings.                               |
| `--sys-typescale-headline-small`  | `--sys-typescale-emphasized-headline-small`  | **H3 elements.** Sub-section headings and modal titles.                    |
| **Title**                         |                                              |                                                                            |
| `--sys-typescale-title-large`     | `--sys-typescale-emphasized-title-large`     | **App bar / navigation titles.** High-visibility component headers.        |
| `--sys-typescale-title-medium`    | `--sys-typescale-emphasized-title-medium`    | **Card titles.** Standard headers for cards and list item groups.          |
| `--sys-typescale-title-small`     | `--sys-typescale-emphasized-title-small`     | **Small components.** Nested list headers or secondary card titles.        |
| **Body**                          |                                              |                                                                            |
| `--sys-typescale-body-large`      | `--sys-typescale-emphasized-body-large`      | **Primary reading.** Main paragraph text for blogs and long-form content.  |
| `--sys-typescale-body-medium`     | `--sys-typescale-emphasized-body-medium`     | **Standard content.** Default text for descriptions and metadata.          |
| `--sys-typescale-body-small`      | `--sys-typescale-emphasized-body-small`      | **Fine print.** Footers, legal disclaimers, and secondary metadata.        |
| **Label**                         |                                              |                                                                            |
| `--sys-typescale-label-large`     | `--sys-typescale-emphasized-label-large`     | **Interactive elements.** Text inside buttons, tabs, and navigation rails. |
| `--sys-typescale-label-medium`    | `--sys-typescale-emphasized-label-medium`    | **Form controls.** Labels for inputs (`<label>`), chips, and badges.       |
| `--sys-typescale-label-small`     | `--sys-typescale-emphasized-label-small`     | **Captions / overlines.** Tiny hints, tooltips, and image captions.        |

> [!IMPORTANT]
> Web Expressive uses the shorthand `font` property exclusively for typography variables.

```css
.example {
  font: var(--sys-typescale-body-medium);
}
```

> [!TIP]
> Use the emphasized variant for editorial content.

### Customization

To change the font family for the full typography system, override the base variable:

```css
html {
  --ref-typeface-base: "Open Sans";
}
```

To split the family by role, override the brand and plain references separately:

```css
html {
  --ref-typeface-brand: "Inter"; /* Display, Headline, Title large */
  --ref-typeface-plain: "Open Sans"; /* Title small/medium, Body, Label */
}
```

Emphasized typography inherits from the brand and plain references by default, but you can override those families separately:

```css
html {
  --ref-typeface-emphasized-brand: "Anton"; /* Display Emphasized, Headline Emphasized, Title large Emphasized */
  --ref-typeface-emphasized-plain: "Anton"; /* Title small/medium, Body, Label */
}
```

You can provide one or more fallback fonts, but **all font names must be quoted**:

```css
html {
  --ref-typeface-base: "Inter", "Arial", "-apple-system", "BlinkMacSystemFont";
}
```

Use `--ref-typeface-generic` for the generic fallback.
It defaults to `sans-serif` and accepts **one unquoted value** from the following list:
`serif`, `sans-serif`, `system-ui`, `monospace`, `cursive`, `fantasy`, `math`, `ui-serif`, `ui-sans-serif`, `ui-monospace`, `ui-rounded`.

```css
html {
  --ref-typeface-generic: cursive;
}
```

> [!TIP]
> Prioritize changing `--ref-typeface-base` first. Only specialize roles if the design intent requires distinct visual weights or stylistic contrast.

## Color reference

| **Variable**                             | **Common use cases**                                                             |
| ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Primary (main brand)**                 |                                                                                              |
| `--sys-color-primary`                    | **High-emphasis.** Primary buttons, active states, and prominent brand icons.                |
| `--sys-color-on-primary`                 | **Content on primary.** Text and icons displayed against the primary color.                  |
| `--sys-color-primary-container`          | **Medium-emphasis.** Large prominent containers like FABs or active search bars.             |
| `--sys-color-on-primary-container`       | **Content on primary container.** High-contrast text for primary containers.                 |
| **Secondary (less prominent)**           |                                                                                              |
| `--sys-color-secondary`                  | **Secondary actions.** Filter chips, toggle switches, and less-intense buttons.              |
| `--sys-color-on-secondary`               | **Content on secondary.** Text/icons for secondary elements.                                 |
| `--sys-color-secondary-container`        | **Subtle highlights.** Backgrounds for selected items in lists or navigation.                |
| `--sys-color-on-secondary-container`     | **Content on secondary container.** Text for subtle accent areas.                            |
| **Tertiary (contrasting accents)**       |                                                                                              |
| `--sys-color-tertiary`                   | **Input highlights.** Used for call-to-action elements or tertiary brand accents.             |
| `--sys-color-on-tertiary`                | **Content on tertiary.** Text/icons for tertiary elements.                                   |
| `--sys-color-tertiary-container`         | **Specific highlights.** Unique badges or notification dots.                                 |
| `--sys-color-on-tertiary-container`      | **Content on tertiary container.** Deep text for tertiary accents.                           |
| **Error (system alerts)**                |                                                                                              |
| `--sys-color-error`                      | **Critical alerts.** Destructive buttons (Delete), error icons, and invalid text.            |
| `--sys-color-on-error`                   | **Content on error.** Text/icons on high-emphasis error backgrounds.                         |
| `--sys-color-error-container`            | **Error banners.** Large warning backgrounds at the top of forms.                            |
| `--sys-color-on-error-container`         | **Content on error container.** Error message text within banners.                           |
| **Surface & background (foundational)**  |                                                                                              |
| `--sys-color-background`                 | **App background.** The foundational color under all other content.                          |
| `--sys-color-on-background`              | **Body text.** Main text color for long-form reading on the background.                      |
| `--sys-color-surface`                    | **Generic surfaces.** Default background for cards, sheets, and dialogs.                     |
| `--sys-color-on-surface`                 | **Surface text.** Main content color for text sitting on surface elements.                   |
| `--sys-color-surface-variant`            | **Decorative surfaces.** Backgrounds for inputs or unselected component states.              |
| `--sys-color-on-surface-variant`         | **Low-emphasis text.** Metadata, captions, and secondary icon colors.                        |
| **Expressive surface containers**        |                                                                                              |
| `--sys-color-surface-bright`             | **High-visibility.** A surface that is always bright, regardless of light/dark mode.         |
| `--sys-color-surface-dim`                | **Low-visibility.** A dimmed surface for backgrounding content.                              |
| `--sys-color-surface-container-lowest`   | **Clean backdrop.** Used for the most "distant" layer in the UI.                             |
| `--sys-color-surface-container-low`      | **Minimal separation.** Subtle card backgrounds on a flat page.                              |
| `--sys-color-surface-container`          | **Standard container.** The default role for most cards and UI blocks.                       |
| `--sys-color-surface-container-high`     | **Raised areas.** Side drawers, floating search bars, or headers.                            |
| `--sys-color-surface-container-highest`  | **Top-level layers.** Modals, dialogs, and tooltips.                                         |
| **Fixed accents (mode independent)**     |                                                                                              |
| `--sys-color-primary-fixed`              | **Static branding.** Brand colors that stay consistent across light and dark modes.          |
| `--sys-color-on-primary-fixed`           | **Text on fixed.** Main text for fixed brand elements.                                       |
| `--sys-color-primary-fixed-dim`          | **Dark-mode fixed.** A muted version of primary-fixed for dark mode.                         |
| `--sys-color-on-primary-fixed-variant`   | **Emphasis on fixed.** Secondary text/icons on fixed backgrounds.                            |
| `--sys-color-secondary-fixed`            | **Static accents.** Secondary brand colors that do not change across modes.                  |
| `--sys-color-on-secondary-fixed`         | **Text on secondary fixed.** Standard text for fixed secondary areas.                        |
| `--sys-color-secondary-fixed-dim`        | **Dark-mode fixed.** Muted secondary for dark mode consistency.                              |
| `--sys-color-on-secondary-fixed-variant` | **Emphasis on fixed.** Detail text on fixed secondary containers.                            |
| `--sys-color-tertiary-fixed`             | **Static tertiary.** Tertiary brand colors that remain constant.                             |
| `--sys-color-on-tertiary-fixed`          | **Text on tertiary fixed.** Main text for fixed tertiary elements.                           |
| `--sys-color-tertiary-fixed-dim`         | **Dark-mode fixed.** Muted tertiary for dark mode consistency.                               |
| `--sys-color-on-tertiary-fixed-variant`  | **Emphasis on fixed.** Detail text on fixed tertiary containers.                             |
| **Utility & inverse**                    |                                                                                              |
| `--sys-color-outline`                    | **Borders.** Standard visible boundaries for text fields and chips.                          |
| `--sys-color-outline-variant`            | **Dividers.** Very subtle lines for horizontal rules or list separators.                     |
| `--sys-color-shadow`                     | **Depth.** The color used for box-shadows (usually black/neutral).                           |
| `--sys-color-scrim`                      | **Overlays.** The semi-transparent dark layer behind a modal.                                |
| `--sys-color-surface-tint`               | **Color toning.** Used to apply brand-colored tints to surfaces at high elevations.          |
| `--sys-color-inverse-surface`            | **High contrast.** Snackbars or floating "undo" banners.                                     |
| `--sys-color-inverse-on-surface`         | **Inverse text.** High-contrast text for snackbars.                                          |
| `--sys-color-inverse-primary`            | **Inverse accent.** Primary-colored buttons inside an inverse surface (e.g., on a snackbar). |

## Elevation reference

| ⠀⠀⠀⠀⠀⠀⠀⠀**Variable**⠀⠀⠀⠀⠀⠀⠀             | **Common use cases**                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _(Default flat)_         | **Base layer.** Used for the main background and items that should not appear raised, like standard list items or flat buttons.                                     |
| `--sys-elevation-level1` | **Minimal lift.** Standard cards, unselected filter chips, and low-profile components. Provides just enough shadow to separate from the background.                 |
| `--sys-elevation-level2` | **Raised.** Small floating action buttons (FABs) and components that have been interacted with (hover/focus states of level 1 items).                               |
| `--sys-elevation-level3` | **Prominent.** Standard FABs, date pickers, and time pickers. This is the "middle ground" for floating components.                                                  |
| `--sys-elevation-level4` | **High lift.** Search bars in a scrolled state, navigation drawers, and side sheets. Used for large surfaces that slide over the main content.                      |
| `--sys-elevation-level5` | **Maximum lift.** Dialogs, modals, tooltips, and context menus. Reserved for elements that require the user's immediate focus and sit at the very top of the stack. |

## Motion reference

| ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**Variable**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀             | ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**Duration**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                          | **Common use cases**                                                                                                  |
| ------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Spatial** _(movement & scale)_      |                                                |                                                                                                                                   |
| `--sys-motion-spring-fast-spatial`    | `--sys-motion-spring-fast-spatial-duration`    | **Short movement.** Toggle switches, button icon motion, and chip removal.                                                        |
| `--sys-motion-spring-default-spatial` | `--sys-motion-spring-default-spatial-duration` | **Standard movement.** Navigation drawers, side sheets, and medium-distance layout transitions.                                   |
| `--sys-motion-spring-slow-spatial`    | `--sys-motion-spring-slow-spatial-duration`    | **Large movement.** Full-screen transitions and large layout shifts.                                                              |
| **Effects** _(fading & styling)_      |                                                |                                                                                                                                   |
| `--sys-motion-spring-fast-effects`    | `--sys-motion-spring-fast-effects-duration`    | **Quick effects.** Hover, pressed, and icon-swap transitions.                                                                     |
| `--sys-motion-spring-default-effects` | `--sys-motion-spring-default-effects-duration` | **Standard effects.** Tooltip fades and content cross-fades.                                                                      |
| `--sys-motion-spring-slow-effects`    | `--sys-motion-spring-slow-effects-duration`    | **Slow effects.** Gradual background shifts and layered visual transitions.                                                       |

## Shape corner reference

| ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**Variable**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                               | **Common use cases**                                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `--sys-shape-corner-none`                  | **Full-bleed.** Edge-to-edge images, banners, or backgrounds that touch the screen boundary.                        |
| `--sys-shape-corner-extra-small`           | **Tiny elements.** Tooltips, small badges, and micro-interactions.                                                  |
| `--sys-shape-corner-small`                 | **Inputs & controls.** Text fields, checkboxes, and small menu items.                                               |
| `--sys-shape-corner-medium`                | **Standard components.** Default cards, small dialogs, and secondary buttons.                                       |
| `--sys-shape-corner-large`                 | **Prominent surfaces.** Medium-sized cards and standard floating action buttons (FABs).                             |
| `--sys-shape-corner-large-increased`       | **Emphasized cards.** Larger cards and featured content blocks.                                                     |
| `--sys-shape-corner-extra-large`           | **Large containers.** Bottom sheets, navigation drawers, and large modal dialogs.                                   |
| `--sys-shape-corner-extra-large-increased` | **Featured large surfaces.** Hero containers and prominent background surfaces.                                     |
| `--sys-shape-corner-extra-extra-large`     | **Largest containers.** Ultra-wide bars and full-screen expansion surfaces.                                         |
| `--sys-shape-corner-full`                  | **Pills & circles.** Standard buttons, chips, and circular icons (avatars).                                         |

## Abstract shapes reference

These tokens provide Material 3 Expressive shapes in two CSS formats: clipping and masking.

> [!NOTE]
> These tokens are optional. Import them individually as needed:

```css
/* Import clip tokens */
@import "web-expressive/dist/shapes/clip-tokens.css";

/* Import mask tokens */
@import "web-expressive/dist/shapes/mask-tokens.css";
```

### 1. Clip tokens

Use clip tokens when you need a scalable shape outline. They rely on the CSS `shape()` function, so the geometry stays proportional to the element's bounding box.

```css
.element {
  clip-path: var(--sys-shape-clip-diamond);
}
```

### 2. Mask tokens

Use mask tokens when you need alpha transparency or more complex visual treatment. They are provided as Data URIs, which makes them suitable for layered gradients and cases where `clip-path` is not sufficient.

```css
.element {
  /* Using shorthand */
  mask: var(--sys-shape-mask-diamond) no-repeat center/contain;
  
  /* Or single property */
  mask-image: var(--sys-shape-mask-diamond);
}
```

| ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**Clipping**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀|⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**Masking**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀| **Common use cases**                                                                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **Geometric solids**                       |                                            |                                                                                                                     |
| `--sys-shape-clip-circle`                  | `--sys-shape-mask-circle`                  | **Circular framing.** Avatars and circular icon backgrounds.                                                        |
| `--sys-shape-clip-square`                  | `--sys-shape-mask-square`                  | **Square framing.** Standard images and grid-based decorative blocks.                                               |
| `--sys-shape-clip-triangle`                | `--sys-shape-mask-triangle`                | **Directional shapes.** Alerts, pointers, and directional accents.                                                  |
| `--sys-shape-clip-diamond`                 | `--sys-shape-mask-diamond`                 | **Diamond framing.** Single icons and featured graphic accents.                                                     |
| `--sys-shape-clip-clamshell`               | `--sys-shape-mask-clamshell`               | **Curved framing.** Avatars and decorative graphic containers.                                                      |
| `--sys-shape-clip-pentagon`                | `--sys-shape-mask-pentagon`                | **Geometric framing.** Illustrations and graphic containers with a five-sided silhouette.                           |
| `--sys-shape-clip-oval`                    | `--sys-shape-mask-oval`                    | **Wide framing.** Landscape logos and horizontal graphic treatments.                                                |
| `--sys-shape-clip-pill`                    | `--sys-shape-mask-pill`                    | **Extended framing.** Status text, badges, and wide banners.                                                        |
| `--sys-shape-clip-semicircle`              | `--sys-shape-mask-semicircle`              | **Edge-attached shapes.** Decorative shapes aligned to the side or bottom of a container.                           |
| **Organic shapes (Cookies & Clovers)**     |                                            |                                                                                                                     |
| `--sys-shape-clip-4-leaf-clover`           | `--sys-shape-mask-4-leaf-clover`           | **Soft organic framing.** Avatars and decorative profile treatments.                                                |
| `--sys-shape-clip-8-leaf-clover`           | `--sys-shape-mask-8-leaf-clover`           | **Dense organic framing.** Prominent icons and decorative backdrops.                                                |
| `--sys-shape-clip-4-sided-cookie`          | `--sys-shape-mask-4-sided-cookie`          | **Squircle framing.** App icons and rounded graphic containers.                                                     |
| `--sys-shape-clip-6-sided-cookie`          | `--sys-shape-mask-6-sided-cookie`          | **Soft polygon framing.** Decorative alternatives to rigid hexagons.                                                |
| `--sys-shape-clip-7-sided-cookie`          | `--sys-shape-mask-7-sided-cookie`          | **Irregular organic framing.** Decorative shapes with a less uniform silhouette.                                    |
| `--sys-shape-clip-9-sided-cookie`          | `--sys-shape-mask-9-sided-cookie`          | **Near-circular organic framing.** Soft decorative treatments with slight edge variation.                           |
| `--sys-shape-clip-12-sided-cookie`         | `--sys-shape-mask-12-sided-cookie`         | **Scalloped framing.** Seal, badge, and decorative stamp treatments.                                                |
| **Radiating shapes (Stars & Suns)**        |                                            |                                                                                                                     |
| `--sys-shape-clip-sunny`                   | `--sys-shape-mask-sunny`                   | **Radiating accents.** Callouts, badges, and high-attention labels.                                                 |
| `--sys-shape-clip-very-sunny`              | `--sys-shape-mask-very-sunny`              | **Sharp radiating accents.** Promotional badges and high-attention markers.                                         |
| `--sys-shape-clip-burst`                   | `--sys-shape-mask-burst`                   | **Burst accents.** Promotional graphics and emphasized decorative treatments.                                       |
| `--sys-shape-clip-soft-burst`              | `--sys-shape-mask-soft-burst`              | **Rounded burst accents.** Emphasis shapes with softer edges.                                                       |
| `--sys-shape-clip-boom`                    | `--sys-shape-mask-boom`                    | **Impact shapes.** Comic-inspired callouts and decorative emphasis.                                                 |
| `--sys-shape-clip-soft-boom`               | `--sys-shape-mask-soft-boom`               | **Soft impact shapes.** Rounded decorative emphasis with a cloud-like silhouette.                                   |
| **Thematic shapes**                        |                                            |                                                                                                                     |
| `--sys-shape-clip-heart`                   | `--sys-shape-mask-heart`                   | **Favorite states.** Like, save, and affinity-related visuals.                                                      |
| `--sys-shape-clip-flower`                  | `--sys-shape-mask-flower`                  | **Floral framing.** Lifestyle, nature, and decorative organic treatments.                                           |
| `--sys-shape-clip-gem`                     | `--sys-shape-mask-gem`                     | **Gem framing.** Premium indicators and featured graphic treatments.                                                |
| `--sys-shape-clip-fan`                     | `--sys-shape-mask-fan`                     | **Corner framing.** Graphic elements positioned into card corners.                                                  |
| `--sys-shape-clip-ghost-ish`               | `--sys-shape-mask-ghost-ish`               | **Character framing.** Thematic or mascot-driven decorative treatments.                                             |
| `--sys-shape-clip-pixel-circle`            | `--sys-shape-mask-pixel-circle`            | **Pixel framing.** Retro-style avatars and graphic accents.                                                         |
| `--sys-shape-clip-pixel-triangle`          | `--sys-shape-mask-pixel-triangle`          | **Pixel directional shapes.** Retro pointers and geometric accents.                                                 |
| `--sys-shape-clip-arch`                    | `--sys-shape-mask-arch`                    | **Arch framing.** Portrait images and architectural silhouettes.                                                    |
| `--sys-shape-clip-arrow`                   | `--sys-shape-mask-arrow`                   | **Arrow framing.** Directional graphics and large navigational accents.                                             |
| `--sys-shape-clip-slanted`                 | `--sys-shape-mask-slanted`                 | **Slanted framing.** Skewed graphic treatments and directional layouts.                                             |
| **Soft shapes**                            |                                            |                                                                                                                     |
| `--sys-shape-clip-puffy`                   | `--sys-shape-mask-puffy`                   | **Soft cloud framing.** Gentle decorative backdrops and highlighted content areas.                                  |
| `--sys-shape-clip-puffy-diamond`           | `--sys-shape-mask-puffy-diamond`           | **Rounded diamond framing.** Softer alternatives to sharp diamond silhouettes.                                      |
| `--sys-shape-clip-bun`                     | `--sys-shape-mask-bun`                     | **Flat-base organic framing.** Decorative containers anchored to a baseline or horizon.                             |
