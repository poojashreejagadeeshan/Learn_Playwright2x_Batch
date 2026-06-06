console.log((200).toString());
console.log(true.toString());
console.log(Number("42"));
console.log(parseInt("42px"));
console.log(parseFloat("3.14rem"));

let str = "pooja";
let str1 = str.split('').reverse().join('');
if (str === str1) {
    console.log("given string is a palindrome");
}
else {
    console.log("Not a palindrome");
}