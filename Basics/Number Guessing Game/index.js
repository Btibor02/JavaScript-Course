// ! Number Guessing Game - Episode 21

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; 

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));
    if(isNaN(guess) || guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    } else {
        attempts++;
        if(guess < answer){
            window.alert("Too low!");
        } else if(guess > answer){
            window.alert("Too high !");
        } else {
            window.alert(`Correct, the answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}