/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        librefranklin: ['LibreFranklin'],
      },
      colors: {
        primary: 'black'
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  }
}

