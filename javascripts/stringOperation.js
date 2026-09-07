/*
toUpperCase() | toLocaleLowerCase() |.length |
slice()|

*/


// toUpperCase() Makes letters capital |
var city = "kolkata";
city.toUpperCase()
'KOLKATA'

// toLowerCase() — Makes letters small |
var city = "koLKAta";
city.toLocaleLowerCase()
'kolkata'

// +ve no(1,2,3..) works from starting |
// -ve no(-1,-2,-3...)works from last value|

//slice() - Cuts a text piece.
var city = "kolkata";
city.slice(1)
'olkata'
city.slice(2)
'lkata'

city.slice(-1)
'a'
city.slice(-2)
'ta'

//range i.e. from index no 0 - 3 |
var city = "kolkata";
city.slice(0,3)
'kol'
city.slice(1,-3)
'olk'

//.length - Counts total letters.
let city = "kolkata";
city.length
7

//charAt()
let city = "kolkata";
city.charAt(0)
'k'
city.charAt(1)
'o'
city.charAt(2)
'l'
city.charAt(3)
'k'
city.charAt(4)
'a'
city.charAt(5)
't'
city.charAt(6)
'a'

// trim() — Removes extra spaces before and after the string but not from between .
let city = "kolkata";
city.length 
7

let city = "   kolkata   ";
city.length
13   // letter = 7 +extra space 6 = length = 13

city.trim()
'kolkata'

city.trim().length
7

//not from between .
let city = "kol  kata";

city.trim()
'kol  kata'

let city = "kol kata";

city.replace(" ","")
'kolkata'

// replace() — replaces word.
let city ="i live in kolkata";

city.replace("kolkata","kolkata from last 3 years")
'i live in kolkata from last 3 years'



// cases : 
// case 1 : js is case sensitive |

var a = "haiii"; var b="Haiii";

a == b
false

a.toLowerCase()==b.toLowerCase()
true
 

// case 2 : first letter capital rest small |
let city = "koLKAta";
 
city.charAt(0)
'k'
city.charAt(0).toUpperCase()
'K'
city.slice(1)
'oLKAta'
city.slice(1).toLowerCase()
'olkata'
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
'Kolkata'


let city = "deLHI";
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
'Delhi'