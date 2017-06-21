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

console.log("reng");

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

经过上面的三个步骤之后，你可以打开`static`下面的文件`index.html`，并在浏览器上运行。结果是；`在浏览器的控制台下面看到 "reng" 的文字`。

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

完成上面的内容之后，就在控制台可以执行`npm run dev`的指令，这样的执行跟在控制台上面执行`webpack --config webpack.config.dev.js`得到的结果一模一样的了。很是神奇是吧，熟悉node开发的人应该知道这个`npm run dev`哈。

4.页面更改为本地(localhost)执行

细心的人儿应该发现了在浏览器上面浏览的地址是酱紫的呢--`file:///Users/reng/Desktop/webpack-demo/static/index.html`。如果我们要发给同一个局域网的人看（在团队项目中开发好的东西还是得让人家设计啊验证一下子的啦），那咋办呢。这就使用到了`webpack-dev-server`了呢。

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