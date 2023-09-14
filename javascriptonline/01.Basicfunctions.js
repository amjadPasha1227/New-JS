function sum(a, b){
    return a + b;
}

console.log(sum(2, 3)); // 5

function multiply(a, b){
    return a * b;
}

console.log(multiply(2)); // NaN
console.log(multiply(2, 3)); // 6
console.log(multiply(2, 3, 4)); // 6