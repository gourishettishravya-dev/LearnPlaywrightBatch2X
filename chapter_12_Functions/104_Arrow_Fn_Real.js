//This is normal function
function validStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is valid");
    }

}
validStatusCode(201);
//This is function as expression
const validStatusCode_Exp = function validStatusCode1(status1) {
    if (status1 >= 200 && status1 <= 300) {
        console.log("Request is valid");
    }
    else {
        console.log("Invalid request")
    }
}
validStatusCode_Exp(213);
//This is Arrow Function
const validStatusCode_Arrow = (status2) => {
    if (status2 >= 200 && status2 <= 300) {
        console.log("Request is valid");
    } else {
        console.log("Invalid");
    }
}

validStatusCode_Arrow(234);