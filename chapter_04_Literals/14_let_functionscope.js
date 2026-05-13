var b = 40;
console.log(b);

function world() {
    console.log("Hello world");
    var b = 20;
    console.log(b);
    if (true) {
        var b = 30;
        console.log(b);
    }
    console.log("F=>", b)
}
console.log("D=>", b);
world();

// In the above code we have declared a variable b with var keyword and assigned it a value of 40.
