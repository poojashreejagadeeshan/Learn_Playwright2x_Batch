let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("pizza delivered.food is ready");
    }
    else {
        reject("Order cancelled bcoz of rain..")
    }
})

console.log(order);