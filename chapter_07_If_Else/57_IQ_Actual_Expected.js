let expected = "Login successful";
let actual = "Login successful"

if (actual === expected) {
    console.log("✅Test Passed")
}
else {
    console.log("Login failed")
}


console.log("---------------")

let a_expected = "Login successful"
let a_actual = "Invalid credentials"

if (a_actual === a_expected) {
    console.log("Login success")
}
else {
    console.log("❌ Test failed - Expect: Login Successful but got invalid credentials")
}


