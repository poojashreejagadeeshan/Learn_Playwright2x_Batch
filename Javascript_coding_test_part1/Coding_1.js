function normalizeJsBasicsLabel(input) {
    const normalized = input.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `js-basic-${normalized}`
}
normalizeJsBasicsLabel(normalizeJsBasicsLabel(" Login Button "));