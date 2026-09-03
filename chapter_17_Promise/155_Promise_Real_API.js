let apiCall = new Promise(function (resolve, reject) {
    resolve({
        status: 200, body: "User data"
    })
});


//then is alternate name of resolve and catch is alternate name of reject
apiCall.then(function (response) {
    console.log(response.status);

});