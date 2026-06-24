class TestCase {
    constructor(name, status, property) {
        this.name = name;
        this.status = status;
        this.property = property;
    }

    display() {
        console.log(this.name + "->" + this.status + "->" + this.property);
    }
}

function f1() {

}

let sam1 = new TestCase('shree', 'p0', 'T1');
let sam2 = new TestCase('smitha', 'pass', 'T2');

sam1.display();