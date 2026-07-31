let str1 = "are";
let str2 = "ear";
if (str1.length != str2.length) {
    console.log("String are not Anagrams");
}

let str3 = str1.toLowerCase().split("").sort().join("");
let str4 = str2.toLowerCase().split("").sort().join("");

if (str3 === str4) {
    console.log("Strings are Anagrams");
}
