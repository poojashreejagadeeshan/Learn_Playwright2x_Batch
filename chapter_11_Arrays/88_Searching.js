let results = ["pass", "fail", "pass", "error", "fail"];
console.log(results.indexOf("pass"));
console.log(results.indexOf("skip")); //-1 coz its not in laist

// console.log(results.lastIndexOf("fail")); // 4

// //includes - returns boolean 
// console.log(results.includes("pass")); //true
// console.log(results.includes("skip")); //false

// //find - returns the first matching element
let nums = [10, 25, 30, 45];
console.log(nums.find(x => x > 20)); // 25,30,45

//find index
console.log(nums.findIndex(n => n > 20));
console.log(nums.findLastIndex(n => n > 20));
console.log(nums.findLast(n => n > 20));

