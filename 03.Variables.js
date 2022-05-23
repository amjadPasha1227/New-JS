/* 
4 Ways to Declare a JavaScript Variable:

    Using var
    Using let
    Using const
    Using nothing

What are Variables?

Variables are containers for storing data (storing data values).

*/

var ex = "Amjad";
let ex = "Amjad";
const ex = "Amjad";
ex = "Amjad";

// create a Variable

// All JavaScript variables must be identified with unique names.
// These unique names are called identifiers.

var a; // a = identifier

var x; // declaring a variable

x = 5; // assigning to a variable


// with var, let and const we will create variable

// var is introduced in 1995
// let and const introduced in 2015

// var

var myName = "Noman"; // declare
var myName = "Suhan"; // can re-declare
myName = "Amjad"; // value can be change
console.log(myName); // Suhan

// let

let myName = "Noman"; // declare
let myName = "Suhan"; // can't re-declare
myName = "Amjad"; // value can be change
console.log(myName); //  get an error

// const

const myName = "Noman"; // declare
const myName = "Suhan"; // can't re-declare
myName = "Amjad"; // value can't be change
console.log(myName); //  get an error

// without any keyword

fullName = "Mahammad Noman";
fullName = "Mahammad Suhan";
console.log(fullName);



