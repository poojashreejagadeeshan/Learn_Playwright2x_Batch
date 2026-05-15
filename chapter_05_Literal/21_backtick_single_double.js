// singlequotes.js
// Difference between single quotes, double quotes, and backticks in JavaScript

// 1. Single Quotes
let singleQuote = 'Hello World';
console.log('Single Quote:', singleQuote);
console.log('Type:', typeof singleQuote); // "string"


// Key Differences:

console.log('\n--- Key Differences ---');

// Using quotes inside strings
let quote1 = "He said 'Hello'"; // Can use single quotes inside double quotes
console.log('Quote1:', quote1);

let quote3 = `He said "Hello", she said 'Hi'`; // Can use both inside backticks
console.log('Quote3:', quote3);

// Variable interpolation - ONLY with backticks (Template Literals)
let name = "Alice";
let age = 25;

// Single and Double quotes - NO interpolation
let message1 = 'My name is ' + name + ' and I am ' + age + ' years old';
console.log('\nSingle Quote (concatenation):', message1);



