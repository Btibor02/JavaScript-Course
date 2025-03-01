// ! Random Number Generator - Episode 9

/*let random = Math.random(); // between 0-1
let random2 = Math.random() * 6; // between 0-5, decimal
let random3 = Math.floor(Math.random() * 6); // between 0-5
let random4 = Math.floor(Math.random() * 6) + 1; // between 1-6

const min = 50;
const max = 100;
let random5 = Math.floor(Math.random() * (max - min)) + min; // between 50-100;*/

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}