let testingstatus = "pending";
if (testingstatus === "pending") {
    let executiontime = 1200;
    console.log("Inside block", executiontime);
}
console.log(executiontime);

//error displayed because execution time is declared inside the block and it is not
// accessible outside the block.



