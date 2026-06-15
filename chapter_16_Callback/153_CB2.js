let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + " : " + bug);
})

console.log("Total bugs : " + bugs.length);