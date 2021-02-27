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
console.log(new Date().toString())
const time = Date.parse(new Date().toString()) / 1000 / 60 / 60;
console.log(time);
