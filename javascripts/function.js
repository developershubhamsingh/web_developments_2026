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

oddEvan = (number) => {
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

