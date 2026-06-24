class Credentials {
    user;  //public
    #apiKey;   //private key

    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }

    shreegetCredentials() {
        return "Bearer" + this.#apiKey;
    }
}

let cred = new Credentials("Test", "secret_key_2345");
console.log(cred.user);

const token = cred.shreegetCredentials();
console.log(token);

//console.log(cred.apiKey);
//console.log(cred.#apiKey); //Private field '#apiKey' must be declared in an enclosing class