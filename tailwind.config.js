/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#030014',
          dark: '#0A0A20',
          card: '#151530'
        },
        brand: {
          orange: '#FF6B00',
          yellow: '#FFC800',
          cyan: '#00F0FF',
          purple: '#7000FF',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', filter: 'blur(8px)' },
          '50%': { opacity: '1', filter: 'blur(12px)' },
        }
      }
    },
  },
  plugins: [],
}