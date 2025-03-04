// ! Calculator Program - Episode 58

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value); //Warning, really bad practise to execute js from a string 
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}