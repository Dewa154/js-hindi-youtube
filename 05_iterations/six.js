// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {     // forEach always function ke bahar undefined value declare karta hai.
//     // console.log(item);                       // forEach value return nahi karta hai.
//     return item
// } )

// console.log(values);        // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )      // .filter values return karta hai.
// console.log(newNums);

// const newNums = myNums.filter( (num) => {           // {} if use scope so return write compulsary
//     return num > 4
// } )      


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2008 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 1999, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Fiction', publish: 1981, edition: 2089 },
    { title: 'Book Ten', genre: 'Fiction', publish: 2015, edition: 2022 }
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )

// userBooks = books.filter( (bk) => { return bk.publish >= 1995})
// userBooks = books.filter( (bk) => { return (bk.publish >= 1995 && bk.genre === 'Science' ) })
console.log(userBooks);

