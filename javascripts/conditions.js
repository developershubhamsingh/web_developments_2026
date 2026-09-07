// An if-else  : statement runs one block of code if a condition is true,
// and a different block of code if it is false.

// if (condition) {
//     // This code runs ONLY if the condition is TRUE
// } else {
//     // This code runs ONLY if the condition is FALSE
// }

// Ex : 1 :
let a = 8;
if (a % 2 == 0) {
    console.log(`Numer ${a} is even.`)
} else {
    console.log(`Numer ${a} is odd.`)
}

// Ex: 2
let number = parseInt(prompt("Enter The Number"));
if (number % 2 == 0) {
    alert(`Number ${number} is even .`);
} else {
    alert(`Number ${number} is odd . `);
}

// Enter The Number : 30
// Number 30 is even .

// Enter The Number : 31
// Number 31 is odd .



// An else if statement allows you to check
// multiple conditions one after another
// until it finds a true one.

//Ex : if (condition1) {
// Runs if condition1 is true
// } else if (condition2) {
//     // Runs if condition1 is false AND condition2 is true
// } else {
//     // Runs if ALL conditions above are false
// }

// Ex : 3 

let age = parseInt(prompt(`Enter Your Age`));
if (isNaN(age)) {
    alert(`Please enter a valid age number!`);
}
else if (age <= 17) {
    alert(`You age is ${age} You Are Not Eligible To Vote Before Age 18 `)
} else if (age > 80 && age < 110){
    alert(` Thankyou For Voting`)
} else {
    alert(`Invalid Age Enter Your Correct Age`)
 } 


//Ternary operator : A Ternary Operator is a one-line shortcut 
//for an if-else statement that uses a ? and : to make a decision.
//condition ? value_if_true : value_if_false;

let no = parseInt(prompt(`Enter The Number`));
let result = no % 2 == 0 ? `Number ${no} is Even` :`Number ${no} is Odd`
alert(result)