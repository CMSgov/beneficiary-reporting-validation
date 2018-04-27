import * as path from 'path';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './index.ts',
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  output: {
    library: 'wi-validation',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: `${__dirname}/build`,
    filename: 'wi-validation.js'
  },
  module: {
    rules: [
      {
        // need to babelify joi, isemail, hoek, and topo's lib
        test: /[\\\/]node_modules[\\\/](joi[\\\/]lib[\\\/]|hoek[\\\/]lib[\\\/]|topo[\\\/]lib[\\\/])/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  node: {
    global: true,
    Buffer: false,
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  }
};

export default config;