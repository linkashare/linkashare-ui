/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode:['class'],
  theme: {
    extend: {
      colors:{
        primary:'#535bf2;',
        dark:'#242424',
        textColor:'#fff'
      },
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
      fontFamily: {
        gotham: ["gotham"],
      },

    },
  },
  plugins: [],
};
