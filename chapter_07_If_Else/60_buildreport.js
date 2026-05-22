// Build health report based on percentage of CI tests passed
let build_status = "65%";

// Normalize input: remove '%' and convert to number
let percent = parseFloat(build_status.replace("%", ""));

if (Number.isNaN(percent)) {
    console.log("Invalid build status percentage");
} else if (percent === 100) {
    console.log("🟢 Green Build");
} else if (percent >= 90) {
    console.log("🟡Stable (investigate failures)");
} else if (percent >= 70) {
    console.log("Unstable");
} else {
    console.log("🔴Broken Build (block deployment)");
}
