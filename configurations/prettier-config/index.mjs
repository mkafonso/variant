/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  tabWidth: 2,
  semi: false,
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: 'auto',
  arrowParens: 'always',
  trailingComma: 'all',
  quoteProps: 'as-needed',
}

export default config
