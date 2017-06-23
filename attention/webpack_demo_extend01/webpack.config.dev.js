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
    ],
    module:{
        rules:[
            {// 处理js-es6的规则
                test:/\.js$/,//处理的文件的后缀名
                use:['babel-loader'],//处理的加载器是loader
                include:path.join(__dirname,'src')//包含的路径
            },
            {//处理css的规则,处理less的规则
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},//style-loader 和 css-loader 的顺序是不能够颠倒的
                    {
                        loader:'css-loader',
                        // options:{
                        //     modules:true
                        // }
                    },
                    {loader:'autoprefixer-loader'},
                    {loader:'less-loader'},
                ]
            }
        ]
    }
}