//Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

//includes
console.log(url.includes("staging"));
console.log(url.includes("production"));

console.log(url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log(url.endsWith("true"));

//indexOf/lastIndexOf
console.log(url.indexOf("a"));
console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

console.log(url.lastIndexOf("a"));

//search
console.log(url.search(/login/)); //login l started at the index of 28 so output is 28
console.log(url.search(/vwo/));

//        /    / - regex pattern to find within the strings