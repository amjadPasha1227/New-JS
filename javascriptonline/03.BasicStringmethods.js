// .toLowerCase()
function toLowerCase(str){
    return str.toLowerCase();
}

console.log(toLowerCase("AMJAD")); //amjad


// .toUpperCase()
function toUpperCase(str){
    return str.toUpperCase();
}

console.log(toUpperCase("suhan")); //SUHAN

// .substring()
function substring(str, start, end){
    return str.substring(start, end);
}

console.log(substring("Javascript", 1, 4)); // ava

// String Interpolation
let InterpolationName = "Amjad";
console.log(`With template string you can call string with string interpolation ${InterpolationName}`)

function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}

console.log(getFullName("Amjad", "Pasha"))