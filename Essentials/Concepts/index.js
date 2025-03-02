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

/*let numbers = [1, 2, 3, 4, 5];

let max = Math.max(...numbers); // '...' unpacks the elements in for example an array 

let username = "Teszt Elek";
let letters = [...username].join("-");

*/

