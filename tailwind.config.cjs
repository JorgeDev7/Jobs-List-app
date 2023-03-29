/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "desaturatedDarkCyan": "hsl(180, 29%, 50%)",
        "lighGrayishCyanBg": "hsl(180, 52%, 96%)",
        "lightGrayishCyanFilterTablets": "hsl(180, 31%, 95%)",
        "darkGrayishCyan": "hsl(180, 8%, 52%)",
        "veryDarkGrayishCyan": "hsl(180, 14%, 20%)"
      },
      fontSize: {
        'base': "15px"
      },
      fontFamily: {
        "spartan": "'League Spartan', 'sans-serif'"
      },
      boxShadow: {
        "cyandow": "rgba(0, 0, 0, 0.45) 0px 20px 20px -20px"
      }
    },
  },
  plugins: [],
}
