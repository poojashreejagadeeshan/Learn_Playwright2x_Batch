function openBrowser() {
    console.log("Start coding!");
    setTimeout(function () {
        console.log("open your browser!!");
    }, 1000);
}

function goToPage() {
    setTimeout(function () {
        console.log("navigate to page");
    }, 500);
}

function enterCredentials() {
    setTimeout(function () {
        console.log("enter user login credential");
    }, 500);
}

openBrowser("test", function () {
    goToPage();
    enterCredentials();
})

//but this is not correct order should maintain order so use async await function