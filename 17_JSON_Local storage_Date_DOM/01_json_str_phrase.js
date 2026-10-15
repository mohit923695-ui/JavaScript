let product = {
  name: "Laptop",
  price: 1200,
  brand: "Dell",
  rating:{
    score: 4.5,
    reviews: 150
  }
}
console.log(typeof product); 
console.log(product);

// Convert the product object to a JSON string
let str = JSON.stringify(product);
console.log(typeof str); 
console.log(str);


// Convert the JSON string back to a JavaScript object
let newProduct = JSON.parse(str);
console.log(typeof newProduct); 
console.log(newProduct);