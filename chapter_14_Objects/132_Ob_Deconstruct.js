const user = { name: "abc", age: 40, marks: 89 };

const { name, marks } = user; //deconstruct the objects
console.log(name);
console.log(marks);
//console.log(age);  // age is not defined in deconstruction so its refrence error

console.log("----------");


//rename variables
const { name: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

//default values
const { country = "USA" } = user;
console.log(country);

console.log("--------");

const data = {
    user:
    {
        name: "john", address: {
            city: "NYC"
        }
    }
};

const { user: { name: { address } } } = data;
console.log(data.user);

