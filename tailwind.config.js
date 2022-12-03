/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: '#FC3A3A',
        yellow: '#F7A400',
        purple: '#6162B8',
        darkblue: '#2E2F62',
        darkerblue: '#1D1E42',
        darkestblue: '#0E0E2F',
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        circularstd: 'CircularStd, serif',
        basier: 'Basier Square Regular'
      }
    },
  },
  plugins: [require("daisyui")],
}
