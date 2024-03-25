/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/*.html', './src/*.js', './src/*.css'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '930px',
      xl: { raw: '(min-width: 1200px)' },
    },
    container: {
      center: true,
      padding: {
        xs: '5px',
        sm: '3.375rem',
        md: '3.375rem',
        lg: '3.375rem',
        xl: '3.375rem',
      },
    },

    extend: {
      fontSize: {
        h1: ['64px', '130%'],
        FontSizeText: ['32px', '130ss%'],
      },
      colors: {
        colorText: '#F39200',
        bgBody: '#1E1E1E',
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        'red-hat-text': ['Red Hat Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
