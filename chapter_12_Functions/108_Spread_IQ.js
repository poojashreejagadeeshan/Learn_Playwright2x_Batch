function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
console.log(add(...num));

console.log(".........");

let respCode = [200, 201, 401];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
console.log(hasError(...respCode));