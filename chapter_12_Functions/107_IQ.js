function statusCode(code) {
    if (code >= 20 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "client Error";
    if (code >= 500) return "Server Error"
}

let s = statusCode(400);
console.log(s);

console.log("--------");

function sResult(name) {
    console.log(`Running: ${name}`);
}

let u = sResult("Login");
console.log(u);