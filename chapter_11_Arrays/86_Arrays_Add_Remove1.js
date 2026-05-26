let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.push(6);
console.log(arr);

//splice(start,deleteCount,...itemsToAdd)
arr.splice(3, 1);  // 3 is the starting number index and 1 is the count of no to remove
console.log(arr);

//3 is the index, 0 means no number to delete , 99 will be replced in place of index 3
//arr.splice(3, 0, 99);
//console.log(arr);

// arr.splice(3, 1, 99);
// console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);