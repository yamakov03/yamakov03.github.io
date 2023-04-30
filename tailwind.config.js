/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '0px',
      'md': '500px',
      'semi': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'Syne': ['Syne', 'sans-serif'],
        'Darker_Grotesque':['Darker Grotesque, sans-serif']
      },
    },
  },
  plugins: [],
}

