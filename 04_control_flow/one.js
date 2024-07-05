// if statement

const isUserLoggedIn = true
const temperature = 52

// if ( temperature < 50 ) {
//     console.log("less than 50");
// }
// console.log("Execute");

// conditions <, >, <=, >=, ==, !=, === , !==
// === use for comparisions of data value + data type.
// !== use for comparisions of data value + not data type.
// == = !==   // equal to hota hai.


// if else statement   // conditional code // only one execution if or else

// if ( temperature < 50 ) {
//     console.log("temperature is less than 50");
// }  else {
//     console.log("temperature is greater then 50")
// }
// console.log("Execute");


// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// // console.log(`User power: ${power}`);   // if var use in scope then var automatically became global value. // so always use let


const balance = 4500

// if (balance > 500 ) console.log("test1"), console.log("test2");   // this code is right but not a good practice. , not write this technique.


// multiple if - else conditions uses.

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("greater than 900");
// }


// && condition use for all condition must be true.

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in");
}

Pause = 24:20
