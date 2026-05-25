function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {

    return `${suiteName} | ${environment.toLowerCase()} | build-${buildNumber}`;
}

buildJsBasicsRunLabel("Regression", "PROD", 7);
buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)