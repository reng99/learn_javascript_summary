## webpack 的延伸 01 :blush:

如果你还没有阅读过我的第一篇关于webpack的文章[webpack.md](./webpack.md)，那么你可以前往阅读。在webpack中我主要是实现了下面的几点：

- 默认的es5标准的`.js`文件的打包

- 实现用ip地址（127.0.0.1）localhost访问

- 实现热加载

**提示** 在[webpack_demo](./webpack_demo/)目录的基础上实现

本文档实现：

1.es6语法的支持

webpack 默认是不支持`javascript es6`的语法的，但是使用es6语法来开发能够：

- 使得代码更精简

- 剔除了es5的一些令人恶心的东西--比如使用`let const ...`来实现仅能用`var`实现的变量的名命名。

实现webpack支持`ES6的语法`的功能如下：

(测试了下，在最新的谷歌和safari里面我直接使用箭头函数竟然不用配置就可以...，这里我假装没看到哈)

所以，这里只是说下将需要的依赖添加进去`package.json`里面啦--是使用`babel`来进行转换的，为了方便后续的开发，我将涉及到的`babel`的依赖全部添加进去了咯。

1.1 执行--

`npm install --save-dev babel-core`

`npm install --save-dev babel-loader`

`npm install --save-dev babel-plugin-transform-runtime`

`npm install --save-dev babel-preset-es2015`

`npm install --save-dev babel-preset-stage-2`

`npm install --save-dev babel-runtime`

你也可以一次性安装这些`npm install --save-dev babel-core babel-loader babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-2 babel-runtime`，网速差的建议一个个安装吧。

1.2 添加`.babelrc`文件，内容如下（忽略本步骤，添加进去项目运行出错，正在改动）

```json

{
    "presets":["aria"]
}

```

1.3在`webpack.config.dev.js`中添加`module处理`

```javascript

    ...
    module:{
        rules:[
            {// 处理js-es6的规则
                test:/\.js$/,//处理的文件的后缀名
                use:['babel-loader'],//处理的加载器是loader
                include:path.join(__dirname,'src')//包含的路径
            }
        ]
    }
    ...

```

2.实现css的支持

在实现这个css支持的功能之前，先在原先的项目中添加一下相关的文件。在`src`文件夹下面添加`index.css`，在这个文件中的代码如下（实现的功能--整个页面的背景颜色变红）：

```css

body {
    background:red;
}

```

新建完之后，在`src`文件夹中的`index.js`中实现下面的代码：

```javascript

require('./index.css');//引入新建的index.css文件【重点】

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return '('+this.x+','+this.y+')';
    }
}

var point = new Point(2,3);

console.log(point.toString());

```

下面实现这个功能：

2.1安装相关的依赖--'css-loader','style-loader'

进入项目的根目录，在控制台上面执行：`npm install --save-dev style-loader` 以及 `npm install --save-dev css-loader`

为了浏览器的兼容，这里安装多一个依赖`npm install --save-dev autoprefixer-loader`

2.2更改css模块的匹配规则

打开`webpack.config.dev.js`，在`module`字段中添加相关的处理规则，如下：

```javascript

    module:{
        rules:[
            {// 处理js-es6的规则
                test:/\.js$/,//处理的文件的后缀名
                use:['babel-loader'],//处理的加载器是loader
                include:path.join(__dirname,'src')//包含的路径
            },
            {//处理css的规则
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},//style-loader 和 css-loader 的顺序是不能够颠倒的
                    {
                        loader:'css-loader',
                        // options:{
                        //     modules:true
                        // }
                    },
                    {loader:'autoprefixer-loader'}//作用是自动补全浏览器的兼容
                ]
            }
        ]
    }


```

