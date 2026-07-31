let str = "hanish";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];

}
console.log("Reverse of a given string is", rev);

if (rev.toLowerCase() === str.toLowerCase()) {
    console.log("Given string is polindrom")
}
else {
    console.log("Givem string is not a Polindrom");
}