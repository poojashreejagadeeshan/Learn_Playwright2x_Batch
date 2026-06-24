class Students {

    static name = "swetha";
    static age = "25";

    constructor(name, course, age) {
        this.name = name;
        this.course = course;
        this.age = age;
    }

    printStudentDetails() {
        console.log(`I am the existing member of the class: ${this.name},${this.course}, ${this.age}`);
    }

    static m1() {
        console.log(`I am the new member of the class: ${this.name}`);
    }

}

//printing static variable
Students.m1();

console.log("------------");

//printing all non static variables
let s1 = new Students('abi', 'playwright', 35);
s1.printStudentDetails();

let s2 = new Students('priya', 'playwright', 25);
s2.printStudentDetails();

let s3 = new Students('kavya', 'playwright', 26);
s3.printStudentDetails();

let s4 = new Students('raj', 'playwright', 24);
s4.printStudentDetails();

let s5 = new Students('kumar', 'playwright', 26);
s5.printStudentDetails();

let s6 = new Students('abi', 'playwright', 23);
s6.printStudentDetails();

let s7 = new Students('abi', 'playwright', 33);
s7.printStudentDetails();

let s8 = new Students('abi', 'playwright', 32);
s8.printStudentDetails();

let s9 = new Students('abi', 'playwright', 36);
s9.printStudentDetails();

let s10 = new Students('abi', 'playwright', 35);
s10.printStudentDetails();
