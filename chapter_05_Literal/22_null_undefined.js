// 17_null_undefined.js
// Difference between null and undefined in JavaScript

// undefined means a variable has been declared but not assigned a value.
let a;
console.log('a:', a); // undefined
console.log('type of a:', typeof a); // "undefined"

// null is an assignment value that means "no value" or "empty".
let b = null;
console.log('b:', b); // null
console.log('type of b:', typeof b); // "object" (this is a known JavaScript quirk)

// Example of using null intentionally
function getUserName(user) {
    if (!user) {
        return null; // no user found
    }
    return user.name;
}

console.log('getUserName(null):', getUserName(null)); // null
console.log('getUserName(undefined):', getUserName(undefined)); // null

// Comparison behavior
console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false

// Summary:
// - undefined: variable exists but no value assigned yet.
// - null: variable has been assigned "no value" intentionally.
