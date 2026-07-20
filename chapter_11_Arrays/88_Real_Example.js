let browser = ['chrome', 'safari', 'edge', 'firefox', 'opera'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let removed = browser.shift()
console.log(browser);
console.log(removed);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "edge") {
        console.log("edge is removed from the selenium");

    }
}

