/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    // './src/**/*.html',
    './src/**/*.js',
    // './dist/**/*.html',
    './dist/**/*.js'
  ],
  theme: {
    extend: {
      fontSize: {
        mammoth: '12rem',
      },
      colors: {
        primary: '#338811',
        secondary: {
          100: '',
          200: ''
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}