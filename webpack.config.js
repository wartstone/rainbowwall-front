const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.html',
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  devServer: {
    static: './',
  },
};