function greetTester(testName, callback) {
    console.log("Start testing!");
    callback();
}

greetTester("Dev", function () {
    console.log("lets start testing!..");
})

console.log("..........");

function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}

runTest("Login Test", function (name, result) {
    console.log(name + "=>" + result);
})

console.log("..........");

