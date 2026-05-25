function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
    if (hasSetup && hasPractice && hasNotes) {
        return "READY";
    }
    else {
        return "BLOCKED";
    }
}

// Case 1
// Input: checkJsBasicsReadinessGate(true, true, true)
// Expected: "READY"

// Case 2
// Input: checkJsBasicsReadinessGate(true, false, true)
// Expected: "BLOCKED"