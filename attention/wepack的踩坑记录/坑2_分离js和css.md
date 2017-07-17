## 分离js和css

- 问题描述

在进行对项目转移到生产环境的时候，也就是在配置好路径进行`npm run build `的过程中，生成的ouput文件*.js。现在是要将这个*.js分离成为js在js文件夹中的.js文件中，而css(包括less|sass)在css的文件夹中。实现下面如下面的目录：

```

- dist
    - images
        - .png|.jpg ...
    - fonts
        - .woff|.woff2 ...
    - css
        - .css
    - js
        - .js
    - index.html
    
```

要做成上面的这样的目录结构，在 `entry` 和 `output` 中添加的内容仅仅是能够将所有的文件（.js|.css|.less|.sass）生成为一个在`output`中生成的.js文件中。现在的目录情况是:

```

- dist
    - images
        - .png|.jpg ...
    - fonts
        - .woff|.woff2 ...
    - js
        - buddle.js(名字根据自己的定义输出)
    - index.html
    
```

- 问题解决方案

[参考链接](https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/)    

使用webpack的插件：`extract-text-webpack-plugin`，这个插件的作用是--从 bundle（这里的bundle可以理解为我刚才output中命名的bundle.js） 中提取文本（CSS）到分离的文件（app.bundle.css）

关于这个插件的使用方法就不再这里给出来了，你可以移步[extract-text-webpack-plugin链接查看](https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/)
