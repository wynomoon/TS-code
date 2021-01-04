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
