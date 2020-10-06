
$(document).ready(function () {
    //create 5 people, console

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

    //create 5 people, console using ES6 methods
    class Person {
        constructor(name, city, age) {
            this.name = name;
            this.city = city;
            this.age = age;
        }
        personGreeting() {
            console.log(`Hey! My name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}`);
        }
    };
    let p1 = new Person('Linc', 'Birmingham', 34);
    let p2 = new Person('Samantha', 'Huntsville', 30);
    let p3 = new Person('Holley', 'Fort Collins', 31);
    let p4 = new Person('Amy', 'Homewood', 35);
    let p5 = new Person('Henry', 'Vestavia', 0);
    p1.personGreeting();
    p2.personGreeting();
    p3.personGreeting();
    p4.personGreeting();
    p5.personGreeting();


    //inheritence drills
    class Vehicle {
        constructor(name, manufacturer, wheels) {
            this.name = name;
            this.manufacturer = manufacturer;
            this.wheels = wheels;
        }
        aboutVehicle() {
            console.log(`The ${this.name} is made by ${this.manufacturer} and has ${this.wheels} wheels.`);
        }
    };

    class Truck extends Vehicle {
        constructor(name, manufacturer, wheels, doors, truckbed) {
            super(name, manufacturer, wheels);
            this.doors = doors;
            this.truckbed = truckbed;
        }
            aboutVehicle() {
                console.log(`The ${this.name} is made by ${this.manufacturer}, has ${this.wheels} wheels, ${this.doors} doors, and has a truckbed.`)
            }
        }
    

    class Sedan extends Vehicle {
        constructor(name, manufacturer, wheels, doors, size, mpg) {
            super(name, manufacturer, wheels);
            this.doors = doors;
            this.size = size;
            this.mpg = mpg;
        }
        aboutVehicle() {
            console.log(`The ${this.name} is made by ${this.manufacturer}, has ${this.wheels} wheels, ${this.doors} doors, is ${this.size} sized, and gets ${this.mpg} miles per gallon.`)
        }
    };

    class Motorcycle extends Vehicle {
        constructor(name, manufacturer, wheels, handlebars, doors) {
            super(name, manufacturer, wheels);
            this.handlebars = handlebars;
            this.doors = doors;
        }
        aboutVehicle() {
            console.log(`The ${this.name} is made by ${this.manufacturer}, has ${this.wheels} wheels, ${this.handlebars} and no steering wheel, and has ${this.doors} doors.`);
        }
    }

let f150 = new Truck('F150', 'Ford', 4, 4, true);
let forte = new Sedan('Forte', 'Kia', 4, 4, 'small', 24);
let ninja = new Motorcycle('Ninja', 'Kawasaki', 2, 'handlebars', 'no');
f150.aboutVehicle();
forte.aboutVehicle();
ninja.aboutVehicle();


    //end of body
});