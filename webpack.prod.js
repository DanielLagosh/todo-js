const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssminimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {

    mode: 'production',
    output: {clean: true,
    filename: 'main.[contenthash].js'},
    module: {
        rules: [
            {
                test: /\.html$/,  
                loader: 'html-loader', options: {minimize: true, sources: false}       
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,  
                use: ['style-loader','css-loader']        
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                //options: { esModule: false, name: '[name].[ext]', outputPath: 'assets/img/' }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                presets: ['@babel/preset-env']
                        }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssminimizerPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mate wea',
            template: './src/index.html',
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),

        new CopyPlugin ({
            patterns: [ {from: 'src/assets', to: 'assets/' }]
        })

    ]
};