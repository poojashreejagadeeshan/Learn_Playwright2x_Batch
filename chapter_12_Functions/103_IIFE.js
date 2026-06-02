(function () {
    console.log("Hi");
})();  //function will be wrapped by itself  and will be executed . this is called IIFE.

(function () {
    // playwright to run the test
})();

(() => {
    console.log("staging environment");
})();