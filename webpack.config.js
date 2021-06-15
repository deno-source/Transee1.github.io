const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].js',
    },
    plugins: [new HtmlWebpackPlugin({
        template:'./src/index.html'
    })],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": ["@babel/preset-react"]
                }
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },]
    }
}