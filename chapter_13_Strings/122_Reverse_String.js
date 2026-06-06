//Using builtin function

let str = "madam";
let s = str.split('').reverse().join('');
if (str === s) {
    console.log("palindrome program");
}
else {
    console.log("Not a palindrome program");
}

console.log("------------");

let string = "mom";
let revString = "";
for (let i = string.length - 1; i >= 0; i--) {
    revString += string[i];
}
console.log(revString);