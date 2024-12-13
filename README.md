# ler-astro

Astro components I use across some of my personal projects and sites.

These components are not intended to be used elsewhere, but anyway here's a proper README for my future self and anyone else who sees this.

## Installation

To install the components, run
```sh
npm install @lameuler/ler-astro
```

You will need to set the default text color with the CSS variable `--text`.
```css
html {
	--text: 0, 0, 0;
}
html.dark {
	--text: 255, 255, 255;
}
```

Then, you can import and use the components:
```ts
import { Header, Footer, ThemeSwitch, Head, HeadImgLinks, Year } from '@lameuler/ler-astro'
```

For the icons to display properly, you will also need to import `icon.css`. Note that this will apply styles to all `svg`s with the class `icon`.
```ts
import '@lameuler/ler-astro/icon.css'
```