/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', '../node_modules/@lameuler/ler-astro/src/*.astro'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Lexend', 'sans-serif']
			}
		},
	},
	plugins: [],
}
