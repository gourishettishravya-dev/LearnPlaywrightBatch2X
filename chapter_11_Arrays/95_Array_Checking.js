//Check if something is array or not
let result = Array.isArray([1, 2, 3]);
console.log(result);

let result1 = Array.isArray("a");
console.log(result1);

// every & some
[35, 56, 66].every(s => s > 70);// true
[35, 56, 76].every(s => s > 70); //false

//Playwright API

let n = [200, 201, 203].every(statuscode => statuscode >= 200);
console.log(n);

// some=atleast one must pass
[35, 56, 66].some(s => s > 70);// true
[35, 56, 76].some(s => s > 70); //true

