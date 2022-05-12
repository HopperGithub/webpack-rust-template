const fs = require('fs');
const path = require('path');
const config = require('./config');

module.exports = Object.assign(config, {
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        // watchOptions: {
        //     ignored: /node_modules/,
        // },
    },
});
