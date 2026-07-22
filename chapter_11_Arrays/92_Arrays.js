let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let number = [3, 5, 1, 2];
console.log(number.sort());

let nums = [43, 3, 5, 50];
console.log(nums.sort());
//Natural sorting or Lexicographic sorting
nums.sort((a, b) => a - b);//Ascending
console.log(nums);
nums.sort((a, b) => b - a);
console.log(nums);