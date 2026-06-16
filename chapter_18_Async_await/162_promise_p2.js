function getToken() {
    return Promise.resolve("helloo pj!!");
}

async function run() {
    let token = await getToken();
    console.log(token);
}

run();

//whenever there is a function that returns a promise we need to use await.