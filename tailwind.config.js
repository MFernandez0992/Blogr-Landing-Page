/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-lightRed': 'hsl(356, 100%, 66%)',
        'primary-veryLightRed': 'hsl(355, 100%, 74%)',
        'primary-veryDarkBlue': 'hsl(208, 49%, 24%)',
        'neutral-GrayishBlue': 'hsl(240, 2%, 79%)',
        'neutral-VeryDarkGrayishBlue': 'hsl(207, 13%, 34%)',
        'neutral-VeryDarkBlackBlue': 'hsl(240, 10%, 16%)',
      }
    },
    fontFamily: {
      'ubuntu': 'ubuntu',
      'overpass': 'Overpass'
    },
    screens: {
      'mobile': '375px',
      'desktop': '1440px',
    },
  },
  plugins: [],
}

