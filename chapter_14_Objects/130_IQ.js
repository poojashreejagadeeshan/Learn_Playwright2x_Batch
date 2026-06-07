const user = {
    name: "pooja",
    age: 30,
    dept: "cse"
}
console.log(user);
console.log(user.name);
console.log(user["age"]);

//Dynamic property access
const key = "age";
console.log(user[key]);

//Adding/modifying properties
user.marks = 95;
user.age = 35;
console.log(user);