/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily: { serif } } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Inter', ...serif],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
