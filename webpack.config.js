const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './app/',
    output: {
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        open: true,
        hot: true,
        compress: true,
    },
    resolve: {
        extensions: ['*', '.js', '.scss'],
    },
};