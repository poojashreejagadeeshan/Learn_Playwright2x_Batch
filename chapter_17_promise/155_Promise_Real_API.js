let apiCall = new Promise(function (resolve, reject) {
    resolve({ status: "Pass", body: "User data" })
})

apiCall.then(function (response) {
    console.log(response);
    console.log(response.status);
})