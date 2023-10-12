const user = {
    details: {
        name: {
            firstName: "Sam"
        }
    },
    data: null
}

console.log(user.details?.name?.firstName); // "Sam"
console.log(user.data?.id); // undefined
console.log(user.children?.names); // undefined
console.log(user.details?.parent?.firstName); // undefined



///// Optional chaining usage with arrays

const data = {
    temperatures: [-3, 14, 4]
}

let firstValue = undefined;
if (data.temperatures) {
    firstValue = data.temperatures[0];
}
console.log(firstValue)
//↑ this is normal and we can write with optional chaning

const firstValue2 = data.temperatures?.[0]
console.log(firstValue2);

///Optional chaining usage with functions

const person = {
    age: 43,
    name: "Sam"
};

let upperCasedName = person.name; // might be undefined
if (person.name) {
    upperCasedName = person.name.toUpperCase();
}
console.log(upperCasedName)
//↑ this is normal and we can write with optional chaning

const upperCasedName2 = person.name?.toUpperCase();
console.log(upperCasedName2)