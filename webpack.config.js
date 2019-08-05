const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');

module.exports = {
  entry: {
    main: Path.resolve(__dirname, 'src', 'App.js'),
  },
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
      filename: './index.html'
    })
  ],
};
