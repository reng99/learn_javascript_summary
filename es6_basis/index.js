window.onload=function(){

  console.log("----------how to use the 'let' and 'const'-------------");
  // 增加块级的作用域
  var flag=true;
  if(flag){
    // console.log(block);这不许变量的提升，先声明后使用
    let block = "reng";
    // let block = "jia"; //不可重复声明
    block = "jia";//可以重写
    console.log(block);
  }
  // console.log(block);//这里将报错,block is not defined

  // const 是声明常量，也是具有块级作用域
  // 但是，不能进行变量的提升
  const constant = 10;
  // const constant =20;//不能够重复进行声明
  // constant = 20;//也不能进行相关的重写   顾名思义-->常量
  console.log(constant);

  console.log("\n----------how to use the 'includes()' 'starstWith()' and 'endsWith()'-------------");
  // 上面的这几种的字符串的方法比较好理解，语义化
  // 第一个是包含，第二个是以什么开始，第三个是以什么结尾,是存在的话返回true,否则就是返回false
  let reng = "try your best";
  console.log(reng.includes("try"));//返回true
  console.log(reng.startsWith("try"));//返回true
  console.log(reng.endsWith("best"));//返回true
  // 当然，这里可以使用第二个参数，第二个参数是表示从第几个位置开始
  //例如
  console.log(reng.includes("try",0));//返回true
  console.log(reng.startsWith("try",2));//返回false
  console.log(reng.endsWith("best",1));//返回false


  console.log("\n----------how to use the 'repeat()'-------------");
  // 传一个参数，表示原来的字符串的重复的次数
  let repeatStr = "reng";
  console.log(repeatStr.repeat(2));

  console.log("\n----------how to use the templete string-------------");
  // 提供的模板相当于在编辑器中预览格式
  let name = `my
              name is reng`;
  console.log(name);

  console.log("\n----------how to use the numbers-------------");
  // 判断一个字符是否是非无穷 Number.isFinite()
  console.log(Number.isFinite(1));//输出true
  // 判断一个数值是否是整数
  // 语义化Number.isInteger
  console.log(Number.isInteger(1.5));//输出false

  console.log("\n----------how to use the array-------------");
  // 使用 Array.from 将一个类数组对象转换成数组
  let lis = document.querySelectorAll("li");
  Array.from(lis).forEach(function(li){
    console.log(li);
  })
  //from 可以传递第二个参数，用于对数组的单个的数据进行处理
  console.log(Array.from([1,2,3],(n)=>(n+1)));//执行时候回变成数组 [2,3,4]

  //Array.of()是将一组值转换成数组
  console.log(Array.of(1,2,3));//输出的结果为 [1,2,3]

  // Array 中的find()是寻找数组中第一个符合条件的数据
  console.log([1,2,3,4,59,11].find((n)=>(n>6)));//输出59

  // 填充数组，一般是用来初始化空数组 fill()
  let fillArray = ['a','b','c'].fill("reng");
  for(let i =0;i<fillArray.length;i++){
    console.log(fillArray[i]);//输出三个reng
  }

  // 使用提供的 Array.keys()  Array.values()   Array.entries()
  for(let index of ['reng','jia'].keys()){
    console.log(index);
  }
  // for(let value of ['reng','jia'].values()){
  //   console.log(value);
  // }
  for(let [index,value] of ["reng","jia"].entries()){
    console.log(index+'-'+value);
  }

  console.log("\n----------how to use the object-------------");
  // 使用对象的分配的方法（assign），将原对象复制到目标对象，至少需要传递两个参数，第一个是目标对象，第二个一下都是原对象，必须是对象，不然会报错
  // Symbol 是一个原始的数据类型，表示独一无二的ID
  // 代理的对象 Proxy()    参考网址：http://www.hubwiz.com/class/5594e91ac086935f4a6fb8ef

  // the next page will show another part
