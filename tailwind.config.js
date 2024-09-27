/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#a796c9',
        'sidebar-text': '#6c5887',
      },
    },
  },
  plugins: [],
  colors: {
    textPrimary: '#344054',
  			textSecondary: '#475467',
      }
};
