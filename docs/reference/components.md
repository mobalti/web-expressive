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
- [Selection Controls](#selection-controls)
  - [Switch](#switch)
- [Implementation Notes](#implementation-notes)
  - [Font Icons](#font-icons)
  - [Parent Controls](#parent-controls)
  - [Custom Styling](#custom-styling)

---

<h2 id="buttons">Buttons</h2>

> [!NOTE]
> **Implicit Defaults:** Modifier classes like `.filled`, `.sm`, and `.round` are applied automatically. Add them only when you need to override a value provided by a parent control.

<h3 id="standard-button">Button</h3>

Standard triggers for actions. These can be implemented using `<button>` for actions or `<a>` for navigation.

[View Example](https://codepen.io/editor/mobalti/pen/019d3f40-bc14-72ac-929d-146ddf1724fa)

- **stylesheet**: `dist/components/button.css`
- **classes**:
  - **base**: `.btn`
  - **modifiers**:
    - **variants**: `.filled` (default), `.tonal`, `.outline`, `.elevated`, `.text`
    - **sizes**: `.xs`, `.sm` (default), `.md`, `.lg`, `.xl`
    - **shape**: `.round` (default), `.square`

#### Markup

```html
<!-- Use .filled by default for primary actions -->
<button class="btn [modifiers]">Label</button>

<!-- Use <a> for navigation while maintaining button styling -->
<a href="..." class="btn [modifiers]"> Label </a>

<!-- Text with icon; use for emphasis -->
<button class="btn [modifiers]">
  <span class="icon" aria-hidden="true">stars</span>
  Label
</button>
```

<h3 id="toggle-button">Toggle Button</h3>

Used for selection states. These wrap standard input types to maintain accessibility.

[View Example](https://codepen.io/editor/mobalti/pen/019d40ff-f87d-7edf-9a32-5a8ab97b5301)

- **stylesheet**: `dist/components/toggle-button.css`
- **classes**:
  - **base**: `.toggle-btn`
  - **modifiers**:
    - **variants**: `.filled` (default), `.tonal`, `.outline`, `.elevated`
    - **sizes**: `.xs`, `.sm` (default), `.md`, `.lg`, `.xl`
    - **shape**: `.round` (default), `.square`

#### Markup

```html
<!-- Checkbox for multiple selection -->
<div class="toggle-btn [modifiers]">
  <input class="input" type="checkbox" id="check1" />
  <label class="label" for="check1">Label</label>
</div>

<!-- Radio for single selection -->
<div class="toggle-btn [modifiers]">
  <input class="input" type="radio" name="group" id="rad1" />
  <label class="label" for="rad1">Label</label>
</div>

<!-- Checkbox with icon -->
<div class="toggle-btn [modifiers]">
  <input class="input" type="checkbox" id="check2" />
  <label class="label" for="check2">
    <span class="icon" aria-hidden="true">stars</span>
    Label
  </label>
</div>
```

<h3 id="icon-button">Icon Button</h3>

Compact actions represented by an icon. Always include an `aria-label` for accessibility.

[View Example](https://codepen.io/editor/mobalti/pen/019d4105-9cde-732f-9a73-bc2af25ca414)

- **stylesheet**: `dist/components/icon-button.css`
- **classes**:
  - **base**: `.icon-btn`
  - **modifiers**:
    - **variants**: `.filled` (default), `.tonal`, `.outline`, `.standard`
    - **sizes**: `.xs`, `.sm` (default), `.md`, `.lg`, `.xl`
    - **shape**: `.round` (default), `.square`
    - **width**: `.narrow`, `.normal` (default), `.wide`

#### Markup

```html
<!-- Standard action button -->
<button class="icon-btn [modifiers]" aria-label="Favorite">
  <span class="icon" aria-hidden="true">favorite</span>
</button>

<!-- Navigation link as icon button -->
<a href="..." class="icon-btn [modifiers]" aria-label="Go to Home">
  <span class="icon" aria-hidden="true">home</span>
</a>
```

<h3 id="toggle-icon-button">Toggle Icon Button</h3>

Visual toggles for states such as bookmarks or "favorite" status.

[View Example](https://codepen.io/editor/mobalti/pen/019d410d-2b18-72b4-b6d2-ab8895b74a10)

- **stylesheet**: `dist/components/toggle-icon-button.css`
- **classes**:
  - **base**: `.toggle-icon-btn`
  - **modifiers**:
    - **variants**: `.filled` (default), `.tonal`, `.outline`, `.standard`
    - **sizes**: `.xs`, `.sm` (default), `.md`, `.lg`, `.xl`
    - **shape**: `.round` (default), `.square`
    - **width**: `.narrow`, `.normal` (default), `.wide`

#### Markup

```html
<!-- Bookmark toggle using checkbox -->
<div class="toggle-icon-btn [modifiers]">
  <input class="input" type="checkbox" aria-label="Bookmark" id="book1" />
  <label class="label" for="book1">
    <span class="icon" aria-hidden="true">bookmark</span>
  </label>
</div>

<!-- Mode selection using radio -->
<div class="toggle-icon-btn [modifiers]">
  <input class="input" type="radio" name="mode" aria-label="Selection" id="sel1" />
  <label class="label" for="sel1">
    <span class="icon" aria-hidden="true">check</span>
  </label>
</div>
```

<h4 id="button-groups">Button Groups</h4>

<h3 id="standard-button-group">Standard Button Group</h3>

Groups related buttons together with a consistent gap. It supports a mix of standard buttons, toggle buttons, icon buttons, and toggle icon buttons.

[View Example](https://codepen.io/editor/mobalti/pen/019d4115-5f16-717f-bc2f-7dbeea981d61)

- **stylesheet**: `dist/components/standard-button-group.css`
- **classes**:
  - **base**: `.standard-btn-group`
  - **modifiers**:
    - **sizes**: `.xs`, `.sm` (default), `.md`, `.lg`, `.xl`
    - **shape**: `.round` (default), `.square`
    - **width**: `.narrow` (Applies only to icon-based buttons within the group)

#### Markup

Import `standard-button-group.css` and the component styles used inside the group, such as `button.css`, `toggle-button.css`, `icon-button.css`, or `toggle-icon-button.css`.

Use `role="group"` for accessibility if not wrapped in a `<fieldset>`.

```html
<div class="standard-btn-group [modifiers]" role="group" aria-label="Quick Settings">
  <!-- Mix of toggle and toggle-icon buttons -->
  <div class="toggle-btn [modifiers]">
    <input type="checkbox" class="input" id="focus" />
    <label class="label" for="focus">
      <span class="icon" aria-hidden="true">do_not_disturb_on</span>
      Focus
    </label>
  </div>

  <div class="toggle-icon-btn [modifiers]">
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
  <div class="standard-btn-group [modifiers]">
    <!-- All buttons inside will be disabled automatically -->
  </div>
</fieldset>
```

<h3 id="connected-button-group">Connected Button Group</h3>

A group of connected buttons that stretch to fill the container size. This is typically used for a related set of options, such as size selection. Currently supports the `toggle-btn` component for single (radio) or multiple (checkbox) selection.

[View Example](https://codepen.io/editor/mobalti/pen/019d4110-3159-76b3-8011-6786d44ced68)

- **stylesheet**: `dist/components/connected-button-group.css`
- **classes**:
  - **base**: `.connected-btn-group`
  - **modifiers**:
    - **sizes**: `.xs`, `.sm` (default), `.md`, `.lg`, `.xl`
    - **shape**: `.round` (default), `.square`

#### Markup

Import `connected-button-group.css` and `toggle-button.css`.

```html
<div class="connected-btn-group [modifiers]" role="group" aria-label="Select Size">
  <div class="toggle-btn [modifiers]">
    <input type="radio" checked name="size" class="input" id="8-oz" />
    <label class="label" for="8-oz">8 oz</label>
  </div>
  <div class="toggle-btn [modifiers]">
    <input type="radio" name="size" class="input" id="12-oz" />
    <label class="label" for="12-oz">12 oz</label>
  </div>
</div>
```

---

<h2 id="selection-controls">Selection Controls</h2>

<h3 id="switch">Switch</h3>

Switches toggle the state of a single setting on or off. They are a visual alternative to checkboxes when the action takes effect immediately.

[View Example](https://codepen.io/editor/mobalti/pen/019d4123-3fba-7c60-bee4-45c011799995)

- **stylesheet**: `dist/components/switch.css`
- **classes**:
  - **base**: `.switch`
  - **modifiers**:
    - **icon**: `.icon` (Displays embedded check/uncheck indicators within the thumb)

#### Markup

```html
<!-- Standard Switch -->
<input class="switch" type="checkbox" role="switch" aria-label="Toggle setting" />

<!-- Switch with embedded icons -->
<input class="switch icon" type="checkbox" role="switch" aria-label="Toggle setting with icons" />

<!-- Disabled state -->
<input class="switch" disabled type="checkbox" role="switch" aria-label="Disabled toggle setting" />
```

---

<h2 id="implementation-notes">Implementation Notes</h2>

<h3 id="font-icons">Font Icons</h3>

The library uses **Material Symbols Outlined** for icons. Load this font in your project before using icon-based components.

- **Automatic Handling:** Use `<span class="icon" aria-hidden="true">icon_name</span>`. Do not add the `material-symbols-outlined` class manually; the library handles the required font properties and alignment.

- **Support:** The `icon` class is supported in all button components.

- **Accessibility:** Always add `aria-hidden="true"` to the icon itself, and ensure the parent element provides an `aria-label` or visible text.

<h3 id="parent-controls">Parent Controls</h3>

The library exposes `--size`, `--shape`, and `--width` as parent-controlled properties. Components read these values through style queries, so you can change supported modifiers from CSS, including inside media queries, without overriding component internals or using JavaScript.

This API is intentionally limited to layout-oriented controls such as size, shape, and width. Visual variants like `.filled`, `.tonal`, or `.elevated` should still be applied directly on the component.

#### Usage Pattern

```css
.parent-container {
  @media (width >= 840px) {
    --size: xl;
    --shape: square;
    --width: wide;
  }
}
```

> [!TIP]
> **Direct Parent Only:** These properties are registered with `@property` and `inherits: false`, so they do not cascade through the full ancestor tree. Apply them on the component's immediate parent, or reuse a shared helper class on multiple parents when you want the same behavior in different places.

> [!IMPORTANT]
> **Explicit Override:** A modifier class applied directly to a component, such as `<button class="btn sm">`, overrides the parent control value.

<h3 id="custom-styling">Custom Styling</h3>

The library is extensible. You can add your own classes to any component or pattern, and user-defined classes and properties take precedence over library defaults.
