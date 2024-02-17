//  "use strict"; // treat all js code as newer version  or new formate

//  alert(3 + 3); // we are using nodeJs, not browser

//console.log(3 + 3);console.log("Raj"); // donot code such way

// make code readability
console.log(3 + 3);
console.log("raj");

// use for read Domention are : MDN web docs,tc39.es/ecma262, w3school,

//+++++++++++++++++++++++++++++++++++++
// DataType: Number,String,Boolean,Array, Object,Null,Symbol

/*
let num = 10; //number
let floatNum = 3.14;

let str = "Hello, world!"; //String
let anotherStr = "JavaScript is awesome!";

let isTrue = true; // boolean
let isFalse = false;

let arr = [1, 2, 3, 4, 5]; //Array
let mixedArr = [1, "two", true, { key: "value" }];

let obj = { name: "John", age: 30, isEmployed: true }; //Object

let nullValue = null; // null

let sym = Symbol("description");


console.table([
  num,
  floatNum,
  str,
  anotherStr,
  isTrue,
  isFalse,
  arr,
  mixedArr,
  obj,
  nullValue,
  sym,
]);   */

/*
console.log(typeof "sarjan");  //string
console.log(typeof 24);        // number
console.log(typeof null);     //object
console.log(typeof true);     // boolean
console.log(typeof undefined);  // undefined
*/

//Note:
// Primitive DataType: call by value
// 7type of primitive:String, Number, Boolean, Null, Undefined, Symbol, BigInt
/*
const str = "sagar"; //String
const score = 100; //number
const scoreValue = 100.4; //number
const isLoggedIn = false; //Boolean
const temp = null; // null
let userEmail; //undefined
const id = Symbol("123"); //Symbol
const anotheId = Symbol("123");
console.log(id === anotheId); //Symbol
const bigNum = 123455678900n;
console.log(bigNum); // BigInt */

//+++++++++++++++++++++++++++++++++++++
// Reference or non primitive dataType:
// 3types: Array, Objects, functions
/*
const heros = ["shaktiman", "naagraj", "sarjan", "Raj"]; //Array

let myObj = {
  name: "sarjan",
  age: 22,
  blood: "O+",
}; // Object

const myFunction = function () {
  console.log("Hello world");
}; // function

console.log(typeof bigNum); */

//++++++++++++ Memories Types +++++++++++++
// Stack Memory: store value primitive value and reference to boject (i.e Function)
//Heap Memory:  stores complex data structures like objects and arrays. Dynamically allocated memory,

// Stack
/* let myName = "Sarjan";
let anotherName = myName;
anotherName = "Sara";
console.log(myName);      // OP: Sarjan
console.log(anotherName); // OP: Sara */

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "sarjan@gmail.com";
console.log(userOne.email); // OP:sarjan@..
console.log(userTwo.email); //OP:sarjan@..
