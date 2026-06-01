let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
console.log(c);

console.log("-------------");

// ... is the spread operator used to expand the elements of an array.

let d = [...a, ...b];  // ... a includes all elem of a & ...b includes all elem of b 
console.log(d);


console.log("-------------");

let s = ["pass", "fail", "skip", "pass"].join("");
console.log(s);

