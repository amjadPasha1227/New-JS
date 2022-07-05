// let a = 50;

// function check() {
//     let b = 50;
//     // return b;
// }
// console.log(check());



function add(){
    let counter = 0;
    console.log("add function");
    return function () {
        counter += 1;
        // console.log("Counter Increment By " + counter)
        //debugger;
        return counter;
    }
}



// console.log(add()());
// console.log(add()());

const plus = add();
console.log(plus());
console.log(plus());

// Defination: a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.