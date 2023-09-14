function strLength(str){
    return str.length;
}

console.log(strLength("Amjad")); //5


// Character access

const language = "JavaScript";

console.log(language[0]); //first character
console.log(language[1]); //second character
console.log(language[2]); //third character

console.log(language[language.length - 1]); // t

// at
console.log(language.at(0)); // J
console.log(language.at(-1)); // t

function getFirstCharacter(str){
    return str[0];
}

console.log(getFirstCharacter("Noman")); // J

function getLastCharacter(str){
    return str.at(-1);
}

console.log(getLastCharacter("Noman")); // n