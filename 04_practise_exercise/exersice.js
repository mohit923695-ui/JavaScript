//practise in console this code using chatgpt


// 1. Calculate and display the total bill amount.
// 1 Dal ₹100, 2 Roti ₹10 each, 1 Ice Cream ₹30
const dalPrice = 100;
const rotiPrice = 10;
const iceCreamPrice = 30;
const totalBill = dalPrice + (2 * rotiPrice) + iceCreamPrice;
console.log(`Total Bill Amount: ₹${totalBill}`);

// 2. Calculate 18% GST on iPhone15 ₹79,990 and 2 Air pods Pro ₹24990 each.
const iphonePrice = 79990;
const airpodsPrice = 24990;
const totalCartValue = iphonePrice + (2 * airpodsPrice);
const gstAmount = totalCartValue * 0.18; // 18% GST
console.log(`Total GST to pay: ₹${gstAmount}`);

// 3. Create strings using all 3 methods.
const singleQuoteString = 'This string uses single quotes.';
const doubleQuoteString = "This string uses double quotes.";
const templateLiteralString = `This string uses backticks (template literal).`;

// 4. Concatenate String with Strings, and String with numbers.
const stringAndString = "Hello, " + "Welcome to JavaScript!";
const stringAndNumber = "The total cart value before tax is ₹" + totalCartValue;
console.log(stringAndString);
console.log(stringAndNumber);

// 5. Create Order Summary String for our Myntra Cart.
// Using template literals (backticks) makes multi-line strings and injecting variables easy.
const myntraOrderSummary = `--- Myntra Order Summary ---
Cart Value: ₹${totalCartValue}
GST (18%): ₹${gstAmount}
Grand Total: ₹${totalCartValue + gstAmount}`;

// 6. Display order summary in a popup
alert(myntraOrderSummary);