## 没有图片个数限制的的banner轮播图

> 好说没限制个数，但是至少也要两张图片啊，不然轮播效果的banner就没什么意思了咯

### 使用方法

直接拷贝我的`index.html`文件，样式在里面了，手写的`javascript`代码也在里面了。

1. 更改jquery库的引用的路径

2. 更改图片的引用路径

因为是没数量的限制，所以你可以改动轮播图片的数量。但是你也要相应改变`li`标签的数量啊。

比如：

```html
    .
    <div class="container">
        <img src="./imgs/1.jpg" alt="1">
        <img src="./imgs/2.jpg" alt="2">
    </div>
    .

```

那么`li`的标签的数量也要是两个

```html

    .
    <div id="order">
        <ul>
            <!-- 这里的li标签的数量需要对应图片的数量 -->
            <li></li>
            <li></li>
        </ul>
    </div>
    .

```

### demo效果图

![banner_without_images_limit](./imgs/banner_without_images_limit.png)

- 图片上的左右箭头可以点击切换图片

- 下面的圆点标志也可以点击切换

如果没有进行以上两种操作，鼠标又不在左右标签和圆点标记处，图片会进行自动的轮播。

本banner轮播效果是基于jquery库的，如果你想详细了解，你可以看[index.html](./index.html)里面的我写的代码和相关注释。