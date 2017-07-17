## 分离images和fonts到各自文件夹

**1.问题描述**

为了更好的管理images和相关的fonts字体，我们需要将他们在`build`之后【也就是npm run build 操作】，将它们两个独立出来存储。


**2.解决方案**

在webpack的加载的模块中(module)，进行规则匹配的时候进行下面的修改--

图片的管理

```javascript

...
{//处理图片资源,样式
    test:/\.(png|svg|jpe?g|gif|ico)$/i,//这里处理了以.png .svg .jpg .jpeg .gif为后缀名的图片
    use:[
        {
            loader:'file-loader?limit=1024&name=images/[name].[ext]'//这里指出的是build之后将图片存储的文件夹
        }
    ]
},
...

```


字体的管理

```javascript

...
{//处理字体
    test:/\.(woff2?|eot|ttf|otf)$/i,
    use:[
        // 'file-loader'//等同于{loader:'file-loader'}
        'file-loader?limit=1024&name=fonts/[name].[ext]'// 这里指出了build之后将用到的字体存储的文件夹
    ]
}
...

```