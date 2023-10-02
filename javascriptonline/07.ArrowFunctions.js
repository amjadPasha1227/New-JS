// Normal function
function addOne(number) {
    return number + 1;
}

console.log(addOne(2)); // 3
console.log(addOne(5)); // 6
console.log(addOne()); // NaN -- for fixing this we can define default parameters value EX: function addOne(number = 0) {}

function welcomeUser(name = "User") {
    return `Hello ${name}`;
}

console.log(welcomeUser("Sam")); // "Hello Sam"
console.log(welcomeUser()); // "Hello user"

function sum(a=0, b=0){
    return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(2)); // 2
console.log(sum()); // 0

function logUserIds(userIDs = []){
    userIDs.forEach(function(userID){
        console.log(userID);
    })
}

logUserIds([12, 13, 14]);
logUserIds();

/////// Introduction to arrow functions

// normal function

function sum(a, b) {
    return a + b;
}

// Arrow function

// const sum = (a, b) => {
//     return a + b
// }

// Examples

// const triple = (value) => {
//     return value * 3;
// }

//Or

const triple = value => value * 3

console.log(triple(3)) // 9
console.log(triple(2)) // 6

const sumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => {
        sum += grade;
    })
    return sum;
}

console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54

//////////////
const countries = ["Netherlands", "Japan", "Mongolia"];

const getDropdown = countries => {
    let html = `<option value="">Please select value</option>`;    
    countries.forEach((country) => {
        html +=  `<option value="${country.toLowerCase()}">${country}</option>`
    })
    const select = document.querySelector("#countries-dropdown");
    select.innerHTML = html; 
    return html;
}

console.log(getDropdown(countries));


const getPositiveTemperatures = temperatures => {
    return temperatures.filter(temperature => {
        return temperature > 0;
    })
}

console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 13]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]