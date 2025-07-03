/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', 
      './pages/**/*.{js,ts,jsx,tsx}', 
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          striveBlue: '#1B2A75',
          limeGreen: '#BBC52C',
        },
      },
    },
    plugins: [],
  }
  