需要⚠️注意的是，你不能够在规则里面将两个加载器`style-loader`  和   `css-loader`的顺序颠倒(颠倒后提示错误❌)，如果你好奇颠倒后会发生什么，你可以将对应的实例的项目--[webpack_demo_extend01](./webpack_demo_extend01/)下载下来执行一下了。对了，上面的`css 中添加的规则`，你可以访问[链接](https://doc.webpack-china.org/concepts/loaders/)。

当完成上面的配置之后，执行`npm run dev`你就浏览`localhost:9000`，然后发现整个页面的背景颜色已经变红色了。

3.实现less(sass同理)的支持

在实现支持`less`功能之前，先在`src/`文件夹的下面新建一个`index.less`文件，并在此文件里面实现改变`static/index.html`中`p`标签文字颜色的功能，将它的颜色改为白色。

```less

@white:#fff;
body{
    p{
        color:@white;
    }
}

```

新建好文件后，在`src/index.js`中引入这个文件，实现如下:

```javascript

require('./index.less');//引入.less文件

...


```

具体实现如下：

3.1安装相关依赖--‘style-loader && css-loader && less-loader’

对了，像第二点一样，安装个浏览器的兼容的依赖`autoprefixer-loader`。

在第二点实现css支持的时候，已经安装了了`style-loader && css-loader && autoprefixer-loader`。在这些基础上安装`less-loader`就行了。

打开控制台，在根目录下执行`npm install --save-dev less-loader`

3.2添加less加载器

进入`webpack.config.dev.js`中，添加相关的less支持：

```javascript

    ...
    module:{
        rules:[
            {// 处理js-es6的规则
                test:/\.js$/,//处理的文件的后缀名
                use:['babel-loader'],//处理的加载器是loader
                include:path.join(__dirname,'src')//包含的路径
            },
            {//处理css的规则
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},//style-loader 和 css-loader 的顺序是不能够颠倒的
                    {
                        loader:'css-loader',
                        // options:{
                        //     modules:true
                        // }
                    },
                    {loader:'autoprefixer-loader'}
                ]
            },
            {//处理less的规则
                test:/\.less$/,
                use:[
                    {loader:'style-loader'},//四者的顺序不能调换的哦
                    {loader:'css-loader'},
                    {loader:'autoprefixer-loader'},
                    {loader:'less-loader',options:{modules:true}},  
                ]
            }
        ]
    }
    ...

```

记得哦，处理`less`规则的四个`loader`的顺序不能够乱哦，不信请自行下载项目--[webpack_demo_extend01](./webpack_demo_extend01/)来运行验证下咯。

3.3运行查看效果

在项目的根目录中执行`npm run dev`就可以在`localhost:9000`看到文字的颜色变成了白色。效果如截图：

![paragrah-white](./assets/imgs/webpack_demo_extend01.png)

啊哈，也许你发现了，在`webpack.config.dev.js`中实现的`less && css`的代码是重复了一大推呢，是吧。其实，我们可以简化一下的不止是这个文件呢，下面来简化下，使得实现的功能一样一样的。

- 去掉`src/index.css`文件

- 去掉`src/index.js`文件中的`.css`的引用`require('./index.css');`

- 更改`src/index.less`文件，如下:

```less

@white:#fff;
@red:red;
body{
    background:@red;
    p{
        color:@white;
    }
}

```

- 更改`webpack.config.dev.js`中的`module`字段，如下：

```javascript

    ...
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
            }
        ]
    }
    ...

```

更改之后，你可以看到最终的效果是一模一样的呢，对了，在`src/index.less`文件中我是用`.less`的语法实现的，其实你全部都用`.css`的语法写，效果也是一样的。可以改成下面这样--

```css

body{
    background:red;
}
body p{
    color:#fff;
}

```

不过个人还是喜欢用`less预处理器`来写样式哈，好处就不用多说了。本文档最终的项目结构请参考--[webpack_demo_extend01](./webpack_demo_extend01/)

如果你感兴趣的话，可以将本文档用到的示例项目下载在本地进行运行哦。[webpack_demo_extend01](./webpack_demo_extend01/)

由于篇幅的问题，本文件所讲的内容就是这些了，如果喜欢，可以观看我下一次的延伸的内容--[webpack_extend02](./webpack_extend02.md)哦:blush:
