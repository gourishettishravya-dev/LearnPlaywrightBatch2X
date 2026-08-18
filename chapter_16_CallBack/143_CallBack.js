function print() {
    console.log("Normal Function is called");

}

function placeOrder(ClipboardItem, callback) {
    console.log("Hi, Your order is ready");
    callback();
}

//First way
placeOrder("Pizza", print);

//Second Way
placeOrder("Burger", function () {
    console.log("Anonymous function, fn without name")
});

//Third way- Arrow fn
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});