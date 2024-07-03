// const tinderUser = new Object()   // this is singleton objects
const tinderUser = {}               // this is not singleton objects

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dewanand",
            lastname: "kurrey"
        }
    }
}

// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.email);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)   // target object: {} , source objects: obj1, obj2

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Dewanand Kurrey"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);


// **************API Formate**************
// {
//     "name": "Dewanand",
//     "coursename": "JS in Hindi",   
//     "price": "free"
// }


[
    {},
    {},
    {}
]




