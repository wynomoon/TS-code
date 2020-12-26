var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* 枚举 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
/* 变量类型 */
console.log("--------------------");
var c = Color.Blue;
var x = 3;
x = 2;
console.log(c, x);
var str = "1";
var str2 = str;
console.log(str2);
var num = 2; // 类型推断为 number
console.log("num 变量的值为 " + num);
num = 12;
console.log(num);
/* 变量作用域 */
console.log("--------------------");
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("实例变量: " + obj.num_val);
/* 剩余参数 */
console.log("--------------------");
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var index = 0; index < nums.length; index++) {
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
    }
    else {
        return number * factorial(number - 1); // 调用自身
    }
}
console.log(factorial(6)); // 输出 720
console.log("--------------------");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
/* 类的继承 */
console.log("--------------------");
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("父类的 doPrint() 方法。");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); // 调用父类的函数
        console.log("子类的 doPrint()方法。");
    };
    return StringPrinter;
}(PrinterClass));
var wtf = new StringPrinter();
wtf.doPrint();
