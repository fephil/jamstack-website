module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: __dirname + "/src/js/index.js",
  },
  output: {
    path: __dirname + "/_site/js/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
