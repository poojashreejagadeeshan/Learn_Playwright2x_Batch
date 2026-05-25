function countPassingJsBasicsChecks(tasks) {
    return tasks.filter(task => task.endsWith("-pass")).length;
}
countPassingJsBasicsChecks(["login-pass", "api-fail", "logout-pass"])