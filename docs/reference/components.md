# Web Expressive Component Guide

This guide documents the standard components and patterns available in Web Expressive.

Load `core.css` and a scheme first, then import the stylesheet for each component you use.

## Contents

- [Buttons](#buttons)
  - [Button](#standard-button)
  - [Toggle Button](#toggle-button)
  - [Icon Button](#icon-button)
  - [Toggle Icon Button](#toggle-icon-button)
- [Button Groups](#button-groups)
  - [Standard Button Group](#standard-button-group)
  - [Connected Button Group](#connected-button-group)
- [FABs](#fabs)
  - [Extended FAB](#extended-fab)
  - [FAB](#fab)
- [Selection Controls](#selection-controls)
  - [Switch](#switch)
- [Implementation Notes](#implementation-notes)
  - [Icons](#icons)
  - [Parent Controls](#parent-controls)
  - [Custom Styling](#custom-styling)

---

<h2 id="buttons">Buttons</h2>

> [!NOTE]
> **Implicit Defaults:** modifier classes like `.filled`, `.small`, `.round`, and `.normal` are represented by the absence of another modifier. Add a default class only when you need to override a value provided by a parent control.

<h3 id="standard-button">Button</h3>

Standard triggers for actions. These can be implemented using `<button>` for actions or `<a>` for navigation.

- **export path**: `components/button.css`
- **classes**:
  - **base**: `.button`
  - **modifiers**:
    - **variants**: `.filled` (default), `.tonal`, `.outline`, `.elevated`, `.text`
    - **sizes**: `.extra-small`, `.small` (default), `.medium`, `.large`, `.extra-large`
    - **shape**: `.round` (default), `.square`

#### Markup

```html
<!-- Use .filled by default for primary actions -->
<button class="button [modifiers]">Label</button>

<!-- Use <a> for navigation while maintaining button styling -->
<a href="..." class="button [modifiers]"> Label </a>

<!-- Text with icon; use for emphasis -->
<button class="button [modifiers]">
  <span class="icon" aria-hidden="true">stars</span>
  Label
</button>
```

<h3 id="toggle-button">Toggle Button</h3>

Used for selection states. These wrap standard input types to maintain accessibility.

- **export path**: `components/toggle-button.css`
- **classes**:
  - **base**: `.toggle-button`
  - **modifiers**:
    - **variants**: `.filled` (default), `.tonal`, `.outline`, `.elevated`
    - **sizes**: `.extra-small`, `.small` (default), `.medium`, `.large`, `.extra-large`
    - **shape**: `.round` (default), `.square`

#### Markup

```html
<!-- Checkbox for multiple selection -->
<div class="toggle-button [modifiers]">
  <input class="input" type="checkbox" id="check1" />
  <label class="label" for="check1">Label</label>
</div>

<!-- Radio for single selection -->
<div class="toggle-button [modifiers]">
  <input class="input" type="radio" name="group" id="rad1" />
  <label class="label" for="rad1">Label</label>
</div>

<!-- Checkbox with icon -->
<div class="toggle-button [modifiers]">
  <input class="input" type="checkbox" id="check2" />
  <label class="label" for="check2">
    <span class="icon" aria-hidden="true">stars</span>
    Label
  </label>
</div>
```

<h3 id="icon-button">Icon Button</h3>

Compact actions represented by an icon. Always include an `aria-label` for accessibility.

- **export path**: `components/icon-button.css`
- **classes**:
  - **base**: `.icon-button`
  - **modifiers**:
    - **variants**: `.filled` (default), `.tonal`, `.outline`, `.standard`
    - **sizes**: `.extra-small`, `.small` (default), `.medium`, `.large`, `.extra-large`
    - **shape**: `.round` (default), `.square`
    - **width**: `.narrow`, `.normal` (default), `.wide`

#### Markup

```html
<!-- Standard action button -->
<button class="icon-button [modifiers]" aria-label="Favorite">
  <span class="icon" aria-hidden="true">favorite</span>
</button>

<!-- Navigation link as icon button -->
<a href="..." class="icon-button [modifiers]" aria-label="Go to Home">
  <span class="icon" aria-hidden="true">home</span>
</a>
```

<h3 id="toggle-icon-button">Toggle Icon Button</h3>

Visual toggles for states such as bookmarks or "favorite" status.

- **export path**: `components/toggle-icon-button.css`
- **classes**:
  - **base**: `.toggle-icon-button`
  - **modifiers**:
    - **variants**: `.filled` (default), `.tonal`, `.outline`, `.standard`
    - **sizes**: `.extra-small`, `.small` (default), `.medium`, `.large`, `.extra-large`
    - **shape**: `.round` (default), `.square`
    - **width**: `.narrow`, `.normal` (default), `.wide`

#### Markup

```html
<!-- Bookmark toggle using checkbox -->
<div class="toggle-icon-button [modifiers]">
  <input class="input" type="checkbox" aria-label="Bookmark" id="book1" />
  <label class="label" for="book1">
    <span class="icon" aria-hidden="true">bookmark</span>
  </label>
</div>

<!-- Mode selection using radio -->
<div class="toggle-icon-button [modifiers]">
  <input
    class="input"
    type="radio"
    name="mode"
    aria-label="Selection"
    id="sel1"
  />
  <label class="label" for="sel1">
    <span class="icon" aria-hidden="true">check</span>
  </label>
</div>
```

---

<h2 id="button-groups">Button Groups</h2>

<h3 id="standard-button-group">Standard Button Group</h3>

Groups related buttons together with a consistent gap. It supports a mix of standard buttons, toggle buttons, icon buttons, and toggle icon buttons.

- **export path**: `components/standard-button-group.css`
- **classes**:
  - **base**: `.standard-button-group`
  - **modifiers**:
    - **sizes**: `.extra-small`, `.small` (default), `.medium`, `.large`, `.extra-large`
    - **shape**: `.round` (default), `.square`
    - **width**: `.narrow`, `.normal` (default), `.wide` (applies only to icon-based buttons within the group)

#### Markup

Import `standard-button-group.css` and the component styles used inside the group, such as `button.css`, `toggle-button.css`, `icon-button.css`, or `toggle-icon-button.css`.

Use `role="group"` for accessibility if not wrapped in a `<fieldset>`.

```html
<div
  class="standard-button-group [modifiers]"
  role="group"
  aria-label="Quick Settings"
>
  <!-- Mix of toggle and toggle-icon buttons -->
  <div class="toggle-button [modifiers]">
    <input type="checkbox" class="input" id="focus" />
    <label class="label" for="focus">
      <span class="icon" aria-hidden="true">do_not_disturb_on</span>
      Focus
    </label>
  </div>

  <div class="toggle-icon-button [modifiers]">
    <input type="checkbox" class="input" id="flashlight" />
    <label class="label" for="flashlight">
      <span class="icon" aria-hidden="true">flashlight_on</span>
    </label>
  </div>
</div>
```

#### Accessibility: Fieldset Support

Wrap the group in a `<fieldset>` when you want native group semantics, including the ability to disable all buttons at once.

```html
<fieldset class="fieldset" aria-label="Quick Settings" disabled>
  <div class="standard-button-group [modifiers]">
    <!-- All buttons inside will be disabled automatically -->
  </div>
</fieldset>
```

<h3 id="connected-button-group">Connected Button Group</h3>

A group of connected buttons that stretch to fill the container size. This is typically used for a related set of options, such as size selection. Currently supports the `toggle-button` component for single (radio) or multiple (checkbox) selection.

- **export path**: `components/connected-button-group.css`
- **classes**:
  - **base**: `.connected-button-group`
  - **modifiers**:
    - **sizes**: `.extra-small`, `.small` (default), `.medium`, `.large`, `.extra-large`
    - **shape**: `.round` (default), `.square`

#### Markup

Import `connected-button-group.css` and `toggle-button.css`.

```html
<div
  class="connected-button-group [modifiers]"
  role="group"
  aria-label="Select Size"
>
  <div class="toggle-button [modifiers]">
    <input type="radio" checked name="size" class="input" id="8-oz" />
    <label class="label" for="8-oz">8 oz</label>
  </div>
  <div class="toggle-button [modifiers]">
    <input type="radio" name="size" class="input" id="12-oz" />
    <label class="label" for="12-oz">12 oz</label>
  </div>
</div>
```

#### Selected icon

To show an icon only for the selected option, add one `.icon.selected` inside each toggle button and omit the unselected icon. Within a connected button group, the selected icon animates into view when its input is checked. The icon can be a Material Symbol, an `<svg>`, or an `<img>`.

```html
<div class="connected-button-group" role="group" aria-label="Select size">
  <div class="toggle-button">
    <input class="input" type="radio" name="size" id="small" checked />
    <label class="label" for="small">
      <span class="icon selected" aria-hidden="true">check</span>
      Small
    </label>
  </div>
</div>
```

---

<h2 id="fabs">FABs</h2>

<h3 id="extended-fab">Extended FAB</h3>

Floating action button with a text label. These can be implemented using `<button>` for actions or `<a>` for navigation.

- **export path**: `components/extended-fab.css`
- **classes**:
  - **base**: `.extended-fab`
  - **modifiers**:
    - **variants**: `.primary-container` (default), `.secondary-container`, `.tertiary-container`, `.primary`, `.secondary`, `.tertiary`
    - **sizes**: `.small` (default), `.medium`, `.large`

#### Markup

```html
<!-- Default extended FAB -->
<button class="extended-fab [modifiers]">
  <span class="icon" aria-hidden="true">add</span>
  <span class="label-text">Create</span>
</button>

<!-- Use <a> for navigation while maintaining extended FAB styling -->
<a href="..." class="extended-fab [modifiers]">
  <span class="icon" aria-hidden="true">add</span>
  <span class="label-text">Create</span>
</a>
```

<h3 id="fab">FAB</h3>

Floating action button for high-emphasis actions. These can be implemented using `<button>` for actions or `<a>` for navigation. Always include an `aria-label` when the FAB contains only an icon.

- **export path**: `components/fab.css`
- **classes**:
  - **base**: `.fab`
  - **modifiers**:
    - **variants**: `.primary-container` (default), `.secondary-container`, `.tertiary-container`, `.primary`, `.secondary`, `.tertiary`
    - **sizes**: `.small` (default), `.medium`, `.large`

#### Markup

```html
<!-- Default FAB -->
<button class="fab [modifiers]" aria-label="Create">
  <span class="icon" aria-hidden="true">add</span>
</button>

<!-- Use <a> for navigation while maintaining FAB styling -->
<a href="..." class="fab [modifiers]" aria-label="Create">
  <span class="icon" aria-hidden="true">add</span>
</a>
```

---

<h2 id="selection-controls">Selection Controls</h2>

<h3 id="switch">Switch</h3>

Switches toggle the state of a single setting on or off. They are a visual alternative to checkboxes when the action takes effect immediately.

- **export path**: `components/switch.css`
- **classes**:
  - **base**: `.switch`
  - **modifiers**:
    - **icon**: `.icon` (Displays embedded check/uncheck indicators within the thumb)

#### Markup

```html
<!-- Standard Switch -->
<input
  class="switch"
  type="checkbox"
  role="switch"
  aria-label="Toggle setting"
/>

<!-- Switch with embedded icons -->
<input
  class="switch icon"
  type="checkbox"
  role="switch"
  aria-label="Toggle setting with icons"
/>

<!-- Disabled state -->
<input
  class="switch"
  disabled
  type="checkbox"
  role="switch"
  aria-label="Disabled toggle setting"
/>
```

---

<h2 id="implementation-notes">Implementation Notes</h2>

<h3 id="icons">Icons</h3>

Buttons, toggle buttons, icon buttons, toggle icon buttons, FABs, and extended FABs accept Material Symbols, inline SVGs, and images. Every format must use the `.icon` class.

Load **Material Symbols Outlined** when using text-based symbol names:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1&display=block"
/>
```

```html
<!-- Material Symbol -->
<span class="icon" aria-hidden="true">stars</span>

<!-- Inline SVG -->
<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
  <path d="..." />
</svg>

<!-- Image -->
<img class="icon" src="icon.svg" alt="" />
```

- **Automatic handling:** Do not add the `material-symbols-outlined` class to text icons; the component applies the required font properties and alignment through `.icon`.

- **Filled icons:** Icons are filled by default on standard buttons, icon buttons, and FABs. Add `.no-fill` to the icon when you want its outlined form.

- **Selected-state icons:** In toggle buttons and toggle icon buttons, add `.selected` to an icon that should appear only while its input is checked. You can provide a second `.icon` without `.selected` for the unchecked state.

- **Accessibility:** Hide decorative icons with `aria-hidden="true"` on `<span>` and `<svg>`, or `alt=""` on `<img>`. Give an icon-only button an accessible name with `aria-label`.

<h3 id="parent-controls">Parent Controls</h3>

The library exposes `--size-items`, `--shape-items`, and `--width-items` as parent-controlled properties. Components read these values through style queries, so you can change supported modifiers from CSS, including inside media queries, without overriding component internals or using JavaScript.

This API is intentionally limited to layout-oriented controls such as size, shape, and width. Visual variants like `.filled`, `.tonal`, or `.elevated` should still be applied directly on the component.

> [!NOTE]
> **Style Queries Concept:** For an in-depth look at how these style queries function conceptually, check out this article on [Responsive Components with Style Queries](https://mobalti.com/responsive-components-style-queries/). Please note that the exact token names and values in the library might differ from those used in the article.

#### Usage Pattern

```css
.parent-container {
  @media (width >= 840px) {
    --size-items: extra-large;
    --shape-items: square;
    --width-items: wide;
  }
}
```

> [!TIP]
> **Direct Parent Only:** These properties are registered with `@property` and `inherits: false`, so they do not cascade through the full ancestor tree. Apply them on the component's immediate parent, or reuse a shared helper class on multiple parents when you want the same behavior in different places.

> [!IMPORTANT]
> **Explicit Override:** A modifier class applied directly to a component, such as `<button class="button small">`, overrides the parent control value.

<h3 id="custom-styling">Custom Styling</h3>

The library is extensible. You can add your own classes to any component or pattern, and user-defined classes and properties take precedence over library defaults.
