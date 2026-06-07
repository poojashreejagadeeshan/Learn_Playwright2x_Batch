function isValidJsBasicsIdentifier(identifier) {
    const regex = /^[a-z][a-zA-Z0-9]*$/;
    return regex.test(identifier);
}
let r = isValidJsBasicsIdentifier(isValidJsBasicsIdentifier("loginButton"));
console.log(r);