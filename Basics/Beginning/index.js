// ! Basics - Episode 1

/*console.log(`Hello`);

window.alert(`This is an alert!`)

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza!`; */

// ! Variables - Episode 2

/*let x;
x = 100
console.log(`Hello ${x}!`);

let age = 25;
let price = 10.99;
console.log(typeof age);

let firstName = "Elek";

let online = true;
let forSale = false;

let fullName = "Elek Teszt";
let isStudent = true;

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = `Your age is ${age}.`;
document.getElementById("p3").textContent = isStudent; */

// ! Arithmetic operators - Episode 3

/*let students = 30;
students += 2;
students -= 2;
students *= 2;
students /= 2;

students **= 2; // exponent
let extraStudents = students % 2; // modulo

students++;
students--;


    //operator precedence
    //1. parenthesis ()
    //2. exponents
    //3. multiplication & division & modulo
    //4. addition & subtraction


let result = 1 + 2 * 3 + 4 ** 2; */

// ! Accept user input - Episode 4

/*let username;

username = window.prompt("What's your username? ");

let username2;
document.getElementById("mySubmit").onclick = function(){
    username2 = document.getElementById("myText").value;
    document.getElementById("h1").textContent = `Hello ${username2}`;
}*/

// ! Type conversion - Episode 5

/*let age = window.prompt("How old are you?"); // ? this will be a string!
age = Number(age);
age+=1;

let x = "pizza"
let y = "pizza"
let z = "pizza"

x = Number(x); // ? Nan
y = String(y); // ? string
z = Boolean(z); // ? true

let x1 = ""
let y1 = ""
let z1 = ""

x1 = Number(x1); // ? 0
y1 = String(y1); // ? 
z1 = Boolean(z1); // ? false */