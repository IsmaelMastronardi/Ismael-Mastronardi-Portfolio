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
        'dark-purple': '#3d194f',
        'semi-transparent-light-gray': 'rgba(211, 220, 230, 0.4)',
        'transparent-white': 'rgba(255, 255, 255, 0.5)',
        'semi-transparent-indigo': 'rgba(54, 5, 104, 0.9)',
        'extra-transparent-indigo': 'rgba(54, 5, 104, 0.7)',
      },
      spacing: {
        '45%': '45%',
      },
      boxShadow: {
        'xxl': '0 3px 6px rgba(0, 0, 0, 0.26)',
        '2xxl': '0 6px 12px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}