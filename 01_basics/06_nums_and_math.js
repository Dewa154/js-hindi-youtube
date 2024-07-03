const score = 400 
// console.log(score);

const balance = new Number(100)        // if output should be Number Value
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   // Ecommerce & Balance sheet uses for website make

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));  // Print only three digit

const other2Number = 123.8954
// console.log(other2Number.toPrecision(3)); 

const other3Number = 1123.8954
// console.log(other3Number.toPrecision(3)); 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

// console.log(Math);    // Note: Properties ko . Ke sath access kiya ja sakta hai.
// console.log(Math.abs(-4));   // only - value Positive/ absolute value me convert ho jati hai.
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());   // value of Math.random() is always comes from 0 to 1.
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
