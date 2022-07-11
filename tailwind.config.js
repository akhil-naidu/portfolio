/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      robotoSlab: ['Roboto Slab', 'serif'],
    },
    fontSize: {
      xs: '.75rem', // 12px
      xtiny: '.8125rem', // 13px
      tiny: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.375rem', // 22px
      '3xl': '1.5rem', // 24px
      '4xl': '1.5625rem', // 25px
      '5xl': '1.625rem', // 26px
      '6xl': '1.75rem', // 28px
      '7xl': '2.5rem', // 40px
      '8xl': '6rem', // 40px
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
