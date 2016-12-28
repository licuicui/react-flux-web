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
                    presets: ['es2015', 'react','stage-0']
                }

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
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
            Login: __dirname + '/src/login',
            Images: __dirname + '/src/images',
            Style: __dirname + '/src/style',
            Util: __dirname + '/util',
            Public: __dirname + '/src/public',
            SupplierComponents: __dirname + '/src/supplier/components',
            SupplierConstants: __dirname + '/src/supplier/constants',
            SupplierActions: __dirname + '/src/supplier/actions',
            ClientComponents: __dirname + '/src/client/components',
            ClientConstants: __dirname + '/src/client/constants',
            ClientActions: __dirname + '/src/client/actions'
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
