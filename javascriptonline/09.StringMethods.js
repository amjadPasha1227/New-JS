// String .trim()

// The .trim() method which removes all leading (at the beginning) and trailing (at the end) space characters.

const name = "  Sam Blue ";
name.trim(); // "Sam Blue"
console.log(name.trim());

// String .startsWith() and .endsWith()
// The .startsWith(substring) method returns true when the substring is found at the beginning of the string, and false otherwise.
// The .endsWith(substring) works the same but for the end of the string.

const sentence = "Hello there. Welcome!";

console.log(sentence.startsWith("H")); // true
console.log(sentence.startsWith("Hello")); // true
console.log(sentence.startsWith("Hey")); // false
console.log(sentence.startsWith("Sam")); // false

console.log(sentence.endsWith(".")); // false
console.log(sentence.endsWith("!")); // true
console.log(sentence.endsWith("Welcome!")); // true
console.log(sentence.endsWith("Welcome")); // false


// String .includes(substring)
// The .includes(substring) method returns true when the substring can be found anywhere in the string, and false otherwise

const sentence2 = "Hello there. Welcome!";

console.log(sentence2.includes("there")); // true
console.log(sentence2.includes("W")); // true
console.log(sentence2.includes("ello")); // true
console.log(sentence2.includes("Hey")); // false
console.log(sentence2.includes("Sam")); // false
console.log(sentence2.includes(".")); // true
console.log(sentence2.includes("!")); // true
console.log(sentence2.includes("Welcome")); // true


//// String .split(separator)
// The .split(separator) method divides the string into an array of substrings based on the separator you provide. For example:

let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray); // ["Calculator", "Phone", "Contacts"]

// This is especially useful to convert from CSV (Comma Separated Values) back to an array. 
// Reminder that the opposite of String.split(separator) would be Array.join(glue)



// String.replace(search, replace)
// The .replace(search, replace) method returns a new string where the first occurrence of 
// the search parameter you provide is replaced by the replace parameter, for example:

const message = "You are welcome.";
console.log(message.replace(" ", "_")); // "You_are welcome."; (only the first occurrence has been replaced)
console.log(message); // "You are welcome." (original string is not changed)

// String.replaceAll(search, replace)
// This method works like the one above, except that it will replace all occurrences.

console.log(message.replaceAll(" ", "_")); // "You_are_welcome";
console.log(message); // "You are welcome" (original string is not changed)


///// Slug
/// In computer science, a slug is a string used to identify a certain item. 
// Oftentimes, this slug is used in the URL for Search Engine Optimization and better user experience. 

const getSlug = name => {
    return name.toLowerCase().substring(0, 15).replaceAll(" ", "-")
}

// Sample usage - do not modify
console.log(getSlug("IKEA table")); // "ikea-table"
console.log(getSlug("200cm Bed")); // "200cm-bed"
console.log(getSlug("Bedside lavalamp")); // "bedside-lavalam"
console.log(getSlug("A B C noodles")); // "a-b-c-noodles"
















