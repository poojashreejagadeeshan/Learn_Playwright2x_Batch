function summarizeJsBasicsResults(results) {
    const summary = {
        total: results.length,
        passed: 0,
        failed: 0,
        skipped: 0
    };
    results.forEach(result => {
        if (result.endsWith("-pass")) summary.passed++;
        else if (result.endsWith("-fail")) summary.failed++;
        else if (result.endsWith("-skip")) summary.skipped++;
    });
    return summary;
}

let result = summarizeJsBasicsResults(["login-pass", "api-fail", "profile-skip"]);
console.log(result);

// Input: summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"])

// Expected: {"total":3,"passed":1,"failed":1,"skipped":1}