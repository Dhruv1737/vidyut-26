/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
  forest:  '#0A0F0B',   // near black — main background
  pine:    '#1A2E1C',   // dark green — cards, sections
  sage:    '#111811',   // deep green-black — alternate sections
  sage2:   '#1E2E1F',   // border color
  gold:    '#B8943A',   // gold accent — unchanged
  goldb:   '#D4AB50',   // gold hover — unchanged
  ink:     '#0A0F0B',   // text on gold buttons
  muted:   '#6B8F6B',   // muted green-grey text
  dark:    '#060C07',   // footer background
  white:   '#FFFFFF',
},
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        body:    ['"Barlow"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem,9vw,8rem)', { lineHeight: '0.92' }],
        'display-lg': ['clamp(3rem,6vw,6rem)',  { lineHeight: '0.92' }],
        'display-md': ['clamp(2.2rem,4vw,3.8rem)', { lineHeight: '0.95' }],
        'display-sm': ['clamp(1.8rem,3vw,2.8rem)', { lineHeight: '1.0'  }],
      },
    },
  },
  plugins: [],
}
