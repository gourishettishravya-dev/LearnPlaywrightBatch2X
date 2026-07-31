const user = { name1: "John", age: 40, city: "NYC" };

//Basic Deconstruction
const { name1, age } = user;
console.log(name1);
console.log(age);

//Rename Variables

const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

//Default values

const { country = "USA" } = user;
console.log(country);

const data = {
    user: {
        name: "john", address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data;
console.log(data.user.address.city);

