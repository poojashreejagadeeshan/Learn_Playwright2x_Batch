function summarizeJSBasicsMatrix(matrix) {
    let total = 0;
    let passed = 0;
    let failed = 0;
    let failedCases = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let status = matrix[i][j];
            total++;

            if (status.includes("pass")) {
                passed++;
            }
            else if (status.includes("fail")) {
                failed++;
                failedCases.push(status);
            }
        }
    }
    return {
        total: total,
        passed: passed,
        failed: failed,
        failedCases: failedCases
    };
}

let d = summarizeJSBasicsMatrix(["login-pass", "api-fail", "profile-skip"]);
console.log(d);