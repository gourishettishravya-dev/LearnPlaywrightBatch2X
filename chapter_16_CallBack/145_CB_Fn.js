function cafe(item, callwhenTableidsReady) {
    console.log("Finding table...1");
    console.log("Finding table...2");
    console.log("Finding table...3");
    callwhenTableidsReady();
}

function callwhenTableidsReady() {
    console.log("calling 87898980");

}

cafe("Burger", callwhenTableidsReady);

cafe("Pizza", function () {
    console.log("calling 587878");

})

cafe("Momos", () => {
    console.log("calling 6787898");

});