// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);      // Immediately Invoked Function Expressions (IIFE)
})();                                 // ()();  semicolon is mandatory

// ()();   // IIFE uses for avoid global variable polutions.   // first () = inside write function defination , // second () = execution.


( (name) => {           // (name) = Parameter
    // unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('Dewanand');



