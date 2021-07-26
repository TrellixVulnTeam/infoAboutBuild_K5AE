const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './app/',
    output: {
        filename: 'app.[hash].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [{
            test: /\.js/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        open: true,
    },
    resolve: {
        extensions: ['*', '.js', '.scss'],
    },
};