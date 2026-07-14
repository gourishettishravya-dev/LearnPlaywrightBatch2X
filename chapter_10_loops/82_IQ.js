/*let count = 10;
while (count < 5) {
    console.log(count);
    count++;
}*/

/*let n = 1;
do {
    console.log(n);
}
while (n > 3);*/


/*let side1 = 5;
let side2 = 5;
let side3 = 3;

if ((side1 === side2) && (side1 === side3)) {
    console.log("Equilateral Triangle");
} else if ((side1 === side2) && (side2 != side3)) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Traingle");
}*/

for (let n = 1; n <= 100; n++) {
    if ((n % 3 == 0) && (n % 5 == 0)) {
        console.log("FizzBuzz");
    }
    else if (n % 3 == 0) {
        console.log("Fizz");
    } else if (n % 5 == 0) {
        console.log("Buzz");
    } else
        console.log(n);
}