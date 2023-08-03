/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        foreground: 'var(--color-base)',
        accent: 'var(--color-accent)',
        neutral: 'var(--color-neutral)',
      },
      backgroundColor: (theme) => ({ ...theme('colors') }),
    },
  },
  plugins: [],
};
