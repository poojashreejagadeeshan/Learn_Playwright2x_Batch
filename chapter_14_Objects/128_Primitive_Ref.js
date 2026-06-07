//Primitive type
let a = 10;
let b = a;
console.log(b);
b = 99;
console.log(a);
console.log(b);

console.log("--------");

let obj1 = { val: 10 };
let obj2 = obj1;
console.log(obj2.val);
obj2 = { val: 20 };
console.log(obj2.val);
console.log(obj1.val);
