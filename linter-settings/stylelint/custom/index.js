module.exports = {
  plugins: [
    "./plugins/no-specify-hard-coding-property-value/index.js",
    "./plugins/no-specify-hard-coding-color/index.js",
    "./plugins/no-specify-hard-coding-media-query/index.js",
    "./plugins/no-transition-all/index.js",
  ],
  rules: {
    "custom/no-specify-hard-coding-property-value": true,
    "custom/no-specify-hard-coding-color": true,
    "custom/no-specify-hard-coding-media-query": true,
    "custom/no-transition-all": true,
  },
}
