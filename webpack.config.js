var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExternalsPlugin = require('webpack2-externals-plugin');
var path = require('path');

module.exports = {
    context: './app',
    entry: {
        build: './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.scss', '.js']
    },
    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: path.join(__dirname, 'dist\[name].css'),
            // allChunks: true
        }),
        new ExternalsPlugin({
            type: 'commonjs',
            include: ['./webpack.config.js']
        }),
    ]
}