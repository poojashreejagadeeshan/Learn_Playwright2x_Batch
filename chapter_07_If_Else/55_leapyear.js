let x = 2023;
if ((x % 4 === 0 && x % 100 !== 0) || x % 400 === 0) {
    console.log("x is leap year")
}
else {
    console.log("x is not a leap year")
}

// year should be divisible by 4 or 400 and should not divisible by 100 this is condition for leap year