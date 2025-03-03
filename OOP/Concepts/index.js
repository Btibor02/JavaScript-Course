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

