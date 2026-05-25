function filterSupportedJsBasicsTopics(topics) {
    return topics.filter(topic => topic.toLowerCase() !== 'unknown').map(topic => topic.toLowerCase());
}
filterSupportedJsBasicsTopics(["NODE", " v8 ", "unknown"])