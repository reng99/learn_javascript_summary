## 使用方法

下载本文件下到本地，控制台进入本文件夹的根目录执行：

1.npm install

2.npm run dev

执行完上面的代码之后，就会在浏览器中相关的url上看到下面这张图的效果：


**注意点**

实现声场环境

3.npm run build

在`实施生产环境之前，需要注意⚠️`

将`图片和字体`资源单独放置[参考](../wepack的踩坑记录/坑1_分离images和fonts.md)

使用extrat-text-webpack-plugin将css 分离开来，放到独立的文件夹中[参考](../wepack的踩坑记录/坑2_分离js和css.md)

修改样式中的图片和字体的路径[参考](../wepack的踩坑记录/坑3_prod下样式图片出错.md

