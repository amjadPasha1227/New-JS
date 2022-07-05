let a = "test"// global vaaribale can access in block and function

if (true){
    var myName = "Amjad" // var will not follow block scope
    let myName2 = "Amjad" // let will follow block scope
    const age = 30; // const will follow block scope
    // console.log(myName);
    console.log(age);
    console.log(myName2);
}
console.log(myName);
console.log(myName2); // error
console.log(age); // error

function test(){
    var myName = "Amjad" // var will follow function scope
    let myName2 = "Amjad" // let will follow function scope
    const age = 30; // const will follow function scope
    // console.log(myName);
    // console.log(myName2);
    // console.log(age);
}

test();
console.log(myName); // error
console.log(myName2); // error
console.log(age); // error

