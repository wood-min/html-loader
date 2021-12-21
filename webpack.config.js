const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: resolve(__dirname, "./src/index.js"),
    mode: "development",
    output: {
        path: resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "./src/index.html")
        })
    ],
    devServer: {
        open: true,
        host: "localhost",
        port: 8080,
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: resolve(__dirname, "./node_modules")
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
             {
                 test:/\.html$/,
                 use:["html-loader"]
             },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use:{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images',
                        limit:4000
                    },
                }
            }
        ]
    }
}