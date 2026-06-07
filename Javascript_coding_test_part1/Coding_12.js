function createUniqueJsBasicsTags(tags) {
    const uniqueTags = [...new Set(tags.map(tag => tag.toLowerCase()))];
    return uniqueTags;
}
let b = createUniqueJsBasicsTags([" Smoke ", "smoke", "Regression"])
console.log(b);
let s = createUniqueJsBasicsTags(["", " API ", " ", "api"])
console.log(s);