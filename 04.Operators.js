let x = 5;         // assign the value 5 to x
let y = 2;         // assign the value 2 to y
let z = x + y;     // assign the value 7 to z (5 + 2)

// The assignment operator (=) assigns a value to a variable.

let x1 = 10; 

// The addition operator (+) adds numbers:

let x2 = 5;
let y1 = 2;
let z1 = x + y;

/*
Operators and Operands

The numbers (in an arithmetic operation) are called operands.

The operation (to be performed between the two operands) is defined by an operator.
Operand 	    Operator 	    Operand
100 	        + 	            50


*/

var LEFT = document.getElementById("left"),
RIGHT = document.getElementById("right"),
RESULT = document.getElementById("result"),
OPRTR = document.getElementById("operator"),
ADD = document.getElementById("add"),
SUB = document.getElementById("sub"),
MUL = document.getElementById("mul"),
DIV = document.getElementById("div"),
MOD = document.getElementById("mod");

ADD.addEventListener("click", function(){
    RESULT.innerHTML = parseInt(LEFT.value) + parseInt(RIGHT.value);
    OPRTR.innerHTML = "+";
})

SUB.addEventListener("click", function(){
    RESULT.innerHTML = parseInt(LEFT.value) - parseInt(RIGHT.value);
    OPRTR.innerHTML = "-";
})

MUL.addEventListener("click", function(){
    RESULT.innerHTML = parseInt(LEFT.value) * parseInt(RIGHT.value);
    OPRTR.innerHTML = "*";
})

DIV.addEventListener("click", function(){
    RESULT.innerHTML = parseInt(LEFT.value) / parseInt(RIGHT.value);
    OPRTR.innerHTML = "÷";
})

MOD.addEventListener("click", function(){
    RESULT.innerHTML = parseInt(LEFT.value) % parseInt(RIGHT.value);
    OPRTR.innerHTML = "%";
})





