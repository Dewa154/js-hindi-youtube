// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);

}

// console.log(element);    //  element is not defined

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=  10; j++) {
    //  console.log(`Inner loop value ${j} and inner loop ${i}`);
       console.log(i + '*' + j + ' = ' + i*j ); 
    }
    
}

// For loop with break and continue in javascript
// 14:46