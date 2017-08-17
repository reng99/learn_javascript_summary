## 点击放回顶部按钮返回顶部

![back_to_top](./images/back_to_top.png)


假设有代码

```html

    ...
    <div id="backToTop">
        back to top
    </div>
    ...

```

实现的相关的`javascript`的代码（前提是引入了相关的jquery库），你可以引用我上传的[jquery-3.2.1.min.js](./lib/jquery-3.2.1.min.js)

```javascript

(function(){
    var top = 0; // 滚动条距离顶部的距离，初始设定为0
    $(window).scroll(function(){
        top = $(this).scrollTop();
    });
    if(top > 0){
        $("#backToTop").click(function(){
            $("html body").animate({
                scrollTop:0 //返回顶部
            },"slow");
        });
    }
})();

```