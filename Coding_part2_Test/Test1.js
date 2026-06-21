// Write your solution here
function handleStatus(statusCode) {
    let message;
    switch (statusCode) {
        case 200:
            message = "PASS - OK: Request successful";
            break;
        case 201:
            message = "PASS - Created: Resource created successfully";
            break;
        case 300:
            message = "WARNING - Moved Permanently: URL has changed";
            break;
        case 400:
            message = "FAIL - Bad Request: Check request payload";
            break;
        case 401:
            message = "FAIL - Unauthorized: Check auth token";
            break;
        case 403:
            message = "FAIL - Forbidden: Insufficient permissions";
            break;
        case 404:
            message = "FAIL - Not Found: Check endpoint URL";
            break;
        default:
            message = "UNKNOWN - Unhandled status code";
            break;
    }
    return message;
}
let result = handleStatus(401);
console.log(result);