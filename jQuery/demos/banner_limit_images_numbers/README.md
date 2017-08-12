## 图片个数限制的的banner轮播图

本demo限制的个数是三个，如果需要进行使用和更改的，请查看下面的**使用方法**啊

### 使用方法

直接拷贝我的`index.html`文件，样式在里面了，手写的`javascript`代码也在里面了。

要成功运行的话，你需要替换图片的路径（图片最好是一样的尺寸的啦，这样效果更好），还有替换引用jquery库的路径啊。

如果需要进行更改，就要进行下面的操作：

改动css的相应的内容(这里也就是[index.html](./index.html)的style内容)：

```css

    ...
      .container{
            width:300%;/* 改动点一： 轮播为三张图，为300%。如果是四张图就为400%，以此类推 */
            height:auto;
        } 
    ...

```

```css

    ...
        img{
            width:33.3%;/* 改动点二：轮播图为三张图，所以为100%／3，如果是四张图，为100%／4，以此类推 */
            height:auto;
            display:block;
            float: left;
        }
    ...

```

```css

    ...
        #order ul{
            width:60px;/* 改动点三：限定的轮播的个数是三，如果轮播个数限制为4，width的值是80px，以此类推 */
            height:10px;
            margin:0 auto;
            text-align:center;
        }
    ...

```

改动`index.html`中的相关的html内容：

```html
    
    ...
        <div id="carousel">
            <div class="container">
                <!-- 改动点四：轮播为三张图，有三个img标签，如果有四张图为四个img标签，以此类推 -->
                <img src="../banner_without_limits_imgNub/imgs/1.jpg" alt="1">
                <img src="../banner_without_limits_imgNub/imgs/2.jpg" alt="2">
                <img src="../banner_without_limits_imgNub/imgs/3.jpg" alt="3">
            </div>
                <div id="prev">&lt;</div>
                <div id="next">&gt;</div>
                <div id="order">
                    <ul>
                        <!-- 改动点五：有三张图，就有三个li标签，有四张图就有四个li标签，以此类推 -->
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
        </div>
    ...

```

详细的内容和说明，我都在[index.html](./index.html)中做了相应的必要备注。

### demo效果图

![banner_limit_images_number](./banner_limit_images_number.png)