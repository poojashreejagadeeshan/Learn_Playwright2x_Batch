function runWithLogin(testFn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testFn();
    console.log(`Finished: ${testName} - ${result}`);
    return result;
}
function loginTest() {
    return "pass";
}
function loginTestFailed() {
    return "Fail";
}
runWithLogin(loginTest, "Login Test");
runWithLogin(loginTestFailed, "Dashboard Failed Test");