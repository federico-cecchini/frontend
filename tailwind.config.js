/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#101922',
        'dark-secondary-bg': '#1A2632',
        'cta-bg': '#137FEC',
        'gradient-start-bg': '#67A7E7',
        'closed': '#F56565',
        'light-secondary-bg': '#F6F7F8',
        'degree-bg': '#67A7E7'
      },
      fontFamily: {
        'Poppins': ["Poppins", "sans-serif"],
        'Montserrat': ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

