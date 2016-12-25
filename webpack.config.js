var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/app.js')
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
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
            components: __dirname + '/src/components',
            images: __dirname + '/src/images'
        },
        //后缀自动补全功能
        extensions: ['', '.js', '.jsx', '.json', '.css', 'scss', '.png', '.jpg']
    },
    eslint: {
        configFile: './.eslintrc'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
