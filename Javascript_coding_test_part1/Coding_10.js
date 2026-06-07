function findFirstCriticalJsBasicsBug(bugs) {
    const criticalBug = bugs.find(bug => bug.severity === 'Critical');

    return criticalBug ? criticalBug.title : null;
}

let s = findFirstCriticalJsBasicsBug([{ "title": "Spacing issue", "severity": "low" }]);
console.log(s);
let r = findFirstCriticalJsBasicsBug([{ "title": "Typo", "severity": "low" }, { "title": "Login crash", "severity": "critical" }]);
console.log(r);