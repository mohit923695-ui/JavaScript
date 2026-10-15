// Store user data in local storage 
localStorage.setItem(
  "user",
  JSON.stringify({
    name: "mohit",
    age: 30,
    email: "mohit@example.com"
  })
);

// Retrieve user data from local storage
const userData = localStorage.getItem("user");


// remove item 
localStorage.removeItem("email");


// clear all items
localStorage.clear();