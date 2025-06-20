/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        blob1: 'blob 20s infinite ease-in-out',
        blob2: 'blob 25s infinite ease-in-out',
        blob3: 'blob 30s infinite ease-in-out',
        fadeIn: "fadeIn 1s ease-out forwards"
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-50px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(50px, -50px) scale(1.7)' },
          '75%': { transform: 'translate(50px, 50px) scale(1.1)' },
          '100%': { transform: 'translate(-50px, 50px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
