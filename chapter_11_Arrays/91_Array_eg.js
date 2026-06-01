let fruits = ["apple", "banana", "strawberry"];
console.log(fruits);

let num = [1, 8, 6, 9];
num.sort();
console.log(num);

let num1 = [1, 10, 2, 20];
num1.sort((a, b) => (a - b));   //sorts in ascending order
console.log(num1);

num1.sort((a, b) => (b - a));
console.log(num1)   // sorts in descending order


