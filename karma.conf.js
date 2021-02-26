module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "webpack"],

    files: ["__test__/**/*.spec.js"],

    preprocessors: {
      "__test__/**/*.spec.js": ["webpack", "coverage"],
    },
    webpack: {
      devtool: "inline-source-map",
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      module: {
        rules: [
          {
            test: /\.(j|t)sx?/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
          { test: /\.css$/, use: ["style-loader", "css-loader"] },
          {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
          },
        ],
      },
    },
    reporters: ["progress", "coverage"],
    webpackServer: {
      noInfo: true, //please don't spam the console when running in karma!
    },
    browsers: ["Chrome"],
  });
};
