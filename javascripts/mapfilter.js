// // map() : a JavaScript array method that performs task on every element in an array.
// //    >  It creates a new array with the updated values.
// //    >  It does not change the original array and its original length.

// Ex : 1

// let numbers = [2, 3, 4, 5, 6, 7]
// let newNumbers = numbers.map((data) => {
//     return data * 2
// })

// Ex : 2


// let oldArray = [
//     { name: "rana" },
//     { name: "reene" },
//     { name: "teena" }
// ]

// const newArray = (oldArray.map(data => {
//     return {
//         name: data.name.toUpperCase()
//     }
// }))

// newArray
//     (3)[{… }, {… }, {… }]

// { name: 'RANA' }
// { name: 'REENE' }
// { name: 'TEENA' }
// length: 3



// filter() :  a JavaScript array method that filterOut 
//  the data based on given conditions .
//  > It creates a new array without  modifying the original array
//  > new array can be shorter or equal to original array

// Ex : 1
let numbers = [3, 4, 5, 6, 7, 32, 42, 23, 43];
let newNumbers = (numbers.filter(data => {
    return data > 0
}
))

// newNumbers
// (9) [3, 4, 5, 6, 7, 32, 42, 23, 43]
 



