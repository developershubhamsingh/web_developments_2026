
// closer : enclose something within {}
// local scope : only accessible locally i.e. within the function
// global scope : can be accessible internally and externally too


let a = 3;

const add = () => {
    // declare inside function scope
    let b = 7;    // local scope
    return a + b;
}

console.log(add()) // 10
console.log("a =",a)  // 3 :accessible externally
console.log("b =",b)  // cannot access eternally
//Uncaught ReferenceError: b is not defined bez it is enclose within the function
 