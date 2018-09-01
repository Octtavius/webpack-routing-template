var webpack = require('webpack');
var path = require('path');

var config = {
    context: __dirname + "/apps",
    entry: {
        app: "./index.js",
        viewer: "./viewer/viewer-index.js",
        vendor: ['angular', 'angular-ui-router']
    },
    output: {
        path: __dirname + "/bundles",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
            path.resolve('./lib')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'angular1-templateurl-loader'}
                ]
            },
            {
                // THIS IS THE MAGIC!
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]  // THAT WAS THE MAGIC!
    }
};

module.exports = config;

