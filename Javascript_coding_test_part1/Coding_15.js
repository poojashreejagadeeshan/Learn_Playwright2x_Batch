function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    return (passed * 2) - (skipped * 2);
}

let g = calculateJsBasicsWeightedScore(5, 2, 1);
console.log(g);

let s = calculateJsBasicsWeightedScore(3, 0, 0);
console.log(s);

// Case 1
// Input: calculateJsBasicsWeightedScore(5, 2, 1)
// Expected: 8

// Case 2
// Input: calculateJsBasicsWeightedScore(3, 0, 0)
// Expected: 6