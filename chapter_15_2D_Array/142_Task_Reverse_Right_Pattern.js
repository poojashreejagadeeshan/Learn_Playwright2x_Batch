// Reverse Right pattern

for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}

console.log("----------------");

// pyramid patten

let b = 5;

for (let s = 1; s <= b; s++) {
    let row = '';
    for (let t = 1; t <= s; t++) {
        row += '*';
    }
    console.log(row.trim());
}