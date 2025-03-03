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