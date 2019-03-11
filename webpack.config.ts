import webpack from 'webpack';
import htmlwebpackplugin from 'html-webpack-plugin';
import path from 'path';
const htmlWebPackRootPlugin = require('html-webpack-root-plugin');

const webpackConfigs: webpack.Configuration[] = [
  {
    name: 'development',
    mode: 'development',
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader'
        },
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new htmlwebpackplugin({
        title: 'Slate Docs - React'
      }),
      new htmlWebPackRootPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: path.join(__dirname, './dist'),
      hot: true,
      port: 8080
    }
  }
];

export default webpackConfigs;
