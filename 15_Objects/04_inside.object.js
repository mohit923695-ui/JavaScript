//inside objects 


let user = {
    name: "mohit",
    age: 30,
    email: "mohit@example.com",
    rating: {
      4.5: "Good",
      3.0: "Average",
      2.0: "Poor"
    },
  displayInfo: function() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Rating: ${this.rating[4.5]}`);
  }
};

user.displayInfo();
