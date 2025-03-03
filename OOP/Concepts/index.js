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

const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    favFood: "hamburger",
    sayHello: function(){
        console.log(`Hi!, I am ${this.firstName}`)
    },
}

person.sayHello();