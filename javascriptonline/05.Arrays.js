const numbers = [1, 2, 3];

console.log(numbers);
console.log(numbers.length);

numbers.push(4);

console.log(numbers);
console.log(numbers.length);

const names = ["Amjad", "Noman", "Suhan"];
console.log(names[0]);
console.log(names.at(0));
console.log(names[names.length - 1]);
console.log(names.at(-1));

function getNumberOfElements(arrayName){
    return arrayName.length;
}

console.log(getNumberOfElements(numbers));
console.log(getNumberOfElements(names));

//// Array forEach

const grades = [10, 8, 13, -5];

grades.forEach(function(grade){
    console.log(grade);
})

function logGrades(grades) {
    grades.forEach(function(grade) {
        console.log(grade);
        return grades;
    });
    return grades;
}

console.log(logGrades(grades));

function sumGrades(grades) {
    let sum = 0;
    grades.forEach(function(grade){
        sum += grade;
    })
    return sum;
}

console.log(sumGrades(grades));

function sumOfPositiveNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if (number >= 0){
            sum += number;
        } 
    })
    return sum;
}

console.log(sumOfPositiveNumbers(grades));



function sumOfNegativeNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if (number < 0){
            sum += number;
        }
    })
    return sum;
}

console.log(sumOfNegativeNumbers(grades));


function sumOfOddNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if(number % 2 !== 0){
            sum += number;
        }
    })
    return sum;
}

console.log(sumOfOddNumbers(grades));


//// Array filter

// const numbersNew = [9, 5, 14, 3, 11];

// const numbersAboveTen = numbersNew.filter(function(number) {
//     return number > 10;
// });

// console.log(numbersAboveTen); // [14, 11]

const temp = [5, -2, -10, -11, 35, 22]

function getNumbersAboveTen(numbers){
    return numbers.filter(function(number){
        return number > 10;
    })
}

console.log(getNumbersAboveTen(temp));

function getNumbersAboveTenNew(numbers){
    return numbers.find(function(number){
        return number > 10;
    })
}

console.log(getNumbersAboveTenNew(temp));

/*
  forEach - looping and get all elements in an Array
  filter  - get an Array 
  find    - get first element which condition satisfy

  map     - method allows you to transform an array into another one.
  includes(item) - method takes an item and returns true when that item exists in the array and false otherwise
  join(glue) - method returns a string of the array elements separated by the glue

*/

function includeToArray(items, item){
    return items.includes(item);
}

console.log(includeToArray(grades, 1));


function getStringSizes(strings){
    return strings.map(function(string){
        return string.toString().length;
    })
}


console.log(getStringSizes(grades))


























