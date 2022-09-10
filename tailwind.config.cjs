/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode:['class'],
  theme: {
    extend: {
      colors:{
        primary:'#535bf2',
        primarycolor:'#35F068',
        secondry:'rgba(21, 21, 21, 0.5)',
        secondrycolor:'rgba(32, 32, 32, 0.5)',
        dark:'#02021c',
        textColor:'#fff'
      },
      screens: {
        sm: '30px',
        md: '568px',
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
