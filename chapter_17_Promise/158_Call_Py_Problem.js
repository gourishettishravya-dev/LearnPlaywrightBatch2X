function openbrowser() {
    return new Promise(function (resolve) {
        //Code to open the browser
        resolve("open the browser")

    });

}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login Page Load")
    });

}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered")
    });
}

function clicktoLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully")
    });
}

openbrowser().then(function (msg) {
    console.log("Step 1:", msg);
    return goToLogin();
}).then(function (msg) {
    console.log("Step 2:", msg);
    return enterCredentials();
}).then(function (msg) {
    console.log("Step 3:", msg);
    return clicktoLogin();
}).then(function (msg) {
    console.log("Step 5:", msg);

}).catch(function (error) {
    console.log(error);

}).finally(function () {
    console.log("Done execution.");

});