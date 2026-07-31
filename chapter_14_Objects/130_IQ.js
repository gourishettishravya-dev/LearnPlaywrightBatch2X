const user = {
    name: "John",
    age: 40,
    email: "abc@temail.com"
};
console.log(user);
console.log(user.name);
console.log(user["age"]);

//Dynamic property access

const key = "age";
console.log(user[key]);

//Adding/Modifying properties

user.city = "NYC";
user.age = 31;
console.log(user);

let obj = { name: "login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));