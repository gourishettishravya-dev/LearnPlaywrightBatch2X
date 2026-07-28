function runWithLoggin(testFn, testName) {
    let result = testFn();
    console.log(result);
    // return result;

}
function loginTest() {
    return "pass";
}
function loginTestFail() {
    return "Fail";
}
runWithLoggin(loginTest, "Login Test");
runWithLoggin(loginTestFail, "Dashboard failed Test");
