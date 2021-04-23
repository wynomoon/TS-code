//新建promise
function now() {
  console.log("55");
}
function myAsyn() {
  return new Promise(() => {
    console.log("2");
  });
}
myAsyn().then(now());

// async返回promise
async function hello() {
  return "Hello";
}
hello().then(console.log);
hello().then((value) => console.log(value));
//await
async function helloWorld() {
  let greeting;
  return (greeting = "helloWorld");
}

helloWorld().then(console.log);

// const promise = new Promise(function(resolve, reject) {
//   resolve('ok');
//   throw new Error('test');
// });
// promise
//     .then(function(value) { console.log(value) })
//     .catch(function(error) { console.log(error) });
// ok

/* let user = [];
console.log(user[0]?.addresss); */
console.log("-------------------");
/* 给定一个整数数组 nums 和一个整数目标值 target，
请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 */
var twoSum = function (nums, target) {
  let len = nums.length;
  // 创建 MAP
  const MAP = new Map();
  // 由于第一个元素在它之前一定没有元素与之匹配，所以先存入哈希表
  MAP.set(nums[0], 0);
  for (let i = 1; i < len; i++) {
    // 提取共用
    let other = target - nums[i];
    console.log(MAP.get(other), `i:${i}---${other}`);
    // 判断是否符合条件，返回对应的下标
    if (MAP.get(other) !== undefined) console.log([MAP.get(other), i], "求和");
    // 不符合的存入hash表
    MAP.set(nums[i], i);
  }
};
twoSum([2, 3, 7, 11, 15, 6], 9);
const myMap3 = new Map([
  ["Samsung", "Smart Phone"],
  [2, "Toothpaste"],
  ["Coke", "Soda"],
]);
console.log(myMap3.entries());
console.log("12345" instanceof Object);
