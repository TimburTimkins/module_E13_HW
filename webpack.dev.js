const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: "main.js"
    },
    devServer: {
        hot: true,
        port: 3001,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new ESLintPlugin(),
        new StylelintPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader']
            },
        ]
    },
}