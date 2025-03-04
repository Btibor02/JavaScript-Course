// ! JavaScript Objects - Episode 37

/*const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 24,
    isEmployed: true,
    sayHello: function(){
        console.log("Hi!")
    },
}

console.log(person1.firstName);
person.sayHello();*/

// ! THIS - Episode 38

// ? reference to the object where THIS is used
// ? person.name = this.name

/*const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    favFood: "hamburger",
    sayHello: function(){
        console.log(`Hi!, I am ${this.firstName}`)
    },
}

person.sayHello();*/

// ! Constructors - Episode 39

/*function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make);

const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

console.log(car2.model);*/

// ! Classes - Episode 40

/*class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
}

const product1 = new Product("Shirt", 19.99);
const product = new Product("Pants", 14.99);

product1.displayProduct();*/

// ! STATIC keyword - Episode 41

// ? static = keyword that defines properties or methods 
// ?            that belong to a class itself rather than 
// ?            the object created from that class

/*class MathUtil{
    static PI = 3.14;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(25));
console.log(MathUtil.getCircumference(10));*/

// ! Inheritence - Episode 42

/*class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    static name = "rabbit";
}

class Fish extends Animal{
    static name = "fish";
    swim(){
        console.log(`${this.name} is swimming`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive);
fish.eat();

fish.alive = false;

fish.swim();*/

// ! SUPER keyword - Episode 43

// ? super = used in classes to call the constructor 
// ?            or access the properties and methods of a parent

/*class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(runSpeed){
        super(name, age);
        this.runSpeed = runSpeed
    }
}

class Fish extends Animal{
    constructor(swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish= new Fish("fish", 2, 12);*/

// ! Getter & Setters - Episode 44

// ? getter = special method that makes a property readable
// ? setter = special method that makes a property writeable

/*class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight
        } else {
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(4, 5);

console.log(rectangle.width);
console.log(rectangle.area);

rectangle.width = 10;
rectangle.height = 6;

console.log(rectangle.width);*/

// ! Destructuring - Episode 45

// ? destructuring = extract values from arrays and objects, 
// ?                then assign them to variables in a convenient way
// ?                [] = to perform array destructuring
// ?                {} = to perform object destructuring

/*let a = 1;
let b = 2;

[a, b] = [b, a]; // a = 2, b = 1

const colors = ["red", "green", "blue", "black", "white"]; // swap 2 elements

[colors[0], colors[4]] = [colors[4], colors[0]];


const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor); // white
console.log(extraColors); // "black", "white"

//Extract values from object
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 24,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 30,
}

const {firstName, lastName, age, job} = person1;

console.log(firstName); // Spongebob

const {firstName1, lastName1, age1, job1="Unemployed"} = person2; //default value

//Descturcture in function parameters

function displayPerson({firstName, lastName, age, job}) {
    console.log(firstName);
}

displayPerson(person1);*/

// ! Nested objects - Episode 46

// ? nested objects = objects inside other objects

/*const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 24,
    job: "Fry Cook",
    address: {
        street: "124 Teszt",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}

console.log(person.address.city);

for(const property in person.address){
    console.log(person.address[property]);
}

class Person{
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Teszt", 30, 
    "124 Teszt St.", "Bikini Bottom", "Int. Waters");*/


// ! Arrays of objects - Episode 47

/*const fruits = [{name: "apple", color: "red"},
                {name: "orange", color: "orange"},
                {name: "banana", color: "yellow"},
                {name: "coconut", color: "white"},
                {name: "pineapple", color: "yellow"}];

console.log(fruits[0].name);

fruits.push({name: "grapes", color: "purple"});*/

// ! sort() - Episode 48

/*const fruits = [{name: "apple", color: "red", price: 25.1, size: 5},
    {name: "orange", color: "orange", price: 22.5, size: 8},
    {name: "banana", color: "yellow", price: 12.3, size: 15},
    {name: "coconut", color: "white", price: 1.5, size: 1},
]

fruits.sort((a, b) => a.price - b.price);
fruits.sort((a, b) => b.price - a.price); // reverse order*/

// ! Dates - Episode 50

// ? Date(year, month, day, hour, minute, second, ms)

/*const date = new Date(); // current date and time
const date2 = new Date("2024-01-02T12:00:00Z");
const date3 = new Date(2024, 0, 1, 2, 3, 4, 5);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
// ... minutes, seconds
const dayOfWeek = date.getDay(); // Sunday - 0, Monday - 1

date.setFullYear(2024);
// ... month, day so on*/

// ! Closures - Episode 51

// ? a function defined inside of another function,
// ? the inner function has access to the variables
// ?    and scope of the outer function

/*function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }

    inner();
}*/

// ! setTimeout() - Episode 52

// ? setTimeout(callback, delay)

/*function sayHello() {
    window.alert("Hello!");
}

setTimeout(sayHello, 3000); // 3 seconds

const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);*/

// ! ES6 modules - Episode 55

// ? an external file that contains reusable code, which can be imported

/*import {PI, getCircumference} from './mathUtil.js';

console.log(PI);
const result = getCircumference(15);
console.log(result);*/


