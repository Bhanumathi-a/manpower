/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm:"480px",
      md:"768px",
      lg:"1440px",
      xl: "1920px"
    },
    extend: {
      colors:{
        primary: "#422B7C",
        bgColor: "#FAF5EC",
        bgGray:"#E2E2E2",
        darkGray: "#404040",
        darkBlue: "#3C55BD",
        blueGray: "#264966",
        borderBlue:"#4899E4",
        borderGray: "#575757",
        borderGray2:"#737373",
        borderGreen: "#00D138", 
        borderGreen2: "#3BE16E", 
        borderYellow: "#FFE402",
        borderDarkPink: "#FF02E4",
        borderLightPink: "#FF8FF3",
      }
    },
  },
  plugins: [],
}

