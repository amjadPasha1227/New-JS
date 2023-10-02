const sum = (a, b) => {
    a + b;
}

console.log(sum(1, 3));  // undefined because we disn't return statement. To overcome this we use Implicit Return


// Implicit Return

const sum1 = (a, b) => a + b; // Implicit Return

console.log(sum1(1, 3)); // 5


/////////////////////////////////////////////////////////////////
/// Array methods revisited


////Array filter(callback)

const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]

// The .filter(callback) can be re-written as follows:

const numbersAboveTen1 = numbers.filter(number => number > 10); // Implicit Return
console.log(numbersAboveTen1); // [14, 11]


/////Array find(callback)
const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"

/// The .find(callback) can be re-written as follows:

const result1 = names.find(name => name === "Alex"); // Implicit Return
console.log(result1); // "Alex"


/////Array map(callback)
const numbers2 = [4, 2, 5, 8];

const doubled = numbers2.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]

///The .map(callback) can be re-written as follows:
const doubled1 = numbers2.map(number => number * 2);
console.log(doubled1); // [8, 4, 10, 16]




const getStringSizes = strings => strings.map(string => string.length);

console.log(getStringSizes(["a", "abc"])); // [1, 3]