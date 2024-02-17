// old method

const name = "sarjan";
const last = 50;
//console.log(name + last + "Sabkholi");

// new method: use back tick

console.log(
  `Hello my name is ${name} and my last number is ${last} and i love code verry much`
);

// method of String
/*
const gameName = new String("Bisal-sab");
console.log(gameName[0]); // B
console.log(gameName[1]); // i
console.log(gameName[2]); // s
console.log(gameName[3]); //a
console.log(gameName[4]); //l

console.log(gameName.__proto__); // op: {}
console.log(gameName.length); //op: 5
console.log(gameName.toUpperCase()); //op: BISAL
console.log(gameName.toLowerCase()); //op: bisal
console.log(gameName.charAt(2)); //op:s
console.log(gameName.indexOf("a")); //op:3
const newStr = gameName.substring(0, 4);
console.log(newStr); // op:Bisa
const anotherStr = gameName.slice(-4, 3);
console.log(anotherStr); //Op count back to :sab
console.log(gameName.split("-"));

const newString = "   Raj   ";
console.log(newString); //op:   Raj
console.log(newString.trim()); //op:Raj

const url = "https://sarjan.com/sarjan%20sabkholi";
console.log(url.replace("%20", "-"));
*/

/*
//++++Primitive Strings:+++++++++
let primitiveString = "Hello, world!";
console.log(primitiveString); // Output: Hello, world!
console.log(typeof primitiveString); // Output: string

//+++++++String Objects: +++++++
let stringObject = new String("Hello, world!");
console.log(stringObject); // Output: [String: 'Hello, world!']
console.log(typeof stringObject); // Output: object

// Accessing characters in a string
console.log(primitiveString[1]); // output:e
console.log(stringObject.charAt(0)); // Output: H

// Changing characters in a string (only applicable to string objects)
stringObject[0] = "h"; // This won't change the string, as primitive strings are immutable
console.log(stringObject); // Output: [String: 'Hello, world!']
stringObject = "hello, world!"; // This will create a new string
console.log(stringObject); // Output: hello, world! */
