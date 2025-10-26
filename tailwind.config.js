/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f9f5e3',
        chestBrown: '#5c4033',
        gold: '#d4af37',
        seaBlue: '#1e3a5f',
        inkBlack: '#231f20',
      },
      fontFamily: {
        display: ['Cinzel Decorative', 'Georgia', 'serif'],
        pirate: ['Pirata One', 'cursive'],
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        float: 'float 3s ease-in-out infinite',
        sway: 'sway 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
}