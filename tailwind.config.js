/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tobacco: {
          50: '#fdf8f4',
          100: '#f9eee5',
          200: '#f2dac9',
          300: '#e5be9f',
          400: '#d49a6f',
          500: '#c67d49',
          600: '#b7653d',
          700: '#984f33',
          800: '#7b402e',
          900: '#432117',
          950: '#230f0a',
        },
        cedar: {
          50: '#fbf7f4',
          100: '#f5eee6',
          200: '#ebdccf',
          300: '#dbc1ad',
          400: '#c59d83',
          500: '#b48163',
          600: '#a36d51',
          700: '#875640',
          800: '#6f4837',
          900: '#3a241a',
          950: '#1d110b',
        },
        amberGold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        leather: {
          50: '#fdf8f5',
          100: '#f9eee8',
          200: '#f1dcd1',
          300: '#e4c1b0',
          400: '#d19e85',
          500: '#bd7d5e',
          600: '#a66245',
          700: '#844a33',
          800: '#542d1e',
          900: '#351c12',
          950: '#1c0f0a',
        },
        brass: {
          300: '#fef08a',
          400: '#facc15',
          500: '#d4af37',
          600: '#b48820',
          700: '#8c6614',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        cinzel: ['"Cinzel"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
