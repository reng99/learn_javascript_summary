使用方法

下载本文件下到本地，控制台进入本文件夹的根目录执行：

1.npm install

2.npm run dev

执行完上面的代码之后，就会在浏览器中相关的url上看到下面这张图的效果：

注意点

实现声场环境

3.npm run build

在实施生产环境之前，需要注意⚠️

将图片和字体资源单独放置[参考](../wepack的踩坑记录/坑1_分离images和fonts.md)

使用extrat-text-webpack-plugin将css 分离开来，放到独立的文件夹中[参考](../wepack的踩坑记录/坑2_分离js和css.md)

修改样式中的图片和字体的路径[参考](../wepack的踩坑记录/坑3_prod下样式图片出错.md)


## 新的注意的点

optimize-css-assets-webpack-plugin 【生产环境下进行css的压缩】
这个插件一般是和extract-text-webpack-plugin 使用，因为前一个插件式解决后者在复制的过程的问题。[链接](https://npm.taobao.org/package/optimize-css-assets-webpack-plugin)
