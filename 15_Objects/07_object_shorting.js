
let price = 432;
let course = "B.Tech CSE";

let user = {
  name: "mohit",
  age: 30,
  isAdmin: true,
  likes_birds: true,
  price: price
};

// Destructuring
let { name, age, isAdmin } = user;

console.log(name, age, isAdmin);

// Property Shorthand + Method Shorthand
let student = {
  name,
  age,
  course,
  price,

  // Method shorthand
  showDetails() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Course:", this.course);
    console.log("Price:", this.price);
  }
};

console.log(student);

// Calling the method
student.showDetails();