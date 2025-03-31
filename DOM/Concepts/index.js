// ! Document Object Model - Episode 59

/*console.dir(document);
document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 6.90%, 74.30%)";

const username = "Teszt";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;*/

// ! Element selectors - Episode 60

// ? 1. document.getElementById()  -- ELEMENT OR NULL
// ? 2. document.getElementsClassName() -- HTML COLLECTION -- Don't have .forEach()
// ? 3. document.getElementsByTagName() -- HTML COLLECTION
// ? 4. document.querySelector()  -- FIRST ELEMENT OR NULL
// ? 5. document.querySelectorAll()  -- NODELIST -- static, but has built in functions

/*const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";

Array.from(fruits); // Now it has .forEach()

const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.backgroundColor = "purple";

const element = document.querySelector(".fruits");
element.style.backgroundColor = "green";

const lists = document.querySelectorAll("li");
list.forEach(list => {
    list.style.backgroundColor = "pink";
})*/

// ! DOM navigation - Episode 61

// ? -------- .firstElementChild --------
/*const element = document.getElementById("vegetables");
const firstChild = element.firstElementChild; // potato

// ? -------- .lastElementChild --------
const lastChild = element.lastElementChild; // salad

// ? -------- .nextElementChild --------
const element1 = document.getElementById("paprika");
const nextSibling = element1.nextElementSibling; // salad

// ? -------- .previousElementChild --------
const previousSibling = element1.previousElementSibling; // potato

// ? -------- .parentElement --------
const parent = element1.parentElement; // vegetables

// ? -------- .children --------
const children = element.children; // potato, paprika, salad*/

// ! Add & Change HTML - Episode 62

/*const newH1 = document.createElement("h1");

newH1.textContent = "I like pizza";
newH1.id = "myH1"

document.body.append(newH1);
document.body.prepend(newH1);
document.getElementById("box1").append(newH1);

document.body.removeChild(newH1);*/

// ! Mouse events - Episode 63

/*const myBox = document.getElementById("myBox");

function changeColor(event) {
    event.target.style.backgroundColor = "red";
}

myBox.addEventListener("click", changeColor);

myBox.addEventListener("click", function(event){
    event.target.textContent = "Ouch!";
});


myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "aquamarine";
    event.target.textContent = "Click me!";
});*/

// ! Key events - Episode 64

/*const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    console.log(`Key down = ${event.key}`);
    if(event.key.startsWith("Arrow")){
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            default:
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

document.addEventListener("keyup", event => {
    console.log(`Key up = ${event.key}`);
});*/

// ! Hide/show HTML - Episode 65

/*const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    } else {
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }
});*/

// ! NodeList - Episode 66

// NodeList = Static collection of HTML elements by (id, class, element)
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

/*let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.style.backgroundColor = "green";
});

buttons.forEach(button1 => {
    button1.addEventListener("click", event =>{
        event.target.style.backgroundColor = "red";
    });
});

// ? Add an element
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");

// ? Remove element
buttons.forEach(button2 =>{
    button2.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});*/

// ! .classList - Episode 67

// classList = Element property in JS used to interact
//             with an elemen'ts list of classes (CSS classes)
//             Allows you to make reusable classes for many elements


/*const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");

//myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    myButton.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    myButton.classList.toggle("hover");
});

myButton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent = "Disabled"
    } else{
        myButton.classList.replace("enabled", "disabled");
    }
});
*/


