//  A Function : is a reusable block of code
//  designed to perform a specific task when invoked.

// // फ़ंक्शन बनाया
// function sayHello() {
//     alert("हेलो दोस्त, आपका स्वागत है!");
// }

// // फ़ंक्शन को चलाया (आप इसे जितनी बार चाहें लिख सकते हैं)
// sayHello(); 
// sayHello(); // दोबारा बटन दबाया, फिर से चलेगा!


// Parameters: The variables written inside the brackets () 
// when creating a function .
// Ex : function showNumber(x) { // 'x' is the Parameter  

// Arguments: The actual real values sent inside the brackets ()
//  when running the function.
// Ex : showNumber(25); // 25 is the Argument 

// The return keyword stops a function 
// and gives the final result back 
// to the place where the function was called. 

// Ex : 1

oddEvan = (number) => {
    if (isNaN(number)) {
        alert("Please enter a valid number, strings are not allowed!");
    }
    else if (number % 2 == 0) {
        alert(`The Number ${number} is Even .`)
    } else {
        alert(`The Number ${number} is Odds .`)
    }
}
let result = parseInt(prompt(`Enter The Number`))
oddEvan(result)

// Ex : 2

const oddEvan = (number) => {
    let result;
    if (isNaN(number)) {
        result = "Please enter a valid number, strings are not allowed!";
    }
    else if (number % 2 == 0) {
        result = `The Number ${number} is Even .`
    } else {
        result = `The Number ${number} is Odds .`
    }
    return result
}
let data = parseInt(prompt(`Enter The Number`))
let finalResult = oddEvan(data)
alert(finalResult)

// Ex  : 3
function add(a, b) {
    return a + b;
}

add(2, 3)
5

add(1)
NaN // to fix this 👇

function add(a = 0, b = 0) {
    if (isNaN(a) || isNaN(b)) {
        alert("Invalid input kindly enter the number")
        return "Invalid input";
    }

    return a + b;
}
add(2, 3)
5
add(2) //2+ 0 =2
2

// Both Are Same👇👆

function add(a = 0, b = 0) {

    a = parseInt(prompt(`Enter first The Number`));
    b = parseInt(prompt(`Enter second The Number`));

    if (isNaN(a) || isNaN(b)) {
        alert(` Kindly enter the number `)
        return "Invalid input";
    }
    return a + b
}
let Result = add();

if (Result === "Invalid input") {
    console.log("Invalid input")
} else {
    alert(`The addition is : ${Result}`)
}

// Note :The Rest Operator (...) collects
// all remaining function arguments into a single array list.
function add(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total = total + num;
    }
    return total; 
}
add(1, 2, 3)
6

