/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#edf2f8',
        secondary: '#313bac',
        default: {
          10: '#FFFFFF',
          100: '#e4e4e4', // lightGrey
          700: '#6b7688', // grey
          900: '#030303', // black
        },
        error: '#FF5252', // brown
        accent: '#46364a',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      },
    },
    plugins: [],
  },
};
