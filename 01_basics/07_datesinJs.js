// Dates

let myDate = new Date()         // new is mandatory
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());
console.log(typeof myDate);    // datatype is Object

// let myCreatedDate = new Date(2023, 0, 23)  // Months start from 0.
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());   // This is always prefer to formate.


