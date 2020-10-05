
$(document).ready(function () {


// let p1 = {
//     name: 'Linc',
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// let p2 = {
//     name: 'Sam',
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// let p3 = {
//     name: 'Holley',
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// let p4 = {
//     name: 'Amy',
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// let p5 = {
//     name: 'Henry',
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();

class Person {
    constructor (name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}
personGreeting () {
    console.log(`Hey! My name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}`);
}
};
let p1 = new Person ('Linc', 'Birmingham', 34);
let p2 = new Person ('Samantha', 'Huntsville', 30);
let p3 = new Person ('Holley', 'Fort Collins', 31);
let p4 = new Person ('Amy', 'Homewood', 35);
let p5 = new Person ('Henry', 'Vestavia', 0);
p1.personGreeting();
p2.personGreeting();
p3.personGreeting();
p4.personGreeting();
p5.personGreeting();




//end of body
});