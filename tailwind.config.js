/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js', './node_modules/vue-tailwind-datepicker/**/*.js'],
  mode: 'jit',
  theme: {
    colors: {
      // Configure your color palette here
      whiteF: '#fff',
      whiteW: '#FDFBF5',
      // FDFBF5
      blueB: '#4484A5',
      pinkP: '#F196A7',
      lightblue: '#515a6e',
      lightpink: '#f9f2ec',
      yellowY: 'rgb(253 186 116)',
      greenG: '#065f46',
      purpleP: '#a78bfa'
    },
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
