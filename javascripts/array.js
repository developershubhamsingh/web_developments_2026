//  > Array:
//       > Other Languages (C, C++, Java):
//             > array is a collection of homegenous data i.e (yaani agar numbers ka array hai toh sirf numbers rahenge, strings nahi dal sakte).
//             > Ex a =[1,2,3] => aaray of no.
//             > Ex a =["ab","ba","abba"] => aray of string.
//             > Ex a =[true,false,false]=> aaray of boolean.
//       > JavaScript :
//             > Array is a collection of homogeneous and heterogeneous data , (Number, String, Boolean) bina kisi error ke rakh sakte hain.
//             > Ex a =[1,2,3,"ab","ba","abba",true,false,false]
//             > const mixData = ["Rahul", 101, true]; 


let city = ["kolkata", "Delhi", "karnataka"];
city.length
3

// Operation:
//     > push ➔ Adds a new item to the end of the array.
//     > Example: ["a", "b"].push("c") ➔ Result: ["a", "b", "c"]

//     > unshift ➔ Adds a new item to the start of the array.
//     > Example: ["a", "b"].unshift("z") ➔ Result: ["z", "a", "b"]

//     > pop ➔ Removes the last item from the end of the array.
//     > Example: ["a", "b", "c"].pop(c) ➔ Result: ["a", "b"]

//     > shift ➔ Removes the first item from the start of the array.
//     > Example: ["a", "b", "c"].shift(a) ➔ Result: ["b", "c"]

 
// slice() — 
//  It cuts out a specific portion of the array
//  without changing the original array.
//  > Syntax: array.slice(start_index, end_index) 
//  > Note: end_index se ek pehle tak hi katta hai.

// const numbers = ["A", "B", "C", "D"];
// const result = numbers.slice(1, 3); 
      //  > Hissa Kaat Kar Alag Karega
     //   > Index 1 se shuru, 3 se pehle tak (1 aur 2)

// console.log(result);  // Output: ["B", "C"]
// console.log(numbers); // Original Array: ["A", "B", "C", "D"] (Unchanged)

// splice() — Removes or Inserts Items in the Middle of the array
// It directly modifies the original array.
// Syntax: array.splice(start_index, delete_count, new_item1, new_item2...)

    // Example (Mitaane Ka):
    // const letters = ["A", "B", "C", "D"];
    // letters.splice(1, 2); // Index 1 se shuru karo aur 2 items mita do (B aur C gaye)
    // console.log(letters); // Original Array Changed: ["A", "D"]

    // Example (Naya Jodhne Ka):
    // const tags = ["A", "D"];
    // tags.splice(1, 0, "B", "C"); // Index 1 par jao, 0 item mitao, aur "B", "C" ghusao
    // console.log(tags); // Original Array Changed: ["A", "B", "C", "D"]


// indexOf() :
    // > It finds and returns 
    // the index number of a specific item in an array.
    // Not Found (-1): If the item is not present in array,
    // it always returns -1.

    
    // const fruits = ["Apple", "Banana", "Mango", "Banana"];
   
    // // 1. Finding an item that exists
    // const position1 = fruits.indexOf("Mango");  
    // console.log(position1); // Output: 2

    // // 2. Finding a duplicate item (returns the first match)
    // const position2 = fruits.indexOf("Banana"); 
    // console.log(position2); // Output: 1

    // // 3. Finding an item that does NOT exist
    // const position3 = fruits.indexOf("Orange"); 
    // console.log(position3); // Output: -1
