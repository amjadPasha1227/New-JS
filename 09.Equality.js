// equality eg. a = a // assignment operator
// a == a // coersion = javascript automatically converts one data type to another data type
// a === a // checks value and data types are same // it will not do coersion

console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(2 == 3); // false


console.log(2 === 2); // true
console.log(2 === "2"); // false


console.log('' == ''); // true
console.log('' === ''); // true

console.log({} == {}); // false

const obj = {} // reference (memory location)
console.log(obj == obj); // true

const obj2 = {}
console.log(obj == obj2); // false

console.log([] == []); // false

const arr = [] // reference (memory location)
console.log(arr == arr); // true

const str = ""
const str2 = ""
console.log(str == str2); // true


console.log(true == 1); // true
console.log(true === 1); // false