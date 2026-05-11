var a = 10;
console.log(a);

function Hello() {
    console.log("Hello js");
    var a = 20; // local variable will have the highest scope
    console.log(a);
}
Hello();

//-----------------------------

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
world();