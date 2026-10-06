let user = {
  name: "mohit",
  age: 30,
  isAdmin: true,
  "likes_birds": true,
};
console.log(user);

 console.log(user.name);  // dot notation
console.log(user["age"]); // bracket notation
console.log(user["likes_birds"]); // bracket notation with string key


user.name = "rohan"; 
console.log(user.name); 