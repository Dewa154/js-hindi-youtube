// THIS and arrow functions

const user = {
    username: "Dewananad",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   // this. means current context.
        // console.log(this);
    }

}

// user.welcomeMessage()   // Dewananad , welcome to website
// user.username = "sam"
// user.welcomeMessage()   // sam , welcome to website

// console.log(this);   // global context is {}


//  function chai(){
//     let username = "Dewanand"
//     console.log(this.username);  // undefined
// }

// chai()


// const chai = function () {
//     let usrname = "Dewanand"
//     console.log(this.username);   // undefined
// }

const chai = () => {              //  This is arrow function
    let usrname = "Dewanand"
    // console.log(this.username);   // undefined
    console.log(this);   // {}
}

// chai()

// const addTwo = (num1, num2) => {      // arrow function // if write curly braces so return is mandatory
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2      // implicit arrow function  // oneline function  // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )    // parathesis on single line function  // in React me this tachnique mostb useful.

// const addTwo = (num1, num2) => {username: "Dewanand"}    // undefined
const addTwo = (num1, num2) => ({username: "Dewanand"})    // { username: 'Dewanand' }


console.log(addTwo(3, 4))    

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()





