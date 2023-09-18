function evenOrOdd(number) {
    if (number % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}

console.log(evenOrOdd(3));

function canVote(age) {
    return age >= 18;
}

console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false