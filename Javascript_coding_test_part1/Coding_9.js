function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {

    return `${suiteName} | ${environment.toLowerCase()} | build-${buildNumber}`;
}


let f = buildJsBasicsRunLabel("Regression", "PROD", 7);
console.log(f);

let s = buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42);
console.log(s);