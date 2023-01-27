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
			'mirage': {
				'50': '#f4f6fb',
				'100': '#e9edf5',
				'200': '#ced9e9',
				'300': '#a3b9d6',
				'400': '#7193bf',
				'500': '#4f75a8',
				'600': '#3d5d8c',
				'700': '#324b72',
				'800': '#2c4160',
				'900': '#1e293b',
			},			
		  },
		  maxWidth: {
			'xxs': '10rem'
		  }
		}
	},
	plugins: [],
}
