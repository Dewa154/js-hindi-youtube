// Primitive datatype

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100   // Typescript   const score:number = 100   //  datatype must asign
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n   // if write n in last then automatically became bigInt


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktimaa", "naagraj", "doga"];
let myObj = {
    name: "dewanand",    // objects should be inside Curlybrackets 
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

