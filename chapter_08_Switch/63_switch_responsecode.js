let responseCode = 404;
switch (responseCode) {
    case 200:
        console.log("200 OK");
        break;
    case 404:
        console.log("404 not found!");
        break;
    default:
        console.log("No status code match found");
}