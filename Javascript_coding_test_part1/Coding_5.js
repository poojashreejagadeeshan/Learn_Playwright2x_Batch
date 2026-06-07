function filterSupportedJsBasicsTopics(topics) {
    return topics.filter(topic => topic.toLowerCase() !== 'unknown').map(topic => topic.toLowerCase());
}
let f = filterSupportedJsBasicsTopics(["NODE", " v8 ", "unknown"])
console.log(f);