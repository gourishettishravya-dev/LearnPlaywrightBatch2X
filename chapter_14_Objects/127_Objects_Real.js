let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.testName = "login test";

console.log(config);

delete config.browser;// we can delete a key also
console.log(config);

if (config.browser === "Chrome") {
    console.log("I will execute the test case");
}