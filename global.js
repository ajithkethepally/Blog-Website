// console.log(global);

// global.setTimeout(() => {
//   alert("check ur time!!");//alert is not defined
// }, 3000);

global.setTimeout(() => {
  console.log("TimeOut!");
}, 3000);

console.log(__dirname);
console.log(__filename);