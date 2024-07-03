// array

const myArr = [0, 1, 2, 3, 4, 5]   // inside the array we can write Number, strings, floot etc.
const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2[2]);

// Array methods

// myArr.push(6)   // .push(value) => add new value in Array.
// myArr.push(7)
// myArr.pop()     // last value will out on the array

// myArr.unshift(0)   // add value before start array values

// myArr.unshift(9, 2, 3)

// myArr.shift()
// console.log(myArr);   //output:  [ 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9));   // false
// console.log(myArr.indexOf(9));   // -1 = Don't know on console
// console.log(myArr.indexOf(3));   // 3

// const newArr = myArr.join()    // change any typeof object to string 

// console.log(myArr);    // [ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr);    
// console.log(typeof newArr);  // string

// slice, splice

console.log("A ", myArr);   // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)  // not include with last range  
  
console.log(myn1);          // [ 1, 2 ]
console.log("B ", myArr);   // B  [ 0, 1, 2, 3, 4, 5 ]  // slice range numbers have inside

const myn2 = myArr.splice(1, 3)    // include with last range
console.log("C ", myArr);          // C  [ 0, 4, 5 ]  // splice range numbers go outside
console.log(myn2);                 // [ 1, 2, 3 ]











