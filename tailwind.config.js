/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest:  '#1B3022',
        pine:    '#2D5A27',
        sage:    '#F4F7F1',
        sage2:   '#E4EDE0',
        gold:    '#B8943A',
        goldb:   '#D4AB50',
        ink:     '#0B1410',
        muted:   '#617A5C',
        dark:    '#0f1a11',
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
