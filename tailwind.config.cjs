const { fontFamily: { serif } } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['var(--h4n-inter)', ...serif],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
