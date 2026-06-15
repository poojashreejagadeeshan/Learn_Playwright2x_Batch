// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// });

// p.then(function (value) {
//     console.log("Answer:", value)
// })

// console.log("-----------------")

// let r = new Promise(function (resolve, reject) {
//     reject("Something broke");
// });

// r.catch(function (error) {
//     console.log("Caught:", error);
// })

// console.log("-----------------")

// let c = Promise.resolve(6);

// c.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("result:", val)
// })

// console.log("-----------------")


// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     }).then(function (val) {
//         console.log(val);
//         return val + 1;
//     }).then(function (val) {
//         console.log(val);
//     })

// console.log("-----------------")

// Promise.resolve("start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("Broke at step 2");
//     })
//     .then(function () {
//         console.log("This will not run");
//     })
//     .catch(function (err) {
//         console.log("Caught:", err.message)
//     })
// console.log("-----------------")

// Promise.resolve("Test failed")
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (err) {
//         console.log("Error:", err);
//     })
//     .finally(function () {
//         console.log("Test block executed!!");
//     })

// console.log("-----------------")


// Promise.resolve("Quick win").then(function (msg) {
//     console.log(msg)
// })

// Promise.reject("Quick lose").catch(function (msg) {
//     console.log(msg)
// })

// console.log("-----------------")

// let t1 = Promise.resolve("Login: PASS");
// let t2 = Promise.resolve("Search: PASS");
// let t3 = Promise.resolve("Logout: PASS");

// Promise.all([t1, t2, t3]).then(function (msg) {
//     console.log(msg);
// })

// console.log("-----------------")

// Promise.allSettled([
//     Promise.resolve("API 200"),
//     Promise.reject("API 500"),
//     Promise.resolve("API 201")
// ]).then(function (results) {
//     results.forEach(function (r) {
//         let val = r.status === "fulfilled" ? r.value : r.reason;
//         console.log(r.status + "=>" + val);
//     })
// })

// console.log("-----------------")

let t1 = Promise.resolve("pass");
let t2 = Promise.reject("fail");
let t3 = Promise.resolve("pass")
Promise.all([t1, t2, t3]).then(function (r) {
    console.log("All:", r);
}).catch(function (err) {
    console.log("Error:", err);
})

