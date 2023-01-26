/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			'cerulean': {
			  '50': '#eff8ff',
			  '100': '#def0ff',
			  '200': '#b6e3ff',
			  '300': '#75ceff',
			  '400': '#2cb6ff',
			  '500': '#0090e3',
			  '600': '#007cd4',
			  '700': '#0063ab',
			  '800': '#00538d',
			  '900': '#064674',
			},
		  },
		  maxWidth: {
			'xxs': '10rem'
		  }
		}
	},
	plugins: [],
}
