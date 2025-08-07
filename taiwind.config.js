/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e30613',
        primaryDark: '#c00511',
        dark: '#222222',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        ring: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(15deg)' },
          '20%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '40%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '60%, 100%': { transform: 'rotate(0deg)' },
        },
        slide: {
          '0%, 25%': { transform: 'translateX(0%)' },
          '30%, 55%': { transform: 'translateX(-100%)' },
          '60%, 85%': { transform: 'translateX(-200%)' },
          '90%, 100%': { transform: 'translateX(-300%)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s infinite',
        'phone-ring': 'ring 1s ease-in-out infinite',
        'slide': 'slide 24s linear infinite',
      },
    },
  },
  plugins: [],
};
