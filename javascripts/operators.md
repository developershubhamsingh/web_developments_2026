 
# Arithmetic Operators & Type Conversion/Coercion : 
# " + " operators rules: alwaya left to right

   >> no. + no. = numbers
      > 5 + 3 = 8

   >> string + no. = string
      >"hello" + 3 = "hello3"
      >"5" + 2 = " 52 "  

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
      > let price = parseFloat("25.99"); = 25.99

   >> Number("100") ➡️  : 100
    > Number("10.5") : 10.5
    > Number("100px")=Nan //character


# Assignment Operators : 
> An Assignment Operator is used to store or update a value inside a variable (like = or +=).

# Comparison Operators : 
> A Comparison Operator is used to compare two values and returns either true or false (like == or ===).

# conditional operator :  
> all the conditional operator will return bool,ean outputs .
> = assignment operator 
    > = stores a value inside a variable.
    > Example: let x = 10;

> == Loose Equality
    > compares only the values, ignoring their data types.
    > Example: 5 == "5" // true 

> ===  Strict Equality
    > compares both the values and their data types strictly.
    > Example: 5 === "5" // false one string one no.


# The Negation /Logical NOT operator (!) flips a boolean value to its exact opposite (turns true to false and false to true).
> let isCodingFun = true; 
> console.log(!isCodingFun); // false (उल्टा हो गया)
> !! two times negate ex: a = true ; !a = true;

> truthy =numeric value (-ve,+ve) accept 0,any string true
> 0 ,false,null,undefined

> var a = 1 ; !a = false
> var a = 0 ; !a = true

# Template Literals / String Literals : 
> modern way to create strings .
> allows you to easily inject variables  .
> easily create multi-line text.
> Ex : old way es 5
    let name = "Amit";
    let age = 25;

> let message = "Hello, my name is " + name + " and I am " + age + " years old.";

> Ex new way  es 6
    let name = "Amit";
    let age = 25;

> let message = "Hello, my name is " + name + " and I am " + age + " years old.";


