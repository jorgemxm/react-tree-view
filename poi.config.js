/**
* POI Configuration Docs: https://poi.js.org/#/home
*/
module.exports = {
  entry: 'src/index',
  css: {
    extract: true,
  },
  output: {
    html: {
      title: 'React-TreeView',
      template: './src/index.ejs', // If exists, otherwise use built-in template
      pkg: {},
    },
  },
  plugins: [
    {
      resolve: '@poi/plugin-eslint',
    },
  ],
  babel: {
    transpileModules: [
      'whatwg-fetch',
      'webpack-dev-server', // Fix Issue Webpack-dev-server in Safari: https://github.com/webpack/webpack-dev-server/issues/1090
    ],
  },
};
