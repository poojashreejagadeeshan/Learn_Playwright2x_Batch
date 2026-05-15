function getstatus() {
    console.log(statusCode);
    var statusCode = 20;
    console.log(statusCode);
}
getstatus();


// In the above code we have declared a variable statusCode with var keyword and assigned it a value
// of 20 when we try to access the var before the decl it will give us undefined coz of hoisting in
//javascript. In js var and func declarations are hoisted to the top of their Scope. 
//------------------------------

console.log(k);
let k = 0;

// if var is not initialized before printing in 'let' it will gives us a reference error.

//------------------------------

let x = "global";
if (true) {
    console.log(x);
    let x = "block";
    console.log(x);
}

//ReferenceError: Cannot access 'x' before initialization