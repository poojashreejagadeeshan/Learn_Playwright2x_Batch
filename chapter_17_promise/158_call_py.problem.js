function openBrowser() {
    return new Promise(function (resolve) {
        resolve("open the browser");
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    })
}

function enterCredentials() {
    return new Promise(function (reject) {
        reject("credentials entered");
    })
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("click login");
    })
}

openBrowser().then(function (msg) {
    console.log("step 1..", msg);
    return goToLogin();
}).then(function (msg) {
    console.log("step 2..", msg);
    return enterCredentials();
}).then(function (msg) {
    console.log("step 3..", msg);
    return clickLogin();
}).catch(function (error) {
    console.log("error");
}).finally(function () {
    console.log("Done successfully..");
})