/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif', 'Graphik'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        'indigo': '#360568',
        'tekhelet': '#5b2a86',
        'lavender': '#f5e6e8',
        'thistle': '#D5C6E0',
        'rose-quarz': '#AAA1C8',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      spacing: {
        '45%': '45%',
      },
    },
  },
  plugins: [],
}