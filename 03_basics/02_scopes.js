// var c = 300

let a = 300      // global scope.

if (true) {
    let a = 10     // block scope.
    const b = 20
    console.log("INNER: ", a);

    // var c = 30      // (var c = 30 === c = 30)
}


console.log(a);
// console.log(b);
// console.log(c);
