function calculatePassRate(total, passed) {
    return ((passed / total) * 1000).toFixed(2);
}
console.log(calculatePassRate(10, 7));

//impure func
function isPassing(score) {
    return score >= threshold;
}
let threshold = 70;
console.log(isPassing(threshold));

let threshold1 = 40;
console.log(isPassing(threshold1));