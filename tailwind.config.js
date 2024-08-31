/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "caros-bold": ["Caros", "sans-serif"],  
      },
      screens: {
        'mini-xl': {'max': '1279px', 'min': '1024px'},
        'custom-screen': {'min': '250px' , "max" : "650px"},
        'margin-input' : {'max' : '1160px' , 'min' : '1024px' }
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scroll-bar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          'font-family' : ""
        },
        '.hide-scroll-bar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.display-contents': {
          'display': 'contents',
        },
        '*':{
          boxSizing: "border-box",
           margin: '0',
           padding: "0",
        }
      });
    }
  ],
}

