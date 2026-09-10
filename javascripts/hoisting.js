
//  hoisting : Hoisting JavaScript ka wo andaruni behavior hai jo code chalane se pehle variables aur functions ko dhoondh kar top par rakh deta hai.

// Lekin is behavior ki wajah se jo bugs aur errors aate hain, unse bachne ke liye Humein (Developers ko) ye niyam follow karna padta hai: "Pehle declare karo, fir access karo."
// Best practise  Pehle Declare Karo, Baad Me Use Karo!

//  arrays aur objects ko pehle declare (create) karte hain, aur uske baad me access (use) karte hain.
// <!-- line 1:  let employeeList = [
// line 2:      { id: 101, name: "Amit Kumar", role: "Developer" },
// line 3:      { id: 102, name: "Sneha Raj", role: "Designer" }
// line 4:  ];
// line 5:  
// line 6:  let totalEmployees = employeeList.length;
// line 7:  console.log("Total Employees:", totalEmployees); // Output: 2
// line 8:  console.log("First Employee Name:", employeeList[0].name); // Output: Amit Kumar -->
