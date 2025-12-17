// tailwind.config.js
import plugin from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[class*="app-dark"]'],
  content: [
    './docs/**/*.{vue,js,ts,jsx,tsx,md}'
  ],
  theme: {
    extend: {
      fontFamily: {
        cybertron: ['Cybertron-Regular', 'sans-serif'],
      }
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px',
    },
  },
  plugins: [plugin],
};