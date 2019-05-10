'use strict';

const path = require('path');
const dirPublic = path.resolve(__dirname, 'public');

module.exports = {
  entry: './src/index.js',
  output: {
    path: dirPublic,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: dirPublic,
    port: 3000,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      }
    ]
  },
};
