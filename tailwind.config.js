/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.select-none': {
          '-webkit-touch-callout': 'none',
          '-webkit-user-select': 'none',
          '-moz-user-select': 'none',
          '-ms-user-select': 'none',
          'user-select': 'none',
        },
        '.select-all': {
          '-webkit-touch-callout': 'auto',
          '-webkit-user-select': 'all',
          '-moz-user-select': 'all',
          '-ms-user-select': 'all',
          'user-select': 'all',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

