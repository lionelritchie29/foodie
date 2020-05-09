const path = require("path");

module.exports = {
  entry: {
    main: "./src/app.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /components/,
        use: [
          "to-string-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: "./src/scss/config.scss",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets/images",
            },
          },
          "img-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/fonts",
          },
        },
      },
    ],
  },
};
