/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    extend: {
      colors: {
        'luxury': {
          'black': '#0a0a0a',
          'red': '#dc2626',
          'white': '#ffffff',
          'gray': '#f3f4f6'
        }
      },
      maxWidth: {
        '90': '90%',
        '95': '95%'
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a, #dc2626)',
      }
    },
  },
  plugins: [],
} 