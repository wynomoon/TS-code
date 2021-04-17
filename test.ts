/* 枚举 */
enum Color {
  Red,
  Green,
  Blue,
}

/* 变量类型 */
console.log("--------------------");
let c: Color = Color.Blue;
let x: number = 3;
x = 2;
console.log(c, x);
var str = "1";
var str2 = (<any>str) as number;
console.log(str2);
var num = 2; // 类型推断为 number
console.log("num 变量的值为 " + num);
num = 12;
console.log(num);

/* 变量作用域 */
console.log("--------------------");
var global_num = 12; // 全局变量
class Numbers {
  num_val = 13; // 实例变量
  static sval = 10; // 静态变量
  storeNum(): void {
    var local_num = 14; // 局部变量
  }
}
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("实例变量: " + obj.num_val);

/* 剩余参数 */
console.log("--------------------");
function addNumbers(...nums: number[]) {
  var sum: number = 0;
  for (let index = 0; index < nums.length; index++) {
    sum = sum + nums[index];
  }
  console.log("和为:", sum);
}
addNumbers(1, 2, 3, 4, 5, 6, 100);

/* 递归函数 */
console.log("--------------------");
function factorial(number) {
  if (number <= 0) {
    // 停止执行
    return 1;
  } else {
    return number * factorial(number - 1); // 调用自身
  }
}
console.log(factorial(6)); // 输出 720
console.log("--------------------");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
/* 类的继承 */
console.log("--------------------");
class PrinterClass {
  doPrint(): void {
    console.log("父类的 doPrint() 方法。");
  }
}

class StringPrinter extends PrinterClass {
  doPrint(): void {
    super.doPrint(); // 调用父类的函数
    console.log("子类的 doPrint()方法。");
  }
}
var wtf = new StringPrinter();
wtf.doPrint();
/* 泛型 */
function loggingIdetity<T>(arg: T[]): T[] {
  console.log(arg.length, "什么");
  return arg;
}
loggingIdetity([1, 2, 3]);
