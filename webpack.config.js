const path = require("path");

module.exports = {
    entry: {
        index: "./index.js",
        formula: "./formula_package.js",
        interaction: "./user_int.js",
        regressions: "./regressions.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "result"),
        clean: true,
    },
    module: {
    rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        }]
    },
    mode: "none"
}