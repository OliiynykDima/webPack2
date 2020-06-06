const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publickPath: "/"
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
        ]
    }
}