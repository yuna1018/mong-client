const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${path.resolve(__dirname, "../public")}/index.html`,
        }),
        new webpack.ProvidePlugin({ React: "react" }),
        new ReactRefreshWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
    ],
    resolve: {
        alias: { "@": path.resolve(__dirname, "../src") },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    },
};