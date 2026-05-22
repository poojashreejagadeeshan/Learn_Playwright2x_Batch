let isAttempt = true;
let loginAttempt = 3;
if (loginAttempt === 2) {
    console.log("1 Attempt left before lockout")
}
else if (loginAttempt === 3) {
    console.log("🔒 Account Locked-Contact support")
}
else if (loginAttempt === 0) {
    console.log("Login Successful")
}