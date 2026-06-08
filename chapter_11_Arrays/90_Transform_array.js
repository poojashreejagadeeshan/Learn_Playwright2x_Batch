let scores = [45, 82, 91, 65, 74];

//map - transform every elem, return a new array
let grades = scores.map(s => s > 70 ? "pass" : "fail");
console.log(grades);

//filter - pkeeps the elem that passes test
let passing = scores.filter(s => s > 70);
console.log(passing);

//reduce - accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0); // reduce is to add everything to single value. 0 is the starting index i.e )45
console.log(total);

//flat - flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat())