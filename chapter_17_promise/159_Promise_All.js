let checkAuth = Promise.resolve("auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all(["checkAuth", "checkDB", "checkCache"]).then(function (results) {
    console.log("All the checks are Fine..")
})

// Promise.all([
//     Promise.resolve("Ok"),
//     Promise.resolve("Db down"),
//     Promise.resolve("Ok")
// ]).then(function (r) {
//     console.log(r);
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log("Done");
// })

// //if any one condition is failed it will send error
// Promise.all([
//     Promise.resolve("Ok"),
//     Promise.reject("Db down"),
//     Promise.resolve("Ok")
// ]).then(function (r) {
//     console.log(r);
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log("Done");
// })

// rarely used in automation. but if u have to consolidate results us ethis method
Promise.allSettled([
    Promise.resolve("Test A passed"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test c passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test" + (i + 1) + ": ", r.status, "-", r.value || r.reason);
    })
})