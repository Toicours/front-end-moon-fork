/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'blue-violet': {
					50: '#f3f4fb',
					100: '#e4e7f5',
					200: '#ced4ef',
					300: '#adb8e3',
					400: '#8594d5',
					500: '#6874c9',
					600: '#555abb',
					700: '#4c4cae',
					800: '#43418c',
					900: '#383870',
					950: '#272645'
				}
			}
		}
	},

	plugins: [require('daisyui')]
};
