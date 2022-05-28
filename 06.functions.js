//A JavaScript function is a block of code designed to perform a particular task.

//A JavaScript function is executed when "something" invokes it (calls it).

// Function Invocation

// The code inside the function will execute when "something" invokes (calls) the function:

// When an event occurs (when a user clicks a button).
// When it is invoked (called) from JavaScript code.
// Automatically (self invoked).

function sum(param1, param2, param3, param4) {
    return param1 + param2 + param3 + param4;
    console.log("Amjad"); // after return code will not execute
}

console.log(sum(1,2,3,4)); // 10
console.log(sum(1,2)); // NaN
console.log(sum(1,2,3,4,5)); // 10