const path = require('path');

const config = {
    mode: "development",
    entry: __dirname + "/src/index.js",
    output: {
        path: path.resolve(__dirname, "../home/assets"),
        filename: "bundle.debug.js"
    },
};

module.exports = config;