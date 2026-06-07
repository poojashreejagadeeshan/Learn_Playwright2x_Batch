function mergeJsBasicsConfig(defaultConfig, overrideConfig) {

    return {
        ...defaultConfig, ...overrideConfig
    };
}

let res = mergeJsBasicsConfig({ "retries": 1, "env": "dev" }, { "retries": 3 });
console.log(res);

// Case 1
// Input: mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})

// Expected: {"retries":3,"env":"dev"}