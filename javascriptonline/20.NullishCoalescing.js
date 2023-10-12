// A nullish value is a value that is either null or undefined.
const getName = name => {
    return name ?? "N/A";
}

console.log(getName("Sam")); // "Sam"
console.log(getName(undefined)); // "N/A"
console.log(getName(null)); // "N/A"



const getPlaceholder = () => {
    console.log("getPlaceholder called");
    return "N/A";
}

const sayHello = name => {
    return `Hello ${name ?? getPlaceholder()}`;
}

console.log(sayHello("Sam")); // "Hello Sam"
console.log(sayHello()); // "Hello N/A"



const user = {
    id: 1,
    name: "Sam",
    age: null
}

console.log(user.age); // null
console.log(user.birthday); // undefined