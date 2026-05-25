function isValidJsBasicsIdentifier(identifier) {
    const regex = /^[a-z][a-zA-Z0-9]*$/;
    return regex.test(identifier);
}
isValidJsBasicsIdentifier(isValidJsBasicsIdentifier("loginButton"));