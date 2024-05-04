const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  darkMode:"class",
  theme: {
    fontFamily: {
      "ptsans": ["PT Sans", "sans-serif"],
      "kanit": ["Kanit", "sans-serif"]
    }, 
    extend: {},
    
  },
  plugins: ["prettier-plugin-tailwindcss"],
});