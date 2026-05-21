if ("hello") console.log("String is truthy");
if (42) console.log("Number is truthy");
if ({}) console.log("object is truthy");
if ([]) console.log("array is truthy");
if (0) console.log("No print");
if ("") console.log("No print");
if (null) console.log("No print");
if (undefined) console.log("No print");
if (NaN) console.log("No print");

console.log("------------------");

let name = undefined;
if (name) {
    console.log("Hi");
}
else {
    console.log("Bye");
}