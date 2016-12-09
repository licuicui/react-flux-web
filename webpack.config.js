var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=10000&name=images/[hash:base64:8].[ext]'
            },
            {
                test: /\.(woff|woff2|otf|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?name=[name].[ext]'
            }
        ]
    },
    //别名，例如　：　require('elements/logo/component')//等价于public/js/elements/logo/component
    resolve: {
        alias: {
            component: __dirname + '/app/component'
        },
        //后缀自动补全功能
        extensions: ['', '.js', '.jsx', '.json', '.css', '.png', '.jpg']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
