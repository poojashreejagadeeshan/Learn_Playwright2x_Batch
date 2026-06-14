function cafe(item, callWhenItemReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log("Finding...4");
    callWhenItemReady();
}

function callWhenItemReady() {
    console.log("Calling 6789056789");
}

// 1. cafe("burger", callWhenItemReady);

cafe("pizza", function () {
    console.log("calling 6789045678");
});

cafe("momoz", () => {
    console.log("hi 6783567899");
});