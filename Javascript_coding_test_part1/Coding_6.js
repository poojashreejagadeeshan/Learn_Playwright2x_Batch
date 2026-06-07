function countPassingJsBasicsChecks(tasks) {
    return tasks.filter(task => task.endsWith("-pass")).length;
}
let u = countPassingJsBasicsChecks(["login-pass", "api-fail", "logout-pass"])
console.log(u);