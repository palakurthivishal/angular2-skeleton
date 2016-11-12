var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        polyfills: './src/modules/app/polyfills.ts',
        vendor: './src/modules/app/vendor.ts',
        app: './src/modules/app/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.css$/,
            exclude: helpers.root('src', 'modules/app_entry'),
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        }, {
            test: /\.css$/,
            include: helpers.root('src', 'modules'),
            loader: 'raw'
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new HtmlWebpackPlugin({
            template: 'src/modules/app/index.html'
        })
    ]
};
