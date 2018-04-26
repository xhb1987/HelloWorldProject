const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexHtml = 'index.html';

const context = path.resolve('src');

module.exports = {
    context,
    entry: './index.web.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css/,
                loader: ['css-loader', 'style-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'react-native': 'react-native-web'
        }
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({ template: indexHtml })]
};
