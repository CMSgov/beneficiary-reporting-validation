import merge from 'webpack-merge';
import common from './webpack.common';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config: webpack.Configuration = merge(common, {
  mode: 'none',
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static'
    })
  ]
});

export default config;
