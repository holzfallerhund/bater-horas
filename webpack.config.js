const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name][chunkhash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            react: path.resolve(__dirname, 'node_modules', 'react'),
            '@horas': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(j)sx?$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/i,
                use: ['file-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        overlay: true,
        port: 8080
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CompressionPlugin({
            cache: true,
            algorithm: 'gzip',
            compressionOptions: { level: 9 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new Dotenv(),
        new GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [{
                urlPattern: new RegExp('googleapis'),
                handler: 'StaleWhileRevalidate'
            }]
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            minChunks: 2,
            maxInitialRequests: Infinity,
            minSize: 0
        }
    }
}
