let x = 404;
if (x === 200 && x < 299) {
    console.log("Success");
}
else if (x === 300 || x < 399) {
    console.log("Redirection");
}
else if (x === 400 || x < 499) {
    console.log("Client error")
}
else if (x === 500 || x < 599) {
    console.log("Server Error")
}
else {
    console.log("Invalid");
}

console.log("-----------");

let y = 200;
if (y === 200 || y < 299) {
    console.log("Success");
}
else if (y === 300 || y < 399) {
    console.log("Redirection");
}
else if (y === 400 || y < 499) {
    console.log("Client error")
}
else if (y === 500 || y < 599) {
    console.log("Server Error")
}
else if (y === 600) {
    console.log("Invalid");
}