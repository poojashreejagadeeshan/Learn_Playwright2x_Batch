class Car {
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }

    drive() {
        console.log("i am driving", this.name);
    }
}

let carObj = new Car('Amaze!!');
carObj.drive();

const i10 = new Car("grand is 10");
i10.drive();