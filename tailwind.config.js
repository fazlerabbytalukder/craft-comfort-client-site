/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto:"'Roboto', sans-serif"
      },
      colors: {
        'primary':'#0C1222',
        'secondary':'#748098',
        'ternary': '#E2E8F0',
        'main': '#38BDF8',
        'bluShade': '#6D28D9',
        'navDark': '#0C1222',
        'formBg': '#E8F0FE',
        'darkFormBg':'#243149'
      }
    },
  },
  plugins: [],
}
