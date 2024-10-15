/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        
      },
      fontFamily:{
        leagueSpartan:['League Spartan', 'sans-serif'],
        merriweather:['Merriweather','serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        roboto:['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

