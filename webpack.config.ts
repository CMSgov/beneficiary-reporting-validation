import * as path from 'path';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config: webpack.Configuration = {
  entry: './index.ts',
  mode: "none",
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static'
    })
  ],
  output: {
    library: 'wi-validation',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'build'),
    filename: 'wi-validation.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'isemail': path.resolve(__dirname, 'isemail.stub.ts')
    }
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