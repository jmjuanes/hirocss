# hiro

![npm version](https://badgen.net/npm/v/hirocss?labelColor=1d2734&color=21bf81)
![license](https://badgen.net/github/license/jmjuanes/hirocss?labelColor=1d2734&color=21bf81)

`hiro` is a small, utility-first CSS library. It ships a focused set of utility classes built on top of semantic design tokens (`--background`, `--foreground`, `--accent`...) instead of hardcoded values, so it can be re-themed for different projects just by overriding a handful of CSS custom properties — no build step, no configuration file required.

> **Status:** early development. API and class names may still change.

## Installation

```bash
# Install using npm
$ npm install hirocss

# Install using yarn
$ yarn add hirocss
```

## Usage

```html
<link rel="stylesheet" href="node_modules/hirocss/hiro.css">
```

```html
<div class="bg-background text-foreground p-4 border rounded">
  <h1 class="fs-6 font-heading">Hello</h1>
  <p class="fs-1 font-body text-foreground">A minimal starting point.</p>
</div>
```

## Theming

Every color and size resolves from a small set of CSS custom properties. Override them to theme the whole toolkit:

```css
:root {
    --background: #ffffff;
    --foreground: #111111;
}
```

## Philosophy

- **Utility-first.** Compose UI from small, single-purpose classes. Component classes (`.btn`, `.card`...) may be added later.
- **Minimal by default.** Ships the smallest useful set of tokens and utilities.
- **No lock-in.** Plain CSS custom properties, no build step, no preprocessor required to consume it.

## License

Under the [MIT License](./LICENSE).
