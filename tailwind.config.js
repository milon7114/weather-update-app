/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      colors: {
        'primary': '#0CAAf9'       
      },
      fontFamily:{
        'sans': ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [],
}
