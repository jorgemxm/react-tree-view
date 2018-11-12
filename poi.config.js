/**
* POI Configuration Docs: https://poi.js.org/#/home
*/
module.exports = {
  entry: './src/index.js',
  extractCSS: true,
  html: {
    title: 'React-TreeView',
    template: './src/index.ejs', // If it exists, otherwise use built-in template
    pkg: {}
  },
  plugins: [
    {
      resolve: '@poi/plugin-eslint',
      options: {
        configFile: './.eslintrc.js',
        useEslintrc: false, // Enforce our own ESLint config file
      }
    }
  ],
  transformModules: [
    'whatwg-fetch',
    'webpack-dev-server', // Fix Issue Webpack-dev-server in Safari: https://github.com/webpack/webpack-dev-server/issues/1090
  ]
}
