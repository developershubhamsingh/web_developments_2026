# console.log() : 
> prints messages in the browser's console for debugging.
    > console.log("यह सिर्फ डेवलपर देख सकता है।");

# alert() : 
> shows a pop-up box with a message and an OK button.
    > alert("आपका पासवर्ड गलत है!");

# confirm() : 
> asks yes/no question and returns true (OK) or false (Cancel).
    > let deletePhoto = confirm("Do you want to delete this photo?");
    > console.log(deletePhoto); // Returns true if OK is clicked, false if Cancel is clicked

# prompt()
> displays a pop-up box that asks the user to type an input.
    > let yourName = prompt("What is your name?");
        > alert(`Hello ${yourName}!`); // Displays the user's name in a pop-up box
    > prompt() always takes user input as a String. If you need a number, you must wrap it inside parseInt().
        > Converting prompt text input into an actual number
        > let userAge = parseInt(prompt("Enter your age:")); 

console.log("hello all done !")
VM165:1 hello all done !

alert("hello all done !")

confirm("Are you done ? ")
true

confirm("Are you done ? ")
false 

prompt("Enter your name")
'Rana'

let name = prompt("Enter your name");
alert(`hello ${name}`);