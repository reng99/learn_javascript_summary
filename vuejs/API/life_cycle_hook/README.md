> 前言

所有的生命周期钩子自动绑定`this`上下文到实例中，因此可以访问数据，对属性和方法进行运算。这意味着**你不能够使用箭头函数来定义一个生命周期方法**(例如`created:()=>this.fetchTodos()`)。这是因为箭头函数绑定了父上下文，因此`this`与你期待的Vue实例不同,`this.fetchTodos`的行为未定义。

> 目录

- [beforeCreate](./before_create.md)




> 生命周期图

![vue_life_cycle](./images/lifecycle.png)