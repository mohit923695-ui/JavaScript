let product = {
  name: "jeans",
  size: "M",
  price: 50,
  color: "blue",
  brand: "Levi's",
  'delivary-time': "3-5 days or Ontime"
};
let copyProduct = product;
console.log(product);
copyProduct.size = "L";
console.log(product);
copyProduct.price = 60;
console.log(product);

console.log(product["delivary-time"]);

let obj = {
  message: "Hello",
  status: "complete",
};
console.log(obj);
let { message, status } = obj;
console.log(message);
console.log(status);

function isidentical(product1, product2) {
  if (
    product1 === null ||
    product2 === null ||
    typeof product1 !== "object" ||
    typeof product2 !== "object"
  ) {
    console.log("Both parameters should be objects.");
    return false;
  }

  return (
    product1.name === product2.name &&
    product1.size === product2.size &&
    product1.price === product2.price &&
    product1.color === product2.color &&
    product1.brand === product2.brand &&
    product1['delivary-time'] === product2['delivary-time']
  );
}

let product1 = {
  name: "jeans",
  size: "M",
  price: 50,
  color: "blue",
  brand: "Levi's",
  'delivary-time': "3-5 days or Ontime"
};

let product2 = {
  name: "jeans",
  size: "M",
  price: 50,
  color: "blue",
  brand: "Levi's",
  'delivary-time': "3-5 days or Ontime"
};

let product3 = {
  name: "jeans",
  size: "M",
  price: 50,
  color: "blue",
  brand: "Levi's",
  'delivary-time': "3-5 days or Ontime"
};

console.log(isidentical(product, ''));
console.log(isidentical(product1, product2));
console.log(isidentical(product1, product3));