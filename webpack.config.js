const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
    mode: "none",
    entry: path.resolve(__dirname, pkg.clientApp, "src", pkg.main),
    output: {
        path: path.resolve(__dirname, pkg.public),
        filename: pkg.main
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
        },{
            test: /\.(less)$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", "less-loader"]
        },{
            test: /\.(html|txt|tpl|css)$/,
            exclude: /node_modules/,
            use: ["raw-loader"]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,  pkg.clientApp, 'src/index.html'),
            base: '/',
            inject: false
        })
    ]
}