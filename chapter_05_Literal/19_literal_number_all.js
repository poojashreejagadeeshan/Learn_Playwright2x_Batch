// 19_literal_number_all.js
// All number types supported in JavaScript

// 1. Integer
let integer = 42;
console.log('Integer:', integer);
console.log('Type:', typeof integer); // "number"

// 2. Negative Integer
let negativeInteger = -10;
console.log('Negative Integer:', negativeInteger);

// 3. Float/Decimal
let floatNumber = 3.14;
console.log('Float:', floatNumber);

// 4. Negative Float
let negativeFloat = -2.5;
console.log('Negative Float:', negativeFloat);

// 5. Scientific Notation (Exponential)
let scientificNotation = 1.5e2; // 1.5 * 10^2 = 150
console.log('Scientific Notation (1.5e2):', scientificNotation);

let scientificSmall = 1.5e-2; // 1.5 * 10^-2 = 0.015
console.log('Scientific Notation (1.5e-2):', scientificSmall);

// 6. Infinity
let positiveInfinity = Infinity;
console.log('Positive Infinity:', positiveInfinity);
console.log('Type:', typeof positiveInfinity); // "number"

let negativeInfinity = -Infinity;
console.log('Negative Infinity:', negativeInfinity);

// 7. NaN (Not-a-Number)
let notANumber = NaN;
console.log('NaN:', notANumber);
console.log('Type:', typeof notANumber); // "number" (quirk: NaN is a number type!)

// NaN from invalid operations
let invalidOperation = 0 / 0;
console.log('0 / 0:', invalidOperation); // NaN

// 8. Zero
let zero = 0;
console.log('Zero:', zero);

let negativeZero = -0;
console.log('Negative Zero:', negativeZero);
console.log('0 === -0:', 0 === -0); // true

// 9. Very large numbers
let largeNumber = 999999999999999;
console.log('Large Number:', largeNumber);

// 10. Hexadecimal
let hexNumber = 0xFF; // 255
console.log('Hexadecimal (0xFF):', hexNumber);

// 11. Octal
let octalNumber = 0o10; // 8
console.log('Octal (0o10):', octalNumber);

// 12. Binary
let binaryNumber = 0b1010; // 10
console.log('Binary (0b1010):', binaryNumber);

// 13. BigInt (for very large integers beyond Number.MAX_SAFE_INTEGER)
let bigInteger = 1234567890123456789n;
console.log('BigInt:', bigInteger);
console.log('Type:', typeof bigInteger); // "bigint"

// Arithmetic with numbers
console.log('\n--- Arithmetic Operations ---');
console.log('10 + 20:', 10 + 20); // 30
console.log('10 - 5:', 10 - 5); // 5
console.log('10 * 3:', 10 * 3); // 30
console.log('10 / 2:', 10 / 2); // 5
console.log('10 % 3:', 10 % 3); // 1

// Division by zero
console.log('\n--- Special Cases ---');
console.log('5 / 0:', 5 / 0); // Infinity
console.log('-5 / 0:', -5 / 0); // -Infinity
console.log('NaN == NaN:', NaN == NaN); // false (NaN is not equal to itself!)
console.log('isNaN(NaN):', isNaN(NaN)); // true (use this to check for NaN)
