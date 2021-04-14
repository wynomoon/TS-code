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
let user = [];
console.log(user[0]?.addresss);
