const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].js',
    },
    plugins: [new HtmlWebpackPlugin()],
}