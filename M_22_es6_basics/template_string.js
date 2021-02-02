var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitPrice: 42 };
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitPrice} bucks?`;

// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:Development\profile\aboutme.html `;

console.log(`The file was uploaded from: ${filePath}`);
// expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"

console.log(String.raw`\x5c`);
console.log(String.raw`с:\x.js`);

let row = String.raw(
  {
    raw: ["foo ", " bar ", " baz",5+5],
  },
  2 + 3,
  "Java" + "Script",
  "imran"
);
console.log(row);
