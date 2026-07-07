if ("hello") console.log("String is truthy");
if (20) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy");
if ([]) console.log("Empty array is also truthy");
if ("") console.log("Won't print")
if (null) console.log("won't print");
if (undefined) console.log("won't print");
if (NaN) console.log("won't print");
if (0) comsole.log("won't print");

let name = undefined;
if (name) {
    console.log("Hi")
} else {
    console.log("Bye")
}