const myDetails = {
    firstName: "Amjadpasha", // Property
    lastName: "Mahammad", //Property
    age: 30,
    fullName: function() { // Method
        return this.firstName + " " + this.lastName;
    }
}


console.log(myDetails.fullName());
console.log(myDetails["fullName"]());
console.log(myDetails["age"]);