// singleton   // single object   //construct se singletonm banta hai
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Dewanand",   // name = "name" aisa declare hota hai, isme any one koi sa bhi object Write kar sakte hai.
    "full name": "Dewanand Kurrey",
    [mySym]: "mykey1",   // [] use for write symbol value in object literals
    age: 18,
    location: "Jaipur",
    email: "Dewanand@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
 } 

//  console.log(JsUser.email)
//  console.log(JsUser["email"])
//  console.log(JsUser["full name"]);
//  console.log(JsUser[mySym]);

 JsUser.email = "Dewanand@chatgpt.com"
//  Object.freeze(JsUser)
 JsUser.email = "Dewanand@microsoft.com"
//  console.log(JsUser);

 JsUser.greeting = function(){
    console.log("Hello JS User");   // Hello JS User
 }
 JsUser.greetingTwo = function(){
   console.log(`Hello JS User, ${this.name}`);   // Hello JS User, Dewanand
}

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());



 








