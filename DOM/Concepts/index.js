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

const newH1 = document.createElement("h1");

newH1.textContent = "I like pizza";
newH1.id = "myH1"

document.body.append(newH1);
document.body.prepend(newH1);
document.getElementById("box1").append(newH1);

document.body.removeChild(newH1);