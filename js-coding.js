function f(x = 1, y) {
  return [x, y];
}
f();
// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果
console.log(f(undefined, null));
let x = 1;
(function foo(y = x) {
  let x = 2;
  console.log(y);
})();
console.log("————————————————————————");
// 尾递归优化过的 Fibonacci 数列实现如下
function Fibonacci2(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) {
    console.log(ac2);
    return ac2;
  }
  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}

Fibonacci2(999);

/* 原型链 */
function Person() {
  this.name;
}
Person.prototype.say = function () {
  console.log("hello");
};

var person = new Person();

console.log(Person.__proto__, "1");
console.log(Function.prototype, "2");

console.log(Person.prototype.__proto__, "3");
console.log(Object.prototype, "4");

console.log(person.__proto__, "5");
console.log(Person.prototype, "6");

console.log(Person.prototype.constructor);
console.log(Person);

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// 第一个参数是用作“this”的对象
// 其余参数用作函数的参数
const as = add.call(o, 5, 7); // 16
console.log(as);
// 第一个参数是用作“this”的对象
// 第二个参数是一个数组，数组中的两个成员用作函数参数
add.apply(o, [10, 20]); // 34
console.log("---------------------");
/* 使用defineProperty在现有对象上定义 getter */
var o = { a: 0 };
Object.defineProperty(o, "b", {
  get: function () {
    return this.a + 1;
  },
});
console.log(o.b);
var txt = "gsbs|fw tsa";
console.log(txt.split("f"));
console.log("---------------------");
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(all);

function all(total, value, index, array) {
  return total + value;
}
console.log(sum);
console.log("---------------------");
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);
console.log("---------------------");
const obj = {};
Object.defineProperty(obj, "a", {
  set(val) {
    console.log(`开始设置新值:${val}`);
  },
  get() {
    console.log(`开始读取属性`);
    return 1;
  },
  // writable: true,
});
obj.a = 2;
obj.a;
console.log("---------------------");
console.log(new Date().toString());
const time = Date.parse(new Date().toString()) / 1000 / 60 / 60;
console.log(time);
// 异步操作
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, "done");
//   });
// }
// timeout(1000).then((value) => {
//   console.log(value);
// });
console.log("---------------------");
var o = {};
Object.defineProperty(o, "a", { value: 1, enumerable: true });
Object.defineProperty(o, "b", { value: 2, enumerable: false });
Object.defineProperty(o, "c", { value: 3 }); // enumerable 默认为 false
o.d = 4; // 如果使用直接赋值的方式创建对象的属性，则 enumerable 为 true
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (var i in o) {
  console.log(i);
}
console.log(Object.keys(o));
console.log("---------------------");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("你如何看待 Node.js 中文网？", (answer) => {
//   // TODO：将答案记录在数据库中。
//   console.log(`感谢您的宝贵意见：${answer}`);

//   rl.close();
// });
// 执行顺序示例：
console.log("aa"); // 第1步输出 aa
async function test() {
  console.log("bb"); // 第2步输出 bb
  const res = await 222;
  console.log(res); // 第4步输出 222
  console.log("dd"); // 第5步输出 dd
  return res;
}
test().then((res) => console.log(res)); // 第6步输出 222
setTimeout(() => {
  console.log("ff"); // 第7步输出 ff
}, 500);
console.log("cc"); // 第3步输出 cc

let bluebird = require("bluebird");
let fs = require("fs");
let read = bluebird.promisify(fs.readFile);
//await 命令后面的 Promise 对象，运行结果可能是 //rejected，所以最好把 await 命令放在 try...catch 代码块中。

async function r() {
  try {
    let content1 = await read("text.txt", "utf8");
    let content2 = await read(content1, "utf8");
    return content2;
  } catch (e) {
    console.log("err", e);
  }
}

r().then(
  function (data) {
    console.log("data", data);
  },
  function (err) {
    console.log("err1", err);
  }
);
(() => {
  var date = new Date();
  this.year = date.getFullYear();
  this.month = date.getMonth() + 1;
  this.date = date.getDate();
  this.day = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  )[date.getDay()];
  this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  this.minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  this.second =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var currentTime =
    "现在是:" +
    this.year +
    "年" +
    this.month +
    "月" +
    this.date +
    "日 " +
    this.hour +
    ":" +
    this.minute +
    ":" +
    this.second +
    " " +
    this.day;
  console.log(currentTime);
})();
var d = new Date(2019, 5, 0);
console.log(d.getDate());
