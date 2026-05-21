let rajKumar_age = 18;
let rajKumar_will_go_goa = rajKumar_age > 18 ? "will go to goa" : "will not go to goa";
console.log(rajKumar_will_go_goa);

console.log("----------------");

let rajKumar_will_go_to_goa = rajKumar_age >= 18 ? "will go to goa" : "will not go to goa";
console.log(rajKumar_will_go_to_goa);

console.log("----------------");

let actual_statuscode = 200;
let expected_statuscode = 200;
let status = actual_statuscode === expected_statuscode ? "Pass" : "Fail";
console.log(status);

console.log("----------------");

let environment = "staging";
let baseUrl = environment === "prod" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);


console.log("----------------");

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log(browserMode);

console.log("----------------");

let responseTime = 850;
let sla = 1000;
let perfStatus = responseTime <= sla ? "within SLA" : "SLA breached";
console.log(perfStatus);