//Objects
//Key and value

let student = { name: "Shravya", age: 30 };
let student1 = { name: "Hanish", age: 10 };

//Key will not be in double qoutes
//below key in double is actualli Json
let Json_student2 = { "name": "Hanish", "age": 10 };

let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status);

if (b === a) {
    console.log("true");
}
else {
    console.log("false");
}