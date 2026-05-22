/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest:  '#121212',
        pine:    '#1A1A1A',
        sage:    '#1E1E1E',
        sage2:   '#2A2A2A',
        gold:    '#00C951',
        goldb:   '#00A843',
        ink:     '#121212',
        muted:   '#888888',
        dark:    '#0A0A0A',
        white:   '#FFFFFF',
      },
      fontFamily: {
        display:   ['"Bebas Neue"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        body:      ['"Inter"', 'sans-serif'],
        sans:      ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}