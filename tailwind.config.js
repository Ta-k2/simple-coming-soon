/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fbfaf8',
        'bg-secondary': '#ece5d6',
        midnight: '#090708',
        mustard: '#6f531a',
        saffron: '#d3a522',
        lilac: '#e1cbdd',
      },
      fontFamily: {
        heading: ['"Furlong Vintage"', 'Georgia', 'serif'],
        body: ['"Figtree"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
