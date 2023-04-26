/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#F305F8",
        mainColor: "#fff",
        paragraphColor: "rgba(255, 255, 255, 0.6)",
        para2: "rgba(0, 0, 0, 0.5)",
      },
      container: {
        center: true,
        padding : {
          DEFAULT : "20px",
          md : "50px",
        }
      }
    },
  },
  plugins: [],
}

