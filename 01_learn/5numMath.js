// Creating Number instances
let num1 = 123; // primitive number
let num2 = new Number(456); // Number object

console.log(num1); // Output: 123
console.log(typeof num1); // Output: number

console.log(num2); // Output: [Number: 456]
console.log(typeof num2); // Output: object

// Mathematical operations
let a = 10;
let b = 5;

let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division

console.log("Sum:", sum); // Output: 15
console.log("Difference:", difference); // Output: 5
console.log("Product:", product); // Output: 50
console.log("Quotient:", quotient); // Output: 2

// Math object examples
let radius = 5;

// Calculating area of a circle
let area = Math.PI * radius ** 2;
console.log("Area of the circle:", area.toFixed(2)); // Output: 78.54

// Generating a random number between 0 and 1
let randomNumber = Math.random();
console.log("Random number:", randomNumber); // Output: Random number between 0 and 1

// Rounding numbers
let floatNumber = 3.7;
let roundedNumber = Math.round(floatNumber);
console.log("Rounded number:", roundedNumber); // Output: 4

// Calculating square root
let squareRoot = Math.sqrt(16);
console.log("Square root:", squareRoot); // Output: 4
