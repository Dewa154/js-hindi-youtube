const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);

    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this   // if we dont write return so no problem return data automatically implicity.
}

const userOne = new User("hitesh", 12, true);       // if we don't write new keyword so first variable (userOne) value will overwrite.
const userTwo = new User("Chai Aur Code", 13, false);

console.log(userOne.constructor);       // constructor is reference of user/object
// console.log(userTwo);


// if we write new keywords so there are create empty {} Object instence kahte hai.
// constructor function  call hota hai, new keyword ke karan.
// this keywords se data hame get ho jata hai.


