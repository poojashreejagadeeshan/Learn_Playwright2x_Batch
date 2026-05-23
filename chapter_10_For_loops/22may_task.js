let triangle_a = 20;
let triangle_b = 20;
let triangle_c = 20;

if (triangle_a === triangle_b || triangle_b === triangle_c || triangle_c === triangle_a) {
    console.log("This is an Equilateral triangle....")
}
else {
    console.log("No Triangle");
}

console.log("---------------");

let triangle_e = 20;
let triangle_f = 20;
let triangle_g = 25;

if (triangle_e === triangle_f && triangle_f !== triangle_g && triangle_g !== triangle_e) {
    console.log("This is an Isosceles triangle....")
}
else {
    console.log("No Triangle");
}

console.log("---------------");

let triangle_x = 20;
let triangle_y = 25;
let triangle_z = 30;

if (triangle_x !== triangle_y && triangle_y !== triangle_z && triangle_z !== triangle_x) {
    console.log("This is an scalene triangle....")
}
else {
    console.log("No Triangle");
}

