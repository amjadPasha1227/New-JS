const firstPerson = {
    name: "Sam",
    age: 18
}

const secondPerson = {
    age: 25,
    type: "admin"
}

const mergedObjects = {...firstPerson, ...secondPerson};
console.log(mergedObjects); // {name: "Sam", age: 25, type: "admin"}



//// 
const person = {
    name: "Alex",
    age: 35
};

if ("name" in person) {
    console.log(person.name);
}