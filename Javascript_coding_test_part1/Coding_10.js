function findFirstCriticalJsBasicsBug(bugs) {
    const criticalBug = bugs.find(bug => bug.severity === 'Critical');

    return criticalBug ? criticalBug.title : null;
}

findFirstCriticalJsBasicsBug([{ "title": "Spacing issue", "severity": "low" }]);
findFirstCriticalJsBasicsBug([{ "title": "Typo", "severity": "low" }, { "title": "Login crash", "severity": "critical" }])