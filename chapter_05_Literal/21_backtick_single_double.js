// 21_backtick_single_double.js
// Difference between single quotes, double quotes, and backticks in JavaScript

// 1. Single Quotes
let singleQuote = 'Hello World';
console.log('Single Quote:', singleQuote);
console.log('Type:', typeof singleQuote); // "string"

// 2. Double Quotes
let doubleQuote = "Hello World";
console.log('Double Quote:', doubleQuote);
console.log('Type:', typeof doubleQuote); // "string"

// 3. Backticks (Template Literals)
let backtick = `Hello World`;
console.log('Backtick:', backtick);
console.log('Type:', typeof backtick); // "string"

// Key Differences:

console.log('\n--- Key Differences ---');

// Using quotes inside strings
let quote1 = "He said 'Hello'"; // Can use single quotes inside double quotes
console.log('Quote1:', quote1);

let quote2 = 'She said "Hi"'; // Can use double quotes inside single quotes
console.log('Quote2:', quote2);

let quote3 = `He said "Hello", she said 'Hi'`; // Can use both inside backticks
console.log('Quote3:', quote3);

// Variable interpolation - ONLY with backticks (Template Literals)
let name = "Alice";
let age = 25;

// Single and Double quotes - NO interpolation
let message1 = 'My name is ' + name + ' and I am ' + age + ' years old';
console.log('\nSingle Quote (concatenation):', message1);

let message2 = "My name is " + name + " and I am " + age + " years old";
console.log('Double Quote (concatenation):', message2);

// Backticks - WITH interpolation using ${} syntax
let message3 = `My name is ${name} and I am ${age} years old`;
console.log('Backtick (interpolation):', message3);

// Multi-line strings - ONLY with backticks
let multiLine1 = 'Line 1\nLine 2\nLine 3'; // Need \n for newlines
console.log('\nSingle Quote (with \\n):', multiLine1);

let multiLine2 = "Line 1\nLine 2\nLine 3"; // Need \n for newlines
console.log('Double Quote (with \\n):', multiLine2);

// Backticks - preserve line breaks
let multiLine3 = `Line 1
Line 2
Line 3`;
console.log('Backtick (multi-line):\n', multiLine3);

// Expressions in backticks
console.log('\n--- Expressions in Backticks ---');
let x = 10;
let y = 20;
console.log(`Sum: ${x + y}`); // 30
console.log(`Product: ${x * y}`); // 200
console.log(`Comparison: ${x > y ? 'x is greater' : 'y is greater'}`); // y is greater

// Summary:
console.log('\n--- Summary ---');
console.log('Single Quotes (\' \'):');
console.log('  - Same functionality as double quotes');
console.log('  - Useful when string contains double quotes');
console.log('  - No variable interpolation');

console.log('\nDouble Quotes (" "):');
console.log('  - Same functionality as single quotes');
console.log('  - Useful when string contains single quotes');
console.log('  - No variable interpolation');

console.log('\nBackticks (` `):');
console.log('  - Supports variable interpolation with ${}');
console.log('  - Supports multi-line strings without \\n');
console.log('  - Supports expressions inside ${}');
console.log('  - Best for dynamic strings and complex text');
