/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: "avoid",
  printWidth: 80,
  proseWrap: "always",
  singleAttributePerLine: true,
  tabWidth: 2,
  useTabs: false,
};
