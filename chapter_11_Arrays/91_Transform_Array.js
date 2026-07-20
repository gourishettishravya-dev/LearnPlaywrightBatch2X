let scores = [25, 64, 76, 58, 89];
//map = transform an array into a new array by applying a function to each element of the original array
let newScores = scores.map(s => s > 70 ? "pass" : "fail");
console.log(newScores);
//filter - create a new array with only the elements that pass a certain condition
let passing = scores.filter(s => s > 70);
console.log(passing);
//reduce - reduce an array to a single value by applying a function to each element of the array
let total = scores.reduce((acc, s) => acc + s, 0);
console.log(total);


//flat-flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());