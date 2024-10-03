/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"250px"
      },
      fontFamily:{
        leagueSpartan:['League Spartan', 'sans-serif'],
        merriweather:['Merriweather','serif'],
        fredoka: ['Fredoka', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

