// Arrow Function (ES6)


const greet = function (name) { // Normal Fn
    return name;
}

let r = greet("Shravya");
console.log(r);

const greet1 = (name1) => name1; //Arror Fn
let r1 = greet1("Karthik");
console.log(r1);

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Shravya");

function sum(a, b) {
    return a + b;
}

const sum2 = (a, b) => a + b;

function say() {
    console.log("Hi");
}
say();
const say1 = () => console.log("Hi");
say1();

const greet2 = (name) => {
    const message = "Hi " + name;
    return message;
}
let nm = greet2("Hanish");
console.log(nm);