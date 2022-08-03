/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode:['class'],
  theme: {
    extend: {
      colors:{
        primary:'#535bf2;',
        dark:'#242424'
      }
    },
  },
  plugins: [],
};
