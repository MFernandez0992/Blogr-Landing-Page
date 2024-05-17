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
        'very-light-red': 'hsl(13, 100%, 72%)',
        'light-red': 'hsl(353, 100%, 62%)',
      }
    },
    fontFamily: {
      'ubuntu': 'ubuntu',
      'overpass': 'Overpass'
    },
    backgroundImage: {
      'illustration-editor-desktop': "url('/src/assets/illustration-editor-desktop.svg')",
      'bg-pattern-intro-desktop': "url('/src/assets/bg-pattern-intro-desktop.svg')",
      'pattern-circles': "url('/src/assets/bg-pattern-circles.svg')",
      'illustration-laptop-desktop': "url('/src/assets/illustration-laptop-desktop.svg')"
    },
    backgroundSize: {
      '50': '50%',
      '60': '600px',
      '70': '700px',
      '80': '80%',
      '100': '2500px'
    },
    backgroundPosition: {
      'left-top': 'bottom -5rem left -11rem',
      'left-center': 'left -12.4rem center',
      'right-center': 'right -13rem center',
      'top-right': 'top -66rem right -65rem',
    }
  },
  plugins: [],
}

