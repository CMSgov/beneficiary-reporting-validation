import * as path from 'path';
import * as webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const config: webpack.Configuration = {
  entry: './index.ts',
  plugins: [
    new CleanWebpackPlugin(['build'])
  ],
  output: {
    library: 'wi-validation',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'build'),
    filename: 'wi-validation.js',
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  module: {
    rules: [
      {
        test: /[\\\/]node_modules[\\\/](joi[\\\/]lib[\\\/]|hoek[\\\/]lib[\\\/]|topo[\\\/]lib[\\\/])/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
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
    Buffer: true,
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  }
};

export default config;
