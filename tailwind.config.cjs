/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode:['class'],
  theme: {
    extend: {
      colors:{
        primary:'#535bf2',
        primarycolor:'#35F068',
        secondry:'#192236',
        secondrycolor:' rgba(34, 46, 73, 0.5)',
        navbarColor:'#161A22',
        dark:'#141B2C',
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
