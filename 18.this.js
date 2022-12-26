// 1. Alone "this" refers to "global object".
// 2. Inside object method "this" refers to object
// 3. function inside "this" refers to "global object".
// 4. function inside, in strict mode "this" refers to "undefined".
// 5. Event inside, this refers to element.
// 6. call, apply and bind methods can refer to passed object as this.


////////////////// 1.
console.log(this)

/////////////////  2.
const user = {
    firstName: "AmjadPasha",
    lastName: "Mahammad",
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}

console.log(user.fullName())

////////////////// 3.
function hello(){
    console.log(this)
}

hello();

////////////////// 4.
function hello2(){
    "use strict"
    console.log(this)
}

hello2();


/////////////////  5.

document.getElementById("btn").addEventListener("click", function(){
    console.log(this);
})


/////////////////  6.
let person = {
    firstName: "AmjadPasha",
    lastName: "Mahammad",
}

function fullName(){
    console.log(this);
    return this.firstName + " " + this.lastName;
}

console.log(fullName.call(person))