// ! Functions - Episode 22

/*function happyBirthday(){
    console.log("Happy Birthday to you!");
}

happyBirthday();

function nameHappyBirthday(username, age){
    console.log(`Happy Birthday to ${username}!`);
    console.log(`Happy ${age}. Birthday to ${username}!`);
}

nameHappyBirthday("Elek", 20);

function add(x, y){
    let result = x + y;
    return result;

    // or return x + y;
}

let answer = add(5, 15);*/

// ! Variable scope - Episode 23

/*let x = 3; // global scope

function function1() {
    let x = 1; //local scope
}

function function1() {
    let x = 2;
}*/

// ! Arrays - Episode 25

/*let fruits = ["apple", "banana", "grape"];

let firstFruit = fruits[0];

fruits[3] = "orange";
fruits.push("coconut");
fruits.pop();

fruits.unshift("mango"); // add to beginning
fruits.shift(); // remove from beginning

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
} 

for (let fruit of fruits){
    console.log(fruit);
}

fruits.sort();
fruits.sort().reverse();*/

// ! Spread operator - Episode 26

// ? spread = expands an array into seperate elements (...)

/*let numbers = [1, 2, 3, 4, 5];

let max = Math.max(...numbers);

let username = "Teszt Elek";
let letters = [...username].join("-");

let combinedArray = [...numbers, ... letters, "eggs"];
*/

// ! Rest parameters - Episode 27

// ? rest = bundles seperate elements into an array (...rest)

/*function openFridge(...foods) {
    console.log(...foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);*/

// ! Callbacks - Episode 30

// ? callback = a function that is passed as an argument to another function

/*sum(displayConsole, 10, 5); // ? Don't include ()!!

function sum(callback, x, y) {
    let result = x + y;
    callback(result)
}

function displayConsole(result) {
    console.log(result)
}*/

// ! .forEach() - Episode 31

/*let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}*/

