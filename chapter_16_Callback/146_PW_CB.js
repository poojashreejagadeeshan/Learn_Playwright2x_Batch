function test(testName, callback) {
    console.log("hi, how are you!");
    callback();
}

//playwright test

import { test } from "@playwright/test";
test('verify test', () => {
    //playwright code
})

//above test is already added in package by someone so we neednot write callback function in playwright
//we simply import and use