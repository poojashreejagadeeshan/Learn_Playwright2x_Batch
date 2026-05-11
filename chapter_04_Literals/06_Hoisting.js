function getstatus() {
    console.log(statusCode);
    var statusCode = 20;
    console.log(statusCode);
}
getstatus();


// In the above code we have declared a variable statusCode with var keyword and assigned it a value
// of 20 when we try to access the var before the decl it will give us undefined coz of hoisting in
//javascript. In js var and func declarations are hoisted to the top of their Scope. 
