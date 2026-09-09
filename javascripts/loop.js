// loop : A loop is used to run the same block of code
// repeatedly over and over again until a specific condition is met.

// 3 Main Pillars of a Loop :
// > Initialization (Starting Point)
// > (e.g., let i = 0).
// > Condition (Stopping Point):
//  > (e.g., i < 5).
// > Increment/Decrement (Step):
//  > (e.g., i++ yaani +1)

// Ex : 1
let city = ["Delhi", "Banaras", "kolkata"]
for (let i = 0; i < city.length; i++) {
    console.log(city[i])
}
// Delhi
// Banaras
// kolkata

// Ex: 2
// .join(", ") ➔ Yeh line array ke saare alag-alag dibbon ko aapas me comma , lagakar ek seedhi sundar line me jod degi.
let even_no = [];
let odd_no = [];
for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        even_no.push(i);
    } else {
        odd_no.push(i)
    }
}
console.log(`Even NO :${even_no.join(",")}`)
console.log(`Even NO :${odd_no.join(",")}`)


// Table 

for (i = 0; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
    console.log("2 x " + i + " = " + (2 * i));
    // document.write("2 x " + i + " = " + (2 * i));
}