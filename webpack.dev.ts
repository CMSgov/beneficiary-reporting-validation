import * as webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'errors-only',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
});

export default config;
