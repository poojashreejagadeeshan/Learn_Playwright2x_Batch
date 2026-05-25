function createUniqueJsBasicsTags(tags) {
    const uniqueTags = [...new Set(tags.map(tag => tag.toLowerCase()))];
    return uniqueTags;
}
createUniqueJsBasicsTags([" Smoke ", "smoke", "Regression"])
createUniqueJsBasicsTags(["", " API ", " ", "api"])