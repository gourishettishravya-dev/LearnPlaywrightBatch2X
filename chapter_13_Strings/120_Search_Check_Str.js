let url = "https://staging.vwo.com/api/login?retry=true";

//includes
console.log(url.includes("staging"));
console.log(url.includes("production"));

//startsWith/endsWith

url.startsWith("https");//true
url.endsWith("aaa");//false

//indexOf/lastIndexOf

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));

//Search

console.log(url.search("login"));
console.log(url.search(/vwo/));

//regex/- Regular Expression - These are nothing but a patterns that you can find with in the string autometically.

