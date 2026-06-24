class Student {
    constructor(name, age, phoneno) {
        this.name = name;
        this.age = age;
        this.phoneno = phoneno;
    }

    static name = "shree";
    static mentor = "pramoddutta";

    static display() {
        console.log("Hello, i am the member of this batch");
    }
}

let t1 = new Student("pooja", 30, "8976789567");
let t2 = new Student("shree", 29, "7865349876");

console.log(t1.name);

console.log(Student.name);
console.log(Student.mentor);