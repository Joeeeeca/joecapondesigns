// postcss.config.js
module.exports = {
  plugins: {
    // allow your `@import "tailwindcss/…css" layer(...)` lines to be resolved
    'postcss-import': {},

    // Tailwind’s v4 PostCSS plugin (reads tailwind.config.js)
    '@tailwindcss/postcss': {},

    // add vendor prefixes
    autoprefixer: {},
  },
};