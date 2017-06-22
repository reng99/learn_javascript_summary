const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:[
        './src/index.js'
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    devServer:{
        port:9000,//监听的端口号
        contentBase:path.join(__dirname,'dist'),// 告诉服务器从哪来提供内容
        publicPath:'/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./static/index.html'
        })
    ]
}