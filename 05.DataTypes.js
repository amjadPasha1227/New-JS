// JavaScript variables can hold different data types: numbers, strings, objects and more

let myName = "Amjad"; // string
let age = 30; // number
let fullName = {firstName:"Amjadpasha", lastName:"Mahammad"}; // object
let mobiles = ["realme", "mi"]; // array
let amIMarried = true; // boolean
let car; // undefined


console.log(typeof myName); // string
console.log(typeof age); // number
console.log(typeof fullName); // object
console.log(typeof mobiles); // object
console.log(Array.isArray(mobiles)); // true
console.log(typeof amIMarried); //boolean
console.log(typeof car); // undefined


//JavaScript Types are Dynamic

// JavaScript has dynamic types. This means that the same variable can 
// be used to hold different data types:

let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
console.log(x);  // John