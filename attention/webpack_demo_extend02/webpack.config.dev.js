const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:[//string|object|array,起点或者是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行
        './src/index.js'
    ],
    output:{//指示webpack如何去输出，以及在哪里输出你的「bundle、asset和其他你所打包或使用webpack载入的任何内容」。
        path:path.join(__dirname,'dist'),//目录对应一个绝对路径
        //pathinfo:true,//告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释。默认是false，pathinfo是在开发环境中使用，在生产环境中就不推荐
        filename:'bundle.js',//filename选项决定了在每个输出bundle的名称。这些bundle将写入到「output.path」选项指定的目录下
        publicPath:'/',//值是string类型，对于加载（on-demand-load）或加载外部资源(external resources)（如图片、文件等）来说
        //output.publicPath是很重要的选项。如果指定了一个错误的值，则在加载这些资源的时候会收到404错误
    },
    devServer:{
        port:9000,//监听的端口号
        contentBase:path.join(__dirname,'dist'),// 告诉服务器从哪来提供内容
        publicPath:'/',//此路径下的打包文件可在浏览器中访问
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
                test:/\.less$/,
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
            },
            {//处理图片资源,样式
                test:/\.(png|svg|jpg|jpeg|gif)$/,//这里处理了以.png .svg .jpg .jpeg .gif为后缀名的图片
                use:[
                    {loader:'file-loader'}
                ]
            },
            {//处理html，插入在html中的图片img用此处理
                test:/\.html$/,
                use:[
                    {loader:'html-loader'}
                ]
            },
            {//处理字体
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'//等同于{loader:'file-loader'}
                ]
            }
        ]
    }
}