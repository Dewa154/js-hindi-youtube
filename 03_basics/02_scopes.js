// var c = 300

let a = 300      // global scope.

if (true) {
    let a = 10     // block scope.
    const b = 20
    // console.log("INNER: ", a);

    // var c = 30      // (var c = 30 === c = 30)
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Dewanand"

    function two(){
        const website = "youtube"
        console.log(username);    // child function, parant function ke variable ko execute kar sakta hai. like (username)
    }
    // console.log(website);

    two()

}

// one();


if (true) {
    const username = "Dewanand"
    if (username === "Dewanand") {
        const website = " youtube"
        // console.log(username + website);     // Dewanand youtube
    }
    // console.log(website);    // website error because website scope have insite if condition.
}

// console.log(username);    // username is not defined.   //   username scope their not have.


// +++++++++++++++++ interesting +++++++++++++++++++++++++

function addone(num){
    return num + 1
}

console.log(addone(5));


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))   // Cannot access 'addTwo' before initialization, because const addTwo = function(num) this we store (hold) variable.




