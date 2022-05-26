// JavaScript variables can hold different data types: numbers, strings, objects and more

let myName = "Amjad"; // string
let age = 30; // number
let fullName = {firstName:"Amjadpasha", lastName:"Mahammad"}; // object
let mobiles = ["realme", "mi"]; // array
let amIMarries = true; // boolean
let car; // undefined


console.log(typeof myName);
console.log(typeof age);
console.log(typeof fullName);
console.log(typeof mobiles);
console.log(Array.isArray(mobiles));
console.log(typeof amIMarries);
console.log(typeof car);


//JavaScript Types are Dynamic

// JavaScript has dynamic types. This means that the same variable can 
// be used to hold different data types:

let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String