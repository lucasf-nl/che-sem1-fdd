/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'timeline': 'minmax(0, 1fr) 10px minmax(0, 1fr)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
