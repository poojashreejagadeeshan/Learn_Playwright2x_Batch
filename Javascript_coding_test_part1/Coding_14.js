function buildJsBasicsChecklist(items) {
    return items.map((item, index) => {
        return `${index + 1}, ${item} - TODO`;
    });
}

let r = buildJsBasicsChecklist(["Install Node", "Create GitHub repo"]);
console.log(r);

let t = buildJsBasicsChecklist(["Practice switch", " ", "Push code"]);
console.log(t);


// Case 1
// Input: buildJsBasicsChecklist(["Install Node","Create GitHub repo"])
// Expected: ["1. Install Node - TODO","2. Create GitHub repo - TODO"]

// Case 2
// Input: buildJsBasicsChecklist(["Practice switch"," ","Push code"])
// Expected: ["1. Practice switch - TODO","2. Push code - TODO"]