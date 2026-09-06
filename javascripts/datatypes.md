# Variable : 
   > A variable is like a container used to hold data.

   >> let : let is a variable that allows you to change its value later.
      > let score = 0;   // starts at 0
      > score = 5;       // changed to 5!
   
   > const : const is a variable that does NOT allow you to change its value later.
      > const birthYear = 2005; // set forever
      > birthYear = 2006;// ERROR! JavaScript will stop you.

# A Data Type : 
   > It is simply the category of data (like a number or a word) that you store in your code.

# different data types : 

   > Primitive Data Types 
      > (Simple, holds a single value)

   > Non-Primitive Data Types 
      >(Complex, holds multiple values)

# Primitive Data Types (Simple) 
 >> typeof tells you the data type of any variable.
   > let age = 25;
   > console.log(typeof age); // Output: "number"
   > let name ="Teena";
   > console.log(typeof name); // Output: "string"
   > let isHappy = true;
   > console.log(typeof isHappy); // Output: "boolean"

   > Number: 
      > Any mathematical number (whole numbers or decimals).
      > let score = 98; let price = 19.99;

   > String: 
     > Any text It must always be wrapped in quotes ("",'').
     > let name ="Teena" ; let city= "karnataka";

   > Boolean:
      > A true or false value. Used for making decisions.
      > let isCodingFun = true;let isChaining = false;
      
   > Undefined: 
      > A variable that has been created but has no value given to it yet.
      > let age; // JavaScript automatically sets this to undefined

   > Null: 
      > Represents an intentional empty value. You are explicitly saying, "this is empty."
      > let userLocation = null; 

# 2. Non-Primitive Data Types (Complex)
   > Object: 
    > It is Used to store a collection of data in key: value pairs. 
    > let user = {
      name: "Reena",
      age: 21,
      isLoggedIn: true
      };

   > Array:
      > A list of data stored inside square brackets [].
      > let colors = ["red", "green", "blue"];
 
# " + " operators rules: alwaya left to right

   >> no. + no. = numbers
      > 5 + 3 = 8

   >> string + no. = string
      >"hello" + 3 = "hello3"
      >"5" + 2 = " 7 " (because both side no)

   >> no. + string = string
      > 3 + "hello" = "3hello"
   
   >> string + string = string
      > "hello " + " web" = "hello web"

   >> boolean + no. 
      > true = 1 ; false = 0 ;
      > true + 3 = 4 ; false + 3 = 3 ;
    
   >> boolean + string
      > true +' hello' = "true hello"

# " + " ," - " , " * " , " / " operators rules:

   >> no - string
      > 3 - " 2 " = 1  (because both side no)
      > " 3 " * 1 = 3  (     "      "       )
      > " 4 " / 2 = 2  (     "      "       )
      > if string is not no. than
         > " hello " - 2 = NaN ( Not a  No )

   >> boolean ( - , * , / )
      > true = 1 ; false = 0 ;
      > 3 - true = 2 
      > 3 * false = 0

   >> parseInt :It converts a string into a whole number (integer). left to right
      > let a = " 30 " ; let b =  " 30 " let c = ;
      > c = "3030"
      > parseInt(a) + parseInt (b) = 60

   > parseInt("80kg") = 80 (because strating with no .)
      > let price = parseInt("25.99"); = 25
      > parseInt("hello 10") = NaN (because strating with word)

   >> parseFloat for decimals no.
      > let price = parseInt("25.99"); = 25.99

   >> Number("100") ➡️  : 100
    > Number("10.5")
    > Number("100px")=Nan //character