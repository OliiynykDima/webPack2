const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: [/node_modules/],
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: ["style-loader", "postcss-loader", "css-loader"],
            },
            {
                test: /\.(sass|sccs)$/,
                use: [
                    {
                        loader: "style-loader", 
                    },
                    {
                        loader: "css-loader", 
                    },
                    {
                        loader: "sass-loader", 
                    },
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        })
    ],
    devServer: {
        port: 1488
    }
}