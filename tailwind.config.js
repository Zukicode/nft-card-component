/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			fontFamily: {
				main: ["'Outfit', sans-serif"],
			},
			colors: {
				primary: 'hsl(215, 51%, 70%)',
				primaryCyan: 'hsl(178, 100%, 50%)',
				cardBg: 'hsl(216, 50%, 16%)',
				mainBg: 'hsl(217, 54%, 11%)',
				line: 'hsl(215, 32%, 27%)',
			},
		},
	},
	plugins: [],
};
