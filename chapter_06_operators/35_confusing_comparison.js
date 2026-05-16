/**
 * 35_confusing_comparison.js
 * 
 * Confusing and Tricky Cases with == (loose equality) vs === (strict equality)
 * Type coercion can lead to unexpected results with ==
 */

console.log("========== CONFUSING == (LOOSE EQUALITY) CASES ==========");

// Case 1: String vs Number (surprising results!)
console.log("\n--- Case 1: String vs Number ---");
console.log("5 == '5':", 5 == '5');           // true (coercion happens!)
console.log("5 === '5':", 5 === '5');         // false (strict - different types)

console.log("0 == '0':", 0 == '0');           // true (string coerced to number)
console.log("0 === '0':", 0 === '0');         // false

// Case 2: Boolean coercion (very confusing!)
console.log("\n--- Case 2: Boolean Coercion ---");
console.log("true == 1:", true == 1);         // true (true converts to 1)
console.log("true === 1:", true === 1);       // false (different types)
console.log("false == 0:", false == 0);       // true (false converts to 0)
console.log("false === 0:", false === 0);     // false

console.log("true == '1':", true == '1');     // true (multiple coercions!)
console.log("false == '':", false == '');     // true (tricky!)
console.log("false == '0':", false == '0');   // true (confusing!)

// Case 3: null and undefined (weird behavior)
console.log("\n--- Case 3: null vs undefined ---");
console.log("null == undefined:", null == undefined);     // true (special case!)
console.log("null === undefined:", null === undefined);   // false (different types)
console.log("null == 0:", null == 0);                     // false
console.log("undefined == 0:", undefined == 0);           // false
console.log("null == false:", null == false);             // false
console.log("undefined == false:", undefined == false);   // false

// Case 4: Empty string confusion
console.log("\n--- Case 4: Empty String Confusion ---");
console.log("'' == 0:", '' == 0);             // true (empty string coerced to 0)
console.log("'' == false:", '' == false);     // true (empty string is falsy)
console.log("'' === 0:", '' === 0);           // false
console.log("'' === false:", '' === false);   // false

// Case 5: Arrays and Objects (very tricky!)
console.log("\n--- Case 5: Arrays and Objects ---");
console.log("[1] == 1:", [1] == 1);           // true (array coerced to number!)
console.log("[1] === 1:", [1] === 1);         // false
console.log("[] == 0:", [] == 0);             // true (empty array coerced to 0)
console.log("[] === 0:", [] === 0);           // false
console.log("[] == '':", [] == '');           // true (both falsy)
console.log("[] == false:", [] == false);     // true

// Case 6: The Weird Ones (gotchas!)
console.log("\n--- Case 6: The Weird Ones ---");
console.log("'0' == 0:", '0' == 0);           // true
console.log("'0' == false:", '0' == false);   // true (confusing!)
console.log("'\\n' == 0:", '\n' == 0);        // true (whitespace coerced)
console.log("'  ' == 0:", '  ' == 0);         // true (spaces coerced)

// Case 7: Object comparison (always references)
console.log("\n--- Case 7: Object Reference Comparison ---");
let obj1 = { value: 5 };
let obj2 = { value: 5 };
let obj3 = obj1;

console.log("obj1 == obj2:", obj1 == obj2);   // false (different objects)
console.log("obj1 === obj2:", obj1 === obj2); // false (different objects)
console.log("obj1 == obj3:", obj1 == obj3);   // true (same reference)
console.log("obj1 === obj3:", obj1 === obj3); // true (same reference)

// Case 8: NaN (special case)
console.log("\n--- Case 8: NaN (special case) ---");
console.log("NaN == NaN:", NaN == NaN);       // false
console.log("NaN === NaN:", NaN === NaN);     // false
console.log("isNaN(NaN):", isNaN(NaN));       // true (correct way to check)

console.log("\n========== WHY USE === ? ==========");
console.log("\n✓ Use === (strict equality) ALWAYS because:");
console.log("  1. No unexpected type coercion");
console.log("  2. More predictable and safer");
console.log("  3. Better performance (no coercion overhead)");
console.log("  4. Professional coding standard");
console.log("  5. Prevents hard-to-debug issues");

console.log("\n✗ Avoid == unless you specifically need coercion");
console.log("  (which is almost never in modern JavaScript)");

console.log("\n========== COMPARISON CHEAT SHEET ==========");
console.log("5 == '5'         → true  (coercion)");
console.log("5 === '5'        → false (strict)");
console.log("true == 1        → true  (coercion)");
console.log("true === 1       → false (strict)");
console.log("null == undefined    → true  (special)");
console.log("null === undefined   → false (strict)");
console.log("[] == ''         → true  (coercion)");
console.log("[] === ''        → false (strict)");
