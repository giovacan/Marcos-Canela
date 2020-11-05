const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.css$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'react-svg-loader',
        }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        plugins: [
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
            template: "./public/index.html",
          }),
        ],
      },
    ],
  },
};
