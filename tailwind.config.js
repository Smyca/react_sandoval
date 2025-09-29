/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        leftToRight: {
          '0%': { transform: 'translateX(-50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        rightToLeft: {
          '0%': { transform: 'translateX(50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        rightToLeftTranslate: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        'left-to-right-fast': 'leftToRight 1s ease forwards',
        'left-to-right-slow': 'leftToRight 2s ease-in-out forwards',
        'left-to-right-bounce': 'leftToRight 1s cubic-bezier(0.68,-0.55,0.27,1.55) infinite alternate',
        'right-to-left': 'rightToLeftTranslate 1s ease forwards',
        'right-to-left-translate': 'rightToLeftTranslate 1s ease-in-out forwards'
        
      },
      screens: {
        tall: { raw: "(min-height: 600px)" },
        medium: { raw: "(min-height: 1200px)" },

      }
    }
  },
  plugins: [],
}
