## entry文件入口的路径出错


**1.问题描述**

在项目的根目录中新建项目的时候，自己在根目录新建了两个新目录，分别是--"webpack.dev.config.js"和"webpack.prod.config.js"两个文件。
然后自己做项目优化的时候，整合webpack.dev.config.js && webpack.prod.config.js到build文件夹中出错。修改如下：

```javascript
	
	...
    entry:[//string|object|array,起点或者是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行
        '../src/js/index.js',
        '../src/less/index.less',
        '../src/css/index.css'
    ],
    ...

```



**2.解决方案**

因为entry里面的路径是相对于`package.json`的，因为每次进行`npm run dev || npm run build`的时候，执行的是`package.json`文件，入口的路径是以这个文件为根。

```json

  "scripts": {
    "dev": "webpack-dev-server --config ./build/webpack.config.dev.js",
    "build": "webpack --config ./build/webpack.config.prod.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

```

所以，要注重引入的entry路径,要改成下面的这种路径：

```json

	...
    entry:[//string|object|array,起点或者是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行
        './src/js/index.js',
        './src/less/index.less',
        './src/css/index.css'
    ],
    ...

```


