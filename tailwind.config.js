module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    mode: 'all',
    content: [
      './src/**/*.njk',
      './.eleventy.js',
    ]
  },
}
