const person = {
    id: 1,
    firstName: "Sam"
};

//console.log(person.firstname); // undefined (firstname instead of firstName)
//console.log(person.age); // undefined
//console.log(person.age.toUpperCase()); // Uncaught TypeError: Cannot read property 'toUpperCase' of undefined


//[object Object]
const person2 = {
    id: 1,
    firstName: "Sam"
};

console.log(`Hello ${person2}`); // "Hello [object Object]"

//Object.values() // However, if you only need to access the values, then you can use Object.values() which returns an array of the values:
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const values = Object.values(user);
console.log(values); // [1, "Sam Green", 20]


// Object.entries() // The Object.entries() method returns an array of arrays representing every key/value pair.
const entries = Object.entries(user);
console.log(entries);