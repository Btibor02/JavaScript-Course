// ! Callback hell - Episode 70

// Callback Hell = Situation in JS where callbacks are nested within other callbacks
//                 to the degree where the code is difficult to read.
//                 Use Promises + async/await to avoid it.

// ! Promises - Episode 71

// Promise = An Object that manages asynch operations.
//           Wrap a Promise Object around {asynch code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynch code})

/*function walkDog(callback){
    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 2500);
}

function takeOutThrash(callback) {
    setTimeout(() => {
        console.log("You take out the thrash");
        callback();
    }, 500);
}

walkDog(() =>{
    cleanKitchen(() => {
        takeOutThrash(() => console.log("You finished")); // --> Callback hell
    });
});

// Promises
function walkDog1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;

            if(dogWalked) {
                resolve("You walk the dog");
            } else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen");
        }, 2500);
    });
}

function takeOutThrash1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("You take out the thrash");
        }, 500);
    });  
}

walkDog1().then(value => {console.log(value); return cleanKitchen1()})
            .then(value => {console.log(value); return takeOutThrash1()})
            .then(value => {console.log(value); console.log("You finished")})
            .catch(error => console.error(error));*/

// ! Async/Await - Episode 72

// Await = makes a function return a promise
// Await = makes an async function wait for a promise

/*async function walkDog1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked) {
                resolve("You walk the dog");
            } else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen");
        }, 2500);
    });
}

function takeOutThrash1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("You take out the thrash");
        }, 500);
    });  
}

async function doChores() {
    try{
        const walkDogResult = await walkDog1();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen1();
        console.log(cleanKitchenResult);
    
        const takeOutThrashResult = await takeOutThrash1();
        console.log(takeOutThrashResult);
    
        console.log("You finished")
    } catch(err) {
        console.error(err);
    }
}

doChores();*/

// ! JSON files - Episode 73

// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3] OR [{}, {}, {}]

/*const names = ["Eric", "Johan", "Emma", "Fred"];

const jsonString = JSON.stringify(names);
console.log(jsonString);


const person = `{ "name": "Fred", "age": 25, "isEmployed": true, "hobbies": ["Soccer", "Karate", "Cooking"]}`;

const parsedData = JSON.parse(person);
console.log(parsedData);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(err => console.error(err));*/

// ! Fetch data from an API - Episode 74

/*fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        if (!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));


fetchData();
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error(error);
    }
}*/

