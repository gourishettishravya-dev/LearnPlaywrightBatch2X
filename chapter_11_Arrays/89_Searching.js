let results = ["pass", "fail", "pass", "error", "fail"];

console.log(results.indexOf("fail"));
console.log(results.indexOf("skip"));

console.log(results.lastIndexOf("fail"));

console.log(results.includes("error"));
console.log(results.includes("skip"));

let num = [10, 38, 48, 88];
let x = num.find(x => x > 40);//38,48,88
console.log(x);

let n = num.findIndex(n => n > 20);
console.log(n);

let m = num.findLast(m => m > 20);
console.log(m);

let a = num.findLastIndex(a => a > 20);
console.log(a);
