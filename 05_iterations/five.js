const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {       // callback function to name nahi hoga. , automatically chalti hai.
//     console.log(val);
// } )


// coding.forEach( (item) => {         // callback function to name nahi hoga. , automatically chalti hai.
//     console.log(item);
// } ) 


// function printMe(item) {
//     console.log(item);
// } 

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "javascript",
        id: 1, 
        languageFileName: "js"
    },
    {
        languageName: "java", 
        id: 2,
        languageFileName: "java"
    },
    {
        languageName: "python", 
        id: 3,
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.id}) ${item.languageFileName} :- Programming Language ${item.languageName}`);
})

// Output :-

// 1) js :- Programming Language javascript
// 2) java :- Programming Language java
// 3) py :- Programming Language python

