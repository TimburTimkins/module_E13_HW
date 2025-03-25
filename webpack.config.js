const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
const TerserWebpackplugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/new.ts',
    mode: 'development',
    output: {
        filename: "main.js"
    },
    devServer: {
        hot: true,
    },
    plugins: [ 
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }), 
        new HtmlWebpackPlugin({
            template: "index.pug",
            filename: "index.html"
        }),
        new ESLintPlugin({}),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackplugin(),
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'],
                test: /\.css$/,
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
};