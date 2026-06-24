class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    addition(x, y) {
        return x + y;
    }

    subtraction(x, y) {
        return x - y;
    }

    multiplication(x, y) {
        return x * y;
    }

    division(x, y) {
        return x / y;
    }
}

let sum = new Calculator();
console.log("Addition of two nos: ", sum.addition(10, 5));
console.log("Subtraction of two nos: ", sum.subtraction(10, 5));
console.log("Multiplication of two nos: ", sum.multiplication(10, 5));
console.log("Division of two nos :", sum.division(10, 5));





