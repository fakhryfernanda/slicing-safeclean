/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: '1170px'
        },
      },
      colors: {
        main_red: '#FF401B',
        main_red_darker: 'rgb(242,120,103)',
        secondary_red: '#FF846C',
        main_orange: '#FFAA04',
        main_grey: '#7B7B7B'
      }
    },
  },
  plugins: [],
}
