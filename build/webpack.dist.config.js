let path = require('path');
let webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let merge = require('webpack-merge');
let webpackBaseConfig = require('./webpack.base.config.js');
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
module.exports = merge(webpackBaseConfig, {
    // 入口
    entry: {
      index: './src/index'
    },
    // 输出
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].js'
    //   chunkFilename: '[name].chunk.js'
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../src/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});
