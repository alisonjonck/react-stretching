const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

/* plugins */
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', 'airbnb', '@babel/preset-env'],
            env: {
              test: {
                plugins: ['istanbul'],
              },
            },
          },
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  plugins: [htmlPlugin],
};
