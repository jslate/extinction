var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './es6/Game.js',
    output: {
        path: __dirname + '/public/javascript/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'es6'),
              loader: 'babel-loader',
              query: { presets: 'es2015' },
            },

            {
              loader: 'script',// script-loader
              test: /(pixi|phaser).js/
            }
        ],
    },

    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
