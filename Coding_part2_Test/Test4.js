// Element property checker for QA actions
// States: READY, DISABLED, HIDDEN, NOT FOUND
// Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good)

function evaluateElement(isPresent, isDisplayed, isEnabled) {
    const state = (isPresent === false) ? 'NOT FOUND'
        : (isDisplayed === false) ? 'HIDDEN'
            : (isEnabled === false) ? 'DISABLED' : 'READY';

    const severity = (isPresent === false)
        ? 'CRITICAL'
        : (isDisplayed === false || isEnabled === false)
            ? 'WARNING' : 'OK';

    let action;
    if (state === 'NOT FOUND') {
        action = 'Check selector, network, or page load; capture DOM snapshot and console logs.';
    } else if (state === 'HIDDEN') {
        action = 'Inspect CSS/visibility, modal dialogs, or timing; consider explicit waits.';
    } else if (state === 'DISABLED') {
        action = 'Verify element state, prerequisites, or enable flow before interacting.';
    } else if (state === 'READY') {
        action = 'Element ready — proceed with interaction in test.';
    } else {
        action = 'Unexpected state — collect diagnostics.';
    }

    console.log(`State: ${state} | Severity: ${severity} | Action: ${action}`);
    return { state, severity, action };
}

// Example usage
const examples = [
    { isPresent: true, isDisplayed: true, isEnabled: false },   // DISABLED
];

examples.forEach((ex, i) => {
    console.log(`\nExample ${i + 1}:`, ex);
    evaluateElement(ex.isPresent, ex.isDisplayed, ex.isEnabled);
});


