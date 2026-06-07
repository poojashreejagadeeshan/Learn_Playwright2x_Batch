//above are the object declaration
let stud1 = { name: "Amit", age: 78 }
let stud2 = { name: "pramod" }
let stud3 = { name: "Shree", age: 90, phone: 8978568934 };

//JSON declaration

let stud = { "name": "pooja", "age": 67, "dept": "CSE" }

console.log("--------");

let a = { status: "pass" };
//console.log(a.status);
//console.log(a["status"]);

let b = a;
console.log(b.status);

console.log("--------");

b.status = "fail"
// console.log(a.status);
// console.log(a.status);

if (b === a) {
    console.log("true");
}
else {
    console.log("false");
}