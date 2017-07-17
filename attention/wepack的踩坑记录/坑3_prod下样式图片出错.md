## 生产环境下样式中的图片，字体路径出错

**1.问题描述**

在进行`npm run dev [也是就到生产环境中]`,样式里(.ccs|.less|.sass ...)中的图片的路径和文字的路径会发生错误，引用不到正确的位置上。直接打开相关的`.html`文件会报路径错误的信息。

**2.解决方案**

重写`publicPath`

[publicPath](https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/#-extract)重写此 loader 的 publicPath 配置

也就是重写了在`output字段中的publicPath`。使用方法为`publicPath: "../"`,详情如下：

对于css中的图片和文字路径

```javascript

    ...
    {//处理css的规则
        test:/.css$/,
        use:ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: {
                loader:"css-loader",
            },
            publicPath: "../"//重写资源的引入的路径,参考链接https://webpack.js.org/plugins/extract-text-webpack-plugin/#-extract
        })
    },
    ...

```

对于less中的图片和文字路径(sass等其他同理)

```javascript

    ...
    {//处理less的规则
        test:/\.less$/,
        use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','autoprefixer-loader','less-loader'],
            publicPath:'../'
        })
    },
    ...

```

你也可以参考链接的内容进行更改--[相关链接](https://github.com/webpack-contrib/extract-text-webpack-plugin/blob/master/example/webpack.config.js)