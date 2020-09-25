const path = require('path');

const config = {
    mode: "production",
    entry: __dirname + "/src/index.js",
    output: {
        path: path.resolve(__dirname, "../..//www/assets"),
        filename: "bundle.[hash:8].js"
    },
};

module.exports = config;