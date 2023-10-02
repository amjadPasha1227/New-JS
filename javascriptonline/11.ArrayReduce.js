// Array reduce: sum 

const grades = [10, 15, 5];

const sum = grades.reduce((total, current) => {
    console.log(`Total is ${total}`);
    console.log(`Current is ${current}`);
    console.log("---");
    return total + current;
}, 0)

console.log(`Sum is ${sum}`); // 30

/* Explanation

The first time the callback runs, total is assigned 0 (because of the initial value that we'll explain in a bit) and current will be assigned to the first item of the array. So total = 0 and current = 10.
Then we return total + current which is 0 + 10 = 10. Now the new value of total becomes 10.
The callback runs the second time and this time current = 15 (second item of the array) and total = 10. We return total + current which is 10 + 15 = 25. The current value of total becomes 25.
The callback runs the third time and this time current = 5 (third item of the array) and total = 25. We return total + current which is 25 + 5 = 30.
There are no more items in the array, so the result of the reduce is the final value of total which is 30.
Thus the sum is 30.
*/


// Array reduce: multiplication
const numbers = [5, 2, 10];

const multiplication = numbers.reduce((total, current) => {
    console.log(`Total is ${total}`);
    console.log(`Current is ${current}`);
    console.log("---");
    return total * current;
}, 1)

console.log(`Multiplication is ${multiplication}`);

/* Explanation
The first time .reduce() callback runs, total will have a value of 1 (coming from the starting value) and current will have a value of 5 (which is the first item of the array).
Then we return total * current which is 1 * 5 = 5 so the next time the callback runs, total will have a value of 5.
The second time the callback runs, total is 5 and current is 2 (second item of the array). We compute 5 * 2 = 10. We return 10.
The third time the callback runs, total is 10 and current is 10 (third item of the array). We compute 10 * 10 = 100. We return 100.
The result of the .reduce() is 100 which is stored in the variable result.
*/



/// Using .forEach
let sum1 = 0
numbers.forEach(number => {
    sum1 = sum1 + number
});

/// Using .reduce
const sum2 = numbers.reduce((total, current) => {
    return total + current
}, 0);

// The .reduce example can be written on one line using implicit return:

const sum3 = numbers.reduce((total, current) => total + current, 0);