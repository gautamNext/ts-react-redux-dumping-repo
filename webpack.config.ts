import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const configuration: webpack.Configuration = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_module/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./build"),
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};

export default configuration;
