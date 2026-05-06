/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '100px': "100px"
      },
      keyframes: {
        leftToRight: {
          '0%': { left: '0px', opacity: '0' },
          '100%': { left: '200px', opacity: '1' }
        },
        rightToLeft: {
          '0%': { right: '0px', opacity: '0' },
          '100%': { right: '366px', opacity: '1' }
        },
        slide: {
          '0%': { width: '0%' },
          '100%': { width: '80%' }
        }
      },
      animation: {
        leftToRight: 'leftToRight 0.5s',
        rightToLeft: 'rightToLeft 0.5s',
        slide: 'slide 3s'
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
