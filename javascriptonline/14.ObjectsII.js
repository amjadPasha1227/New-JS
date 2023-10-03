const user = {
    id: 1,
    name: 'Sam Green'
}
const key = "id";
console.log(user[key]) // same like console.log(user["id"]);

const getValue = (user, keyToRead) => {
    console.log(user[keyToRead]);
}

// Sample usage
getValue({id: 2, name: "Sam"}, "name"); // "Sam"
getValue({id: 2, name: "Sam"}, "id"); // 2



////////// Object.keys()

const userNew = {
    id: 1,
    name: "Sam Green",
    age: 20
};

// const keys = Object.keys(userNew);
// console.log(keys); // ["id", "name", "age"]


const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};

const keys = Object.keys(settings);
console.log(keys); // ["theme", "version", "beta"]
keys.forEach(key => {
    // log the value of every key dynamically
    console.log(settings[key]);
});