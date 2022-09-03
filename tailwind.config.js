/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily : {
      'poppins' :  ['Poppins'],
      'josefin' : ['Josefin Sans'],
    },
  },
    extend: {
      boxShadow: {
        'customBox': '0px 15px 45px rgba(22, 22, 22, 0.1);',
      }
  },
  plugins: [],
}
