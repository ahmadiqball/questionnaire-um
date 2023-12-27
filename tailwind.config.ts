/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jakarta-sans': 'Plus Jakarta Sans',
      'garamond': 'EB Garamond',
    },
    extend: {
      colors: {
        'purple': '#583BAD',
        'purple-light': '#9376F4',
        'grey': '#616161',
        'red': '#CB3A31',
        'white': '#fff'
      },
    },
  },
  plugins: [],
}