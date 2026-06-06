let str = "  Hello World! ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());


let msg = "Test:FAIL. Retry:FAIL";
//console.log(msg.replace("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS"));

//concatenation
console.log("Hello" + " " + "World");
console.log("Hello".concat("", "World"));
console.log(`${"Hello"} ${"World"}`);

let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa"));

//splits in form of array
console.log("pass,fail,skip".split(","));

//join
let r = "login_test_fail".split("_").join(" ");
console.log(r);

let parts = ["2024", "04", "08"];
let date = parts.join("-");
console.log(date);
