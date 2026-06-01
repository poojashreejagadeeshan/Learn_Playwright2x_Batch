let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 2)); // 0 starts from index so index of 0 is 1 here and 2 is index of 2 - 1 its 2

console.log(arr.slice(1, 4)); // index of 1 is 2 and index of 4 - 1 is 3. index of 3 is having 3 values so its [2,3,4] 

console.log(arr.slice(2, 4)); // index of 2 is 3 and index of 4 - 1 is 3. index of 3 is having only 1 value so 4. so its [3,4]

console.log(arr.slice(2));

// starting from index 2 and enmd is not specified so its  [3,4,5]

