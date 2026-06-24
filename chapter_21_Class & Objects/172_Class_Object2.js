class Person {
    constructor() {
        console.log("I will be created when Obj is created!")
    }
    // Attributes
    name;
    email;
    salary;
    address;

    // Behaviour
    sleep() { }
    eat() { }
    walk() { }


}

let objRef = new Person();
//console.log(objRef);