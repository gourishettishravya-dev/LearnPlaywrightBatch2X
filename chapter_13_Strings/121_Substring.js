let str = "Login_Test_Pass_001";
//slice(start, end)-negetive indexes supported
console.log(str.slice(0, 5));
console.log(str.slice(11));

let testNumber = str.slice(-3);
console.log(testNumber);

//substring(start, end)--no negetives treats as 0
console.log(str.substring(0, 4));