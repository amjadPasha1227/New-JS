const age = 18;
const person = {
    name: "John",
    age: age
}

console.log(person);
///////////////
const age2 = 18;
const person2 = {
    name: "John",
    age2
}
console.log(person2);
/////////////////
const isAdmin = false;
const darkMode = true;

const settings = {
    isAdmin,
    darkMode
};

console.log(settings); //{isAdmin: false, darkMode: true}

///Debugging tip

const sum = (a, b) => {
    console.log(a); // 1
    console.log(b); // 3
    let total = a + b;
    console.log(total); // 4
    return total;
}

// Sample usage
sum(1, 3);


//////

const sum2 = (a, b) => {
    console.log({a}); // {a: 1}
    console.log({b}); // {b: 3}
    let total = a + b;
    console.log({total}); // {total: 4}
    return total;
}

// Sample usage
sum2(1, 3);


const getUser = (id, name) => {
    return {id, name}
}

// Sample usage - do not modify
console.log(getUser(2, "Sam")); // {id: 2, name: "Sam"}
console.log(getUser(5, "Alex")); // {id: 5, name: "Alex"}


////////////////////

const user = {
    id: 1,
    name: "Sam"
};

const {name, isAdmin3 = false} = user;
console.log(isAdmin3); // false


const user2 = {
    id: 1,
    name: "Sam",
    isAdmin2: true
};

const {name2, isAdmin2 = false} = user;
console.log(isAdmin2); // true