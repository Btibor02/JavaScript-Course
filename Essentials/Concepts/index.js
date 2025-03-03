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

// ! .map() - Episode 32

// ? .map() = accepts a callback and applies that function
// ?            to each element of an array, then return a new array
// ?            Similar to .forEach()

/*const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

function square(element) {
    return Math.pow(element, 2);
}*/

// ! .filter() - Episode 33

// ? .filter() = creates a new array by filtering out elements

/*let numbers = [1, 2, 3, 4, 5];

let evenNums = numbers.filter(isEven);

console.log(evenNums);

function isEven(element) {
    return element % 2 === 0;
}*/

// ! .reduce() - Episode 34

// ? .reduce() = reduce the elements of an array to a single value

/*function function1(previousElement, nextElement) {
    return previousElement + nextElement;
}

const prices = [12, 25, 37, 5, 20];

const total = prices.reduce(sum);

console.log(total);

function sum(accumulator, element) {
    return accumulator + element;
}*/

// ! Function expressions - Episode 35

// ? function declaration 

/*function hello(){
    console.log("Hello");
}

// ? function expression

const hello = function(){
    console.log("Hello");
}

hello();

setTimeout(function(){
    console.log("Hello");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});*/


