function openBrowser() {
    return new Promise((resolve) => {
        resolve("Browser opened..")
    })
}

function goToLogin() {
    return new Promise((resolve) => {
        resolve("Login page loaded..")
    })
}

function enterCredentials() {
    return new Promise((resolve) => {
        resolve("Credentials entered..")
    })
}

function clickLogin() {
    return new Promise((resolve) => {
        resolve("Login done successfully..")
    })
}

async function runE2E() {
    let msg1 = await openBrowser();
    console.log("Step 1: ", msg1);

    let msg2 = await goToLogin();
    console.log("Step 2: ", msg2);

    let msg3 = await enterCredentials();
    console.log("Step 3: ", msg3);

    let msg4 = await clickLogin();
    console.log("Step 4: ", msg4);
}

runE2E();