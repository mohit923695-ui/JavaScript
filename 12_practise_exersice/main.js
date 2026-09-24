let age = 7;
let gender = "male";
let ticketPrice = 100;

let discount = 0;

if (gender === "female") {
    discount = 50;
}

if (age < 5) {
    discount = Math.max(discount, 100);
} else if (age <= 8) {
    discount = Math.max(discount, 50);
}

if (age > 65) {
    discount = Math.max(discount, 70);
}

let finalPrice = ticketPrice - (ticketPrice * discount / 100);

console.log("Discount:", discount + "%");
console.log("Final Ticket Price:", finalPrice);