var a = 10;
console.log(a);

function Hello() {
    console.log("Hello js");
    var a = 20; // local variable will have the highest scope
    console.log(a);
}
Hello();

