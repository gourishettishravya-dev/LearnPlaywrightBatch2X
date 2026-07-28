function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}
console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));

//Impure Function--Depends on external state

function isPassing(score) {
    return score >= threshold;
}
let threshold = 70;
console.log(isPassing(threshold));
threshold = 50;
console.log(isPassing(threshold));

