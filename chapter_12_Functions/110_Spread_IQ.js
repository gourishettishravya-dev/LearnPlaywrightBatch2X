function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3];
let s = add(...num);
console.log(s);

let responseCodes = [200, 201, 404];
function hasError(...codes) {
    return codes.some(c => c >= 400);
}
hasError(...responseCodes);//true
