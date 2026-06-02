const greet1 = (name1) => "Hi " + name1;
let res = greet1("pooja");
console.log(res);

console.log("---------");

const res1 = (num) => num * 2;
console.log(res1(10));

console.log("---------");

const p = name => console.log(name);
p("pj");

// function add(a, b) {
//     return a + b;
// }

//(or)

const add = (a, b) => a + b;
console.log(add(5, 10));

// function say() {
//     console.log("hi");
// } (or)

const say = () => console.log("hello world!");
say();