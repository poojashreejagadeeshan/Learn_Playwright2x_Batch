//iterate go from one to another
let tests = ["login", "checkout", "logout"];
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("------------");
//or


for (test of tests) {
    console.log(test);
}

console.log("------------");

tests.forEach((tests, index) => {
    console.log(tests, index)
})
