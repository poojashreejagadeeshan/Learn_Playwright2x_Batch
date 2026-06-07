function getJsBasicsKeywordMeaning(keyword) {
    const mean = {
        "NODE": "runtime",
        " v8 ": "engine",
        "npm": "package-manager",
        "not-a-topic": "unknown"


    }
    return mean[keyword];
}

let a = getJsBasicsKeywordMeaning(NODE);
console.log(a);
