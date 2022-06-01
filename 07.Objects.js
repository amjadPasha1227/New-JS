const myDetails = {
    firstName: "Amjadpasha", // Property  ---> firstName is Property Name and "Amjadpasha" is Property Value
    lastName: "Mahammad", //Property
    age: 30,
    fullName: function() { // Method
        return this.firstName + " " + this.lastName;
    }
}


console.log(myDetails.fullName()); // Amjadpasha Mahammad
console.log(myDetails["fullName"]()); // Amjadpasha Mahammad
console.log(myDetails["age"]); // 30