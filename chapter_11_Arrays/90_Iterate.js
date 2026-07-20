let tests = ["Login", "Checkout", "Search"];
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("___");


for (test of tests) {
    console.log(test);
}

console.log("___");

tests.forEach((test, index) => {
    console.log(test, index);
});

console.log("___");

let students = ["Hanish", "Karthik", "Shravya", "Medhansh"];
for (let student in students) {
    console.log(student, "->", students[student]);
}

console.log("___");

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}