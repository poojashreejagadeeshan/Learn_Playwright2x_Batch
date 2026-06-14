function print() {
    console.log("Normal function is called");
}

function placeOrder(item, callback) {
    console.log("Hi, your order is placed!");
    callback();
}

//three ways to callback func

//first way

placeOrder("pizza", print);

//secopnd way

placeOrder("burger", function () {
    console.log("Hi, your order is placed!");
});

//third way

placeOrder("burger", () => {
    console.log("Hi, your order is placed!");
});
