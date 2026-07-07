let x = 2000
if ((x % 4 === 0 && x % 100 !== 0) || (x % 400 === 0)) {
    console.log(x + " is a leap year")
}
else {
    console.log(x + " is not a leap year")
}