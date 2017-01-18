// // 这里是引入了node的模块
// const http = require("http");
//
// // 创建服务器
// const server = http.createServer((req,res)=>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/plain');
//   res.end('reng jia');
// });
//
// // 监听启动服务器
// server.listen(3000,"127.0.0.1",()=>{
//   console.log("this is the project");
// })
let a = new Set();
// 集合是没有重复的数值的
[2,1,2,3,4,2,1].map(x=>a.add(x));
for(let i of a){
  console.log(i);
}
console.log(`the size of the a is ${a.size}.`);//这里是类似length，是关于这个集合的长度
console.log(typeof a);//这里的集合就是一个对象的数据类型
console.log('test of the let of');
let s =[7,8,9];
for(let i of s){
  console.log(i);
}
console.log("-------------------");

function divs(){
  console.log("this is the query");
  let set = new Set([1,2,3,41,1,2,3]);
  console.log([...set]);
}
divs();

let reng=[1,32,2];
console.log(reng);

console.log('the other knowledge');
let jia = new Set([1,2,3]);
console.log(jia.size);



function notRepeat(array){
  return Array.from(new Set(array));
}
console.log(notRepeat([4,5,4,5,3,4,5]));//这里有一个函数的提升

console.log('this is for each');
let setEach = new Set([8,2,3]);
setEach.forEach((value,key)=>{
  console.log(value*key);//注意，这里的key和index的值是一样的
})

console.log("this is the test about ...");
let seta = new Set([1,2,3]);
  setb = new Set([...seta].map(val=>val*2));//注意，这里的 map 是对每个数组的值进行的，不是对每个一个对象，所以，这里的【...seta】不能改成seta,[...seta] 是将对象转换成了数组
console.log(setb);

console.log('perfect index and value');
let m = new Map();
var o = {p:'reng',l:'jia'};
m.set(1,'rengjia');
console.log(m.get(1));
console.log('Set,weakSet,Map');













//
