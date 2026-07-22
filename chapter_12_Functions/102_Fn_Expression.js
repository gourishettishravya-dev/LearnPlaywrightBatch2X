//Functions as expression.
const greet = function (sname) //We are giving constant here becuase function name won't be changed..We can also give let, It works
{
    return `Hello, ${sname}`;
}
let r = greet("Shravya");
console.log(r);