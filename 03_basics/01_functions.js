
function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("W");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}

// sayMyName()

// function addTwoNumbers(number1, number2){    // Note: (number1, number2)  = Parameter
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){    // Note: (number1, number2)  = Parameter
    //  let result = number1 + number2
    // //  console.log("dewanand");  // always write console.log() before the result
    //  return result

    return number1 + number2
}

// addTwoNumbers(3, 4)      // Note: (3, 4) = argument , // 7
// addTwoNumbers(3, "4")    // 34
// addTwoNumbers(3, "a")    // 3a
// addTwoNumbers(3, null)   // 3

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){    // if username = "sam"  // then if statement not execute.
    if(!username){          // (!username) = (username === undefined)
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("dewanand"));      // dewanand just logged in
// console.log(loginUserMessage(""));                 // just logged in
// console.log(loginUserMessage());                   // undefined just logged in


// function calculateCartPrice(...num1){   // ... ko hi rest operator hai.
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){          // val1 = 200, val2 = 400, 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));       // [ 500, 2000 ]


const user = {
    username: "Dewanand",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

