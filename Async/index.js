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