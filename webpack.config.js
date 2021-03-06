const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = () => {
  const isCiBuild = !!process.env.CI;
  let envKeys = {};

  if (isCiBuild) {
    envKeys['process.env.NODE_ENV'] = JSON.stringify(process.env.NODE_ENV);
    envKeys['process.env.REACT_APP_SPOTIFY_CLIENT_ID'] = JSON.stringify(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    envKeys['process.env.REACT_APP_SPOTIFY_CLIENT_SECRET'] = JSON.stringify(process.env.REACT_APP_SPOTIFY_CLIENT_SECRET);
  } else {
    const env = dotenv.config().parsed;
    envKeys = Object.keys(env).reduce((prev, next) => {
      // eslint-disable-next-line no-param-reassign
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {});
  }

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
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
        {
          test: /\.css/,
          use: [
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      open: true,
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      htmlPlugin,
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new CleanWebpackPlugin(),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
