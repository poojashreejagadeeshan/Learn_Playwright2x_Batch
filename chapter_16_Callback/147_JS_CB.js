console.log("Test 1 : started");   // synchronous

setTimeout(function () {
    console.log("Test 2 : API execution started")    //Asynchronous
}, 2000);

console.log("Test 3 : Test executed");   // synchronous



// when the test exe starts Test 1 & 3 will exe first then after 2secs Test 2 will exe