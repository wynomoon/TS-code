//新建promise
function now(params) {
  console.log("55");
}
function myAsyn(params) {
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
  return (greeting = await Promise.resolve("helloWorld"));
}

helloWorld().then(console.log);
