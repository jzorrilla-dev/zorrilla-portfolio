/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        'skill-scroll-left': 'scroll-left 50s linear infinite',
        'skill-scroll-right': 'scroll-right 50s linear infinite'
      }
    }
  },
  plugins: [
    function ({ addUtilities, variants }) {
      const newUtilities = {
        '.paused': {
          'animation-play-state': 'paused'
        },

        '.running': {
          'animation-play-state': 'running'
        }
      }

      addUtilities(newUtilities, variants('animation'))
    }
  ]
}
