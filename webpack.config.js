var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExternalsPlugin = require('webpack2-externals-plugin');
var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: [path.resolve(__dirname, 'app', '\custom-b4.scss')],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: path.join(__dirname, 'dist\[name]123.css'),
            allChunks: true
        }),
        // new ExternalsPlugin({
        //     type: 'commonjs',
        //     include: path.join(__dirname, 'node_modules')
        // }),
    ]
}