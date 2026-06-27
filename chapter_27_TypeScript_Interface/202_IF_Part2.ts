interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;

}

let response1: APIResponse = {
    body: 'Hi',
    responseTime: 200,
};
console.log("Response->" + response1.body + ": " + response1.responseTime);

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
};