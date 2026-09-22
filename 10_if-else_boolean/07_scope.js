
// 1. Global Scope
let globalName = "Mohit";

console.log(globalName); // Accessible



// 2. Function Scope

function myFunction() {
    let age = 20; // Function Scope

    console.log(age); // Accessible inside function
}

myFunction();

// console.log(age); // Error: age is not accessible outside function




// 3. Block Scope

if (true) {
    let city = "Lucknow";   // Block Scope
    const country = "India"; // Block Scope

    console.log(city);      // Accessible
    console.log(country);   // Accessible
}

// console.log(city);    // Error
// console.log(country); // Error