/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Geist Sans"', 'system-ui', 'sans-serif'],
				mono: ['"Geist Mono"', 'monospace'],
			},
		},
	},
	plugins: [],
}
