## 页脚适应浏览器的大小


### 问题

当内容太小，可见区域太大，如果是限定一个高度的话，这么多个页面很难统一的，而且不同电脑的屏幕尺寸不同。要限定的太低的话，页脚小面就会空出部分的空间，而如果是设置的太长的话，会出现滚动条，不够优雅，并且页头和页脚之间的多余的高度增多，给用户一种视觉的恶感。

所以，我们既不能在内容少的情况下出现滚动条，也不能使得页脚下方出现多余的空白。

下面用jquery和原生的javascript来实现下--


## 解决问题

这里放上我实现的javascript代码

```javascript

/**
 * 固定页脚
 * 
 * 判断浏览器的高度，固定页脚，如果内容过长，自动撑开
 * 
 * 传的参数（"header","footer"，中间的id或者class名称,flag,defaultMarginTop）
 * 
 * flag是来判断是否需要margin使得中间部分内容居中,为false时候不需要
 * 
 * defaultMarginTop为传过来的默认的高度,用于middle部分顶部的距离，底部的距离就靠相减得到marginBottom
 * 
 * 使用的时候注意middle部分时候使用了css样式margin设定了值
 * 
 * 
 * 功能情况一
 * 
 * fixedFooter("header","footer",middle,true,defaultMarginTop)
 * middle部分上下居中
 * 
 * 
 * 功能情况二
 * 
 * fixedFooter("header","footer",middle,false,defaultMarginTop)
 * middele部分上边距是defaultMarginTop,下边距是计算后的值
 * 
 * 
 * 调用的方式:
 * 例子：
 * fixedFooter("header","footer","#error .container",false,60);
 * 
 * 
 * 
 */

(function(){
    
    // 这里给出四个例子
   
    // 注册的页面
    fiexedFooter("header","footer","#register .container",true,60);

    // 注册出错的页面
    fiexedFooter("header","footer","#error .container",true,60);

    // 注册成功的页面
    fiexedFooter("header","footer","#success .container",true,60);

    // 找回密码各个步骤
    fiexedFooter("header","footer","#password .container",true,60);



    function fiexedFooter(header,footer,middle,flag,defaultMarginTop){
        fixed(header,footer,middle,flag,defaultMarginTop);
        $(window).resize(function(){
            fixed(header,footer,middle,flag,defaultMarginTop);
        });
    }
    function fixed(header,footer,middle,flag,defaultMarginTop){

        // pageHeight，原生的javascript求页面视口的高度
        var pageHeight = window.innerHeight;
        if(typeof pageHeight != "number"){
            if(document.compatMode == "CSS1Compat"){//ie
                pageHeight = document.documentElement.clientHeight;
            }else{// 非ie
                pageHeight = document.body.clientHeight;
            }
        }

        // header的高度，包括了内容,padding,border和margin 的值在里面了
        var headerHeight = $(header).outerHeight();
        // footer的高度
        var footerHeight = $(footer).outerHeight();
        // middle部分的高度,不包括margin的值在里面
        var middleHeight = $(middle).height();

        //未处理前的文本的高度
        var originHieght =  headerHeight + footerHeight + middleHeight;

        if(originHieght+defaultMarginTop*2 < pageHeight && flag){

            var _margin = Math.ceil((pageHeight - originHieght)/2);

            $(middle).css("marginTop",_margin + "px").css("marginBottom",_margin + "px");
        }else if(originHieght+defaultMarginTop*2 < pageHeight && !flag){

            // 得到默认的上边距和计算的下边距
            $(middle).css("marginTop",defaultMarginTop+"px").css("marginBottom",pageHeight - originHieght - defaultMarginTop + "px");
        
        }else{

            // 否则给定默认的defaultMarginTop外边距值
             $(middle).css("marginTop",defaultMarginTop+"px").css("marginBottom",defaultMarginTop + "px");
        }
        
    }

})();


```
