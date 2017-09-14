const HtmlwebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');


module.exports = {
    entry: './src/hello.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello Webpack',
        }),
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: 'liff',
                    entry: 'https://dev-uit.line-apps-beta.com:30081/liff-bridge-js/dist/bundle.js',
                    global: 'liff',
                },
            ],
        })
    ]
};
