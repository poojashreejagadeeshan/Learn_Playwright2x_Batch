let a = 10; b = 5; c = 8;
let result = a > b ? (a > c ? "a is greatest" : "c is greatest") : "b is greatest";
console.log(result);

console.log("-------------");

let x = 8; y = 5;
let res = x > y ? " x is greater" : "y is greater";
console.log(res);

console.log("-------------");

let statusCode = 404;
let message = statusCode < 300 ? "success" : statusCode < 400 ? "redirect" : statusCode < 500 ? "Client Error" : "Server Error";
console.log(`status ${statusCode}: ${message}`);