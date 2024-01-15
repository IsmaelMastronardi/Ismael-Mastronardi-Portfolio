/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	fontFamily: {
		sans: ['Graphik', 'sans-serif'],
		serif: ['Merriweather', 'serif'],
	},
	colors: {
		'blue': '#1fb6ff',
		'pink': '#ff49db',
		'orange': '#ff7849',
		'green': '#13ce66',
		'gray-dark': '#273444',
		'gray': '#8492a6',
		'gray-light': '#d3dce6',
	},
}
