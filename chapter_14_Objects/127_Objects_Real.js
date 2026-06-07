let config = {};
config.browser = "chrome";
config.timeout = 3000;
config.testName = "login test";

console.log(config);

if (config.browser === 'chrome') {
    console.log('I will execute my TC');
}

// delete config.browser;
// console.log(config);

console.log("--------")

let config1 = {
    browser: "firefox",
    timeout: 2000,
    testName: "dashboard test"
};

console.log(config1);