let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser);

// browser.pop();
// console.log(browser);

// let removed = browser.shift();
// console.log(removed);
// console.log(browser);  (or)

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log('Opera is removed from the list')
    }
}
