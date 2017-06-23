## webpack :blush:

### 说明

- 本开发基于mac os

- 带`.`是无序的，先后顺序可以调换。带`1,2...`是有序的，先后顺序不可以调换。

- 阅读需要有基础的webpack的知识

### 前置条件

1. 需要安装node

2. 需要全局安装webpack -- 执行"npm install webpack -g"

### part zero 新建项目

1.cd desktop

2.mkdir your_project_name && cd your_project_name

3.npm init -y  (注意，使用的-y之后一切都是默认的)

3.npm  init (注意，回车后请按提示进行输入)

[注意，两个步骤3，请选择其中一个进行，推荐使用 npm init]

4.npm install --save-dev webpack

### part one 基本搭建

1.进入你的根目录

2.如下：

- 在根目录下，添加src文件夹，并在此文件夹下面新建`index.js`，并在`index.js`文件内写入下面的内容：

```javascript

console.log("webpack demo");

```

- 在根目录下，新建一个名为`webpack.config.js`文件，并在当前文件输入一下的内容：

```javascript

const path = require('path');

module.exports = {
    entry:[//入口文件
        './src/index'
    ],
    output:{
        path:path.join(__dirname,'dist'),//出口文件的路径
        filename:'bundle.js',//打包后的文件名
        publicPath:'/'//公共路径名，当前根目录为root
    }
}

```

通过以上的两个步骤，可以执行下命令行中，进入根目录并执行`webpack`指令。执行了本条指令后，会自动找到`webpack.config.js`文件进行操作。得到的结果是：根目录多出了一个`dist`文件夹，里面包含`bundle.js`文件。

- 在根目录下，新建一个文件夹，并在此文件夹下面新建`index.html`，并在本文件中，添加如下的内容：

```html

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>webpack</title>
</head>
<body>
    
    <p>webpack demo</p>

    <!--引入webpack打包后的javascript文件-->
    <script type="text/javascript" src="../dist/bundle.js"></script>
</body>
</html>

```

经过上面的三个步骤之后，你可以打开`static`下面的文件`index.html`，并在浏览器上运行。结果是；`在浏览器的控制台下面看到 "webpack demo" 的字`。

3.更改webpack.config.js为webpack.config.dev.js

原因：我们是在开发环境下面进行开发的，改名称有下面两个好处：

- 改名称能够更加清楚文件代表的意义。

- 能够更好的管理文件。

注意，更改名称之后，你不能够在控制台上面直接执行`webpack`命令了。而是执行命令`webpack --config webpack.config.dev.js`。是不是看着执行那么一长串的命令很是别扭，下面介绍一下使用`npm 方式`执行的命令：

本身默认的生成的文件结构里面（我是使用`npm init`生成的），有那么一个文件`package.json`，里面的本身的内容如下：

```json

{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "webpack demo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "webpack"
  ],
  "author": "reng",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.0.0"
  }
}

```

下面在`package.json`文件里面的`script字段里面`添加一些信息，如下：

```json

  ...
  "scripts": {
    "dev":"webpack --config webpack.config.dev.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  ...

```

完成上面的内容之后，就在控制台可以执行`npm run dev`的指令，这样的执行跟在控制台上面执行`webpack --config webpack.config.dev.js`得到的结果一模一样的了。很是神奇是吧，熟悉node开发的人应该知道这个`npm run dev`哈。如果你想实时监听文件的打包的话，需要改动`package.json`文件对应的`scripts`字段的字段如下：

```json

  ...
  "scripts": {
    "dev":"webpack --config webpack.config.dev.js --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  ...


4.页面更改为本地(localhost)执行

细心的人儿应该发现了在浏览器上面浏览的地址是酱紫的呢--`file:///Users/reng/Desktop/webpack-demo/static/index.html`。如果我们要通过localhost（127.0.0.1）来查看，那咋办呢。这就使用到了`webpack-dev-server`了呢。

4.1首先安装一下相关的依赖:`npm install --save-dev webpack-dev-server`

4.2接下来就要修改一下`package.json`文件对应的`scripts`字段的内容了。如下：

```json

  ...
  "scripts": {
    "dev":"webpack-dev-server --config webpack.config.dev.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  ...

```

通过`4.1 && 4.2`的修改，你可以在控制台上通过执行`npm run dev`。浏览器默认的监听的端口号是`8080`，此时，你在浏览器的url栏中输入`localhost:8080/static/index.html`或者`127.0.0.1:8080/static/index.html`就可以访问了。

注意：此时不能够进行`webpack`将`entry`的index.js转换成为bundle.js了咯。

有个问题，如果你是在本地中打开了多个项目的话，就会产生端口上的冲突，因为默认的端口号是8080。

下面给出两个更改端口的方案：

- 在`package.json`的字段`scripts`里面添加，

```json
  ...
  "scripts": {
    "dev":"webpack-dev-server --config webpack.config.dev.js --port 6066",//更改端口号
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...

```

- 在`webpack.config.dev.js`中进行修改,

```javascript

    ...
    devServer:{
        port:9000,//更改监听的端口号，默认的端口号是8080
    }
    ...

```

上面提供的两种更改端口号的方法你可以根据个人喜好来用，个人比较喜欢第二种，和 `devServer`字段放在 一起比较好管理哈（后期这个字段会增加内容的，详情请接着往下看哦）

5.实现热加载


在开发的过程中，文件的变化的话，应该带来浏览器的自动刷新，这样就不用手动去刷新浏览器查看效果，加快了开发的效率。

自动刷新页面的话，就要在`webpack.config.js`中添加`.html`的模版了。需要使用到`html-webpack-plugin`。使用的步骤如下：

5.1在控制台通过`npm install html-webpack-plugin --save-dev`

html-webpack-plugin插件，这个插件可以创建html文件，并自动将依赖写入html文件中。

5.2对`webpack.config.dev.js`的内容做下更改：

```javascript

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...
  devServer:{
    port:9000,//端口号
    contentBase:path.join(__dirname,"dist"),//告诉服务器从哪来提供内容
    publicPath:"/"
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'.static/index.html'//大包后的javascript自动绑定到模版中
    })
  ]
  ...
}

```

5.3执行"npm run dev"

在浏览器上打开控制台上面提示的`localhost:9000`访问。修改`istatic/ndex.html`页面自动刷新，修改相关的`src/index.js `,不用刷新就可以查看相关的效果。到这里，webpack先告一段落了咯。

你可以到[这里](./webpack-demo/)查看本webpack文档涉及到的整个项目，感兴趣的话可以将那个项目下载下来，在本地上运行运行哦！:blush:

延伸的内容和本文档有继承和被继承的关系（本文档）延伸的地址[webpack_extend01](./webpack_extend01.md)
