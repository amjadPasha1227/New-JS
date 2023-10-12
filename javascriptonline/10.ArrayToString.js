const users = [{
    id: 1,
    name: "Sam Doe"
}, {
    id: 2,
    name: "Alex Blue"
}];

console.log(Array.isArray(users))


const userNamesArray = users.map(user => user.name);
console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];

const csv = userNamesArray.join(", ");
console.log(csv); // "Sam Doe, Alex Blue"

/// You can also chain these 2 commands and write it on one line:

const csv2 = users.map(user => user.name).join(", ");
console.log(csv2); // "Sam Doe, Alex Blue"

//Applying it to HTML

const html = `<ul>
    ${users.map(user => `<li>${user.name}</li>`).join("")}
    </ul>`;
console.log(html); // <ul> <li>Sam Doe</li><li>Alex Blue</li> </ul>


/// Array.every(callback)

//The Array .every(callback) method returns true when every item in the array satisfies the condition provided in the callback.

const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10); // true
const allAbove15 = numbers.every(number => number >= 15); // false

console.log(allAbove10); // true
console.log(allAbove15); // false


/// Array.some(callback)

// Similarly, the Array .some(callback) method returns true when at least one item in the array 
// satisfies the condition provided in the callback.

const someOver18 = numbers.some(number => number >= 18); // true
const someUnder10 = numbers.some(number => number < 10); // false

console.log(someOver18) // true 
console.log(someUnder10) // false

//// Deleting items
const items = ["Pen", "Paper"];
items.length = 0;

console.log(items); // []

/// Array.splice()
// You can also delete specific items from an array using the splice(start[], deleteCount]) method

const items2 = ["Pen", "Paper", "Staples"];
const deletedItem = items2.splice(0, 1); // removes one element at index 0
console.log(deletedItem); // ["Pen"]

console.log(items2); // ["Paper", "Staples"]