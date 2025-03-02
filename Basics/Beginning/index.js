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

// ! Constants - Episode 6


// ? const = a variable that can't be changed

/*const PI = 3.14;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

document.getElementById("mySubmitRadius").onclick = function(){
   radius = document.getElementById("myTextRadius").value;
   radius = Number(radius);
   circumference = 2 * PI * radius;
   document.getElementById("p5").textContent = circumference + " cm";
}*/


// ! Math object - Episode 8

/*console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let x2 = 3.99;
let y = 2;
let z;

z = Math.round(x);
z = Math.floor(x2); // always round down
z = Math.ceil(x); // always round up
z = Math.trunc(x); // get rid of numbers after ,

z = Math.pow(x, y);
z = Math.sqrt(x);
z = Math.log(x);

z = Math.sin(x);
z = Math.cos(x);
z = Math.tan(x);

z = Math.abs(x); // absolute value
z = Math.sign(x);

let max = Math.max(x, y, z);
let min = Math.min(x, y, z);*/

// ! If statements - Episode 10

/*let age = 25;

if(age >= 18){
    console.log("You are old enough to enter this site");
} else {
    console.log("You must be 18+ to enter this site");
}


let isStudent = true;

if(isStudent){
    console.log("You are a student");
} else {
    console.log("You are not a student");
}

let age1 = 20;
let hasLicense = false;

if(age1 >= 16) {
    console.log("You are old enough to drive");
    if (hasLicense) {
        console.log("You have your license");
    } else {
        console.log("You do not have your license yet");
    }
} else if (age < 0) {
    console.log("Your age can't be below 0");
} else {
    console.log("You must be at least 16 to have a licence");
}*/

// ! Checked property - Episode 11

/*const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitCard = document.getElementById("mySubmitCard");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitCard.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    } else {
        subResult.textContent = `You are not subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    } else if(masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    } else if(payPalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal`;
    } else {
        paymentResult.textContent = `You must select a payment method!`;
    }
}*/

// ! Ternary operator - Episode 12

// ? Ternary operator = condition ? codeIfTrue : codeIfFalse;

/*let age = 21;

let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);*/

// ! Switches - Episode 13

/*let day = 1;

if (day == 1){
    console.log("It is Monday");
} else if (day == 2){
    console.log("It is Tuesday"); 
} else if (day == 3){
    console.log("It is Wednesday");
} else {
    console.log("Error!");
} // This can be written as: 

switch(day){
    case 1:
        console.log("It is Monday");
        break; // ? Important to break out!
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    default:
        console.log("Error!");
        break;
}*/

// ! String methods - Episode 14

let username3 = "TesztElek   ";

let firstLetter = username3.charAt(0)
let indexOfLetterT = username3.indexOf("t");
let lastIndexOfE = username3.lastIndexOf("e");
let stringLenght = username3.length;

username3 = username3.trim(); // ? remove whitespace
username3 = username3.toUpperCase(); // ? all uppercase
username3 = username3.toLowerCase(); // ? all lowercase

let result = username3.startsWith("T");
let result2 = username3.endsWithWith("k");
let result3 = username3.includes(" ");