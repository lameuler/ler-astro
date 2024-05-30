# ler-astro

Astro components I use across some of my personal projects and sites.

These components are not intended to be used elsewhere, but anyway here's a proper README for my future self and anyone else who sees this.

## Installation

To install the components, run
```sh
npm install @lameuler/ler-astro
```

The components also use [Tailwind](https://tailwindcss.com), which you will need to install if you have not done so.

```sh
npx astro add tailwind
```
to add the [Tailwind integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/) to your Astro project.

In addition, you will also need to configure Tailwind to recognize the imported components by adding the following to the `content` property in your Tailwind config file:
```js
export default {
	content: [..., './node_modules/@lameuler/ler-astro/src/*.astro'], // add the imported components
	...
}
```

Then, you can import and use the components:
```ts
import { Header, Footer, ThemeSwitch, Head, HeadImgLinks } from '@lameuler/ler-astro'
```

For the icons to display properly, you will also need to import `icon.css`. Note that this will apply styles to all `svg`s with the class `icon`.
```ts
import '@lameuler/ler-astro/icon.css'
```