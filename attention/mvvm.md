## mvvm

> 下面是来自维基百科的翻译  [原文](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)

### MVVM(Model-view-viewmodel)

`Model-view-viewmodel(MVVM)`是一个软件的框架。
MVVM促使了分离图形用户界面的开发--通过它可以标记语言或者是图形用户界面（GUI）代码--这些代码是来自业务逻辑或者是后台逻辑（the data model）的开发。这MVVM中的视图模型（viewmodel）相当于一个控制器，这就意味着视图模型层（viewmodel）有着显示（控制）管理和显示对象的模型层（model）数据对象的使命。从这方面讲，视图模型层更像模型层而不是视图层，如果并非视图层的展示逻辑会处理的较多。视图模型充当一个中介模式，组织获取具有视图用例集合的后台逻辑。

<img src="./assets/imgs/mvvm-img01.png">

MVVM是由martin Flowler[表现模型](https://martinfowler.com/eaaDev/PresentationModel.html)设计模型的一种变体。MVVM用同种方法抽象了一个视图的数据和行为，但是表现模型抽象出一个不依赖具体的用户接口模式的视图模型。
MVVM模型和表现模式都是由模式-视图-控制器模式(MVC)去驱动的。
MVVM是由微软的设计师Ken Cooper 和 Ted Peter为了简化用户接口的事件驱动编程。而用这些户接口是通过使用Windows Presentation Foundation (WPF) (微软的.net图形系统)和Silverlight （WPF互联网的派生程序）.John Gossman 微软中一个WPF 和 
Silverlight 的设计师，2005年的时候在他的博客里面发布了MVVM。
模型-视图-视图模型 也被认为是 模型-视图-粘合剂。特别是在实施中，而不是包含在.net中。ZK（一个使用Java编写的web程序框架）和 KnockoutJS(一个JavaScript库)都是使用了模型-视图-粘合剂（也就是MVVM）。


### 内容（目录）

[1 MVVM框架的组成](#components)

[2 逻辑依据](#rational)

[3 缺点](#criticism)


<a id="components"></a>
MVVM框架的组成

> Model

	模型也可以解析成区域模型，它呈现出真正的数据内容(趋向面向对象)，或者说是数据获取层，它呈现出内容（趋向以数据为中心）

> View

	正如在MVC和 [MVP](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter)模型，视图是结构，布局，和用户在屏幕上所看到的呈现。

> View model

	视图模型是视图层展示出来的公共属性和指令的一种抽象。相比于MVC中的控制层或者MVP模型中的推荐者,MVVM中则有粘合剂。在视图模型中，粘合剂在数据层（View）和数据绑定(model层)起到调解交流的作用。视图模型描述数据在模型层的状态。

> Binder

	说明性数据和命令绑定默认包含在MVVM模式中。在微软的解决方案堆中，这粘合剂就是一个标志性语言，叫做[XAML](https://en.wikipedia.org/wiki/Extensible_Application_Markup_Language)，这粘合剂将开发者从遵循写陈旧腐朽的逻辑去同步视图模型和视图总解放出来。当加入了微软的堆栈外部，展示公开的数据绑定技术是模式程序的关键。


<a id="rational"></a>
逻辑依据

MVVM被设计出来是为了使用WPF中的数据绑定的功能,更好的从平台的其他部分分离出视图层的开发，通过从视图层中虚拟的移除全部的GUI代码。它们使用标记语言（比如XAML）并且创造在视图模型层中实现数据的绑定，开发者可以编写并且维护，替代了需要用户体验（UX）开发者去编写代码。这些角色的分离允许交互设计师专注在UX需求上，而不是编写事物逻辑。一个应用的层级可以因此被用在多任务流中为更高的生产率而被开发。即使是一个开发者在整个编程中工作，只要编程是基于从模型层中分离出来的视图层，这样更加有效率，正如典型的频繁改变用户接口和基于后端用户回调的开发圈。
MVVM模式尝试去获得MVC提供的功能开发分离的好处，与此同时，尽可能的放大数据绑定和趋向纯应用模型框架的好处。它是使用了粘合剂，视图模型，和任何逻辑层数据，只要是检查特性去验证传进来的数据。结果是模型和尽可能是可操作的框架。排除或者压缩直接操作视图层的应用逻辑。

<a id="criticism"></a>
缺点（评价）
一个模式的缺点是来自MVVM创造者John Gossman自己，他指出在应用MVVM对简单的UI操作上过头了。他声明在大型的应用上声明推广视图模型变得更加困难。此外，他指出在大的应用程序中使用数据绑定可能造成很大的内存消耗的结果。





















