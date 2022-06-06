const path= require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

//用于build纯client side的bundle
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.join(__dirname, 'src/client/index'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader", 'postcss-loader'],
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/client/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        port: 5000,
        overlay: true
    }
}
