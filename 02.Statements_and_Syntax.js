let x, y, z;    // Statement 1   // Declare 3 variables
x = 5;          // Statement 2   // Assign the value 5 to x
y = 6;          // Statement 3   // Assign the value 6 to y
z = x + y;      // Statement 4   // Assign the sum of x and y to z

console.log(z);

// =========================================
// Syntax = set of rules

// How to create variables:
var a;
let b;

// How to use variables:
a = 5;
b = 6;
let c = a + b;


/*=====================================================

A JavaScript name must begin with:

    A letter (A-Z or a-z)
    A dollar sign ($)
    Or an underscore (_)

Subsequent characters may be letters, digits, underscores, or dollar signs.

Note:

Numbers are not allowed as the first character in names.

This way JavaScript can easily distinguish identifiers from numbers.


======================================================*/

var name = "Amjad";
var 1name = "Amjad"; // get an error
var $name = "Amjad";
var my_Name = "Amjad";
var my-name = "Amjad"; //get and error
var _name = "Amjad";
var amjad123 = "Amjad";
var #amjad = "Amjad"; // special characters are not allowed except $(dollar) and _(underscore)



